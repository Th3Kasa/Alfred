# YouTube Reinvestment Roadmap — Alfred

> Owner: Alfred
> Created: 2026-05-30
> Updated: 2026-05-30 (council review — ElevenLabs moved to Tier 0 mandatory)
> Status: Pre-revenue (activate at Tier 1 trigger)
> Rule: Never reinvest before the trigger income is stable for 2 consecutive months. Exception: ElevenLabs Starter is mandatory at launch — not revenue-gated.

---

## The Reinvestment Principle

The free stack gets you to monetisation and through the first $500/month. After that, every dollar reinvested into the right tool buys back time or compounds reach. The wrong tool just burns margin.

**Decision filter for every paid tool:**
1. Does it save at least 2 hours/week of VA or Alfred time? → Worth considering
2. Does it directly increase views, CTR, or retention? → High priority
3. Does it automate a step that currently requires manual input? → High priority
4. Does it only make an existing step marginally nicer? → Skip — keep the free version

**Reinvestment cap by tier:** Never spend more than 15% of that month's channel revenue on tooling. The channel should compound revenue faster than tool spend.

---

## Tier 0 — Launch Stack (Start Day 1)

**Income:** $0
**Tool spend:** ~$11 AUD/month (ElevenLabs Starter — mandatory, not revenue-gated)
**Status:** Activate before posting the first video

The free stack is not sufficient for consistent posting. ElevenLabs' 10K character free tier covers one long-form script per month. At 4–6 videos/week, this breaks the system before it starts. ElevenLabs Starter is the only mandatory pre-revenue spend.

### Mandatory at launch

**ElevenLabs Starter — ~$7 USD/month (~$11 AUD)**
Upgrades from 10,000 to 30,000 characters/month. Adds commercial licence. Covers 3–4 full long-form scripts per month, plus 20+ Shorts.
- The free tier bottleneck was identified as a critical system failure by council review — it breaks the posting cadence before any revenue is earned.
- At 4–6 videos/week faceless: upgrade to Creator tier ($22 USD/month, ~$34 AUD, 100K chars) at Tier 2.
- **Activate this before the first video is produced.** Do not wait for revenue.

| Tool | Purpose | Cost |
|------|---------|------|
| ElevenLabs Starter | AI voiceover — 30K chars/month + commercial licence | ~$11 AUD/month |
| Pixabay | Stock footage + images | Free |
| CapCut | Video editing | Free |
| Canva free tier | Thumbnail design | Free |
| Pollinations MCP | AI thumbnail generation | Free |
| youtube-transcript MCP | Competitor transcript extraction | Free |
| duckduckgo + open-websearch MCP | Research | Free |
| Google Gemini video | AI clip generation (3/day) | Free |
| YouTubeToTranscript.com | Bulk transcript extraction | Free |
| TTSMaker.com | Overflow voiceover (free, unlimited) — supplement ElevenLabs for Shorts | Free |

**Remaining bottlenecks at this tier:**
- Pixabay footage hunting is slow — VA has to search manually per clip (fixed at Tier 2 with Storyblocks).
- No real-time competitor analytics — Outlier Hunter scrapes manually (fixed at Tier 3 with YouTube Data API).
- Thumbnail generation is brief-based (VA executes in Canva) — not automated (fixed at Tier 4 with Midjourney).
- Performance Loop requires manually pasting analytics (Quick Loop mode reduces friction; direct API pull at Tier 3).

---

## Tier 1 — First Revenue

**Income trigger:** $200–$500 AUD/month (stable for 2 months)
**Reinvestment budget:** ~$50–$75 AUD/month (15% of revenue)
**Priority:** CTR and voiceover quality — these have the highest per-dollar return at early stage

### Tools to activate (in priority order)

**1. Keywords Everywhere — $15 AUD/year (one-time)**
Browser extension. Shows real YouTube search volume on every search you make. Upgrades every research step in Outlier Hunter and Script Writer with actual demand data instead of estimates. First buy at this tier — the ROI is immediate and the cost is negligible.
- Install: keywordseverywhere.com → YouTube plan
- Activates in: yt-outlier-hunter (Attack Score now anchored to real search volume), yt-title-optimizer (pick the title variant with the highest search demand)

