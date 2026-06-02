# Alfred — Claude Code Configuration

## Agents

31 specialist agents are installed globally at `~/.claude/agents/`. Use them with `/agent <name>` or by describing your task — Claude will suggest the right one.

Key agents: `cs-ceo-advisor`, `cs-cto-advisor`, `cs-senior-engineer`, `cs-frontend-engineer`, `cs-backend-engineer`, `cs-fullstack-engineer`, `cs-product-manager`, `cs-product-strategist`, `cs-ux-researcher`, `cs-financial-analyst`, `cs-growth-strategist`, `cs-content-creator`, `cs-engineering-lead`, `startup-cto`, `solo-founder` — and more.

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (16.9k stars, MIT)

## Skills

718 skills installed globally at `~/.claude/skills/`. Invoke with `/skill-name` or by task context.

Domains: engineering, product, marketing, c-level advisory, compliance, finance, business ops, research, project management, productivity, design, and more.

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
