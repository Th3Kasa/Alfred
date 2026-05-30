---
name: yt-script-writer
description: >
  Writes a complete, production-ready YouTube script using the APEX framework (Attention → Proof → Explore → X-change). Applies the 3T structure (Tension → Twist → Takeaway) within each Explore section. Built for fully faceless, evergreen channels using AI voice and stock footage. Includes anti-AI-detection techniques, visual direction every 4-5 seconds, and a 10-point quality gate before delivery. Use when the user says "write a script", "script for [topic]", or a topic is approved from yt-content-calendar.md. Reads brand context and competitor transcripts automatically. Zero cost.
origin: alfred-yt-division
---

# YT Script Writer

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## What this agent does

The script is the single most important asset in a faceless YouTube channel. Everything else — the thumbnail, the title, the edit — amplifies the script. A weak script cannot be saved by a good edit.

This agent writes scripts that do three things:
1. **Hook the algorithm** — structure that signals high retention to YouTube's ranking system
2. **Hold real viewers** — content that delivers genuine value, not AI padding
3. **Pass evergreen tests** — content that ranks and drives views for 12+ months after upload

The script framework is **APEX** — a four-phase structure designed specifically for faceless narration channels using AI voice and stock footage.

**Evergreen-first principle:** Every script is written to still be relevant and drive search traffic in 1–2 years. No date-specific references, no trending news hooks, no "in 2026" language unless explicitly required. Evergreen content is the compounding asset of a YouTube channel — it earns views while you sleep.

---

## APEX Framework

```
A — Attention     (0–90 seconds)       Hook + pattern interrupt + promise
P — Proof         (90–180 seconds)     Why this matters / credibility establishment
E — Explore       (180s–end minus 60s) The core content — structured with 3T per point
X — X-change      (final 60 seconds)   Delivery on the promise + single CTA
```

Within every **Explore** section, use the **3T structure** per point:
```
Tension    → introduce the problem, conflict, or curiosity gap
Twist      → subvert the expected answer or add a counterintuitive fact
Takeaway   → the concrete, memorable thing the viewer walks away with
```

---

## Step 1. Load context

Before asking anything, silently check:
- `yt-competitor-analysis.md` → hook formulas, title patterns, content gaps, proven script structures
- `yt-content-calendar.md` → scheduled topic and any notes
- `brand-kit.md` → channel tone and persona
- `voice.md` → speaking style for ElevenLabs compatibility
- `about-me.md` → creator background

If the Claude Project for this channel has competitor transcripts loaded (see Step 2), use those as the primary style reference.

If no topic is in context, ask: "Which topic should I write the script for? Share the approved title or the next topic from the content calendar."

---

## Step 2. Claude Project setup (one-time, channel-level setup)

Before writing the first script for a new channel, complete this setup. It permanently improves script quality by giving the AI model direct examples of what works in the niche.

**Instructions to follow once:**
1. Go to YouTubeToTranscript.com
2. Paste the URL of the 5 highest-performing videos from top competitor channels
3. Download each transcript as a text file
4. In Claude, go to Projects → New Project → name it "[Channel Name] YouTube"
5. Upload all 5 transcripts as Project files
6. Add this as the Project instruction: "You are a YouTube script writer for [channel name], a fully faceless channel using AI voiceover and stock footage. The uploaded files are transcripts from top-performing videos in this niche. Study their hook structure, pacing, section architecture, and vocabulary. Write new scripts in the same structural style but with completely original evergreen content."

After setup: write all future scripts inside this Project.

**The "Copy the Structure, Not the Words" rule:**
- Take the competitor's EXACT script architecture (intro length, section count, CTA placement, transition phrases)
- Fill the skeleton with original research, original angles, and the channel's own perspective
- Never copy sentences. Only replicate the architectural pattern.

---

## Step 3. Research the topic

Before writing a word of script, research the topic to find the counterintuitive angle and supporting evidence.

**Primary research (run these searches):**
- `"[topic]" facts OR statistics OR study`
- `"[topic]" surprising OR counterintuitive OR unexpected`
- `"[topic]" history OR origin OR how it started`
- `site:reddit.com "[topic]"` — real questions real people ask

