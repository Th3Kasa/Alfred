---
name: yt-content-calendar
description: >
  Build and manage a 30 or 90-day YouTube content calendar with specific video topics, research briefs, upload dates, and workflow deadlines — based on niche competitor analysis, trending topics, and monetization priorities. Use when the user says "content calendar", "what should I post next", "plan my YouTube schedule", "upload schedule", "next 30 videos", or wants a systematic content pipeline. Reads all yt-* files automatically. Zero cost — uses duckduckgo and open-websearch for trend research.
origin: alfred-yt-division
---

# YT Content Calendar

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## Step 1. Load context

Silently check and read:
- `yt-niche-scout-report.md` → niche, content gaps, first 10 video topics
- `yt-competitor-analysis.md` → content gaps, upload frequency benchmark, best upload days
- `yt-monetization-playbook.md` → priority content types for monetization
- `scripts/` folder → what has already been scripted
- `voice.md` → creator's content pillars

## Step 2. Get calendar inputs

Call AskUserQuestion:

```json
[
  {
    "question": "How many videos can you publish per week?",
    "header": "Upload frequency",
    "multiSelect": false,
    "options": [
      {"label": "4–6 per week (faceless AI channel)", "description": "Leo Grundström's recommended cadence for automation channels — AI handles production"},
      {"label": "1–2 per week (face on camera)", "description": "Sustainable for face-on-camera solo creators — quality over quantity"},
      {"label": "2–3 per week (hybrid)", "description": "Mix of face and faceless content"},
      {"label": "1 per week + Shorts daily", "description": "Main content + Shorts for algorithm reach"}
    ]
  },
  {
    "question": "How long is your calendar horizon?",
    "header": "Calendar length",
    "multiSelect": false,
    "options": [
      {"label": "30 days", "description": "4–8 videos — good for getting started"},
      {"label": "90 days", "description": "12–24 videos — full quarter planning"},
      {"label": "First 10 videos only", "description": "Focus on the launch sequence"}
    ]
  },
  {
    "question": "What is your primary content goal for this period?",
    "header": "Goal",
    "multiSelect": false,
    "options": [
      {"label": "Hit 1,000 subscribers fast", "description": "Prioritize viral-potential and shareable topics"},
      {"label": "Hit 4,000 watch hours", "description": "Prioritize longer, deep-dive content"},
      {"label": "Grow affiliate income", "description": "Prioritize product-adjacent content"},
      {"label": "Balanced growth", "description": "Mix of growth and monetization content"}
    ]
  }
]
```

## Step 3. Set the first milestone: 30 videos

Before building a multi-month calendar, identify the "30 video milestone" as the primary target. This is Leo Grundström's foundation principle:

**Why 30 videos:**
- YouTube needs a content library to understand your channel and push it to the right audience
- You will improve dramatically from video 1 to video 30 — don't judge the strategy on your first 10
- The algorithm starts compounding after a body of work exists
- At 4–6 videos/week: 30 videos = 5–7 weeks. This is fast.

**30-video milestone calendar (for faceless channels at 4–6/week):**
Plan the first 30 videos before anything else. These come directly from `yt-competitor-analysis.md` — specifically the "Recent High-Performers" list and "Priority topics to replicate." Do not invent topics. Copy what the algorithm is already pushing.

## Step 4. Generate the full topic list

For the full calendar duration, generate video ideas using this framework:

### Topic sourcing — competitor-first method (Leo Grundström)

**Primary source (80% of topics):** Pull directly from `yt-competitor-analysis.md` → the Recent High-Performers section. These are topics the algorithm is currently pushing in this niche. Cover them with your own angle.

**Secondary source (20% of topics):** Web trend research — search for what's happening in the niche this week and next.

Do not fill a calendar with invented topics. Every slot should have a proven demand signal backing it.

### Content pillar breakdown (apply to all slots)

| Pillar | % of Content | Purpose |
|--------|-------------|---------|
| **Competitor-proven topics** | 60% | Copy what's already getting views — fastest path to traction |
| **Evergreen tutorials** | 25% | Searchable, long-tail traffic, stays relevant |
| **Trending/timely** | 15% | Riding algorithm waves — time-sensitive, schedule immediately |
| **Collaboration / reaction** | 15% | Borrowing existing audiences |

For each video slot, generate:
- **Topic title (working):** [descriptive, not finalized — run /yt-title-optimizer on each]
- **Content pillar:** [Evergreen / Trending / Story / Collab]
- **Target keyword:** [primary search term]
- **Hook angle:** [one-sentence hook concept]
- **Monetization tie:** [which affiliate or sponsor this video enables]
- **Estimated search volume:** [low / medium / high based on search research]
- **Competition level:** [low / medium / high]

### Trend research

Search current trends for the niche before finalizing topics:
`"[niche]" trending topics 2025` and `"[niche]" news this week`

Insert 3 to 5 trending topics into the calendar where they fit.

## Step 4. Sequence the launch correctly

