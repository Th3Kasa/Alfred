# Plugin Registry — Alfred's Team

> Managed by Alfred. All additions require eng-product vetting + Alfred approval.
> Last updated: 2026-05-30

---

## Installed Skills

### Pre-existing (before 2026-05-29 batch)

| Skill ID | Category | Notes |
|----------|----------|-------|
| agent-browser | Dev Tools | Browser automation agent |
| brandkit | Design | Brand identity system |
| industrial-brutalist-ui | Design | Brutalist UI aesthetic |
| code-simplifier | Dev | Code cleanup and refactor |
| ckm:design | Design | Design system patterns |
| ckm:design-system | Design | Component design systems |
| gpt-taste | Design | GPT-style taste profiles |
| image-to-code | Dev | Image → code conversion |
| imagegen-frontend-mobile | Media | Mobile image generation |
| imagegen-frontend-web | Media | Web image generation |
| minimalist-ui | Design | Minimalist UI aesthetic |
| full-output-enforcement | Dev | Full code output, no truncation |
| redesign-existing-projects | Design | Project redesign workflows |
| smart-execute | Dev | Opus plan + Sonnet execute routing |
| high-end-visual-design | Design | Premium visual design |
| stitch-design-taste | Design | Stitch/fabric design aesthetic |
| design-taste-frontend | Design | Frontend design taste |
| ckm:ui-styling | Design | UI styling system |
| ui-ux-pro-max | Design | Pro-max UI/UX system |

---

### Batch Install — 2026-05-29

#### APPROVED & INSTALLED

| Skill | Source | Stars | License | Category | Agent Owner | Notes |
|-------|--------|-------|---------|----------|-------------|-------|
| frontend-design | anthropics/skills | 143k | Apache 2.0 | Design | eng-product | Anthropic-maintained |
| canvas-design | anthropics/skills | 143k | Apache 2.0 | Design | eng-product | HTML5 Canvas + custom fonts |
| skill.color-expert | meodai/skill.color-expert | 475 | CC BY 4.0 | Design | eng-product | Attribution to meodai required on use |
| nothing-design-skill | dominikmartn/nothing-design-skill | 2,400 | MIT | Design | eng-product | Nothing OS aesthetic |
| reels-scripting | charlie947/social-media-skills | 1,200 | MIT | Social | sales-marketing | Instagram Reels scripts |
| post-scorer | charlie947/social-media-skills | 1,200 | MIT | Social | sales-marketing | Post quality scoring |
| voice-builder | charlie947/social-media-skills | 1,200 | MIT | Social | sales-marketing | Brand voice profiling |
| youtube-thumbnail | charlie947/social-media-skills | 1,200 | MIT | Social | sales-marketing | YouTube thumbnail design |
| hook-generator | charlie947/social-media-skills | 1,200 | MIT | Social | sales-marketing | Social media hooks |
| marketingskills | coreyhaines31/marketingskills | 30,900 | MIT | Marketing | sales-marketing | 50+ CRO/copy/SEO/ads skills |
| competitive-ads-extractor | ComposioHQ/awesome-claude-skills | 62,300 | Apache 2.0 | Marketing | sales-marketing | Competitor ad analysis |
| pm-skills | phuryn/pm-skills | 11,700 | MIT | Product | ops-finance | 65+ PM skills |
| Skill_Seekers | yusufkaraaslan/Skill_Seekers | 13,800 | MIT | Dev | eng-product | Converts docs/repos into skills |
| academic-research-skills | imbad0202/academic-research-skills | 23,300 | CC BY-NC 4.0 | Research | ops-finance | NON-COMMERCIAL USE ONLY |

#### REJECTED

| Skill | Reason |
|-------|--------|
| hand-drawn-diagrams | 34 stars — below threshold |
| claude-skill-design (mcpmarket) | Unverifiable provenance, no GitHub source |
| social-media-research-skill | 35 stars + 2 mandatory external API keys |
| anything-to-notebooklm | 5 stars — no community trust |
| autoresearch-skill | 16 stars — below threshold |
| vexor | 212 stars + mandatory embedding API |

#### NOT A SKILL

| Item | Why |
|------|-----|
| daydreams | TypeScript agent framework, not a SKILL.md |
| humanizer | .NET string formatting library |
| deep-research | Standalone TypeScript app |
| remotion.dev/docs | Documentation URL |
| github.com/topics/web-scraper | GitHub topic page |

