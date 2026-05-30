---
name: yt-performance-loop
description: >
  Weekly analytics review agent. Takes video performance data from the past 7 days, calculates what worked vs. what didn't, identifies winning patterns across title style, topic category, and thumbnail, and generates a data-driven "Next 7 Days" action plan. Automatically reprioritises yt-content-calendar.md based on the evidence. Use when the user says "performance review", "what's working", "check my analytics", "weekly review", "yt-performance-loop", or 7 days after any video is published. Requires pasting YouTube Studio analytics data — no API access needed. Zero cost.
origin: alfred-yt-division
---

# YT Performance Loop

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## What this agent does

The Performance Loop is Alfred's closed feedback circuit. Without it, the channel operates on gut feel. With it, every new video is informed by what the algorithm actually rewarded in the previous batch.

Leo Grundström posts 4–6 videos per week and reviews performance every 7 days. The review is the mechanism that separates channels that plateau from channels that compound. This agent does the review automatically.

## Step 1. Load context

Silently check:
- `yt-content-calendar.md` → currently scheduled topics
- `yt-attack-list-*.md` (most recent) → topics queued from outlier hunter
- `yt-competitor-analysis.md` → baseline patterns for the niche

Then ask the user:

```
Paste your YouTube Studio analytics for the past 7 days.

For each video published in the last 7 days, I need:
1. Video title
2. Views at 48 hours (from the "First 48 hours" tab)
3. Click-through rate (CTR) — shown as a percentage
4. Average view duration — shown as minutes:seconds OR percentage
5. Impressions (how many times YouTube showed the thumbnail)
6. Subscriber count change attributed to this video (if shown)

If you have fewer than 3 videos in the past 7 days, include the most recent 5 regardless of publish date.

Paste the data as a list, one video per line. Example:
"Why You're Getting Zero Views" | 1,240 views | 4.2% CTR | 6:34 avg view duration | 29,500 impressions | +18 subs
```

## Step 2. Normalise and score each video

For each video, calculate the **Performance Score**:

```
Performance Score = (CTR Score × 0.40) + (Retention Score × 0.35) + (Views Score × 0.25)
```

### CTR Score (0–10)
| CTR | Score |
|-----|-------|
| 8%+ | 10 |
| 6–8% | 8 |
| 4–6% | 6 |
| 2–4% | 4 |
| Under 2% | 1 |

*CTR is the most important early signal. It tells you if the thumbnail + title combination stopped the scroll. A video with low CTR cannot be saved by great content.*

### Retention Score (0–10)
Compare against niche benchmark (pull from `yt-competitor-analysis.md` if available, otherwise use general benchmarks):

| Avg View Duration (% of video length) | Score |
|---|---|
| 60%+ | 10 |
| 45–60% | 8 |
| 35–45% | 6 |
| 25–35% | 4 |
| Under 25% | 1 |

*If the user provides duration in minutes:seconds rather than percentage, ask for the video length to calculate the percentage.*

### Views Score (0–10)
Compare to the channel's 30-day average views per video:

| Performance vs. Channel Average | Score |
|---|---|
| 3× average or more | 10 |
| 2–3× average | 8 |
| 1–2× average | 6 |
| 0.5–1× average | 4 |
| Under 0.5× average | 1 |

*If no historical average is available, ask: "What is your typical views per video?" Use that as the baseline.*

## Step 3. Classify each video

After scoring, classify each video into one of four categories:

**Outlier (Score 7.5+)** — Algorithm is actively distributing this. Replicate immediately.
**Performer (Score 5.0–7.4)** — Solid video. Understand why it worked.
**Average (Score 3.0–4.9)** — Not hurting or helping. Note and move on.
**Underperformer (Score under 3.0)** — Diagnose the failure point.

## Step 4. Diagnose underperformers

For every video scoring under 3.0, identify the **primary failure point**:

**Failure point: Low CTR (under 2%)**
→ Problem is thumbnail or title (or both)
→ Action: Swap thumbnail within 24 hours (YouTube re-exposes videos when the thumbnail changes)
→ Test a new title variant in the description pinned comment as a teaser

**Failure point: Low retention (under 30%)**
→ Problem is the hook (first 30 seconds lost the viewer)
→ Action: Note which segment of the script lost viewers (YouTube shows the drop-off graph)
→ Apply to script template — fix the hook formula for next videos

**Failure point: Low views despite good CTR and retention**
→ Problem is impressions — YouTube isn't distributing the video
→ Possible causes: wrong topic for the algorithm's current push, publication timing, tags mismatch
→ Action: Note the topic category. Cross-check with yt-attack-list for whether this topic had a high Attack Score. If the Attack Score was below 2.0, the topic simply wasn't in demand — do not repeat it.

**Failure point: Good views, low retention**
→ Content delivery problem — the topic had demand but the script failed to hold attention
→ Action: Review the APEX script framework checklist for that video. Identify which section had the worst drop-off.

## Step 5. Extract winning patterns

Look across all **Outlier** and **Performer** videos and identify patterns:

### Title patterns
Classify each title by formula type:
- **Number + Noun**: "7 Mistakes That Kill YouTube Channels"
- **Why + Problem**: "Why Your Videos Get Zero Views"
- **How I + Result**: "How I Made $10K in 30 Days with AI"
- **Secret/Hidden/Unknown**: "The Hidden YouTube Strategy Nobody Talks About"
- **Versus**: "AI Automation vs. Manual — Which Actually Wins?"
- **Warning**: "Stop Doing This on YouTube (It's Killing Your Channel)"

Which formula appeared most in the top performers? **This is the formula to prioritise for the next 7 days.**

### Topic patterns
Group videos by topic category (from `yt-content-calendar.md` or by reading the titles):
- Which topic categories produced Outliers?
- Which produced Underperformers?

