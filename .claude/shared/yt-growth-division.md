# YouTube Growth Division — Alfred Department

> Owner: Alfred
> Created: 2026-05-30
> Status: Active
> Cost: Zero — all tools are free with no API keys required
> Channel location: Sydney, Australia (AEST UTC+10 / AEDT UTC+11)

---

## Mission

Run a complete, high-quality YouTube channel operation with 95% automation. Every step from niche selection to a published video with optimized title and thumbnail is handled by the division. The human role is: approve decisions and publish.

**Channel type:** Fully faceless — AI voice (ElevenLabs) + stock footage (Pixabay/CapCut). No filming required.

**Evergreen-first principle:** Every piece of content is built to rank and drive views for 12+ months. No trending-news content. No date-specific hooks. Evergreen content compounds — it earns views while you sleep.

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
| **Outlier Hunter** | `yt-outlier-hunter` | Automated viral topic discovery — Attack Score + Winnable Score scans competitors weekly | "find topics", "what should I make next", "find viral videos" |
| **VA Package** | `yt-va-package` | Complete 5-section VA production brief — voiceover, b-roll, Canva, CapCut, upload | "create VA brief", "production brief", "send to VA" |
| **Performance Loop** | `yt-performance-loop` | Weekly analytics review (Full or Quick Loop) — scores videos, finds patterns, updates calendar | "performance review", "what's working", "check my analytics" |
| **Cold Start** | `yt-cold-start` | 90-day Shorts-first authority strategy — breaks YouTube's new-channel suppression | "starting a new channel", "getting zero views", "cold start" |
| **Community Manager** | `yt-community-manager` | Weekly comment management — pinned comments, 6-hour reply window, Community tab | "manage comments", "community engagement", "reply to comments" |

---

## Zero-Cost Tool Stack

All agents run exclusively on free tools:

| Tool | What it does | Used by | Cost |
|------|-------------|---------|------|
| `youtube-transcript` MCP | Pulls full transcripts of any YouTube video | Competitor Analyst, Script Writer | Free |
| `duckduckgo` MCP | Free web search — research, trend detection | All agents | Free |
| `open-websearch` MCP | Multi-engine search (Bing/DDG/Brave/Exa) | All agents | Free |
| `pollinations` MCP | Free AI image generation — thumbnails | Thumbnail Gen | Free |
| `agent-browser` skill | Browser automation — scrape channel pages | Competitor Analyst, Outlier Hunter | Free |
| `markdownify` MCP | Convert web pages to clean markdown | Research tasks | Free |
| YouTubeToTranscript.com | Extract competitor transcripts for Claude Project training | Competitor Analyst, Script Writer | Free |
| Google Gemini | AI-generated video clips (3 free/day) | Video Director | Free |
| Canva | Thumbnail design (primary tool) | Thumbnail Gen | Free tier |
| CapCut | Video editing with Leo's workflow | Video Director | Free |
| ElevenLabs | Voiceover generation | Script → Production pipeline | Free tier |
| Pixabay | Stock footage and images | Video Director | Free |
| NexLev MCP | AI-powered competitor analytics (optional) | Niche Scout | Free tier |

**Core stack is entirely free. NexLev optional for advanced niche research.**

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
PRE-LAUNCH (before first video):

Step 0: /yt-cold-start
  → Build 90-day Shorts warm-up plan. Channel setup checklist. Shorts content queue.
  → Activate ElevenLabs Starter (~$11 AUD/month) — mandatory before first video.
  → Run Shorts-only for first 30 days. No long-form until 100 subscribers.
  Output: yt-cold-start-plan.md

---

CHANNEL SETUP (one-time):

Step 1: /yt-niche-scout
  → Research and pick the niche. Output: yt-niche-scout-report.md

Step 2: /yt-competitor-analyst [paste 3–5 channel URLs]
  → Reverse-engineer top channels. Output: yt-competitor-analysis.md

Step 3: /yt-monetization-strategist
  → Build revenue roadmap before the first upload. Output: yt-monetization-playbook.md

Step 4: /yt-content-calendar
  → Plan first 30 days. Output: yt-content-calendar.md

---

PER VIDEO (repeat for every video):

Step 5: /yt-outlier-hunter
  → Scan competitors weekly. Find Attack Score topics. Output: yt-attack-list-[date].md

Step 6: /yt-script-writer [approved topic]
  → APEX framework script with 3T structure. 10-point quality gate. Output: scripts/[slug].md

Step 7: /yt-title-optimizer
  → 10 scored title variants. Pick the winner.

Step 8: /yt-thumbnail-gen
  → 3 thumbnail variants via Canva brief or Pollinations. Output: thumbnails/[slug]-*.png

Step 9: /yt-va-package
  → Complete 5-section production brief for the VA. Output: va-brief-[slug].md

Step 10: VA executes the brief
  → ElevenLabs voiceover → Pixabay b-roll → Canva thumbnail → CapCut edit → YouTube upload
  → Human approves the final video only.

---

WEEKLY MAINTENANCE:

Step 11 (every 7 days): /yt-performance-loop
  → Full Loop (15 min) or Quick Loop (5 min). Scores every video. Identifies winning patterns.
  → Generates Next 7 Days action plan. Updates content calendar automatically.

Step 12 (every Monday): /yt-community-manager
  → Pinned comment for new videos. Reply templates for the week's comments.
  → Comment prompt for next script. Community tab post draft (500+ subs).
  → Viewer-requested topics fed back to content calendar.

Step 13 (monthly): /yt-competitor-analyst on 2 new channels
  → Keep competitor intelligence current. Update strategy.
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

## Installed: 2026-05-30 | Updated: 2026-05-30 (council review)

Approved by Alfred. 13 agents operational. Zero-cost tool stack confirmed (ElevenLabs Starter ~$11 AUD/month mandatory from launch). Evergreen-first principle applied across all agents. Council review gaps resolved: cold-start authority building, community engagement, competition filter, Quick Loop mode, ElevenLabs character math.
