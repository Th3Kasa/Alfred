#!/usr/bin/env python3
"""Setup / preflight for /watch."""
from __future__ import annotations

import json
import os
import platform
import shutil
import subprocess
import sys
from pathlib import Path


REQUIRED_BINARIES = ["ffmpeg", "ffprobe", "yt-dlp"]
CONFIG_DIR = Path.home() / ".config" / "watch"
CONFIG_FILE = CONFIG_DIR / ".env"
ENV_TEMPLATE = """# /watch API configuration
#
# Whisper transcription fallback — used only when yt-dlp cannot get captions.
#
# Groq is preferred: cheaper, faster (whisper-large-v3).
# Get a Groq key:   https://console.groq.com/keys
# Get an OpenAI key: https://platform.openai.com/api-keys
#
# Leave both blank to disable Whisper — videos without captions come back frames-only.

GROQ_API_KEY=
OPENAI_API_KEY=
"""


def _which(name: str) -> str | None:
    return shutil.which(name)


def _check_binaries() -> list[str]:
    return [b for b in REQUIRED_BINARIES if not _which(b)]


def _check_file_permissions(path: Path) -> None:
    try:
        mode = path.stat().st_mode
        if mode & 0o044:
            sys.stderr.write(f"[watch] WARNING: {path} is readable by other users. Run: chmod 600 {path}\n")
            sys.stderr.flush()
    except OSError:
        pass


def _read_env_key(name: str) -> str | None:
    value = os.environ.get(name)
    if value and value.strip():
        return value.strip()
    if not CONFIG_FILE.exists():
        return None
    _check_file_permissions(CONFIG_FILE)
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


def _have_api_key() -> tuple[bool, str | None]:
    if _read_env_key("GROQ_API_KEY"):
        return True, "groq"
    if _read_env_key("OPENAI_API_KEY"):
        return True, "openai"
    return False, None


def is_first_run() -> bool:
    return _read_env_key("SETUP_COMPLETE") != "true"


def _scaffold_env() -> bool:
    if CONFIG_FILE.exists():
        return False
    CONFIG_DIR.mkdir(parents=True, exist_ok=True)
    CONFIG_FILE.write_text(ENV_TEMPLATE, encoding="utf-8")
    try:
        CONFIG_FILE.chmod(0o600)
    except OSError:
        pass
    return True


def _write_setup_complete() -> None:
    CONFIG_DIR.mkdir(parents=True, exist_ok=True)
    existing = ""
    if CONFIG_FILE.exists():
        existing = CONFIG_FILE.read_text(encoding="utf-8")
        for line in existing.splitlines():
            if line.strip().startswith("SETUP_COMPLETE="):
                return
        if existing and not existing.endswith("\n"):
            existing += "\n"
        CONFIG_FILE.write_text(existing + "SETUP_COMPLETE=true\n", encoding="utf-8")
    else:
        CONFIG_FILE.write_text(ENV_TEMPLATE + "\nSETUP_COMPLETE=true\n", encoding="utf-8")
    try:
        CONFIG_FILE.chmod(0o600)
    except OSError:
        pass


def _brew_pkg(missing: list[str]) -> list[str]:
    pkgs: list[str] = []
    for bin_name in missing:
        if bin_name in ("ffmpeg", "ffprobe"):
            if "ffmpeg" not in pkgs:
                pkgs.append("ffmpeg")
        elif bin_name == "yt-dlp":
            if "yt-dlp" not in pkgs:
                pkgs.append("yt-dlp")
        else:
            pkgs.append(bin_name)
    return pkgs


def _install_macos(missing: list[str]) -> tuple[bool, str]:
    if _which("brew") is None:
        return False, "Homebrew not installed. Get it from https://brew.sh"
    pkgs = _brew_pkg(missing)
    if not pkgs:
        return True, "nothing to install"
    cmd = ["brew", "install", *pkgs]
    print(f"[setup] running: {' '.join(cmd)}", file=sys.stderr)
    result = subprocess.run(cmd)
    if result.returncode != 0:
        return False, f"brew install failed with exit code {result.returncode}"
    return True, f"installed via brew: {', '.join(pkgs)}"