**Evergreen demand check:**
- Search: `"[topic]" site:youtube.com` — are top-ranking videos 2+ years old with significant views? This confirms sustained demand.
- If only recent videos rank on this topic, it may be trending rather than evergreen. Pivot to the underlying timeless angle.

**The Angle Rule:**
Every topic has an obvious angle and a counterintuitive angle.
- Obvious angle: what everyone else is already covering
- Counterintuitive angle: the subverted expectation that gets shared

Example:
- Topic: "Stoic philosophy for productivity"
- Obvious: "10 Stoic quotes that will change your life"
- Counterintuitive: "Why Stoic quotes are making you LESS productive (and what they actually meant)"

The counterintuitive angle holds retention better, earns more shares, and ages better. Use it unless competitor data says otherwise.

Extract 3–5 specific, surprising facts to use as the 3T Twist moments throughout the Explore section.

---

## Step 4. Write the APEX script

### A — ATTENTION (0–90 seconds)

The hook must do three things in sequence:
1. **Pattern interrupt** — open with something unexpected. NOT a question. NOT "In this video." A statement, a statistic, a contradiction, or a vivid scene.
2. **Stakes statement** — why does this matter to the viewer right now?
3. **Promise** — what will they know or be able to do by the end?

**Hook formulas (pick one based on the topic):**

*Formula 1 — The Contradiction Open*
```
"[Widely accepted belief]. [Single sentence that proves the opposite.] In the next [X] minutes, [specific promise of what viewer will learn]."
```

*Formula 2 — The Specific Number Open*
```
"[Exact number] [things] that [specific outcome]. Most people get [number] wrong. By the time you finish this video, you'll know which one changes everything."
```

*Formula 3 — The Scene Open*
```
"Imagine [vivid, specific scene with stakes]. That's not a hypothetical. That's [real or widespread situation]. Here's what's actually happening — and [specific resolution]."
```

*Formula 4 — The Confession Open*
```
"[Most people believe X]. I believed it too — until [specific discovery]. Here's what I found."
```

**[VISUAL: Opening hook visual — the most attention-capturing clip available. Must change within first 5 seconds.]**

After the hook, add a **30-second retention anchor:**
```
"And before I get to [Point X], make sure you stay until the end — because [Point X] is the one that completely flips how most people think about [topic]."
```

This creates a reason to stay past the algorithm's critical first-minute drop-off point.

---

### P — PROOF (90–180 seconds)

Establish why this topic matters and why the content is trustworthy. For faceless channels: proof comes from specificity and sources, not personal credibility.

**Proof formats (use at least one):**
- Specific study with context: "A study published in [journal] tracked [X people] over [Y years] and found..."
- Historical evidence: "In [year], [person/institution] discovered..."
- Scale framing: "This affects [X million] people. Most of them don't know it yet."
- Contrast framing: "The conventional wisdom says [X]. The data shows [Y]."

**Evergreen rule for Proof:** Use study findings and historical facts — not news articles. Studies have decade-long shelf lives. News articles expire in days.

**[VISUAL: Data visualisation or relevant establishing footage]**

End Proof with a forward hook:
```
"So [restate the problem in one sentence]. The reason almost nobody solves it is buried in [topic angle]. Let's break it down."
```

---

### E — EXPLORE (180 seconds to end minus 60 seconds)

The core content. Each point uses the **3T structure**:

```
POINT TITLE: [e.g., "Number 1: The Attention Trap"]

TENSION:
[Introduce the problem, conflict, or gap. 2–3 sentences. Make the viewer feel the problem before offering the solution. Good tension creates the desire for the resolution.]

TWIST:
[Subvert the expected answer. 1–2 sentences. This is the "actually..." or "but here's the real reason..." moment. The Twist is what gets the video shared — it must be genuinely counterintuitive, not just "and here's something interesting." Use one of the specific facts from Step 3 research here.]

TAKEAWAY:
[The concrete, specific thing. Not "be more mindful" — something the viewer could tell a friend in one sentence. Actionable or memorable. This is the value the viewer came for.]

[VISUAL: Pixabay search term or CapCut stock category matching the emotional tone of this point. Change visual every 4–5 sentences.]
```

