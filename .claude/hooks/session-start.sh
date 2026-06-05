#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo '{"async": true, "asyncTimeout": 300000}'

# Install ffmpeg if missing (work around libcaca0 404 in ubuntu noble-updates)
if ! command -v ffmpeg &>/dev/null; then
  apt-get install -y libcaca0=0.99.beta20-4build2 2>/dev/null || true
  apt-get install -y ffmpeg --fix-missing 2>/dev/null || apt --fix-broken install -y 2>/dev/null || true
fi

# Install mcp-video and yt-dlp
pip install mcp-video yt-dlp --ignore-installed pyjwt -q

# Register mcp-video as a global MCP server and make /watch skill globally available
python3 - <<'PYEOF'
import json, os, shutil
from pathlib import Path

# Register mcp-video MCP server
settings_path = Path.home() / ".claude" / "settings.json"
settings_path.parent.mkdir(parents=True, exist_ok=True)
cfg = json.loads(settings_path.read_text()) if settings_path.exists() else {}
cfg.setdefault("mcpServers", {})["video"] = {"command": "mcp-video", "args": []}
settings_path.write_text(json.dumps(cfg, indent=2))
print("mcp-video registered in ~/.claude/settings.json")

# Symlink /watch skill into global skills directory
project_dir = os.environ.get("CLAUDE_PROJECT_DIR", "")
if project_dir:
    src = Path(project_dir) / ".claude" / "skills" / "watch"
    dst = Path.home() / ".claude" / "skills" / "watch"
    dst.parent.mkdir(parents=True, exist_ok=True)
    if src.exists() and not dst.exists():
        dst.symlink_to(src)
        print(f"/watch skill linked: {dst} -> {src}")
    elif src.exists():
        print(f"/watch skill already at {dst}")
PYEOF
