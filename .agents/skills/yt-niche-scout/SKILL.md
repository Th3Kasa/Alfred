---
name: yt-niche-scout
description: >
  Research and identify profitable YouTube niches with data-backed scores for competition level, monetization potential, CPM rates, and audience demand. Use when the user says "find me a YouTube niche", "what niche should I do on YouTube", "niche research", "niche ideas", "what niche is profitable", or wants to evaluate a niche before starting a channel. Produces a ranked shortlist of niches with full reasoning and a recommended pick. Zero external API cost — uses duckduckgo, open-websearch, and youtube-transcript only.
origin: alfred-yt-division
---

# YT Niche Scout

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble, no summary of this skill.

## Step 1. Gather context

Call AskUserQuestion:

```json
[
  {
    "question": "Do you have any niche ideas already, or do you want me to find them from scratch?",
    "header": "Starting point",
    "multiSelect": false,
    "options": [
      {"label": "Find from scratch", "description": "I have no idea yet — surface the best opportunities"},
      {"label": "I have 1-3 ideas", "description": "I have rough directions, help me evaluate and pick"},
      {"label": "I have a specific niche", "description": "I want to go deep on one niche and validate it"}
    ]
  },
  {
    "question": "What are your interests, skills, or areas of existing knowledge?",
    "header": "Your strengths",
    "multiSelect": true,
    "options": [
      {"label": "Tech / AI / Software", "description": "Programming, tools, automation, SaaS"},
      {"label": "Business / Finance", "description": "Entrepreneurship, investing, money, careers"},
      {"label": "Health / Fitness", "description": "Nutrition, training, mental health, biohacking"},
      {"label": "Education / Tutorials", "description": "Teaching skills, how-tos, explainers"}
    ]
  },
  {
    "question": "What is your goal for the channel?",
    "header": "Goal",
    "multiSelect": false,
    "options": [
      {"label": "Monetize fast (< 3 months)", "description": "Fastest path to YouTube Partner Program or affiliate income"},
      {"label": "Build a brand", "description": "Audience first, money follows — long-term play"},
      {"label": "Passive income", "description": "AdSense + affiliate, minimal ongoing effort after publishing"}
    ]
  },
  {
    "question": "Are you willing to be on camera?",
    "header": "On camera",
    "multiSelect": false,
    "options": [
      {"label": "Yes, face on camera", "description": "Builds trust faster, higher CPM niches available"},
      {"label": "No, voice only", "description": "Narrated screen recordings, animations, or AI avatars"},
      {"label": "Either is fine", "description": "I will do whatever gets the best results"}
    ]
  }
]
```

If the user already gave this context in chat, skip to Step 2 using what they said.

**Location context:** This channel uploads from Sydney, Australia. Apply these considerations throughout:
- Australian creators can target **global audiences** (US, UK, CA are highest CPM) or **AU-first audiences** (smaller pool, higher CPM per viewer, less competition)
- Niches with strong AU demand (property, HECS/superannuation finance, Australian sport commentary, local lifestyle) benefit from lower competition and loyal local audiences
- Niches targeting US audiences (tech, SaaS, business, finance) get higher absolute CPM but more competition
- Flag which audience strategy each niche suits

## Step 2. Run "The Fresh Account Method" (Leo Grundström's Niche Finding Technique)

This is the primary niche discovery method — faster and more accurate than keyword tools alone.

**The method:**
1. Open YouTube in a private/incognito browser window (simulates a fresh account with no personalization)
2. Scroll the homepage for 5 to 10 minutes without clicking anything
3. Look specifically for channels with **under 100K subscribers getting disproportionately high views** (e.g., 15K subscribers, 800K views on a video)
4. This mismatch = high demand but low supply = the opportunity window
5. Note every niche category where you see this pattern
6. **Validate**: Search YouTube for the biggest channel in that niche's most popular video title → if other similar channels are also getting high views, the niche is proven; if they're stuck at 100 views each, the niche is oversaturated or dying

**What this tells you:** YouTube is algorithmically pushing this content to people even from small channels — meaning the algorithm has identified demand it can't satisfy. A new channel can fill that gap.

## Step 2b. NexLev MCP Method (Advanced — If NexLev is connected)

If the user has NexLev MCP configured, this is faster and more data-driven than the manual method:

1. Open a Claude conversation with NexLev MCP active
2. Drop this exact prompt — Leo Grundström's verified niche-finding prompt:

   > **"find me 30 channels under 100k subs created in the last 6 months, posting 3+ times per week, with at least one viral video. sort by monthly revenue."**

3. Review the results — these are emerging niches with live data behind them
4. Pick the niche that matches the user's interests and has the highest monthly revenue from channels still under 100K subs
5. Validate with the Fresh Account Method to confirm the algorithm is pushing this niche

**Full one-day niche-to-published-video workflow (with NexLev MCP):**
1. Ask Claude (with NexLev active) to find 10 best niches with data
2. Pick one niche
3. Ask Claude to find the top-performing videos in that niche
4. Pick one topic from those results
5. Run `/yt-script-writer` with that topic
6. Generate voiceover with ElevenLabs
7. Assemble in CapCut
8. Publish

**Free alternative if NexLev is not configured:** Run Step 2 (Fresh Account Method) manually — takes 20–30 minutes instead of 2 minutes.

