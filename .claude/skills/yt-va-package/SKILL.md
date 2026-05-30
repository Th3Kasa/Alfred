---
name: yt-va-package
description: >
  Generates a complete, self-contained VA production brief for a single video — covering ElevenLabs voiceover formatting, exact Pixabay b-roll search terms with clip durations, Canva thumbnail brief, CapCut timeline guide, and a fully pre-filled upload checklist. The VA executes the entire production without asking a single question. Use when the user says "create VA brief", "production brief", "brief for the editor", "send to VA", or when a script has been written and needs to move into production. Reads the script file automatically. Zero cost.
origin: alfred-yt-division
---

# YT VA Package

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## What this agent does

Leo Grundström's system tells you to "hire VAs from Upwork and train them." This agent does the training — every time, for every video, automatically.

A complete VA Package contains everything a production VA needs to take a script to a published video with zero back-and-forth. The human's only job is to approve the final video before upload.

## Step 1. Load the script

Check for the most recent script in `scripts/`. If none exists or the user specifies a different script, ask: "Which script is this brief for? Share the filename or paste it here."

Read the entire script before proceeding. Every section of the brief is derived from the script content.

Also check:
- `brand-kit.md` → channel colours, font, visual style
- `voice.md` → tone and persona
- `yt-competitor-analysis.md` → thumbnail formula for this niche

## Step 2. Generate the ElevenLabs Voiceover Brief

The voiceover is the timeline foundation of the video. This brief formats the script so a VA can paste it into ElevenLabs and produce the audio without any editing judgment.

**Character budget check (run before generating the brief):**

Count the script word count. Multiply by 6 to estimate character count (average word = ~6 characters including spaces).

| Script words | Est. characters | Free tier status |
|---|---|---|
| Under 1,500 words | Under 9,000 chars | ✓ Safe on free tier (10K limit) |
| 1,500–2,000 words | 9,000–12,000 chars | ⚠ May exceed free tier |
| Over 2,000 words | Over 12,000 chars | ✗ Exceeds free tier — use workaround below |

**If the script exceeds the free tier (most long-form scripts will):**

Choose one workaround — list in order of preference:

**Workaround 1 — ElevenLabs Starter (Recommended — ~$11 AUD/month)**
30,000 characters/month + commercial licence. Covers 3–4 full long-form scripts per month. This is the single best first investment for the channel — prioritise before any other paid tool. At the first $50 of channel revenue, activate this.

**Workaround 2 — Priority queue (free)**
Generate only the high-value sections in ElevenLabs (Attention hook + all Explore Twists + X-change). Generate the lower-intensity narration sections (Proof section, transitions between Explore points) in TTSMaker.com (free, unlimited, 100+ voices). Splice the two audio sources in CapCut. Match the voice as closely as possible by selecting the same gender/accent profile in TTSMaker.

**Workaround 3 — TTSMaker.com as primary (free, unlimited)**
Use TTSMaker.com for the entire script. Voice quality is slightly below ElevenLabs but has no character limit. Best voices: "Neural" voices with similar tone to your ElevenLabs selection. This is acceptable for the first 10 videos while revenue builds.

**Workaround 4 — Batch across multiple free accounts (free)**
ElevenLabs allows one free account per email address. Generate the first half of the script on account A, the second half on account B. Splice in CapCut. Ensure the same voice is selected on both accounts for consistency.

Include the chosen workaround in Section 1 of the brief so the VA knows exactly what to do.

```markdown
# BRIEF SECTION 1: VOICEOVER

## Character Budget
- Script word count: [X words]
- Estimated characters: [X × 6 = Y chars]
- Free tier status: [Safe / May exceed / Exceeds]
- Workaround if needed: [Workaround 1 / 2 / 3 / 4 — with specific instructions]

## ElevenLabs Settings
- Voice: [AI voice name — choose one suited to the niche tone]
  - Education/tutorial niches: calm, clear, authoritative
  - Motivational/stoic: deep, measured, deliberate
  - Entertainment/lists: upbeat, energetic, engaging
- Stability: 50%
- Clarity + Similarity Boost: 85%
- Style Exaggeration: 35%

## Script — Formatted for ElevenLabs

[Full script from scripts/[filename].md, reformatted with these markers:]
- [PAUSE] = 0.5 second pause (use after section transitions)
- [PAUSE-LONG] = 1.0 second pause (use after the hook statement)
- **bold** = emphasis (ElevenLabs reads this with more weight)
- — = natural pause beat (use mid-sentence for rhythm)

[Paste entire formatted script here]

## File naming
Save the exported MP3 as: `voiceover-[video-slug].mp3`
Upload to: project `audio/` folder

## Quality check before next step
- [ ] Voiceover sounds natural, not robotic
- [ ] No mispronounced words
- [ ] Pacing feels right for the niche (not too fast, not too slow)
- [ ] No background hiss or artefacts
If any check fails: regenerate the problem section only and splice in CapCut
```