**2. Canva Pro — ~$23 AUD/month**
Unlocks: brand kit (auto-apply channel colours to every thumbnail), background remover (clean face cutouts for thumbnails), premium stock assets, Magic Resize (one design → all formats).
- The background remover alone saves 15–20 minutes per thumbnail variant.
- Brand kit eliminates the step where VA has to manually apply colours each time.
- Activates in: yt-thumbnail-gen, yt-va-package (Canva brief becomes faster to execute)

**Tier 1 total spend: ~$23–38 AUD/month** (ElevenLabs already running from Tier 0)
**Tier 1 remaining budget for savings/reinvestment: ~$12–37/month**

### Alfred agent upgrades unlocked at Tier 1

| Agent | Upgrade | How |
|-------|---------|-----|
| `yt-title-optimizer` | Real search volume per title variant | Keywords Everywhere data added to scoring table |
| `yt-thumbnail-gen` | Canva Pro brief adds background remover step | Update Canva brief in yt-va-package Section 3 |
| `yt-va-package` | Brand kit pre-applied, no manual colour step | Update Canva brief instructions |

---

## Tier 2 — Growing

**Income trigger:** $500–$2,000 AUD/month (stable for 2 months)
**Reinvestment budget:** ~$75–$200 AUD/month
**Priority:** Stock footage quality + music + competitor intelligence

### Tools to activate (in priority order)

**1. Storyblocks — ~$22 USD/month (~$34 AUD) — All-Access plan**
Unlimited stock footage downloads, no per-clip cost. Replaces the Pixabay manual hunt entirely. Higher quality footage (4K, cinematic, no watermark).
- At 4–6 videos/week with 15–25 clips per video, the VA spends 30–45 minutes hunting Pixabay per video. Storyblocks reduces this to 10 minutes because clips are higher quality and the library is larger.
- Activates in: yt-va-package (B-roll brief, Section 2) — update source from "Pixabay primary" to "Storyblocks primary, Pixabay secondary"

**2. Epidemic Sound — ~$20 USD/month (~$31 AUD)**
Unlimited royalty-free music, zero copyright strikes, sync licence for all platforms. Replaces CapCut's built-in music library for serious channels.
- CapCut music occasionally triggers Content ID claims on monetized channels. Epidemic Sound has blanket licensing that explicitly covers monetized YouTube.
- Activates in: yt-va-package (B-roll brief, Section 2 — Background music source updated)

