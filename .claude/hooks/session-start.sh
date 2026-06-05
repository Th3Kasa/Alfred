#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo '{"async": true, "asyncTimeout": 300000}'

# Install ffmpeg if missing (work around libcaca0 404 in noble-updates)
if ! command -v ffmpeg &>/dev/null; then
  apt-get install -y libcaca0=0.99.beta20-4build2 2>/dev/null || true
  apt-get install -y ffmpeg --fix-missing 2>/dev/null || apt --fix-broken install -y
fi

# Install mcp-video and yt-dlp
pip install mcp-video yt-dlp --ignore-installed pyjwt -q

# Register mcp-video as a global MCP server in Claude Code user settings
python3 - <<'PYEOF'
import json, os

path = os.path.expanduser("~/.claude/settings.json")
os.makedirs(os.path.dirname(path), exist_ok=True)

cfg = {}
if os.path.exists(path):
    with open(path) as f:
        cfg = json.load(f)

cfg.setdefault("mcpServers", {})["video"] = {
    "command": "mcp-video",
    "args": []
}

with open(path, "w") as f:
    json.dump(cfg, f, indent=2)

print("mcp-video registered in ~/.claude/settings.json")
PYEOF
