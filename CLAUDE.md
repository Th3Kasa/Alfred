# Alfred — Claude Code Configuration

## What this repo is

Alfred is a multi-agent AI team configuration. Each agent owns a domain; skills extend their capabilities. This file tells Claude Code how to behave across the whole workspace.

## Agents & ownership

| Agent | Owns |
|-------|------|
| `ui-craft` | All design, frontend, and visual work |
| `copywriter` | Content, social media, brand voice |
| `business-analyst` | Product strategy, research, data |
| `tech-curator` | Skill vetting, code quality, dev tooling |
| `saas-architect` | Systems design and infra |
| `ai-automation` | AI pipelines, evals, tracing |
| `integrations` | Third-party APIs, file I/O, productivity |

## Skill install policy

New skills must pass the trust gate before installation:

1. Public GitHub repo with verifiable source
2. ≥ 500 stars (waiver requires Alfred approval + documented reason)
3. Compatible license: MIT / Apache 2.0 / CC BY 4.0 / ELv2
4. No mandatory paid external API keys
5. tech-curator review → Alfred approval → add to plugin-registry.md

Document every install, reject, and deferral in `.claude/shared/plugin-registry.md`.

## Plugin registry

The source of truth for all installed skills and MCP servers lives at:

```
.claude/shared/plugin-registry.md
```

Keep it updated on every change. Include: skill ID, source repo, stars, license, category, agent owner, and any special usage notes.

## Coding standards

- Prefer editing existing files over creating new ones
- No unnecessary comments — code should be self-documenting
- No backwards-compatibility shims for removed code
- Security: no SQL injection, XSS, command injection, or exposed secrets

## MCP servers

Free no-key servers are preferred. Servers requiring credentials need user setup documented in the registry before install.

## Commit style

```
<type>: <short imperative summary>

Optional body if context is non-obvious.
```

Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `skill`