**3. VidIQ Basic — ~$10 USD/month (~$15 AUD)**
Real competitor keyword data, daily idea alerts based on your niche, view velocity tracking on competitor videos (how fast a video is gaining views — stronger signal than total views).
- Specifically upgrades the Outlier Hunter: VidIQ's view velocity is a better Attack Score input than manual view count scraping.
- Also shows competitor tags (which the free YouTube page doesn't display) — adds a new data layer to yt-competitor-analyst.
- Activates in: yt-outlier-hunter, yt-competitor-analyst

**4. Make.com Free → Starter — ~$12 USD/month (~$19 AUD)**
Workflow automation. At this tier: automate the content calendar update step (Outlier Hunter output → content calendar → VA notification). Start building the automation backbone.
- Specific automations to build first:
  - New entry in yt-content-calendar.md → auto-notify VA (Slack/email/WhatsApp)
  - Performance Loop output → highlight Outlier videos → auto-move to "Replicate this week" queue
- Activates in: yt-performance-loop, yt-content-calendar (automations layer)

**Tier 2 total spend: ~$99 AUD/month**
**Remaining reinvestment budget at top of tier: ~$100/month → bank toward Tier 3**

### Alfred agent upgrades unlocked at Tier 2

| Agent | Upgrade | How |
|-------|---------|-----|
| `yt-outlier-hunter` | VidIQ view velocity as Attack Score input | Add VidIQ velocity data to scoring instructions |
| `yt-va-package` | Storyblocks as primary B-roll source | Update Section 2 source priority |
| `yt-va-package` | Epidemic Sound as primary music source | Update Section 2 music instructions |
| `yt-competitor-analyst` | Competitor tag data visible via VidIQ | Add tag extraction step to analysis |
| `yt-content-calendar` | Make.com automation triggers | Document automation hooks |

---

## Tier 3 — Scaling

**Income trigger:** $2,000–$5,000 AUD/month (stable for 2 months)
**Reinvestment budget:** ~$200–$500 AUD/month
**Priority:** Direct analytics access (remove manual steps) + AI video generation (remove stock footage hunting)

### Tools to activate (in priority order)

**1. YouTube Data API v3 — ~$0 (free quota) or ~$50–$200 AUD/month at scale**
Google's official YouTube API. At this stage: enables Alfred's Performance Loop to pull analytics directly from YouTube Studio without the user manually pasting data. Also enables Outlier Hunter to query competitor channels programmatically.
- Free quota: 10,000 units/day — enough for a single channel's analytics pull + competitor monitoring
- Paid quota: only needed if running 3+ channels simultaneously
- Setup: Google Cloud Console → YouTube Data API v3 → OAuth for your channel
- Activates in: yt-performance-loop (automatic analytics pull), yt-outlier-hunter (programmatic competitor scan)
- **This is the single biggest efficiency upgrade in the entire roadmap.** Manual analytics pasting disappears.

**2. ElevenLabs Creator — ~$33 USD/month (~$52 AUD)**
100,000 characters/month + instant voice cloning. At 4–6 videos/week with full narration scripts, Creator tier covers the full posting schedule comfortably.
- Also unlocks: custom voice creation from a short sample (build a consistent channel voice that sounds human but is fully AI-generated)
- Activates in: yt-va-package (Section 1 — voiceover brief updated with Creator-tier settings and custom voice ID)

**3. Runway ML Gen-3 — ~$35 USD/month (~$55 AUD) — Standard plan**
AI video generation. Starts replacing the most generic stock footage clips with AI-generated visuals that are unique to your channel. Reduces copyright risk and makes videos visually distinct.
- Use case: scenes that are hard to find on Storyblocks (specific concepts, abstract visuals, future/sci-fi aesthetics for certain niches)
- Replaces Google Gemini's 3-free-clips-per-day limit with a proper generation budget
- Activates in: yt-va-package (Section 2 — add Runway as third source after Storyblocks + Pixabay for hard-to-find clips)

**4. TubeBuddy Pro — ~$10 USD/month (~$16 AUD)**
A/B thumbnail testing built directly into YouTube Studio (different from YouTube's native Test & Compare — TubeBuddy provides richer data and requires fewer impressions to reach statistical significance). Also: bulk SEO tools, video topic research, tag suggestions.
- At this scale, thumbnail CTR improvement of even 0.5% can represent thousands of additional views per video.
- Activates in: yt-thumbnail-gen (add TubeBuddy test data to A/B test plan), yt-performance-loop (TubeBuddy data as additional CTR signal)

**5. Ahrefs Lite — ~$129 USD/month (~$200 AUD) OR Semrush Pro — ~$140 USD/month**
Full SEO suite. At this stage the channel has enough content to start ranking in Google Search (YouTube videos appear in Google results). Ahrefs shows exactly which search queries your videos are being found for and identifies content gaps.
- Also: keyword difficulty scores — tell you which evergreen topics you can realistically rank for vs. which ones are too competitive.
- Recommend Ahrefs Lite at this tier. Upgrade to Standard ($249/month) if running multiple channels.
- Activates in: yt-niche-scout (keyword difficulty data), yt-script-writer (primary keyword confirmed against Ahrefs data), yt-title-optimizer (keyword volume from Ahrefs, not Keywords Everywhere estimates)

**Tier 3 total spend: ~$323–523 AUD/month**
**Note:** At $2,000–5,000/month revenue, this spend is 10–25% of revenue — adjust based on actual margins.

### Alfred agent upgrades unlocked at Tier 3

| Agent | Upgrade | How |
|-------|---------|-----|
| `yt-performance-loop` | Direct YouTube API pull (no manual paste) | YouTube Data API integration |
| `yt-outlier-hunter` | Programmatic competitor scan (no browser scraping) | YouTube Data API integration |
| `yt-va-package` | Runway ML for hard-to-find clips | Section 2 source updated |
| `yt-thumbnail-gen` | TubeBuddy A/B data layer | A/B test plan updated |
| `yt-script-writer` | Ahrefs keyword difficulty validation | Primary keyword check added to research step |

---

## Tier 4 — Full Stack

**Income trigger:** $5,000+ AUD/month (stable for 2 months) — Leo's "hire VAs" threshold
**Reinvestment budget:** ~$500–$1,000 AUD/month on tooling
**Priority:** Full pipeline automation + multi-channel expansion

### Tools to activate (in priority order)

**1. Claude API (Anthropic) — ~$50–$200 AUD/month**
Programmatic script generation at scale. At 4–6 videos/week, the current workflow requires Alfred to be invoked manually per script. The Claude API enables:
- Bulk script generation (generate 7 days of scripts in one run)
- Automated title variant generation triggered by script completion
- A/B script testing (generate 2 variants of a hook, test which retains better)
- Multi-channel operation (different Claude Project per channel, all running simultaneously)
- Model recommendation: claude-sonnet-4-6 for script generation (quality + speed balance)
- Activates in: yt-script-writer (becomes a programmatic pipeline, not just a single-call agent)

**2. n8n (self-hosted, free) or Make.com Growth — ~$29 USD/month**
Full pipeline automation:
- Outlier Hunter scan → Attack Score calculated → top topics auto-added to content calendar → VA notified → script generated → brief assembled → uploaded to shared drive → VA starts production
- This is the step where Alfred's role changes from "per-video executor" to "pipeline monitor"
- With n8n self-hosted: zero ongoing cost, full control. Requires a $5–10/month VPS (e.g., Hetzner, DigitalOcean).

**3. Descript — ~$36 USD/month (~$56 AUD) — Creator plan**
AI-powered video editing. Edits video by editing the transcript — delete a word in the transcript, the video cut is made automatically. Dramatically reduces VA editing time for talking-head or interview content. Less relevant for pure stock-footage faceless, but essential if the channel ever incorporates any face-on-camera content.
- Also: AI filler-word removal (removes all "um", "uh" automatically), overdub (fix audio without re-recording)

**4. Midjourney — ~$12 USD/month (~$19 AUD) — Basic plan**
Photorealistic AI image generation for thumbnails. At this scale, Pollinations is no longer sufficient — Midjourney produces thumbnails that compete with professional designers.
- Thumbnail workflow at Tier 4: Midjourney for the background/scene → Canva Pro for text overlay → 3 variants → TubeBuddy A/B test
- Activates in: yt-thumbnail-gen (Midjourney replaces Pollinations as primary AI generation path)

**5. Kloudboard (Leo Grundström's VA management tool)**
Currently in beta — waitlist at kloudboard.com. Built specifically for managing remote VA teams on YouTube automation channels. Replaces Notion/Trello for VA workflow management.
- Join the waitlist now. At Tier 4, the VA team is 3–4 people. Kloudboard is purpose-built for this exact workflow.

**Tier 4 total spend: ~$300–600 AUD/month on tools**
**Plus VA team: ~$2,000–4,000 AUD/month (4 VAs at 20hrs/week each)**
**At $5,000+ revenue, this is fully covered with margin remaining**

### Alfred agent upgrades unlocked at Tier 4

| Agent | Upgrade | How |
|-------|---------|-----|
| `yt-script-writer` | Claude API bulk generation — 7 scripts in one run | Programmatic pipeline via Claude API |
| `yt-thumbnail-gen` | Midjourney as primary AI path | Replace Pollinations instructions |
| `yt-outlier-hunter` | Fully automated weekly scan (no manual trigger) | n8n/Make.com scheduled trigger |
| `yt-performance-loop` | Fully automated (direct API pull + auto calendar update) | YouTube API + n8n automation |
| `yt-va-package` | Auto-assembled and delivered to VA via Kloudboard | Kloudboard integration |

---

## Multi-Channel Expansion (Tier 4+)

Once the first channel is generating $5,000+/month and the VA team is running production autonomously, the next move is a second channel in an adjacent niche using the same infrastructure.

**What carries over for free:** All Alfred agents, all SKILL.md frameworks, CapCut templates, VA SOPs, Canva brand kit template (new colours, same structure).

**Additional cost per new channel:**
- New Claude Project: Free
- New ElevenLabs custom voice: Free (within Creator plan)
- Additional TubeBuddy licence: ~$10 USD/month
- Additional Storyblocks seat: Check plan terms — most plans allow multiple channels under one account
- Additional VA (researcher + editor): ~$1,000–2,000 AUD/month

**Target:** 3 channels running simultaneously at Tier 4 = $15,000+/month combined. Each channel feeds the community/digital product funnel.

---

## Reinvestment Decision Checklist

Before approving any new paid tool, run this check:

- [ ] Is the free alternative actually failing us? (Don't upgrade what isn't broken)
- [ ] Have we been at the income trigger for at least 2 consecutive months? (Don't spend on projected revenue)
- [ ] Does this tool save 2+ hours/week OR directly increase CTR/retention/views?
- [ ] Is the tool in the correct tier for current revenue? (Don't buy Tier 3 tools at Tier 1 income)
- [ ] Is there an Alfred agent that can be upgraded to use this tool? (Prefer tools that integrate into the automation stack)
- [ ] Does the tool have a free trial to test before committing?

---

## Full Paid Stack Summary (when all tiers are active)

| Tool | Monthly Cost (AUD) | Tier | Primary Benefit |
|------|--------------------|----|-----------------|
| ElevenLabs Starter | ~$11 | 0 (mandatory) | 30K chars + commercial licence — required from day 1 |
| Keywords Everywhere | ~$1 (annual) | 1 | Real search volume data |
| Canva Pro | ~$23 | 1 | Brand kit + background remover |
| ElevenLabs Creator | ~$34 | 2 | 100K chars + custom voice (upgrade from Starter) |
| Storyblocks All-Access | ~$34 | 2 | Unlimited stock footage |
| Epidemic Sound | ~$31 | 2 | Copyright-safe music |
| VidIQ Basic | ~$15 | 2 | Competitor keyword + velocity data |
| Make.com/n8n | ~$19 | 2 | Workflow automation |
| YouTube Data API | ~$0–50 | 3 | Direct analytics pull |
| Runway ML Standard | ~$55 | 3 | AI video generation |
| TubeBuddy Pro | ~$16 | 3 | A/B thumbnail data |
| Ahrefs Lite | ~$200 | 3 | Full SEO suite |
| Claude API | ~$100 | 4 | Bulk script generation |
| Midjourney Basic | ~$19 | 4 | Photorealistic thumbnails |
| Kloudboard | TBD | 4 | VA team management |
| **Total (full stack)** | **~$615 AUD/month** | — | — |

At $5,000+/month revenue, this is **12.3% of revenue** — within the 15% reinvestment cap.

At $10,000+/month (two channels), this becomes **6.15% of revenue** — effectively negligible.

---

## Monitoring This Roadmap

Review this document monthly alongside the `/yt-performance-loop` output.

Ask: "Has the income trigger for the next tier been stable for 2 months?" If yes, activate the next tier's tools in priority order.

Track actual spend vs. the 15% cap in the same spreadsheet as channel revenue.

---

> Next review: when channel reaches $200 AUD/month stable for 2 months → activate Tier 1 tools.