**Proven faceless niches that consistently follow this pattern (as of 2025–2026):**
- AI tools / tutorials (high CPM, high demand)
- Stoic philosophy / motivation (easy to produce, global audience)
- Animal stories / wildlife narration (low competition, high views)
- Car crash / dash cam compilations (viral, high CTR)
- True crime narration (massive audience, mid CPM)
- Quiz / trivia channels (high retention, easy to scale)
- Unboxing / product reveal (affiliate-friendly)
- Finance for beginners (highest CPM, $15–$50+)

## Step 3. Generate niche candidates

Based on the Fresh Account Method findings AND the user's interests and goals, generate 8 to 12 niche candidates. Mix: 2 to 3 broad niches, 4 to 6 sub-niches, 2 to 3 micro-niches. For each, note the recommended audience target (Global / AU-first / Both) and whether it's suitable for faceless production.

For each candidate, immediately proceed to research in Step 4.

## Step 4. Research each niche

For every niche candidate, run these research tasks in order:

### 4a. Demand check (use the Fresh Account signal first)
Search: `"[niche] YouTube channel" views subscribers` and `"[niche]" YouTube 2025 2026 trending`
- Are small channels (under 100K subs) getting 100K+ views on individual videos?
- Is there growing search interest (not declining)?
- Run Fresh Account test if possible

### 4b. Competition analysis
Search: `top [niche] YouTube channels`
- How many channels have 100K+ subscribers?
- What is the subscriber count of the top 5 channels?
- Are there gaps (topics nobody is covering well)?
- **Key question**: Can a channel posting 4–6 times per week compete here?

### 3c. Monetization potential
Search: `[niche] YouTube CPM 2024` and `[niche] affiliate programs`
- Estimated CPM (ad revenue per 1,000 views)
- Affiliate opportunities (SaaS tools, products, courses)
- Sponsorship market size

### 3d. Content format research
Search: `most viewed [niche] YouTube videos` and `[niche] YouTube Shorts performance`
- What video lengths perform best?
- Shorts-friendly or long-form only?
- Tutorial vs opinion vs news vs entertainment?

### 4e. Saturation test
Search: `[niche] YouTube channel started [current year] growth`
- Are new channels still breaking through?
- What did they do differently?
- Can this niche sustain 4–6 new videos per week without topic exhaustion?

### 4f. Faceless production viability
- Can videos be produced with: AI script + ElevenLabs voiceover + Pixabay footage + CapCut editing?
- Is a human face/expertise required, or can AI carry the content?
- Faceless-viable niches: narration, tutorials, compilations, explainers, motivation, quizzes
- Face-required niches: personal brand, vlogs, commentary, reaction — flag these clearly

## Step 5. Score each niche

Score every niche on these 6 dimensions (1 to 10 each):

| Dimension | What it measures |
|---|---|
| **Demand** | Fresh Account signal + search volume — small channels getting big views? |
| **Competition** | Inverse of saturation — can a new channel break through posting 4–6/week? |
| **CPM** | Ad revenue potential (finance/tech = high, entertainment = low) |
| **Affiliate upside** | Products/services to promote alongside AdSense |
| **Creator fit** | Match to user's interests and whether it suits faceless production |
| **Faceless viability** | Can AI script + ElevenLabs + Pixabay + CapCut produce this? |

Total score = (Demand × 1.5) + Competition + CPM + Affiliate + Fit + Faceless

## Step 5. Produce the niche report

Output this exact format:

```markdown
# YouTube Niche Research Report

## Summary
[2 sentences: what you researched and the headline finding]

## Niche Scores

| Niche | Demand | Competition | CPM | Affiliate | Fit | **Total** |
|-------|--------|-------------|-----|-----------|-----|-----------|
| [niche 1] | x/10 | x/10 | x/10 | x/10 | x/10 | **xx** |
...

## Top 3 Niches — Deep Dives

### 1. [Top Niche Name] — Score: xx/50

**What it is:** [1 sentence]
**Why it scores high:** [2-3 bullet points with data]
**Estimated CPM:** $x–$x
**Affiliate opportunities:** [list 3-5 specific programs]
**Top channels to study:** [3 channel names with approximate subscriber counts]
**Content gaps:** [what nobody is covering well yet]
**Recommended video length:** [X–Y minutes based on research]
**New channel success examples:** [1-2 channels that broke through recently and how]
**Risk:** [1 honest downside]

### 2. [Second Niche] — Score: xx/50
[Same format]

### 3. [Third Niche] — Score: xx/50
[Same format]

## Recommendation

**Pick:** [Niche name]
**Reasoning:** [3-4 sentences on why this is the best fit for THIS user's goals and constraints]
**First 10 video topics:** [numbered list]
**Time to first 1,000 subscribers (estimate):** [range]
**Time to YouTube Partner Program (estimate):** [range + what it takes]

## Next Steps
Run `/yt-competitor-analyst` with 3-5 channels from the top niche to learn their exact content strategies.
```

## Rules

- Never recommend a niche without data to back the score.
- Always include a specific CPM estimate range backed by search results.
- Always name specific channels to study — never generic advice.
- If a niche the user suggests scores below 25/50, say so directly and explain why.
- Zero-cost tools only: duckduckgo, open-websearch, youtube-transcript.
- If search returns thin results for a niche, say so — do not fabricate data.
- Mention monetization timeline honestly. Do not overpromise.