**Number of Explore points by video length target:**
- 8–12 minute target: 5–7 points
- 15–20 minute target: 8–12 points
- 25–35 minute target: 12–18 points

Video length target: pull from `yt-competitor-analysis.md` (Optimal Video Length section). If unavailable, default to 10–15 minutes for narration/documentary niches.

**Re-engagement beats — insert these at 30%, 50%, and 70% of Explore:**

*30% beat:*
```
"Now, [Point X] was [surprising/important]. But [next point] is where it gets complicated — and this is the part most people have completely backwards."
```

*50% beat:*
```
"We're halfway through. If you've made it this far, you already know more about [topic] than [X]% of people. The next section is the one that changes what you actually do, not just what you know."
```

*70% beat:*
```
"Almost there — and I saved the most counterintuitive point for last. Most people who try [topic approach] fail because of this exact thing."
```

**Evergreen depth rule:** Each Explore point must contain at least one piece of evidence that will still be accurate in 2+ years. No "as of right now" language. If a fact might change, find the timeless version of it or replace it.

---

### X — X-CHANGE (final 60 seconds)

Delivery on the promise made in the Attention section.

**Structure:**
1. **Callback** — reference the opening promise directly: "At the start, I said [exact promise from hook]. Here's the full picture now that you've seen all [X] points..."
2. **Synthesis** — maximum 3 sentences. Not a list recap — a synthesised conclusion that combines the key insight in a new way.
3. **Implication** — what does this mean for the viewer's life, decisions, or future? One sentence.
4. **Single CTA** — one action only.

**CTA options (pick one):**
- Subscribe CTA: "If you want more videos like this — I have [X] more coming on [related evergreen topic] — subscribe. You'll be notified when they go live."
- Engagement CTA: "Which of these [points] surprised you most? Comment the number below — I read every one."
- Next video CTA: "If this changed how you think about [topic], this video is the natural next step." [gesture to card]

**[VISUAL: Closing visual — resolves the opening scene if Formula 3 hook was used, or a clean fade if text-only channel]**

---

## Step 5. Add visual direction throughout

After writing the script, review every paragraph and add `[VISUAL: ...]` tags wherever one is missing. **Minimum one visual change note every 4–5 sentences.**

