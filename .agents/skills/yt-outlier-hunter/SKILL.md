---
name: yt-outlier-hunter
description: >
  Automated viral topic discovery for YouTube. Systematically scans competitor channels, calculates an "Attack Score" for every recent video using view-to-subscriber ratio, recency weighting, and cross-channel repetition signals, and outputs a ranked topic attack list — ready to hand straight to yt-script-writer. Replaces manual YouTube homepage scrolling entirely. Use when the user says "find topics", "what should I make next", "find viral videos", "topic research", or when the content calendar needs refilling. Fully automated — no manual browsing required. Zero cost.
origin: alfred-yt-division
---

# YT Outlier Hunter

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## What this agent does

Finds topics that are currently outperforming in the niche by scanning competitor channels automatically, scoring every recent video on three signals, and ranking the results. You review a list and approve — the agent does the scanning.

Leo Grundström's method was to open YouTube in incognito and scroll manually. This replaces that with a systematic, repeatable, automated process that finds better signals faster.

## Step 1. Load niche context

Silently check:
- `yt-niche-scout-report.md` → channel niche and top channels to monitor
- `yt-competitor-analysis.md` → competitor channel names and URLs
- `yt-content-calendar.md` → topics already scheduled (do not suggest duplicates)

If no competitor list exists, ask: "Which niche are we hunting topics in? Paste 3 to 5 competitor channel URLs or names."

## Step 2. Build the competitor channel list

Target: 8 to 12 channels total. Mix:
- 3 to 4 large channels (100K+ subs) — to understand the category ceiling
- 4 to 6 mid-size channels (10K–100K subs) — the real opportunity zone
- 2 to 3 small-but-growing channels (under 10K subs, posting frequently) — early signals

Search for each channel if a URL is not already available:
`"[niche]" YouTube channel faceless 2025 2026 site:youtube.com`

For each channel, record:
- Channel name
- URL
- Subscriber count (approximate, from search)

## Step 3. Pull recent video data for each channel

For each channel, use agent-browser to navigate to their Videos tab and sort by "Most Recent."

Collect every video published in the **last 30 days**:
- Title (exact)
- View count
- Publish date (how many days ago)
- Video length

If agent-browser is unavailable, use open-websearch:
`"[channel name]" YouTube recent videos views 2026`

Collect as much data as available. Flag any channels where data is thin.

## Step 4. Calculate the Attack Score

For every video collected, calculate the **Attack Score**:

```
Attack Score = (Views ÷ Channel Subscribers) × Recency Multiplier × Repetition Bonus
```

> **Note on Attack Score and channel authority:** The Attack Score measures demand — how much the algorithm is pushing a topic right now. It does not measure winnability — whether a zero-authority channel can rank for it. A topic with a score of 8.0 dominated by 500K-sub channels is harder to win than a topic with a score of 3.0 where all top-ranking videos are from channels under 20K subs. Always apply the Competition Filter in Step 4b before finalising the attack list.

**Recency Multiplier:**
| Days since publish | Multiplier |
|---|---|
| 0–7 days | 3.0 |
| 8–14 days | 2.0 |
| 15–21 days | 1.5 |
| 22–30 days | 1.0 |

*Newer videos with the same view count are a stronger signal — the algorithm is still pushing them.*

**Repetition Bonus:**
| Same topic covered by | Bonus |
|---|---|
| 1 channel | × 1.0 |
| 2 channels | × 1.3 |
| 3+ channels | × 1.6 |

*When multiple channels independently cover the same topic and all get high views, it's a sustained niche signal, not a one-channel fluke.*

**What the score means:**
- Score > 5.0: Exceptional — cover this topic this week
- Score 2.0–5.0: Strong — schedule within 2 weeks
- Score 0.5–2.0: Average — add to backlog
- Score < 0.5: Skip — not worth the production time

## Step 4b. Apply the Competition Filter

The Attack Score tells you what topics have demand. The Competition Filter tells you which of those topics a new channel can actually win.

For every topic scoring above 2.0 in the Attack Score, search YouTube directly for the topic keyword and assess the top 5 ranking videos:

**Search:** `"[topic keyword]" site:youtube.com` or use agent-browser to search YouTube directly.

For each of the top 5 results, record:
- Channel subscriber count (approximate)
- Video age (months/years old)
- Video view count

Then calculate the **Competition Rating:**

