---
name: yt-thumbnail-gen
description: >
  Design and generate a high-CTR YouTube thumbnail using free AI image generation via Pollinations, with zero API cost. Applies proven thumbnail psychology (face emotion, power text, color contrast, focal hierarchy) to create a thumbnail brief AND generates the image. Use when the user says "make me a thumbnail", "YouTube thumbnail", "thumbnail for this video", or has a finalized title and wants the visual ready for upload. Reads brand-kit.md, yt-competitor-analysis.md, and the video title automatically. Zero cost — uses Pollinations MCP only.
origin: alfred-yt-division
---

# YT Thumbnail Gen

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## Step 1. Load context

Check:
- `brand-kit.md` → primary color, secondary color, font style
- `yt-competitor-analysis.md` → thumbnail formula for this niche
- `about-me.md` → creator name and any existing photo reference

If the video title is not in context, ask: "What is the final video title?"

## Step 2. Gather thumbnail inputs

Call AskUserQuestion:

```json
[
  {
    "question": "What emotion should your face show in the thumbnail?",
    "header": "Emotion",
    "multiSelect": false,
    "options": [
      {"label": "Shock / surprise", "description": "Wide eyes, open mouth — used for dramatic reveals"},
      {"label": "Confident / direct", "description": "Calm eye contact — authority and trust"},
      {"label": "Curious / thinking", "description": "Raised eyebrow, slight tilt — mystery and intrigue"},
      {"label": "No face", "description": "Object, graphic, or text-only — better for some niches"}
    ]
  },
  {
    "question": "What is the single most important visual element besides the face?",
    "header": "Hero element",
    "multiSelect": false,
    "options": [
      {"label": "A bold number", "description": "E.g. '$10,000' or '47 days' — specificity drives clicks"},
      {"label": "A logo or product", "description": "The tool, app, or brand being discussed"},
      {"label": "A before/after split", "description": "Two states showing transformation"},
      {"label": "Just text and face", "description": "Clean, minimal — works well in education niches"}
    ]
  },
  {
    "question": "What is the dominant color scheme?",
    "header": "Colors",
    "multiSelect": false,
    "options": [
      {"label": "Use brand colors", "description": "Pull from brand-kit.md if it exists"},
      {"label": "High contrast yellow + black", "description": "Highest CTR across most niches — MrBeast effect"},
      {"label": "Red + white", "description": "Urgency, warnings, revelations"},
      {"label": "Clean blue + white", "description": "Trust, technology, finance niches"}
    ]
  }
]
```

## Step 3. Apply thumbnail psychology rules

Every thumbnail must pass these checks before generating:

| Rule | Requirement |
|---|---|
| Face readable at 120px wide | Thumbnail must work at mobile list view size |
| Max 5 words of text | Fewer words = more readable at small size |
| 2 dominant colors only | More than 2 creates visual noise |
| One clear focal point | Eye naturally goes to one element first |
| High contrast | Text must be legible against background |
| Emotion amplified | Expression should be slightly exaggerated for thumbnail |
| No white border | YouTube adds its own — don't double up |

## Step 4. Determine text overlay

**Max 5 words.** Choose the highest-impact words from the video title — not the full title.

Examples:
- Title: "How I Made $10,000 in 30 Days with AI" → Thumbnail text: "$10,000 IN 30 DAYS"
- Title: "7 YouTube Mistakes That Kill Growth" → Thumbnail text: "7 DEADLY MISTAKES"
- Title: "Why Your Videos Get Zero Views" → Thumbnail text: "ZERO VIEWS (WHY)"

Text formatting rules:
- ALL CAPS for 1 to 3 keyword words
- Mixed case for supporting text
- Font: bold, condensed sans-serif (Impact, Montserrat ExtraBold, Anton)
- Text has a drop shadow or outline for contrast

## Step 4b. Study competitor thumbnail structure first

Before generating, check `yt-competitor-analysis.md` for the Thumbnail Formula section of the top competitors in this niche.

**The Copy-the-Structure rule (Leo Grundström method):**
- Identify the visual architecture the top competitors use (face position, text placement, color scheme, hero element type)
- This is the proven pattern that audiences in this niche already click on
- Apply the SAME structure to your thumbnail — different content, same visual logic
- Do not invent a new thumbnail style from scratch until you have 50+ videos of data on your own channel

## Step 5. Create the thumbnail — Two-Path Approach

