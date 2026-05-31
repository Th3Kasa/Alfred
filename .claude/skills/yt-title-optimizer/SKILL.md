---
name: yt-title-optimizer
description: >
  Generate 10 high-CTR YouTube title variants for a video, score each one, and recommend the winner based on click-through rate psychology, keyword research, and proven title formulas from the channel's competitor analysis. Use when the user says "write YouTube titles", "title for this video", "optimize this title", "title ideas", or wants to A/B test titles. Reads yt-competitor-analysis.md for niche-specific title patterns automatically. Zero cost — uses duckduckgo and open-websearch only.
origin: alfred-yt-division
---

# YT Title Optimizer

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## Step 1. Load context

Check:
- `yt-competitor-analysis.md` → extract title formula patterns and high-performing titles from competitors
- The video script or topic if one was provided

If the user has pasted a topic or script in chat, use it. Otherwise ask: "What is the video topic? Give me the angle and the main takeaway in 1 to 2 sentences."

## Step 2. Keyword research

Search: `"[video topic]" YouTube keyword volume` and `"[video topic]" how to [related intent]`
Search: `"[video topic]" most searched questions`

Identify:
- Primary keyword (highest volume, most relevant)
- 2 to 3 secondary keywords
- Search intent (how-to, informational, inspirational, review)
- Current top-ranking video titles for this topic

## Step 3. Generate 10 title variants

Write exactly 10 titles. Use a different formula for each one:

**Formula 1 — The Number List**
`[Number] [Things/Ways/Reasons] [To/That/Why] [Result/Problem]`
Example: "7 Reasons Your YouTube Channel Isn't Growing (Fix These Now)"

**Formula 2 — The How I**
`How I [Specific Result] in [Timeframe] ([Without/With] [Qualifier])`
Example: "How I Got 10,000 YouTube Subscribers in 60 Days Without Paid Ads"

**Formula 3 — The Warning**
`[Stop/Don't/Never] [Common Action] Until You [Do/Know/Watch] This`
Example: "Stop Making YouTube Videos Until You Watch This"

**Formula 4 — The Secret**
`The [Adjective] [Method/System/Strategy] [Authority/Top Channels] Use for [Result]`
Example: "The Exact System Top Finance YouTubers Use to Script Videos in 2 Hours"

**Formula 5 — The Truth**
`Why [Common Belief] Is Wrong (And What Actually [Works/Happens])`
Example: "Why Consistency Doesn't Grow YouTube Channels (And What Actually Does)"

**Formula 6 — The Beginner Hook**
`[Result] for Beginners: [Specific Method] That [Claim]`
Example: "YouTube Growth for Beginners: The Only Strategy That Actually Works in 2025"

**Formula 7 — The Case Study**
`I [Specific Action] for [Timeframe]. Here's What [Happened/I Learned]`
Example: "I Studied 100 Viral YouTube Videos. Here's What They All Have in Common"

**Formula 8 — The Comparison**
`[Option A] vs [Option B]: Which One [Wins/You Should Use/Is Better] in [Year]`
Example: "Shorts vs Long-Form: Which One Grows a YouTube Channel Faster in 2025"

**Formula 9 — The Qualifier**
`[Result] (Even If [Common Objection])`
Example: "How to Grow on YouTube (Even If You Have Zero Subscribers)"

**Formula 10 — Niche-specific formula from competitor analysis**
Pull the most successful formula from `yt-competitor-analysis.md` and apply it to this video's topic. Label it: "Competitor-proven formula."

## Step 4. Score each title

Score every title on 4 dimensions (1 to 10 each):

| Dimension | Description |
|---|---|
| **Curiosity** | Does it create a gap the viewer must close by watching? |
| **Clarity** | Does the viewer immediately know what they will learn? |
| **Keyword** | Does it contain the primary keyword naturally? |
| **Specificity** | Are there specific numbers, timeframes, or qualifiers? |

Total = Curiosity + Clarity + Keyword + Specificity (max 40)

## Step 5. Output the title report

```markdown
# Title Report: [Video Topic]

## Primary Keyword: [keyword]
## Secondary Keywords: [keyword 1], [keyword 2]

## Scored Titles

| # | Title | Curiosity | Clarity | Keyword | Specificity | **Total** |
|---|-------|-----------|---------|---------|-------------|-----------|
| 1 | [title] | x | x | x | x | **xx/40** |
...

## Top 3 Picks

### #1 Recommended — Score: xx/40
**Title:** [exact title]
**Why it wins:** [2–3 sentences on CTR psychology]
**A/B test against:** [Title #2 from the table]

### #2 Alternative — Score: xx/40
**Title:** [exact title]
**When to use:** [if the first doesn't get traction after X days]

### #3 Shorts-Friendly Version
**Title:** [shorter variant under 60 characters]
**Use for:** YouTube Shorts or if going with a curiosity-first thumbnail

## SEO Notes
- Primary keyword placement: [First 3 words / mid-title / end]
- Character count: [X chars — aim for 50–70 for desktop + mobile]
- Avoid in titles: clickbait with no payoff, all-caps, excessive punctuation

## Description Opening Lines
Write the first 2 lines of the video description (shown before "more" cutoff):
[Line 1 — restate the title's promise in sentence form]
[Line 2 — include a secondary keyword naturally]
```

## Rules

- Every formula must be distinct. No two titles should use the same structural approach.
- Never fabricate keyword volume numbers — label estimates as "estimated."
- The competitor-proven formula (Formula 10) must come from actual analysis, not a guess.
- Specificity beats vagueness every time. Push the user to add real numbers.
- If the user has a working title already, include it as Formula 0 and score it — so they see where it ranks.
- After delivering, offer: "Run `/yt-thumbnail-gen` with the winning title to create the thumbnail."
