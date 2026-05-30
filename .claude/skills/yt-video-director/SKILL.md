---
name: yt-video-director
description: >
  Produce a complete video production brief covering editing style, pacing, b-roll strategy, transitions, on-screen graphics, optimal video length for the niche, chapter structure, and visual identity — so the editor (human or AI) can execute without back-and-forth. Use when the user says "how should I edit this video", "production brief", "editing directions", "how long should my videos be", "what editing style should I use", or has a script ready and wants to know how to film and edit it. Reads yt-competitor-analysis.md and the video script automatically. Zero cost.
origin: alfred-yt-division
---

# YT Video Director

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## Step 1. Load context

Silently check:
- `yt-competitor-analysis.md` — load editing style observations, pacing patterns, video length data
- `scripts/[most recent].md` — load the script to brief against
- `voice.md` — tone and persona
- `brand-kit.md` — colors and visual identity if it exists

If a script path is not obvious, ask: "Which script is this production brief for? Share the filename or paste the script."

## Step 2. Research niche-specific editing standards

Search: `"[niche]" YouTube editing style pacing cuts per minute`
Search: `best video length "[niche]" YouTube 2024 2025 retention`
Search: `"[niche]" YouTube video production behind the scenes`

Extract:
- Average cuts per minute in top-performing videos
- B-roll to talking head ratio (e.g., 60% talking head / 40% b-roll)
- Text overlay style (minimal, heavy, meme-style, clean)
- Music usage (background only, no music, prominent)
- Graphics style (minimal, motion graphics, lower thirds, animated stats)

## Step 3. Determine optimal video length

**Methodology:**
1. Pull length data from `yt-competitor-analysis.md` if available
2. Check if the niche skews toward long-form (tutorials, documentaries) or short-form (news, entertainment, motivation)
3. Apply the retention math: the script's speaking pace at 130 words/minute × word count = raw duration
4. Compare raw duration to niche benchmark
5. Recommend a target duration with a trim strategy if the raw is too long

**Decision rules by niche type:**

| Niche type | Optimal length | Reasoning |
|---|---|---|
| Tutorial / How-to | 8–15 min | Long enough for depth, short enough to retain |
| Finance / Business | 10–20 min | High-intent viewer, tolerates length for value |
| Entertainment / Commentary | 5–12 min | Pacing matters more than depth |
| Documentary / Story | 15–30 min | Viewer expects a journey |
| Narration / Faceless (AI) | **30–60 min** | Higher RPM, more mid-roll ad slots, viewer expects immersive content |
| Tech review | 8–15 min | Benchmark + comparison content |
| Motivational / Self-help | 6–12 min | Attention shorter, emotional peaks needed |
| Shorts-focused | 30–60 sec | Algorithm-driven, separate strategy |

