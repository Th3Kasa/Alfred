# Alfred — Your Personal AI Team

Alfred is a multi-agent AI system built on [Claude Code](https://code.claude.com), configured as a specialized team of AI agents, each owning a distinct domain. Drop this repo into any project and your full team shows up.

---

## Team

| Agent | Department | Example tasks |
|-------|------------|---------------|
| **eng-product** | Engineering & Product Development | Software builds, product roadmap, UX/UI design, AI pipelines, dev tooling, infra planning |
| **sales-marketing** | Sales & Marketing | Growth campaigns, ads, brand voice, reels scripts, hooks, business development |
| **customer-success** | Customer Success & Support | User onboarding, SaaS troubleshooting, retention playbooks, adoption workflows |
| **ops-finance** | Operations & Finance | Financial reporting, R&D tax compliance, SaaS metrics, data charts, Excel |
| **people-culture** | People & Culture (HR) | Tech recruitment briefs, retention strategies, employee benefits research |
| **it-infosec** | IT & Information Security | Cloud infrastructure, cybersecurity reviews, system access controls, external APIs |
| **legal-compliance** | Legal & Compliance | ACL, Privacy Act (1988), GDPR, NDAs, corporate governance |

---

## Skills installed

398 skills across design, dev, marketing, research, product, and AI.  
See [`.claude/shared/plugin-registry.md`](.claude/shared/plugin-registry.md) for the full registry with sources, licenses, and approval history.

**Categories at a glance:**

- **Design** — `frontend-design`, `canvas-design`, `nothing-design`, `color-expert`, `shadcn-ui-mcp`
- **Marketing** — `marketingskills` (50+ CRO/copy/SEO), `competitive-ads-extractor`, `reels-scripting`, `hook-generator`
- **Product** — `pm-skills` (65+ PM frameworks), `analyze-feature-requests`, `user-stories`, `prioritization-frameworks`
- **Research** — `academic-research-skills`, `arxiv`, `youtube-transcript`, `deep-research`
- **Dev** — `code-refactoring-tech-debt`, `tdd-workflow`, `api-design`, `security-review`
- **Media** — `pollinations` (free image/audio/text gen), `fal-ai-media`, `video`

---

## MCP servers

Free, no-API-key servers installed by default:

| Server | Purpose |
|--------|---------|
| `duckduckgo` | Web search |
| `open-websearch` | Multi-engine search (Bing / DDG / Brave / Exa) |
| `pollinations` | AI image, text & audio generation |
| `markdownify` | Convert PDF/HTML/files → Markdown |
| `excalidraw` | Hand-drawn diagrams |
| `antv-chart` | Data chart generation |
| `youtube-transcript` | YouTube transcript retrieval |
| `arxiv` | Academic paper search |
| `excel-mcp` | Read/write Excel without Microsoft Excel |
| `shadcn-ui-mcp` | shadcn/ui v4 component generation |

---

## Setup

1. **Clone into your project** (or use as a standalone workspace):
   ```bash
   git clone https://github.com/Th3Kasa/Alfred.git
   cd Alfred
   ```

2. **Open with Claude Code:**
   ```bash
   claude
   ```
   All agents and skills are automatically available.

3. **Talk to an agent** — just reference it naturally:
   > "ui-craft, give me a shadcn card component with a dark glass effect"  
   > "copywriter, write 5 Instagram hooks for a productivity app"  
   > "tech-curator, vet this skill: github.com/example/some-skill"

---

## Skill vetting policy

All skills pass a trust gate before installation:

- Public GitHub repo required
- Minimum 500 stars (Alfred can grant star-waivers for niche high-quality skills)
- License must be MIT / Apache 2.0 / CC BY 4.0 / ELv2 or compatible
- No mandatory paid API keys
- tech-curator vetting + Alfred approval on every install

---

## Repo structure

```
Alfred/
├── .agents/
│   └── skills/          # 398 installed skill definitions
├── .claude/
│   └── shared/
│       └── plugin-registry.md   # Full skill registry & approval log
├── skills-lock.json     # Pinned skill versions
├── CLAUDE.md            # Claude Code configuration
└── README.md
```

---

## License

This configuration is MIT licensed. Individual skills carry their own licenses — see the registry for per-skill attribution requirements (notably `color-expert` requires CC BY 4.0 attribution, and `academic-research-skills` is non-commercial only).
