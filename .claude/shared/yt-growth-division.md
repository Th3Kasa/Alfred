# YouTube Growth Division — Alfred Department

> Owner: Alfred
> Created: 2026-05-30
> Status: Active
> Cost: Zero — all tools are free with no API keys required
> Channel location: Sydney, Australia (AEST UTC+10 / AEDT UTC+11)

---

## Mission

Run a complete, high-quality YouTube channel operation with 95% automation. Every step from niche selection to a published video with optimized title and thumbnail is handled by the division. The human role is: approve decisions, film or record content, and publish.

---

## Department Agents

| Agent | Skill | Role | Trigger |
|-------|-------|------|---------|
| **Niche Scout** | `yt-niche-scout` | Identifies profitable niches with data-backed scores | "find me a YouTube niche" |
| **Competitor Analyst** | `yt-competitor-analyst` | Deep-dives competitor channels — transcripts, hooks, titles, thumbnails | "analyze this channel" or paste YouTube URL |
| **Script Writer** | `yt-script-writer` | Writes full production-ready scripts with hooks, retention tactics, CTAs | "write a script for [topic]" |
| **Video Director** | `yt-video-director` | Production briefs — editing style, b-roll, pacing, optimal video length | "production brief" or "how should I edit this" |
| **Title Optimizer** | `yt-title-optimizer` | Generates 10 scored title variants per video | "write YouTube titles" |
| **Thumbnail Gen** | `yt-thumbnail-gen` | Designs and generates thumbnails via Pollinations (free) | "make me a thumbnail" |
| **Monetization Strategist** | `yt-monetization-strategist` | Full monetization roadmap — YPP, affiliates, sponsors, products | "how do I monetize my channel" |
| **Content Calendar** | `yt-content-calendar` | 30/90-day content pipeline with topics, deadlines, and upload schedule | "content calendar" or "what should I post" |

---

## Zero-Cost Tool Stack

All agents run exclusively on free tools:

| Tool | What it does | Used by |
|------|-------------|---------|
| `youtube-transcript` MCP | Pulls full transcripts of any YouTube video | Competitor Analyst, Script Writer |
| `duckduckgo` MCP | Free web search — research, trend detection | All agents |
| `open-websearch` MCP | Multi-engine search (Bing/DDG/Brave/Exa) | All agents |
| `pollinations` MCP | Free AI image generation — thumbnails | Thumbnail Gen |
| `agent-browser` skill | Browser automation — scrape channel pages | Competitor Analyst |
| `markdownify` MCP | Convert web pages to clean markdown | Research tasks |

**No paid APIs. No subscriptions. No external keys required.**

---

## Location: Sydney, Australia

| Consideration | Detail |
|---|---|
| Timezone | AEST (UTC+10) / AEDT (UTC+11, Oct–Apr) |
| Recommended upload time | 8:00–9:00am AEST Tuesday or Thursday |
| Why | Hits US evening peak (5–6pm EST) + AU morning commute simultaneously |
| AdSense currency | AUD — typically 20–40% above global CPM average |
| Tax | Complete W-8BEN in AdSense for 0% US withholding (AU–US tax treaty) |
| Affiliate networks | Prioritise Commission Factory, Awin AU, Impact AU before US networks |
| Audience strategy | Choose Global (higher CPM, more competition) or AU-first (loyal niche, less competition) per niche |

---

## Standard Workflow (New Channel)

```
Step 1: /yt-niche-scout
  → Research and pick the niche. Output: yt-niche-scout-report.md

Step 2: /yt-competitor-analyst [paste 3–5 channel URLs]
  → Reverse-engineer top channels. Output: yt-competitor-analysis.md

Step 3: /yt-monetization-strategist
  → Build revenue roadmap before the first upload. Output: yt-monetization-playbook.md

Step 4: /yt-content-calendar
  → Plan first 30 days. Output: yt-content-calendar.md

Step 5 (per video): /yt-script-writer
  → Write the script for the next scheduled video. Output: scripts/[slug].md

Step 6 (per video): /yt-video-director
  → Production brief for filming and editing. Output: inline + production-notes/[slug].md

Step 7 (per video): /yt-title-optimizer
  → 10 title variants, scored. Pick the winner.

Step 8 (per video): /yt-thumbnail-gen
  → Generate 3 thumbnail variants. Pick the winner. Output: thumbnails/[slug].png

Step 9: Upload to YouTube
  → Human task. Takes 5 minutes.

Step 10 (weekly): /yt-competitor-analyst on 1–2 new channels or recent videos
  → Stay current. Update strategy monthly.
```

---

## Quality Standards

This division produces work at the standard of a professional YouTube management agency. Non-negotiable:

- **Scripts** — every hook tested against 3 formulas before selection. Re-engagement beat at 30% timestamp. No filler.
- **Titles** — minimum 10 variants scored on 4 dimensions. Winner chosen on data, not gut feel.
- **Thumbnails** — 3 variants generated, A/B test planned. Must pass 120px readability check.
- **Research** — every claim backed by a source. No fabricated CPM numbers or subscriber counts.
- **Video length** — always determined by niche research, not guesswork.

---

## Project File Structure

```
project-root/
├── yt-niche-scout-report.md          ← Niche selection output
├── yt-competitor-analysis.md          ← Competitor research output
├── yt-monetization-playbook.md        ← Revenue roadmap
├── yt-content-calendar.md             ← Upload schedule and topic pipeline
├── scripts/
│   ├── [video-slug].md                ← Individual video scripts
│   └── ...
├── thumbnails/
│   ├── [video-slug]-a.png             ← Thumbnail variant A
│   ├── [video-slug]-b.png             ← Thumbnail variant B
│   └── ...
├── voice.md                           ← Channel voice profile (run /voice-builder)
└── about-me.md                        ← Creator background (run /voice-builder)
```

---

## Onboarding a New Channel

If starting from zero, run these first:

1. `/voice-builder` — establish the channel's voice and creator profile
2. `/yt-niche-scout` — with any YouTube links the user provides for analysis
3. `/yt-competitor-analyst` — paste YouTube URLs from the niche to reverse-engineer

Then the standard workflow above applies.

---

## Monthly Maintenance

| Task | Frequency | Agent |
|------|-----------|-------|
| Analyze 2 new competitor videos | Monthly | `yt-competitor-analyst` |
| Update content calendar | Monthly | `yt-content-calendar` |
| Review monetization progress vs playbook | Monthly | `yt-monetization-strategist` |
| Refresh niche research for new gaps | Quarterly | `yt-niche-scout` |

---

## Installed: 2026-05-30

Approved by Alfred. All 8 agents operational. Zero-cost tool stack confirmed.