**RPM note for faceless channels (from Leo Grundström's system):**
Longer videos (30–60 minutes) earn significantly more per 1,000 views because YouTube can place more mid-roll ads. In narration niches (animal stories, history, true crime, stoic content), a 45-minute video can earn 3–5× the RPM of a 10-minute video on the same topic. If the niche supports it, **default to 30+ minutes**.

Output a clear recommendation: "[X–Y minutes is the target for this niche. Your script is [Z] minutes raw. [Keep / trim / expand X section]."

## Step 4. Write the full production brief

Output in this format:

```markdown
# Production Brief: [Video Title]

## Overview
- **Script:** [filename]
- **Target length:** X–X minutes
- **Filming style:** [Talking head / Screen recording / Hybrid / AI avatar]
- **Tone:** [Energetic / Calm / Authoritative / Conversational]

---

## Filming Setup

### Camera
[Recommended framing: eye-level, centered. Specific tips for this niche. E.g. "Finance channels use a tight crop — face takes 60% of frame. No wide shots."]

### Background
[Branded setup or clean wall? What the competition uses. What fits the niche tone.]

### Lighting
[Simple 3-point recommendation or ring light if budget is zero]

### Audio
[Lav mic or on-camera mic. Silence-check process. Background music level: X dB under voice]

---

## Leo Grundström's Exact CapCut Workflow (Recommended for Faceless Channels)

This is the proven workflow for producing 4–6 videos per week with zero editing experience. Follow in this exact order:

**Step 1 — Upload the voiceover first**
Import the Minimax voiceover MP3 to CapCut. This becomes the timeline foundation. Everything else syncs to the audio, not the other way around.

**Step 2 — Drag in footage in script order**
Pull stock clips from Pixabay in the order they appear in the script. Match visuals to what the script is describing at each moment. Do not use the same clip for more than 4–5 seconds.

**Step 3 — Apply transitions to all clips at once**
Select all clips → apply "Dissolve" transition uniformly. Do not use wipe or zoom transitions — they look low-budget. Consistent dissolves create a clean, professional feel.

**Step 4 — Add overlay effects**
Add light leaks or film grain overlay at 20–30% opacity. This adds visual texture and makes AI-generated footage look more produced. It also breaks the "flat" look that Gemini flags as static.

**Step 5 — Background music**
Add background music from CapCut's free library or Epidemic Sound. Match the mood to the content. Set audio level 15–20 dB below the voiceover — the viewer shouldn't notice the music, only feel it.

**Step 6 — Auto-captions**
Use CapCut's auto-caption feature. Review and fix errors. Bold key words. Captions increase retention by keeping viewers engaged when they're watching without sound.

**Step 7 — Export**
1080p, H.264. Target file size under 4GB.

**Cadence target: 4–6 videos per week.** At this rate, one editor can batch-produce using this workflow in 2–3 hours per video. Prioritise this speed — a video posted consistently beats a perfect video posted occasionally.

---

## Editing Pacing

### Cut Frequency
- **Target:** 1 visual change every 4–5 seconds (minimum) — YouTube Gemini flags static visuals as low-effort
- **Rule:** Cut on energy, not on clock. Every cut must serve a reason.
- **Jump cuts:** Allowed for faceless channels — the voiceover provides continuity
- **Anti-slop rule:** If the same image appears on screen for more than 8 seconds, cut it

### Talking Head Segments (if face on camera)
- Keep unbroken talking head runs under 30 seconds before inserting b-roll or text
- Zoom in 5–10% at high-energy moments for emphasis
- Use J-cuts (audio leads video) at section transitions

### B-Roll Strategy
- **Primary source (zero cost):** Pixabay — search the specific concept from each script section
- **AI-generated footage (zero cost):** Google Gemini generates 3 free AI video clips per day. Use these when stock footage doesn't match the script precisely — especially for abstract concepts, futuristic visuals, or custom scenes
- **Ratio for faceless channels:** 80–100% b-roll / 0–20% AI avatar or talking head
- **Ratio for face-on-camera:** 60% talking head / 40% b-roll
- **B-roll timing:** New clip every 4–5 seconds. No exceptions.
- **Additional free sources:** Pexels, Unsplash video, screen recordings of tools/software, CapCut's built-in stock materials tab
- **Specific b-roll suggestions by script section:**

| Script timestamp | B-roll suggestion |
|---|---|
| [0:00–0:30] | [specific visual] |
| [X:XX–X:XX] | [specific visual] |
...

---

## On-Screen Text and Graphics

### Lower Thirds
[When to use, style: font weight, color, position. Match brand-kit.md if exists]

### Key Stat Callouts
[Bold number overlays at data moments. Duration on screen: X seconds]

### Chapter Title Cards
[Between major sections — style and timing]

### Progress Bar / Chapters
[Use YouTube chapters — timestamps from script]

### Annotations / Arrows
[When pointing to something on screen]

---

## Thumbnail Alignment
[Brief description of what the thumbnail should show to match the video's energy. Run /yt-thumbnail-gen for full execution]

---

## Music

### Background Track
- **Style:** [Upbeat / Chill / Dramatic / None]
- **Volume:** 15–20 dB under voice (listener should not notice music, only feel it)
- **Sources (zero cost):** YouTube Audio Library, Pixabay Music, Free Music Archive
- **Specific recommendations:** [3 track style suggestions with keywords to search]

### Sound Effects
[Whoosh on cuts? Hit sounds on text pop-ins? Depends on niche energy — specify yes/no]

---

## Intro / Outro

### Intro (first 5 seconds)
[NO long intros. Jump straight to hook. If any brand animation: under 2 seconds]

### Outro (last 20–30 seconds)
[End screen layout: subscribe button left, next video right. Specific talk-to-camera outro script]

---

## Quality Checklist Before Export

### Production Quality
- [ ] Audio levels consistent throughout (target: -12 to -6 dB peaks)
- [ ] No dead air longer than 0.5 seconds
- [ ] All filler words (um, uh, like) removed
- [ ] Captions/subtitles added (auto-generated then reviewed)
- [ ] Thumbnail saved as 1280×720 JPG
- [ ] End screen elements placed in last 20 seconds
- [ ] Chapter timestamps written and ready to paste
- [ ] Export: 1080p H.264, target file size under 4GB

### Anti-Gemini-Demonetization Checklist (MANDATORY — 2026)
YouTube now uses Google Gemini to scan every video. Channels posting low-effort AI content are being demonetized. Check all of these before uploading:

- [ ] **No static visuals** — No image stays on screen for 8+ seconds without a cut or motion
- [ ] **Visual variety** — At least 3 different visual sources used (e.g., stock footage + screen recording + text overlay)
- [ ] **Branded channel feel** — Thumbnails, text overlays, and color scheme are consistent across videos
- [ ] **Genuine value check** — Would a human editor be proud to put their name on this? If it's just text-to-speech over random stock footage, it will be flagged
- [ ] **Overlay effects applied** — Light leak or film grain overlay added (breaks the "flat AI" look)
- [ ] **Unique angle confirmed** — This video covers the topic from an angle that is different from the top 3 competitors (even slightly)
- [ ] **Captions reviewed** — Auto-captions corrected for accuracy (Gemini can read them)
- [ ] **Music not copyright-flagged** — Only use YouTube Audio Library, CapCut free library, or Pixabay Music

---

## Upload Settings

### Title
[Run /yt-title-optimizer — paste winner here]

### Description (template)
```
[First 2 lines visible without expanding — must contain the hook and primary keyword]

In this video: 
- [Bullet 1]
- [Bullet 2]
- [Bullet 3]

FREE RESOURCES:
[Link to lead magnet or affiliate product]

CHAPTERS:
[Paste timestamps]

CONNECT:
[Social links]
```

### Tags
[Niche keyword, long-tail keywords, channel name, related topics — max 500 characters]

### Thumbnail
[Run /yt-thumbnail-gen]
```

## Step 5. AI/Free editing tool recommendations

If the user is editing without a professional editor:

**Zero-cost editing options:**
- **CapCut** — free, auto-captions, b-roll templates
- **DaVinci Resolve** — free, professional-grade, steep learning curve
- **Clipchamp** — free, browser-based, Windows integrated

**AI editing shortcuts:**
- **Descript** (freemium) — edit video by editing the transcript
- **Adobe Podcast** (free) — remove background noise
- **Minimax** (freemium) — voice clone for re-recording flubs without re-filming

## Rules

- Video length recommendation must be backed by niche research data, not opinion.
- B-roll suggestions must be specific to the script's content — never generic "b-roll of hands typing."
- Always include the quality checklist. Never skip it.
- If no brand-kit.md exists, recommend a 2-color palette based on niche conventions and note it needs a proper brand kit.
- After delivering the brief, offer: "Run `/yt-thumbnail-gen` for the thumbnail or `/yt-title-optimizer` for title variants."