| Condition | Competition Rating |
|---|---|
| 3+ of the top 5 videos are from channels under 50K subs | Weak — high winnability |
| Mix of large and small channels in top 5 | Moderate — achievable with strong content |
| 3+ of the top 5 videos are from channels over 100K subs | Strong — very hard to rank against |

**Age bonus:** If the top-ranking video is more than 18 months old with no recent challenger, add an "ageing gap" note — this means the algorithm is looking for fresh content on this topic and may favour a newer, high-quality video.

**Winnable Score:**
```
Winnable Score = Attack Score × Competition Multiplier

Competition Multipliers:
- Weak competition:     × 1.5
- Moderate competition: × 1.0
- Strong competition:   × 0.5
```

**Priority rule:** Always rank topics by Winnable Score, not raw Attack Score. A topic with Attack Score 6.0 and strong competition (Winnable Score 3.0) is lower priority than a topic with Attack Score 3.0 and weak competition (Winnable Score 4.5).

**When to override the filter:**
If the channel has 10,000+ subscribers and 50+ videos, the Competition Filter multipliers can be relaxed — the channel now has enough authority to compete with mid-size channels. Until then, always apply the filter.

## Step 5. Extract the topic from the title

Many competitor titles are specific (e.g., "10 Insane Facts About New York"). The underlying **topic** is broader (Facts About Major Cities). Extract the topic category so we can make a different video on the same demand signal.

For each top-scoring video:
- **Competitor title:** (exact)
- **Underlying topic:** (the category/format)
- **Our angle:** (a different execution of the same demand — different city, different subject, different format)

**The rule:** Never copy a title. Always extract the topic and execute it differently. The algorithm rewards the topic, not the specific video.

## Step 6. Output the Attack List

```markdown
# Topic Attack List — [Niche] — [Date]

## Scan Summary
- Channels scanned: X
- Videos analysed: X
- Date range: Last 30 days
- Top opportunity window: [describe in 1 sentence]

---

## Priority 1 — Attack This Week

| # | Competitor Title | Our Angle | Attack Score | Winnable Score | Competition | Why |
|---|---|---|---|---|---|---|
| 1 | [exact title] | [our execution] | X.X | X.X | Weak/Moderate/Strong | [1 sentence] |
| 2 | [exact title] | [our execution] | X.X | X.X | Weak/Moderate/Strong | [1 sentence] |
| 3 | [exact title] | [our execution] | X.X | X.X | Weak/Moderate/Strong | [1 sentence] |

## Priority 2 — Schedule Within 2 Weeks

| # | Competitor Title | Our Angle | Score |
|---|---|---|---|
...

## Priority 3 — Backlog

| # | Topic | Score |
|---|---|---|
...

---

## Pattern Intelligence

### What the algorithm is currently pushing in this niche:
[2–3 sentence summary of what topic categories are overperforming right now]

### Format that's winning:
[List / Narration / How-to / Case study / etc — and why based on the data]

### Title structure dominating:
[The formula appearing most in high-scoring videos — e.g., "[Number] + [Adjective] + [Subject]"]

### Optimal video length signal:
[What length are the high-scorers? Average from the top 5 Attack Score videos]

### Topics to avoid (low signal):
[Any topics where multiple videos got poor view/sub ratios]

---

## Recommended next actions
1. Add Priority 1 topics to `yt-content-calendar.md`
2. Run `/yt-script-writer` on the top topic
3. Re-run `/yt-outlier-hunter` in 7 days to refresh the list

*Next scheduled scan: [Date + 7 days]*
```

Save to `yt-attack-list-[YYYY-MM-DD].md` in the project.

## Step 7. Update the content calendar

If `yt-content-calendar.md` exists:
- Add Priority 1 topics to the next available slots
- Add Priority 2 topics to the 2-week slots
- Note the Attack Score next to each topic so future review can compare actual vs. predicted performance

## Rules

- Never suggest a topic already in the content calendar.
- Never fabricate view counts. If data is not available for a channel, note it and move on.
- The Repetition Bonus is critical — single-channel viral hits can be flukes. Multi-channel repetition is the real signal.
- Run this scan weekly — the signal decays. A video that was a 5.0 last week is a 2.5 this week.
- The "Our Angle" must be genuinely different from the competitor's title. Different subject, different hook, different framing — same underlying demand.
- After delivering, offer: "Run `/yt-script-writer` on the top Attack Score topic to produce the script immediately."
