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

## Step 2. Generate niche candidates

Based on the user's interests and goals, generate 8 to 12 niche candidates. Mix: 2 to 3 broad niches, 4 to 6 sub-niches, 2 to 3 micro-niches.

For each candidate, immediately proceed to research in Step 3.

## Step 3. Research each niche

For every niche candidate, run these research tasks in order:

### 3a. Demand check
Search: `"[niche] YouTube channel" views subscribers` and `"[niche]" YouTube 2024 2025 trending`
- Are channels in this niche getting 100k+ views on videos?
- Is there growing search interest (not declining)?

### 3b. Competition analysis
Search: `top [niche] YouTube channels`
- How many channels have 100k+ subscribers?
- What is the subscriber count of the top 5 channels?
- Are there gaps (topics nobody is covering well)?

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

### 3e. Saturation test
Search: `[niche] YouTube channel started [current year-1] growth`
- Are new channels still breaking through?
- What did they do differently?

## Step 4. Score each niche

Score every niche on these 5 dimensions (1 to 10 each):

| Dimension | What it measures |
|---|---|
| **Demand** | Search volume + view counts — is the audience big enough? |
| **Competition** | Inverse of saturation — can a new channel break through? |
| **CPM** | Ad revenue potential (finance/tech = high, entertainment = low) |
| **Affiliate upside** | Products/services to promote alongside AdSense |
| **Creator fit** | Match to user's stated interests and camera preferences |

Total score = (Demand × 1.5) + Competition + CPM + Affiliate + Fit

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