### Thumbnail patterns
From the user's data, ask if needed: "Were Outlier videos using face thumbnails, text-only thumbnails, or object thumbnails?"

Note the winning thumbnail type. Flag it in the action plan.

### Length patterns
Do longer or shorter videos outperform in this week's batch? Note the average length of Outliers vs. Underperformers.

### Publish timing
Did videos published at the recommended 8:00–9:00am AEST outperform videos published at other times? Note the pattern.

## Step 6. Generate the Performance Report

```markdown
# YT Performance Report — Week of [Date]

## Summary
- Videos reviewed: X
- Outliers: X | Performers: X | Average: X | Underperformers: X
- Channel average views (this week): X
- Top video: "[Title]" — [Score] | [CTR]% CTR | [Retention]% retention

---

## Video Scoreboard

| Title | Views @48h | CTR | Retention | Score | Class |
|---|---|---|---|---|---|
| [Title] | X | X% | X% | X.X | Outlier / Performer / Average / Underperformer |

---

## Outlier Analysis — What the Algorithm Rewarded

### [Outlier Title 1]
- **Score:** X.X
- **CTR:** X% (benchmark: 4–6% is good)
- **Retention:** X%
- **Why it worked:** [1–2 sentences: title formula + topic category + thumbnail type that drove the result]
- **Replicate rule:** [Specific instruction: "Use [formula] on [topic category] with [thumbnail type] in next 3 videos"]

### [Outlier Title 2]
[same format]

---

## Underperformer Diagnosis

### [Underperformer Title]
- **Score:** X.X
- **Primary failure point:** [CTR / Retention / Impressions]
- **Why:** [1 sentence]
- **Immediate action:** [1 specific action — swap thumbnail / fix hook / avoid this topic]

---

## Pattern Intelligence — What's Working This Week

### Winning title formula:
[Formula type and example]

### Winning topic category:
[Topic category that produced the best results]

### Winning thumbnail style:
[Face / text-only / object — based on Outlier data]

### Optimal publish length this week:
[Average length of Outlier videos]

### Topics to avoid:
[Any topic category where 2+ videos underperformed]

---

## Immediate Actions (Do Today)

1. **Swap thumbnails** on: [list underperforming video titles with low CTR]
   - New thumbnail brief: [1-sentence description of what to change]
2. **Replicate** this week's top-performing topic + format combination in the next script
3. **Avoid** scheduling more videos in: [underperforming topic categories]

---

## Algorithm Signal Interpretation

[2–3 sentences reading what the algorithm's distribution decisions this week signal about what the niche algorithm is currently prioritizing. This is the "what does YouTube want to push right now" read.]

```

## Step 7. Generate the Next 7 Days Action Plan

Based on the pattern analysis, produce a concrete plan:

```markdown
## Next 7 Days — Evidence-Based Action Plan

### Videos to produce (priority order):

**Video 1 (Produce first — highest confidence)**
- Topic: [derived from this week's Outlier topic category]
- Title formula: [winning formula from this week]
- Target length: [based on Outlier length data]
- Thumbnail style: [winning style from this week]
- Confidence basis: [Outlier title from this week that proves this combination works]

**Video 2**
- Topic: [second-highest confidence topic from yt-attack-list]
- Title formula: [second-most successful formula]
- [...]

**Video 3**
[...]

### Topics to deprioritise:
[List topic categories that underperformed this week — move these from Priority 1 to Priority 3 in yt-content-calendar.md]

### Script focus for this week:
[1 specific instruction based on the retention data — e.g., "Hooks need more specificity — open with a number or a named result, not a question"]

### Thumbnail focus for this week:
[1 specific instruction based on CTR data]
```

## Step 8. Update yt-content-calendar.md

Automatically update the content calendar:

1. Move underperforming topic categories from Priority 1 slots to later dates or remove entirely
2. Add Video 1 and Video 2 from the action plan to the next available slots
3. Mark the week's Outlier topic category with a ★ flag to indicate algorithm-proven demand
4. Add a note to the week's entry: `[Performance loop run: [date] | Top: [title] [score] | Bottom: [title] [score]]`

If `yt-content-calendar.md` does not exist, create it with the next 7 days pre-filled from the action plan.

## Step 9. Cross-reference the Attack List

Compare this week's winning topic category against the most recent `yt-attack-list-*.md`:

- If the winning topic is already in Priority 1 of the attack list: **signal is confirmed — double down**
- If the winning topic is in Priority 2 or 3: **upgrade it to Priority 1 in the next attack list run**
- If the winning topic is NOT in the attack list: **update the attack list manually — the algorithm is surfacing demand the scanner missed**

Output a 2-sentence summary of the cross-reference finding.

## Step 10. Deliver the complete report

Save the full performance report as:
`yt-performance-report-[YYYY-MM-DD].md` in the project root.

Also produce a one-line Slack/WhatsApp-style update:

> "Week [date] review done. Top video: '[title]' ([score]). Winning formula: [formula]. Next 7 days: [Video 1 topic]. Content calendar updated. [X] underperformers diagnosed."

## Rules

- Never guess analytics data. If the user hasn't provided a metric, ask for it before scoring.
- The Performance Score formula is fixed — do not round scores up to make underperformers look better.
- The "Immediate Actions" section must always include at least one specific thumbnail swap instruction if any video has a CTR under 2%.
- Pattern Intelligence is mandatory. Never skip it. This is the mechanism that compounds channel growth.
- If fewer than 3 videos are available to analyse, say so and note that patterns are directional only — not statistically reliable until 10+ videos are in the dataset.
- Save the report before delivering. Never just output to chat.
- After delivering, offer: "Run `/yt-outlier-hunter` to refresh the topic attack list and align next week's content with what the algorithm is currently pushing."
