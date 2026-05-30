---
name: yt-script-writer
description: >
  Write a full, production-ready YouTube video script using patterns learned from competitor research, channel voice, and niche-specific best practices. Goes beyond surface-level scripting — crafts hooks that stop the scroll, body sections that retain viewers past the 30% drop-off point, and CTAs that convert. Use when the user says "write a YouTube script", "script this video", "write a script for [topic]", or has a video topic ready and wants a full script. Reads yt-competitor-analysis.md and voice.md automatically if they exist. Zero cost.
origin: alfred-yt-division
---

# YT Script Writer

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## Step 1. Load context files

Before asking anything, silently check:
- `yt-competitor-analysis.md` — load the hook formulas, title formulas, script structures, and optimal video length
- `voice.md` — load the channel's voice profile
- `about-me.md` — load creator background and audience
- `yt-niche-scout-report.md` — load niche context

If none exist, proceed and ask for the topic. Note which files are missing at the end of the session.

## Step 2. Get the video brief

Call AskUserQuestion:

```json
[
  {
    "question": "What is this video about?",
    "header": "Topic",
    "multiSelect": false,
    "options": [
      {"label": "I will type the topic", "description": "Give me the topic, angle, and target viewer"},
      {"label": "Use competitor gap", "description": "Pick a content gap from the competitor analysis"},
      {"label": "Use content calendar", "description": "Pull the next video from yt-content-calendar.md"}
    ]
  },
  {
    "question": "What is the target viewer's core problem or desire?",
    "header": "Viewer pain",
    "multiSelect": false,
    "options": [
      {"label": "They want a result fast", "description": "Tactical, step-by-step — get X in Y days"},
      {"label": "They want to understand something", "description": "Educational explainer — why X works"},
      {"label": "They are skeptical", "description": "Myth-busting — why everyone is wrong about X"},
      {"label": "They are inspired but stuck", "description": "Motivational with proof — how I went from X to Y"}
    ]
  },
  {
    "question": "What is the ONE takeaway the viewer should leave with?",
    "header": "Core message",
    "multiSelect": false,
    "options": [
      {"label": "I will type it", "description": "Describe the single thing they should remember"},
      {"label": "Derive it from the topic", "description": "You figure it out based on the topic"}
    ]
  }
]
```

## Step 3. Research the topic

Before writing, spend 5 minutes on research:

Search: `"[topic]" tutorial best method 2024 2025`
Search: `"[topic]" common mistakes beginners`
Search: `"[topic]" what nobody tells you`

Extract: 3 to 5 surprising, specific facts or insights that most people in this niche do not know. These become the "value spine" of the script — the reason someone would watch this video instead of a competitor's.

## Step 4. Generate 3 hook options

Write 3 completely different hooks for the same video. Each must be under 30 seconds when read aloud (roughly 75 words max).

Apply these hook formulas (pull from yt-competitor-analysis.md if available, otherwise use these defaults):

**Hook Type A — The Bold Claim**
Open with a single, specific, surprising statement. Do not start with "I." Do not explain it immediately. Let it breathe for 2 seconds. Then say "here's why."
Example format: "[Specific counterintuitive claim]. Most people doing [thing] have no idea this is happening. Here's what it means for you."

**Hook Type B — The Curiosity Gap**
State what the viewer will know by the end, but not how. Create a gap between where they are and where they will be.
Example format: "By the end of this video, you will [result]. And it is not what you think."

**Hook Type C — The Story Open**
30-second micro-story in past tense. Specific time, specific moment, specific stakes.
Example format: "Six months ago I [specific situation]. [Problem]. [What I did]. [What happened]. Here's what I learned."

Present all 3 to the user. Let them pick.

## Step 5. Write the full script

Using the chosen hook, write the complete script. Follow this structure:

### Section 1: Hook (0:00–0:30)
[Chosen hook, word for word]

### Section 2: Channel Intro / Credibility (0:30–0:45)
One sentence max. Why should they trust you on this topic?
Never say "welcome back" or "don't forget to subscribe" here — save it for the end.

### Section 3: What You Will Cover (0:45–1:00)
Tease 2 to 3 points without revealing the full answer. Create micro-suspense.
"We will cover X, Y, and the one thing I wish someone had told me at the start."

### Section 4: Main Content (1:00–[target length minus 2 minutes])
Break into 2 to 4 named sections based on optimal video length:
- Videos under 10 minutes: 2 to 3 sections
- Videos 10 to 20 minutes: 3 to 4 sections
- Videos over 20 minutes: 4 to 5 sections

Each section must:
- Open with a single bold statement (the "point")
- Support with 1 to 2 specific examples, data points, or stories
- End with a micro-CTA or transition that pulls into the next section

**Retention technique (mandatory):** Place a pattern interrupt every 2 to 3 minutes. Options: a B-roll suggestion, a question to the viewer, a shocking statistic, or a "by the way" tangent that pays off later.

### Section 5: The Re-engagement Hook (at 30% mark)
Research shows most viewers drop off at 30% of the video. Insert a "but here's the thing you need to know first" moment at exactly this timestamp to pull them back.

### Section 6: CTA (last 60 seconds)
Structure:
1. Summary: "So here's what we covered today..." (2 to 3 sentences)
2. Free resource offer: "If you want [deeper version of this], I have a [free thing] linked below"
3. Subscribe ask (only once, with a reason): "If this was useful, subscribe — I post [X] every [day]"
4. Next video tease: "[Next video title/topic] comes out [day]. You will not want to miss it."

## Step 6. Add production notes

After the script, add a production section:

```markdown
## Production Notes

**Target length:** [X–X minutes — based on niche research]
**Estimated word count:** [X words at 130 words/minute speaking pace]
**Talking head moments:** [list timestamps where face on camera is needed]
**B-roll suggestions:** [list 4–6 specific visual suggestions with timestamps]
**On-screen text:** [list key phrases that should appear as text overlays]
**Chapter markers:** [YouTube chapter timestamps based on script sections]
**Thumbnail concept:** [brief description — run /yt-thumbnail-gen for full execution]
**Title options:** [run /yt-title-optimizer for 10 variants]
```

## Step 7. QA gate

Score the script on these criteria before delivering:

| Criterion | Check |
|---|---|
| Hook does not open with "I" | Yes / No |
| Hook under 75 words | Yes / No |
| Value spine has 3+ specific facts | Yes / No |
| Re-engagement hook at 30% mark | Yes / No |
| No "welcome back" in first 45 seconds | Yes / No |
| Subscribe ask appears once only | Yes / No |
| Script matches voice.md tone | Yes / No |
| Script length matches niche research | Yes / No |

Minimum 7/8 before delivery. Fix any failures and re-score.

Save the final script to `scripts/[video-slug].md` in the project.

## Rules

- The re-engagement hook at the 30% mark is mandatory. Never skip it.
- Never write "in this video I will." Always show, don't tell.
- Specific beats generic: "I went from 0 to 10,000 subscribers in 47 days" beats "I grew my channel fast."
- Always pull from yt-competitor-analysis.md if it exists. Do not default to generic script advice if real data is available.
- Save output to the scripts/ folder. Never just output to chat without saving.
- After script is delivered, offer: "Run `/yt-title-optimizer` for title variants and `/yt-thumbnail-gen` for the thumbnail."