def _install_linux(missing: list[str]) -> tuple[bool, str]:
    pkgs = _brew_pkg(missing)
    installed = []
    for pkg in pkgs:
        if pkg == "ffmpeg":
            result = subprocess.run(
                ["apt-get", "install", "-y", "ffmpeg", "--fix-missing"],
                capture_output=True,
            )
            if result.returncode == 0:
                installed.append("ffmpeg")
        elif pkg == "yt-dlp":
            result = subprocess.run(
                [sys.executable, "-m", "pip", "install", "yt-dlp", "-q"],
                capture_output=True,
            )
            if result.returncode == 0:
                installed.append("yt-dlp")
    still_missing = _check_binaries()
    if still_missing:
        hints = []
        if "ffmpeg" in still_missing or "ffprobe" in still_missing:
            hints.append("sudo apt install ffmpeg")
        if "yt-dlp" in still_missing:
            hints.append("pip install yt-dlp")
        return False, "Still missing: " + "; ".join(hints)
    return True, f"installed: {', '.join(installed)}"


def _status() -> dict:
    missing = _check_binaries()
    has_key, backend = _have_api_key()

    if not missing and has_key:
        status = "ready"
    elif missing and not has_key:
        status = "needs_install_and_key"
    elif missing:
        status = "needs_install"
    else:
        status = "needs_key"

    return {
        "status": status,
        "first_run": is_first_run(),
        "missing_binaries": missing,
        "whisper_backend": backend,
        "has_api_key": has_key,
        "config_file": str(CONFIG_FILE),
        "platform": platform.system(),
    }


def cmd_check() -> int:
    s = _status()
    if s["status"] == "ready":
        return 0

    parts = []
    if s["missing_binaries"]:
        parts.append(f"missing binaries: {', '.join(s['missing_binaries'])}")
    if not s["has_api_key"]:
        parts.append("no Whisper API key (GROQ_API_KEY or OPENAI_API_KEY)")
    installer = Path(__file__).resolve()
    sys.stderr.write(
        f"[watch] setup incomplete ({'; '.join(parts)}). "
        f"Run: python3 {installer}\n"
    )
    sys.stderr.flush()

    if s["missing_binaries"] and not s["has_api_key"]:
        return 4
    if s["missing_binaries"]:
        return 2
    return 3


def cmd_json() -> int:
    json.dump(_status(), sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


def cmd_install() -> int:
    missing = _check_binaries()
    installed_deps = False
    if missing:
        system = platform.system()
        if system == "Darwin":
            ok, msg = _install_macos(missing)
            print(f"[setup] {msg}", file=sys.stderr)
            if not ok:
                return 2
        elif system == "Linux":
            ok, msg = _install_linux(missing)
            print(f"[setup] {msg}", file=sys.stderr)
            if not ok:
                return 2
        else:
            print(f"[setup] unsupported platform ({system}). Missing: {', '.join(missing)}", file=sys.stderr)
            return 2
        still_missing = _check_binaries()
        if still_missing:
            print(f"[setup] still missing: {', '.join(still_missing)}", file=sys.stderr)
            return 2
        installed_deps = True

    created = _scaffold_env()
    if created:
        print(f"[setup] created config: {CONFIG_FILE}")
    else:
        print(f"[setup] config exists: {CONFIG_FILE}")

    has_key, backend = _have_api_key()
    if has_key:
        _write_setup_complete()
        print(f"[setup] ready. whisper backend: {backend}")
        if installed_deps:
            print("[setup] installed dependencies; /watch is fully set up.")
        return 0

    print(f"\n[setup] add a Whisper key to {CONFIG_FILE} (optional — videos with captions work without it):")
    print("  GROQ_API_KEY=...    (preferred, free at console.groq.com/keys)")
    print("  OPENAI_API_KEY=...  (fallback, at platform.openai.com/api-keys)")
    return 3


def main() -> int:
    if len(sys.argv) > 1:
        arg = sys.argv[1]
        if arg == "--check":
            return cmd_check()
        if arg == "--json":
            return cmd_json()
    return cmd_install()


if __name__ == "__main__":
    raise SystemExit(main())
