---
name: yt-competitor-analyst
description: >
  Deep-dive analysis of YouTube competitor channels. Extracts upload frequency, average video length, hook patterns, title formulas, thumbnail styles, scripting structure, and monetization signals by pulling transcripts and studying their top-performing videos. Use when the user says "analyze this YouTube channel", "competitor research", "learn from this channel", pastes a YouTube channel URL or video URL, or wants to reverse-engineer a successful channel's strategy. Produces a full strategy playbook the channel can use to model success. Zero cost — uses youtube-transcript MCP, duckduckgo, and open-websearch only.
origin: alfred-yt-division
---

# YT Competitor Analyst

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## Step 1. Gather channel inputs

If the user has already pasted YouTube URLs in chat, use those. Otherwise ask:

> Paste 1 to 5 YouTube channel URLs or video URLs you want me to reverse-engineer. These should be channels in your niche that are performing well — either big established channels or fast-growing newer ones.

Also check if `yt-niche-scout-report.md` exists in the project — if it does, read the "Top channels to study" sections and pre-fill the channel suggestions.

## Step 2. For each channel, extract surface data

Use open-websearch and duckduckgo to search: `site:youtube.com "[channel name]" subscribers views`

Extract from search results:
- Subscriber count
- Approximate total views
- Upload frequency (videos per week or month)
- Channel age
- Niche / content category

## Step 3. Find top 10 performing videos

Search: `"[channel name]" YouTube most viewed videos 2024 2025`

Or use agent-browser to navigate to their channel's Videos tab sorted by "Most Popular."

For each of the top 10 videos, collect:
- Title (exact)
- View count
- Publish date
- Video length
- Thumbnail description (what is shown: face, text, colours, style)

## Step 4. Pull transcripts of top 5 videos

Use the `youtube-transcript` MCP tool on the top 5 performing videos by view count.

For each transcript:

### 4a. Hook analysis (first 30 seconds)
- Exact words of the opening line
- What makes it stop the scroll? (curiosity gap, bold claim, question, statistic, story)
- Time until the creator states the video's core value proposition
- Is there a "pattern interrupt" or cold open?

### 4b. Script structure
- Total length (minutes)
- Act breakdown: [0:00–X:XX intro] [X:XX–Y:YY body section 1] etc.
- How many main points or sections?
- Use of B-roll vs talking head (infer from transcript cues)
- Where does the CTA appear? (mid-roll, end, or multiple)

### 4c. Language patterns
- Average sentence length (short/punchy vs long/explanatory)
- You/your vs I/me ratio
- Tone (educational, entertaining, opinionated, conversational)
- Signature phrases or recurring vocabulary
- How they handle transitions between sections

### 4d. Title formula
- Extract the formula: [Number] + [Result] + [Timeframe/Qualifier]?
- Power words used (secret, never, always, warning, shocking)
- Question titles vs statement titles vs how-to titles
- Average title word count

### 4e. Thumbnail pattern
- Face present? Emotion? (shock, smile, serious, pointing)
- Text overlay: word count, capitalization, color
- Background style (plain, branded, scene)
- Color palette
- Object/prop usage

## Step 5. Upload frequency and video length research

Calculate:
- Average videos per week across the last 6 months
- Average video length across top 10 videos
- Best performing video length (do shorter or longer videos get more views?)
- Shorts usage: do they post Shorts? What % of uploads?
- Day-of-week pattern (do they always upload on specific days?)

## Step 6. Monetization signals

Search: `"[channel name]" sponsor affiliate course merch`

Look for:
- Pinned affiliate links in video descriptions
- Sponsor mentions (which brands, what category)
- Course or coaching product
- Merchandise
- Email list / newsletter CTA
- Community membership

Estimate: How many revenue streams does this channel have?

## Step 7. Growth trajectory

Search: `"[channel name]" subscriber growth 2023 2024 2025`

- When did the channel start growing fast?
- What video or strategy change caused the inflection point?
- What is their growth rate per month approximately?

## Step 8. Produce the competitor playbook

Output one analysis per channel in this format:

```markdown
# Competitor Analysis: [Channel Name]

## At a Glance
- **Subscribers:** ~Xk / Xm
- **Upload frequency:** X videos/week
- **Average video length:** X–X minutes
- **Shorts:** Yes/No — X% of content
- **Channel age:** X years
- **Estimated monthly views:** Xm

## What's Working

### Hook Formula
[Describe the specific hook pattern used across their top videos with examples]

### Title Formula
[Template: e.g. "How I [Result] in [Timeframe] (Without [Common Objection])"]
Example titles:
- "[exact title from top video]"
- "[exact title from top video]"
- "[exact title from top video]"

### Script Structure
[Exact breakdown: intro length, act structure, CTA placement]

### Thumbnail Formula
[Description: face emotion + text pattern + color + style]

### Language Style
[Tone, sentence length, signature phrases]

## Top 5 Videos (by views)
| # | Title | Views | Length | Why it worked |
|---|-------|-------|--------|---------------|
| 1 | [title] | Xm | Xm Xs | [1 sentence] |
...

## Monetization
[List all detected revenue streams]

## What a New Channel Can Steal
1. [Specific, actionable technique #1]
2. [Specific, actionable technique #2]
3. [Specific, actionable technique #3]
4. [Specific, actionable technique #4]
5. [Specific, actionable technique #5]

## What to Avoid (their weaknesses or what stopped working)
[1–2 honest observations about gaps or declining performance]
```

## Step 9. Cross-channel synthesis

After analyzing all submitted channels, produce a synthesis section:

```markdown
# Cross-Channel Strategy Synthesis

## Content Gaps Nobody Is Filling
[Topics that get high search volume but aren't well covered by these channels]

## The Winning Hook Formulas Across All Channels
[Top 3 hook types that appear in the most-viewed videos]

## Optimal Video Specs for This Niche
- **Length:** X–X minutes (based on top performers across all channels)
- **Upload cadence:** X per week (minimum to compete)
- **Shorts:** [Yes/No and why, with data]
- **Best day to post:** [if pattern detected]

## Title Formula Cheat Sheet
[5 proven title templates extracted from combined analysis]

## Thumbnail Formula
[The visual pattern that dominates this niche's top content]

## Fastest Path to Views for a New Channel
[3–5 specific recommendations based on all research]
```

Save the full output to `yt-competitor-analysis.md` in the project root.

## Rules

- Pull at least 3 transcripts per channel minimum. If a transcript is unavailable, note it and move on.
- Never fabricate view counts or subscriber numbers. Use search estimates and say "approximately."
- Title formulas must be backed by actual examples from the transcripts.
- Always produce the cross-channel synthesis — it is the most valuable output.
- Zero cost only: youtube-transcript, duckduckgo, open-websearch, agent-browser.
- After completing, prompt: "Run `/yt-script-writer` to write your first video using these patterns."