| claude-mem | thedotmack/claude-mem | 79,400 | Apache 2.0 | Memory | Alfred | Passive capture only — injection DISABLED (`CONTEXT_OBSERVATIONS=0`), haiku model, noisy tools skipped. Semantic search layer only. |
| context-mode | mksglu/context-mode | 15,900 | ELv2 | Context | Alfred + all agents | MCP server — routes tool output to SQLite, prevents inline bloat. ELv2 approved for internal use. |
| excel-mcp | negokaz/excel-mcp-server | ~2,800 | MIT | Productivity | it-infosec | Read/write Excel files without Microsoft Excel. MCP server via npx. |
| phoenix | Arize-ai/phoenix | 9,900 | ELv2 | Observability | eng-product | AI tracing/eval platform. Local use only (http://localhost:6006). Start with: pip install arize-phoenix && phoenix serve |
| duckduckgo | nickclyde/duckduckgo-mcp | 1,200 | MIT | Search | all agents | Free web search, no API key |
| pollinations | pollinations/model-context-protocol | 4,600 | MIT | Media | eng-product | Free AI image/text/audio generation, no key |
| markdownify | iflow-mcp/markdownify | ~500 | MIT | Utility | all agents | Convert PDF/HTML/files to Markdown |
| excalidraw | excalidraw/mcp | 4,600 | MIT | Design | eng-product | Hand-drawn diagrams via MCP |
| antv-chart | antvis/mcp-server-chart | 4,100 | MIT | Data | ops-finance | AntV data chart generation |
| open-websearch | Aas-ee/open-websearch | 1,300 | MIT | Search | all agents | Multi-engine search (Bing/DDG/Brave/Exa), no key |
| youtube-transcript | jdepoix/youtube-transcript-mcp | 7,600 | MIT | Research | sales-marketing | YouTube transcript retrieval, no API key |
| arxiv | blazickjp/arxiv-mcp | 2,800 | Apache 2.0 | Research | ops-finance | Academic paper search, no key |
| shadcn-ui-mcp | jpisnice/shadcn-ui-mcp-server | 2,800 | MIT | Design | eng-product | shadcn/ui v4 component generation and docs. MCP server via npx. |

#### DEFERRED — Awaiting Action

| Skill | Stars | Blocker | Action Required |
|-------|-------|---------|-----------------|
| twitter-algorithm-optimizer | 3,000 | License on davepoon/buildwithclaude unconfirmed | Verify license, then install |
| email-marketing-bible | 197 | Below 500-star threshold | Alfred star-waiver applied — install pending |
| GPT-Image2-Skill | 2,500 | User chose no preference | Skip for now |
| claude-code-video-toolkit | 1,300 | Requires Modal/RunPod GPU | User chose no preference — skip |
| dev-browser | 6,200 | Overlap with agent-browser | User chose no preference — skip |
| Generative-Media-Skills | 3,300 | muapi-cli dependency unvetted | Requires separate eng-product vetting of muapi-cli |

---

---

## YouTube Growth Division — 2026-05-30

> Department overview: `.claude/shared/yt-growth-division.md`
> Cost: Zero — all tools are free, no API keys required
> Status: Active

### Installed Skills

| Skill ID | Category | Agent Role | Notes |
|----------|----------|------------|-------|
| yt-niche-scout | YouTube / Research | Niche Scout | Research profitable niches with data-backed scoring |
| yt-competitor-analyst | YouTube / Research | Competitor Analyst | Deep-dives channels via transcripts + search |
| yt-script-writer | YouTube / Content | Script Writer | Full scripts with hooks, retention tactics, CTAs |
| yt-video-director | YouTube / Production | Video Director | Production briefs, editing pacing, video length research |
| yt-title-optimizer | YouTube / Content | Title Optimizer | 10 scored title variants per video |
| yt-thumbnail-gen | YouTube / Design | Thumbnail Gen | Free thumbnail generation via Pollinations |
| yt-monetization-strategist | YouTube / Growth | Monetization Strategist | YPP roadmap, affiliates, sponsors, products |
| yt-content-calendar | YouTube / Operations | Content Calendar | 30/90-day pipeline with topics, deadlines, upload schedule |
| yt-outlier-hunter | YouTube / Research | Outlier Hunter | Viral topic discovery via Attack Score + Winnable Score — automated weekly scan |
| yt-va-package | YouTube / Production | VA Package | Complete 5-section VA production brief — voiceover, b-roll, Canva, CapCut, upload |
| yt-performance-loop | YouTube / Analytics | Performance Loop | Weekly analytics review — Full Loop + Quick Loop modes, pattern extraction, calendar update |
| yt-cold-start | YouTube / Growth | Cold Start | 90-day Shorts-first authority building — breaks YouTube's new-channel suppression |
| yt-community-manager | YouTube / Engagement | Community Manager | Weekly comment management, pinned comment, 6-hour reply window, Community tab posts |

### Zero-Cost Tool Stack Used

| Tool | Purpose |
|------|---------|
| `youtube-transcript` MCP | Pull full transcripts of competitor videos |
| `duckduckgo` MCP | Free web search for research |
| `open-websearch` MCP | Multi-engine trend and keyword research |
| `pollinations` MCP | Free AI image generation for thumbnails |
| `agent-browser` skill | Scrape channel pages |
| `markdownify` MCP | Convert web pages to markdown |

---

## Approval Log

| Date | Action | Skill | Decided By |
|------|--------|-------|------------|
| 2026-05-31 | RESTRUCTURE | Core agents reorganised into 7 company departments (eng-product, sales-marketing, customer-success, ops-finance, people-culture, it-infosec, legal-compliance) | Alfred |
| 2026-05-29 | BATCH VET | 33 items | eng-product + Alfred |
| 2026-05-29 | INSTALL | 14 skills | Alfred |
| 2026-05-29 | REJECT | 6 skills | Alfred (trust threshold) |
| 2026-05-29 | NOT A SKILL | 5 items | Alfred |
| 2026-05-29 | DEFERRED | 6 items | Alfred (conditions unmet) |
| 2026-05-29 | INSTALL | excel-mcp, shadcn-ui-mcp | Alfred (batch 2 clean approvals) |
| 2026-05-29 | INSTALL | duckduckgo, pollinations, markdownify, excalidraw, antv-chart, open-websearch, youtube-transcript, arxiv | Alfred (batch 3 — free no-key) |
| 2026-05-30 | NEW DEPARTMENT | YouTube Growth Division — 8 skills | Alfred (zero-cost, internal build) |
| 2026-05-30 | INSTALL | yt-niche-scout, yt-competitor-analyst, yt-script-writer, yt-video-director, yt-title-optimizer, yt-thumbnail-gen, yt-monetization-strategist, yt-content-calendar | Alfred (YouTube Growth Division) |
| 2026-05-30 | INSTALL | yt-outlier-hunter, yt-va-package, yt-performance-loop | Alfred (YT Division — Phase 2 agents) |
| 2026-05-30 | UPDATE | yt-script-writer | Alfred (APEX framework rewrite — evergreen-first, 3T structure, 10-point quality gate) |
| 2026-05-30 | INSTALL | yt-cold-start, yt-community-manager | Alfred (YT Division — council gap fixes: cold-start authority building + community engagement) |
| 2026-05-30 | UPDATE | yt-outlier-hunter | Alfred (Competition Filter + Winnable Score added — council fix for zero-authority channel problem) |
| 2026-05-30 | UPDATE | yt-va-package | Alfred (Minimax character budget check + 4 workarounds added — council fix for free tier cap) |
| 2026-05-30 | UPDATE | yt-performance-loop | Alfred (Quick Loop mode added — 5-min fallback prevents manual paste fatigue failure) |
| 2026-05-30 | UPDATE | yt-reinvestment-roadmap | Alfred (Minimax Starter moved to Tier 0 mandatory — council identified as pre-revenue requirement) |
| 2026-05-29 | DEFERRED | firecrawl (free key req), figma-context (free key req), n8n-mcp (n8n credentials), better-icons (no npm pkg), designlang (CLI only, not MCP) | Alfred (needs credentials or not an MCP server) |
| 2026-05-29 | DEFERRED | graphiti (needs Docker+Neo4j infra), apify-mcp (needs APIFY_TOKEN) | Alfred (user setup required) |
| 2026-05-29 | DEFERRED | trigger.dev (SSE idle-timeout bug), trendradar (GPL-3.0 review), phoenix/arize (ELv2 review) | Alfred (pending decisions) |