## Step 3. Generate the B-Roll Brief

For every paragraph or logical unit in the script, provide the exact footage instructions. No editorial judgment required from the VA.

Parse the script into segments and for each one generate:

```markdown
# BRIEF SECTION 2: B-ROLL AND FOOTAGE

## Clip sourcing rules
- Primary source: Pixabay (pixabay.com/videos) — free, no attribution
- Secondary: CapCut built-in stock materials tab
- Supplementary: Google Gemini video generator (3 free AI clips/day at gemini.google.com)
- File format: MP4 preferred. Download highest available resolution.

## Clip duration rule
- Target: 3–5 seconds per clip
- Hard maximum: 8 seconds for a single clip before cutting to a new one
- If a clip is too short, trim or use slow motion at 0.7× speed

## Footage list (sync to voiceover)

| # | Script segment (first 8 words) | Pixabay search term | Clip length | Notes |
|---|---|---|---|---|
| 1 | [opening words of segment] | [exact search query] | 4 sec | [any specific visual note] |
| 2 | [opening words] | [search query] | 5 sec | |
...

[Generate one row per paragraph/segment of the script]

## Transition type
Use: Dissolve on all cuts. 0.3 seconds. No wipes, no zooms, no flash cuts.

## Overlay effects (apply to entire video in CapCut)
- Film grain overlay: 25% opacity (adds texture, breaks AI-flat look)
- Light leak: 20% opacity at start and end of major sections only

## Background music
- Mood: [derive from script tone — uplifting / dramatic / calm / mysterious]
- Search term for CapCut library: [specific search term e.g. "epic cinematic background"]
- Volume: Set audio level to -18dB (this is 15–20dB below voice)
- Fade in: 3 seconds. Fade out: 3 seconds at end.
```

## Step 4. Generate the Canva Thumbnail Brief

One self-contained thumbnail brief that a VA can execute in Canva in under 20 minutes.

```markdown
# BRIEF SECTION 3: THUMBNAIL

## Canva setup
1. Open Canva → New design → YouTube Thumbnail (1280×720px)
2. Set background to: [COLOR based on niche + brand-kit.md]

## Background image
- Pixabay search term: [specific term that matches the video topic]
- Image requirements: High contrast, no faces with mouths open (looks staged), clear subject
- Fit to full frame

## Image adjustments (MUST DO — do not skip)
- Vibrance: +60
- Saturation: +40
- Brightness: +10
- Contrast: +15
These numbers make the thumbnail pop on mobile at small size.

## Text overlay
- Text: "[THUMBNAIL TEXT — max 5 words derived from the title]"
- Font: Anton or Impact (search in Canva fonts)
- Size: Large enough to read on a phone screen (test by zooming out to 25%)
- Colour: [Contrasting to background — from brand-kit.md or WHITE if in doubt]
- Outline/shadow: Add black drop shadow at 60% opacity, 5px blur

## Text position
- [LEFT / RIGHT / CENTER — based on yt-competitor-analysis.md thumbnail formula]

## Sticker (if narration/documentary niche)
- Search in Canva stickers: "4K Ultra HD"
- Place in: bottom-left corner
- Size: Small (about 8% of frame width)
- This is a proven click-driver in narration niches — do not skip if applicable

## Download
- File: PNG format
- Name: `thumbnail-[video-slug]-v1.png`
- Upload to: project `thumbnails/` folder

## Produce 3 variants
- Variant A: Text on left
- Variant B: Text on right
- Variant C: Text centred, larger

Save all three. The upload brief will specify which to test first.
```

## Step 5. Generate the CapCut Editing Brief

A numbered, step-by-step CapCut guide the VA follows in order. No skipping, no reordering.