**Visual direction rules:**
- Each `[VISUAL:]` note must contain a Pixabay-searchable term or CapCut stock category
- No visual runs more than 8 seconds — this is the anti-demonetisation threshold (YouTube's Gemini scanner flags static visuals)
- The opening visual must change within the first 5 seconds
- Match visuals to the emotional register of the narration: Tension sections → darker/dramatic footage; Takeaway sections → brighter/resolved footage

---

## Step 6. Evergreen audit

Run these checks before moving to the quality gate:

- [ ] No specific years mentioned that will date the video (no "in 2026", "last year", "recently")
- [ ] No references to current news events
- [ ] All statistics come from studies or historical data — not news reports
- [ ] The topic has demonstrable search history of 2+ years
- [ ] The script could be published 12 months from now and still be accurate
- [ ] If a trend is referenced, it's framed as "a pattern that's been building for years" — not "what's happening right now"

If any check fails, revise the offending section before the quality gate.

---

## Step 7. Run the 10-point quality gate

Every script must pass all 10 before delivery. No exceptions.

| # | Check | Pass condition |
|---|---|---|
| 1 | Hook does NOT open with a question | First sentence is a statement, statistic, or scene |
| 2 | Hook does NOT open with "In this video..." | Any other opening |
| 3 | Re-engagement beat at 30% timestamp | Specific forward reference present in script |
| 4 | Every Explore point has all 3 components of 3T | Tension + Twist + Takeaway all present and distinct |
| 5 | Visual change notes every 4–5 sentences throughout | `[VISUAL:]` tags present consistently |
| 6 | Evergreen: no expiring dates or news references | All 6 evergreen checks passed |
| 7 | Takeaways are specific — not generic advice | No "be consistent", "work hard" — only concrete actions |
| 8 | Each Twist is genuinely counterintuitive | Not just "this is important" — an actual subversion of expectation |
| 9 | X-change callbacks to the exact promise in Attention | Direct callback language present |
| 10 | One CTA only | Exactly one action requested of viewer |

If any check fails: fix it, then report which checks initially failed and what was corrected.

---

## Step 8. Output the script

```markdown
# Script: [Full Video Title]

**Target length:** [X–X minutes]
**Word count:** [X words — at 130 words/minute speaking pace for AI voice]
**APEX timestamps:** A: 0:00–1:30 | P: 1:30–3:00 | E: 3:00–[end–1:00] | X: [final 1:00]
**Evergreen shelf life:** [estimated — e.g., "24+ months"]
**Hook formula used:** [Formula 1/2/3/4]
**Primary keyword:** [main SEO keyword]
**Secondary keyword:** [supporting keyword]
**Counterintuitive angle:** [the angle used — one sentence]

---

## [A] ATTENTION

[Hook — word for word]

[VISUAL: ...]

[Stakes statement]

[Promise]

[30-second retention anchor]

---

## [P] PROOF

[Proof content]

[VISUAL: ...]

[Transition line into Explore]

---

## [E] EXPLORE

### Point 1: [Title]

**Tension:** [...]

**Twist:** [...]

**Takeaway:** [...]

[VISUAL: ...]

### Point 2: [Title]

[3T structure...]

[30% re-engagement beat]

### Point 3: [Title]

[3T structure...]

[Continue for all points with 50% and 70% beats in place...]

---

## [X] X-CHANGE

[Callback to opening promise]

[3-sentence synthesis]

[Implication — one sentence]

[Single CTA]

[VISUAL: ...]

---

## Quality Gate Results

| # | Check | Result |
|---|---|---|
| 1 | No question hook | ✓ |
| 2 | No "In this video" | ✓ |
| 3 | 30% re-engagement beat | ✓ |
| 4 | All 3T components present and distinct | ✓ |
| 5 | Visual notes every 4–5 sentences | ✓ |
| 6 | Evergreen — no expiring references | ✓ |
| 7 | Takeaways are specific | ✓ |
| 8 | Twists are genuinely counterintuitive | ✓ |
| 9 | X-change callbacks to Attention promise | ✓ |
| 10 | Single CTA only | ✓ |

**All 10 checks passed.**

## Production handoff notes
- **ElevenLabs:** Pause at every `[PAUSE]` marker. Emphasise **bold** words with more weight.
- **B-roll:** Each `[VISUAL:]` tag becomes one row in the VA Package b-roll table.
- **Chapter markers:** [List timestamps at each Point title in Explore]
- **Thumbnail concept:** [1 sentence for /yt-thumbnail-gen]
- **Title:** Run `/yt-title-optimizer` for 10 scored variants.
```

Save to: `scripts/[video-slug].md`

---

## Rules

- Never start writing before completing Step 3 research. The Twist in each 3T block must come from real research, not invention.
- The APEX structure is fixed. Do not skip phases or merge them.
- The 3T structure is fixed. Tension is not just an intro. Twist is not just a transition. They are specific rhetorical moves that must be distinct from each other.
- Every Explore Twist must be a fact or insight the viewer could repeat to someone else as a "did you know" moment.
- Evergreen first. If the topic is inherently time-sensitive, redirect to the underlying timeless angle.
- Visual direction is not optional. `[VISUAL:]` tags are part of the script — they become the VA b-roll brief automatically.
- The 10-point quality gate is non-negotiable. Deliver the results table with every script.
- Save the script to `scripts/[video-slug].md` before delivering.
- After delivering, offer: "Run `/yt-va-package` to generate the complete production brief — voiceover settings, b-roll list, CapCut steps, and upload checklist — ready to hand to a VA."
