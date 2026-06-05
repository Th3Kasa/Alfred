#!/usr/bin/env python3
"""Whisper transcription via Groq or OpenAI API. No third-party SDK required."""
from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.request
import uuid
from pathlib import Path


GROQ_ENDPOINT = "https://api.groq.com/openai/v1/audio/transcriptions"
GROQ_MODEL = "whisper-large-v3"
OPENAI_ENDPOINT = "https://api.openai.com/v1/audio/transcriptions"
OPENAI_MODEL = "whisper-1"
MAX_ATTEMPTS = 4
MAX_429_RETRIES = 2
RETRY_BASE_DELAY = 2.0

CONFIG_FILE = Path.home() / ".config" / "watch" / ".env"


def _read_env_key(name: str) -> str | None:
    value = os.environ.get(name)
    if value and value.strip():
        return value.strip()
    if not CONFIG_FILE.exists():
        return None
    try:
        for line in CONFIG_FILE.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, raw = line.partition("=")
            if key.strip() != name:
                continue
            raw = raw.strip()
            if len(raw) >= 2 and raw[0] in ('"', "'") and raw[-1] == raw[0]:
                raw = raw[1:-1]
            return raw or None
    except OSError:
        return None
    return None


def load_api_key(preferred: str | None = None) -> tuple[str, str] | tuple[None, None]:
    groq_key = _read_env_key("GROQ_API_KEY")
    openai_key = _read_env_key("OPENAI_API_KEY")

    if preferred == "groq":
        if groq_key:
            return "groq", groq_key
        if openai_key:
            return "openai", openai_key
    elif preferred == "openai":
        if openai_key:
            return "openai", openai_key
        if groq_key:
            return "groq", groq_key
    else:
        if groq_key:
            return "groq", groq_key
        if openai_key:
            return "openai", openai_key

    return None, None


def extract_audio(video_path: str, out_path: Path) -> Path:
    if shutil.which("ffmpeg") is None:
        raise SystemExit("ffmpeg is not installed")
    out_path.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
        "-i", str(Path(video_path).resolve()),
        "-vn", "-ac", "1", "-ar", "16000", "-b:a", "64k",
        str(out_path),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit(f"Audio extraction failed: {result.stderr.strip()}")
    return out_path


def _build_multipart(fields: dict[str, str], file_path: Path) -> tuple[bytes, str]:
    boundary = uuid.uuid4().hex
    parts: list[bytes] = []
    for name, value in fields.items():
        parts.append(
            f"--{boundary}\r\nContent-Disposition: form-data; name=\"{name}\"\r\n\r\n{value}\r\n".encode()
        )
    audio_bytes = file_path.read_bytes()
    parts.append(
        f"--{boundary}\r\nContent-Disposition: form-data; name=\"file\"; filename=\"audio.mp3\"\r\nContent-Type: audio/mpeg\r\n\r\n".encode()
        + audio_bytes
        + b"\r\n"
    )
    parts.append(f"--{boundary}--\r\n".encode())
    return b"".join(parts), boundary


def _read_error_body(exc: urllib.error.HTTPError) -> str:
    try:
        body = exc.read().decode("utf-8", errors="replace")
        return body[:400]
    except Exception:
        return str(exc)


def _retry_after(exc: urllib.error.HTTPError) -> float | None:
    try:
        val = exc.headers.get("Retry-After")
        if val:
            return float(val)
    except Exception:
        pass
    return None


def _segments_from_response(data: dict) -> list[dict]:
    segments = data.get("segments") or []
    return [
        {
            "start": round(float(s.get("start", 0)), 2),
            "end": round(float(s.get("end", 0)), 2),
            "text": s.get("text", "").strip(),
        }
        for s in segments
        if s.get("text", "").strip()
    ]


def _post_whisper(endpoint: str, api_key: str, model: str, audio_path: Path) -> dict:
    fields = {"model": model, "response_format": "verbose_json"}
    body, boundary = _build_multipart(fields, audio_path)
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": f"multipart/form-data; boundary={boundary}",
        "User-Agent": "watch-skill/1.0 (github.com/bradautomates/claude-video)",
    }

    attempts = 0
    rate_limit_retries = 0
    while attempts < MAX_ATTEMPTS:
        try:
            req = urllib.request.Request(endpoint, data=body, headers=headers, method="POST")
            with urllib.request.urlopen(req, timeout=120) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as exc:
            if exc.code == 429 and rate_limit_retries < MAX_429_RETRIES:
                wait = _retry_after(exc) or (RETRY_BASE_DELAY * (2 ** rate_limit_retries))
                print(f"[watch] rate limited, waiting {wait:.1f}s…", file=sys.stderr)
                time.sleep(wait)
                rate_limit_retries += 1
                attempts += 1
                continue
            body_text = _read_error_body(exc)
            raise SystemExit(f"Whisper API error {exc.code}: {body_text}")
        except OSError as exc:
            attempts += 1
            if attempts >= MAX_ATTEMPTS:
                raise SystemExit(f"Whisper API network error after {attempts} attempts: {exc}")
            time.sleep(RETRY_BASE_DELAY * attempts)

    raise SystemExit("Whisper API failed after maximum retries")


def transcribe_video(
    video_path: str,
    audio_out: Path,
    backend: str | None = None,
    api_key: str | None = None,
) -> tuple[list[dict], str]:
    if backend is None or api_key is None:
        detected_backend, detected_key = load_api_key(backend)
        if detected_backend is None:
            raise SystemExit("No Whisper API key found. Set GROQ_API_KEY or OPENAI_API_KEY.")
        backend = detected_backend
        api_key = detected_key

    audio_path = extract_audio(video_path, audio_out)

    if backend == "groq":
        endpoint, model = GROQ_ENDPOINT, GROQ_MODEL
    else:
        endpoint, model = OPENAI_ENDPOINT, OPENAI_MODEL

    print(f"[watch] transcribing via {backend} ({model})…", file=sys.stderr)
    data = _post_whisper(endpoint, api_key, model, audio_path)
    segments = _segments_from_response(data)
    return segments, backend


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("usage: whisper.py <video-path> [audio-out] [--backend groq|openai]", file=sys.stderr)
        raise SystemExit(2)
    video = sys.argv[1]
    audio_out = Path(sys.argv[2]) if len(sys.argv) > 2 and not sys.argv[2].startswith("--") else Path("/tmp/watch-audio.mp3")
    preferred = None
    for i, arg in enumerate(sys.argv):
        if arg == "--backend" and i + 1 < len(sys.argv):
            preferred = sys.argv[i + 1]
    segs, used = transcribe_video(video, audio_out, backend=preferred)
    print(json.dumps({"backend": used, "segments": segs}, indent=2))