**First 10 videos should follow this proven sequence:**

| Video # | Type | Purpose |
|---------|------|---------|
| 1 | Channel trailer / Why I started | Establish identity, pin to profile |
| 2 | High-search tutorial | Get first organic search traffic |
| 3 | Personal story / case study | Build trust and connection |
| 4 | List video (X things/ways/tips) | Easy to watch, high retention |
| 5 | Myth-busting / controversy | Shareability, attracts debate |
| 6 | Tool/resource review | Affiliate income opportunity |
| 7 | Tutorial (deeper than #2) | Show depth of knowledge |
| 8 | Q&A or community response | Reward early subscribers |
| 9 | Trending topic | Algorithm boost attempt |
| 10 | Best-of / compilation | Low production effort, high value |

If this is beyond video 10, skip this sequencing and go straight to the pillar framework.

## Step 5. Build the production workflow

For each video, include these production deadlines working backwards from the upload date:

| Task | Days before upload |
|------|-------------------|
| Topic finalized | -14 days |
| Research complete | -12 days |
| Script written (run /yt-script-writer) | -10 days |
| Filming complete | -7 days |
| Rough cut edited | -5 days |
| Captions + chapters added | -3 days |
| Thumbnail created (run /yt-thumbnail-gen) | -3 days |
| Title finalized (run /yt-title-optimizer) | -2 days |
| Final review | -1 day |
| Upload and schedule | Upload day |

## Step 6. Output the full calendar

```markdown
# YouTube Content Calendar — [Niche] — [Date Range]

## Upload Schedule
- **Frequency:** [X per week]
- **Channel location:** Sydney, Australia (AEST UTC+10 / AEDT UTC+11)
- **Best day(s) to publish:** [Day] — based on competitor research
- **Upload time (Sydney):** Schedule in YouTube Studio for **8:00–9:00am AEST** (Tuesday or Thursday recommended)
- **Why:** This hits the US evening peak (5–6pm EST previous day) and the Australian morning commute simultaneously — maximising the first 24-hour view window that drives algorithm ranking
- **Daylight saving note:** Sydney observes AEDT (UTC+11) from first Sunday in October to first Sunday in April. Adjust scheduled upload time by 1 hour accordingly.

## Content Pipeline

---

### Week 1

**Video 1 — Upload: [Date]**
- **Working title:** [title]
- **Final title:** Run `/yt-title-optimizer` on upload day
- **Pillar:** [Evergreen/Trending/Story/Collab]
- **Target keyword:** [keyword]
- **Hook angle:** [one sentence]
- **Monetization tie:** [affiliate/sponsor/none]
- **Estimated difficulty:** [Easy/Medium/Hard to produce]
- **Production deadlines:**
  - Script due: [date]
  - Film by: [date]
  - Edit by: [date]
  - Thumbnail by: [date]
- **Research brief:** [2–3 sentences on what to research before scripting]
- **Status:** [ ] Topic locked [ ] Scripted [ ] Filmed [ ] Edited [ ] Uploaded

---

[Repeat for every video in the calendar]

---

## Shorts Strategy

[If applicable — list companion Shorts topics for each long-form video]
| Long-form video | Shorts clip idea | Target: 30–60 sec |
|-----------------|-----------------|---------------------|
| [Video 1] | [clip moment] | [timestamp range to extract] |

---

## Monthly Content Goals

| Month | Videos | Target Subscribers | Target Watch Hours | Affiliate Goal |
|-------|--------|-------------------|--------------------|----------------|
| Month 1 | X | +X subs | +X hours | $X |
| Month 2 | X | +X subs | +X hours | $X |
| Month 3 | X | +X subs | +X hours | $X |

---

## Batch Filming Days

Recommended: Film [X] videos in one session to minimize setup time.

**Batch 1 — [Date]:** Videos [list numbers]
**Batch 2 — [Date]:** Videos [list numbers]

---

## Topic Backlog (ideas not yet scheduled)

[List 10+ additional topics for future scheduling]
```

Save to `yt-content-calendar.md` in the project root.

## Step 7. Set recurring review cadence

End every calendar session with:

> **Weekly check-in:** Every [upload day], review:
> 1. Did last week's video hit target views in 48 hours? (benchmark: [X views])
> 2. Which title/thumbnail had higher CTR?
> 3. What did the comments ask for? (free research for next video)
> 4. Update the calendar with one new topic based on comments.
>
> Run `/yt-competitor-analyst` monthly to stay current on what the competition is doing.

## Rules

- The first 10 video sequence is mandatory for new channels — do not skip it.
- Every video must have a monetization tie-in, even if just a free resource for list building.
- Trending topics expire. Label them with a "publish by" date and replace if it passes.
- Production deadlines must be calculated from the actual upload date, not generic advice.
- Save the calendar to yt-content-calendar.md and remind the user to check it weekly.
- Never fill the calendar with vague topics like "tips for beginners." Every slot must have a specific working title and keyword.
