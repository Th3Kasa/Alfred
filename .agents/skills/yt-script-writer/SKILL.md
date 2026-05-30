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

## Step 3. Load competitor script structure — Claude Project Method

Before writing anything, check `competitor-transcripts/[niche]/style-guide.md` (produced by `/yt-competitor-analyst`). This is your architectural blueprint.

**The Claude Project setup (Leo Grundström's exact scripting system):**
For highest quality output, scripts should be generated inside a **Claude Project** with competitor transcripts loaded as reference documents — not a regular chat:
1. Open Claude → Create a new Project
2. Upload the `.txt` transcripts from `competitor-transcripts/[channel-name]/` as Project files
3. In the Project, prompt: *"I'm setting up this Project to write YouTube scripts for my [niche] channel. I've uploaded transcripts from top competitors as style references. When I give you a topic, write a full script that matches the hook structure, pacing, tone, and section architecture of these examples — but with completely original content."*
4. From this point, generate scripts within the Project: "Write a script on [TOPIC]"
5. Claude will match the proven competitor style automatically

**If generating scripts in a regular chat:** Paste the style-guide from `competitor-transcripts/[channel-name]/style-guide.md` as context before prompting.

**The "Copy the Structure, Not the Words" rule:**
- Take the competitor's EXACT script architecture (intro length, section count, CTA placement, transition phrases)
- Fill the skeleton with original content, research, and the channel's own angle
- Never copy sentences — only the architectural pattern

Target: **Script generated in 30 seconds, edited in 15–20 minutes.** Full scripting time: under 30 minutes per video. At 4–6 videos/week, spending more than this is not viable.

**The Human Edit step (mandatory — do not skip):**
After Claude generates the script, read through it and:
- Fix any robotic-sounding phrases
- Add at least one specific data point or number that came from research (not invented)
- Adjust any lines that sound identical to competitor content
This step is what separates monetizable content from content Gemini flags as "interchangeable."

## Step 4. Research the topic

Before writing, spend 5 minutes max on research:

Search: `"[topic]" best method 2025 2026`
Search: `"[topic]" common mistakes`
Search: `"[topic]" what nobody tells you`

Extract: 3 to 5 surprising, specific facts or insights that most people in this niche do not know. These become the "value spine" of the script — the reason someone would watch this video instead of a competitor's.

**Efficiency rule:** Research and scripting combined should take under 30 minutes per video. At 4–6 videos/week, spending 2 hours per script is not viable. Use AI aggressively.

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
**Visual change rate:** Every script section must cue a new visual — minimum 1 visual change every 4–5 seconds (YouTube Gemini flags static visuals as low-effort)
**B-roll suggestions:** [list 4–6 specific visual suggestions with timestamps — from Pixabay]
**On-screen text:** [list key phrases that should appear as text overlays]
**Chapter markers:** [YouTube chapter timestamps based on script sections]
**Thumbnail concept:** [brief description — run /yt-thumbnail-gen for full execution]
**Title options:** [run /yt-title-optimizer for 10 variants]
**ElevenLabs voice note:** [any specific pacing, emphasis, or tone directions for the voiceover]
```

## Step 7. Anti-slop QA gate

YouTube now uses Google Gemini to scan every video for low-effort AI content. Score the script on these criteria before delivering:

| Criterion | Check |
|---|---|
| Hook does not open with "I" | Yes / No |
| Hook under 75 words | Yes / No |
| Value spine has 3+ specific facts (not generic advice) | Yes / No |
| Re-engagement hook at 30% mark | Yes / No |
| No "welcome back" in first 45 seconds | Yes / No |
| Subscribe ask appears once only | Yes / No |
| Script matches competitor's proven structure (from yt-competitor-analysis.md) | Yes / No |
| Script length matches niche research | Yes / No |
| Each paragraph cues a different visual (no section runs 30+ seconds without new footage) | Yes / No |
| Script has a unique angle — not a word-for-word copy of any competitor | Yes / No |

Minimum 9/10 before delivery. Fix any failures and re-score.

**The Human Touch rule:** Before delivering, add one of these personal elements that AI alone wouldn't generate:
- A specific data point from recent research (not generic "studies show")
- A counterintuitive angle ("everyone says X but actually Y")
- A concrete example with real numbers
This is what separates monetizable content from content Gemini flags as slop.

Save the final script to `scripts/[video-slug].md` in the project.

## Rules

- The re-engagement hook at the 30% mark is mandatory. Never skip it.
- Never write "in this video I will." Always show, don't tell.
- Specific beats generic: "I went from 0 to 10,000 subscribers in 47 days" beats "I grew my channel fast."
- Always pull from yt-competitor-analysis.md if it exists. Do not default to generic script advice if real data is available.
- Save output to the scripts/ folder. Never just output to chat without saving.
- After script is delivered, offer: "Run `/yt-title-optimizer` for title variants and `/yt-thumbnail-gen` for the thumbnail."
