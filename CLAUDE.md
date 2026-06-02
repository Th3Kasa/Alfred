# Alfred — Claude Code Configuration

## Agents

50 specialist agents installed globally at `~/.claude/agents/`. Use them with `/agent <name>` or by describing your task.

Key agents: `cs-ceo-advisor`, `cs-cto-advisor`, `cs-senior-engineer`, `architect`, `debugger`, `planner`, `critic`, `scientist`, `qa-tester`, `security-reviewer`, `cs-product-manager`, `cs-growth-strategist`, `startup-cto`, `solo-founder` — and more.

Sources:
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (16.9k stars, MIT) — 31 agents
- [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) (35.6k stars, MIT) — 19 agents

## Skills

755 skills installed globally at `~/.claude/skills/`. Invoke with `/skill-name` or by task context.

Domains: engineering, product, marketing, c-level advisory, compliance, finance, business ops, research, project management, productivity, design, orchestration, and more.

Sources:
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — 718 skills
- [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) — 37 new skills (autopilot, ultragoal, ultrawork, deep-dive, hud, trace, etc.)

## Commands

24 slash commands installed globally at `~/.claude/commands/`. Use with `/command-name`.

Key commands: `/commit`, `/create-pr`, `/create-prd`, `/pr-review`, `/fix-github-issue`, `/optimize`, `/release`, `/todo`, `/evaluate-repository`, and more.

Source: [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) (45.5k stars, CC BY-NC-ND 4.0)

## Coding standards

- Prefer editing existing files over creating new ones
- No unnecessary comments — code should be self-documenting
- No backwards-compatibility shims for removed code
- Security: no SQL injection, XSS, command injection, or exposed secrets

## Commit style

```
<type>: <short imperative summary>

Optional body if context is non-obvious.
```

Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `skill`