**Path A — Canva (Primary, Recommended)**
This is Leo Grundström's method. Canva gives you precise control over the final result and matches what professional faceless channels use.

1. Open Canva → Create new → YouTube Thumbnail (1280×720px)
2. Upload your chosen background image or use a high-quality stock photo matching the video topic
3. Fit the image to the full frame
4. Add bold text overlay (max 5 words) using Impact, Anton, or Montserrat ExtraBold
5. If the niche uses it: search "4K Ultra HD" in Canva's sticker library and add it to the corner — this is a proven click-driver in narration/documentation niches
6. Click on the image → Edit → increase **Vibrance** and **Saturation** significantly — thumbnails that pop on mobile need aggressive colour
7. Adjust **Brightness** if the image is too dark or too light
8. Add a solid or gradient background behind the text for contrast
9. Download as PNG → save to `thumbnails/[video-slug]-canva.png`

**Path B — Pollinations (When Canva is not available)**
Use the Pollinations MCP image generation tool with a detailed prompt:

```
YouTube thumbnail, 1280x720 pixels, photorealistic style.
[EMOTION] person [physical description if provided], [FACE POSITION: left third / right third / center].
[BACKGROUND: color/scene description].
Bold text overlay in the [left/right] [top/bottom] reads: "[THUMBNAIL TEXT]" in [COLOR] with black outline.
[HERO ELEMENT description if applicable].
High contrast, vibrant colors, professional YouTube thumbnail aesthetic.
No watermarks, no text artifacts outside specified overlay.
Dominant colors: [COLOR 1] and [COLOR 2].
```

Generate the image. Save to `thumbnails/[video-slug]-ai.png`.

## Step 6. Generate 3 thumbnail variants

Produce 3 variants using the chosen path:
- Variant A: Primary design (replicated from competitor structure)
- Variant B: Same content, different color scheme or text position
- Variant C: Text-only or minimal face — for niches where text-first thumbnails outperform

Present all 3. Let the user pick.

## Step 7. Output the thumbnail report

```markdown
# Thumbnail Report: [Video Title]

## Psychology Audit
- [✓/✗] Face readable at 120px: [pass/fail]
- [✓/✗] Max 5 words: [actual word count]
- [✓/✗] 2 dominant colors: [Color 1 + Color 2]
- [✓/✗] One focal point: [describe it]
- [✓/✗] High contrast: [yes/no]

## Text Overlay
**Text used:** "[THUMBNAIL TEXT]"
**Reasoning:** [Why these words over others]

## Generated Variants
- Variant A: [path] — Face left, text right
- Variant B: [path] — Face right, text left
- Variant C: [path] — Text-only fallback

## Upload Specs
- Format: JPG
- Size: 1280×720px
- File size: Under 2MB
- Color space: sRGB

## Niche Comparison
[Based on yt-competitor-analysis.md — how does this thumbnail compare to the niche's top performers?]

## A/B Test Plan — YouTube's Built-In Test & Compare Feature
YouTube Studio has a native A/B thumbnail testing tool called "Test & Compare." Use it:
1. Upload your video with Variant A as the thumbnail
2. In YouTube Studio → Content → click your video → Thumbnails → "Test & Compare"
3. Upload Variant B and Variant C
4. YouTube automatically splits traffic and shows which gets the highest CTR
5. After 48–72 hours, YouTube selects the winner automatically

This is superior to manually swapping thumbnails because YouTube controls the split test scientifically. Always use this feature — never just guess which thumbnail works.

**CTR benchmarks:**
- Under 2%: Thumbnail is failing — swap immediately
- 2–4%: Average — test a new variant
- 4–6%: Good — keep and monitor
- 6%+: Excellent — study this thumbnail and replicate its structure for future videos

**Thumbnail automation note (2026 trend):** Leo Grundström noted thumbnails are trending toward full automation. Until automated tools are integrated, the Pollinations + Test & Compare pipeline above is the closest zero-cost equivalent.
```

## Rules

- The text overlay must be 5 words or fewer. If the user insists on more, explain why it will hurt CTR.
- Always generate all 3 variants. Never deliver just one option.
- Niche comparison section is mandatory if yt-competitor-analysis.md exists.
- If Pollinations returns an error, describe the full image specification in text so the user can prompt any other image generator (Midjourney, DALL-E, etc.)
- Save outputs to thumbnails/ folder. Never just embed in chat.
- After delivering, offer: "The thumbnail is ready. Run `/yt-content-calendar` to schedule this video and plan the next 30 days."