```markdown
# BRIEF SECTION 4: CAPCUT EDITING

## Do these steps in exact order

1. Create new project in CapCut
2. Import the voiceover MP3: `audio/voiceover-[video-slug].mp3`
   → This becomes the timeline foundation. Do not move it.
3. From the B-Roll Brief above, import clips in order — one per row in the footage list
4. Drag clips onto the timeline in script order, synced to the voiceover
5. Select all clips → right-click → Add transition → Dissolve → Duration: 0.3s
6. Add overlay: PFX/Effects → Overlay effects → Film grain → Opacity 25%
7. Add overlay: PFX/Effects → Light leaks → select subtle version → Opacity 20%
   Place light leaks ONLY at [list timestamps from script where new major sections begin]
8. Add background music:
   - Music tab → search "[music search term from b-roll brief]"
   - Add to timeline below voiceover
   - Set audio level to -18dB using the audio keyframe tool
   - Add 3-second fade-in at start
   - Add 3-second fade-out at end
9. Add auto-captions:
   - Text tab → Auto Captions → Generate
   - Review ALL captions — fix any mispronunciations or errors
   - Style: Bold font, white text, black outline, positioned bottom-centre
10. Export settings:
    - Resolution: 1080p
    - Frame rate: 24fps
    - Format: MP4
    - Quality: High
    - File name: `[video-slug]-final.mp4`

## Quality check before upload brief
- [ ] No clip runs longer than 8 seconds without a cut
- [ ] All captions are accurate
- [ ] Music cannot be heard over the voice
- [ ] Film grain overlay is present throughout
- [ ] Video length matches target: [X–X minutes from yt-video-director brief]
- [ ] Export file plays smoothly with no black frames or audio drops
```

## Step 6. Generate the Upload Brief

Everything pre-filled. The VA copies and pastes. Zero decisions required.

```markdown
# BRIEF SECTION 5: YOUTUBE UPLOAD

## File checklist before opening YouTube Studio
- [ ] Video file: `[video-slug]-final.mp4`
- [ ] Thumbnail: `thumbnails/thumbnail-[video-slug]-v1.png` (upload this first, test with v2 and v3)
- [ ] Script on hand for description

## Title
**Primary:** [Title winner from yt-title-optimizer — paste here]
**Backup (if A/B testing):** [Second-ranked title]

## Description
Copy-paste this exactly:

```
[First line: restate the video's core promise in 1 sentence — must contain the primary keyword]
[Second line: secondary keyword naturally embedded]

In this video:
• [Point 1 from script]
• [Point 2 from script]
• [Point 3 from script]

🔗 FREE RESOURCE: [Affiliate link or lead magnet URL]

⏱️ CHAPTERS:
[List timestamps from CapCut brief]

📩 [Optional: newsletter or community link]
```

## Tags
[primary keyword], [secondary keyword], [niche category], [channel name], [related topic 1], [related topic 2], [related topic 3]
*(keep total under 500 characters)*

## Thumbnail upload and A/B test
1. Upload Variant A as the default thumbnail
2. After upload, go to YouTube Studio → Content → click the video → Thumbnails → Test & Compare
3. Upload Variant B and Variant C
4. Leave running for 72 hours — YouTube will declare a winner automatically

## Scheduling
- Do not click Publish
- Click Schedule
- Set to: [Next available upload slot from content calendar — should be 8:00–9:00am AEST]
- Set visibility: Public

## Post-upload checklist
- [ ] Video scheduled (not published immediately)
- [ ] All 3 thumbnail variants loaded in Test & Compare
- [ ] Description includes chapters
- [ ] Tags added
- [ ] Notify human owner: "Video [slug] scheduled for [date] at 8am AEST. Ready for approval."
```

## Step 7. Assemble the full package

Bundle all 5 sections into one file:

Save as: `va-brief-[video-slug].md` in the project root.

Also produce a one-line Slack/WhatsApp-style VA notification message:

> "New brief ready: [video title]. Files: script ✓ / audio brief ✓ / b-roll list ✓ / Canva brief ✓ / CapCut steps ✓ / upload checklist ✓. Start with Section 1 (voiceover) and work top to bottom. Flag if any section is unclear before starting."

## Rules

- Every section must be self-contained. A VA with no prior knowledge of the channel should be able to execute Section 4 (CapCut) without reading Sections 1–3.
- Pixabay search terms must be specific to the script content — never generic ("mountain landscape" for a finance video is wrong).
- Thumbnail variants are mandatory — never deliver just one.
- The upload brief must have all fields pre-filled. No blanks.
- Save the package before delivering. Never just output to chat.
- After delivering, offer: "Run `/yt-performance-loop` after this video has been live for 7 days to measure performance and update the strategy."
