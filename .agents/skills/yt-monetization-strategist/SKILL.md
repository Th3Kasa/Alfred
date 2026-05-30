---
name: yt-monetization-strategist
description: >
  Build a complete YouTube monetization roadmap covering the fastest path to YouTube Partner Program (YPP), affiliate income, sponsorships, and product revenue — with timeline estimates and milestone tracking. Use when the user says "how do I monetize my YouTube channel", "monetization plan", "how to make money on YouTube", "YPP progress", "how fast can I monetize", or wants to understand which revenue streams to pursue and in what order. Produces a prioritized monetization playbook. Zero cost — uses duckduckgo and open-websearch only.
origin: alfred-yt-division
---

# YT Monetization Strategist

## CRITICAL: Auto-start on load

Go straight to Step 1. No preamble.

## Step 1. Load context

Check:
- `yt-niche-scout-report.md` → CPM estimates, affiliate opportunities, niche monetization potential
- `yt-competitor-analysis.md` → revenue streams detected in competitor channels
- `about-me.md` → creator background and existing assets

Then ask:

```json
[
  {
    "question": "What is your current channel status?",
    "header": "Channel status",
    "multiSelect": false,
    "options": [
      {"label": "Not started yet", "description": "Zero subscribers, no videos uploaded"},
      {"label": "Just started (0–500 subs)", "description": "Channel exists, early stage"},
      {"label": "Growing (500–4,000 subs)", "description": "Getting traction, approaching YPP"},
      {"label": "Close to YPP (4,000+ subs)", "description": "Nearly at the 1,000 sub / 4,000 hour threshold"}
    ]
  },
  {
    "question": "Do you have any existing assets to monetize?",
    "header": "Existing assets",
    "multiSelect": true,
    "options": [
      {"label": "Email list", "description": "Even a small one can be activated immediately"},
      {"label": "A product or service", "description": "Something you already sell or could sell"},
      {"label": "Social following", "description": "Instagram, TikTok, Twitter/X audience"},
      {"label": "None yet", "description": "Starting from zero"}
    ]
  },
  {
    "question": "What is your monetization priority?",
    "header": "Priority",
    "multiSelect": false,
    "options": [
      {"label": "Speed (income ASAP)", "description": "Fastest dollar, even if small"},
      {"label": "Scale (passive income)", "description": "AdSense + affiliate — works while sleeping"},
      {"label": "High ticket (premium)", "description": "Sponsorships, consulting, courses — fewer clients, bigger checks"}
    ]
  }
]
```

## Step 2. Research niche monetization landscape

Search: `"[niche]" YouTube CPM 2024 2025 RPM rates`
Search: `"[niche]" YouTube sponsorship rates 2024`
Search: `"[niche]" affiliate programs commission rates`
Search: `"[niche]" YouTube creator income breakdown`

Extract:
- Typical CPM range for this niche
- Common sponsor categories and what they pay per 1,000 views
- Top affiliate programs with commission rates
- Creator fund / other platform income if applicable

## Step 3. Map the monetization timeline

Calculate milestone dates based on the user's current status and niche research:

### Phase 1: Zero to YPP (Month 1 to 3 typically)

**YouTube Partner Program requirements:**
- 1,000 subscribers
- 4,000 watch hours in the past 12 months
- OR 10 million Shorts views in 90 days
- AdSense account approved

**Realistic timeline:**
- Niche with 8–15 min videos at 1 upload/week: calculate hours needed
- Formula: (4,000 hours needed − current hours) ÷ (average views per video × average watch time)
- Be honest — it typically takes 3 to 12 months depending on upload frequency and quality

**What to do in Phase 1 (before YPP):**
- Affiliate links in video descriptions (no follower requirement)
- Digital products (Gumroad, Payhip — free to list)
- Referral programs that pay per sign-up
- Services (use the channel as a portfolio)

### Phase 2: YPP Active (Month 3–6)

- AdSense income activates
- Estimate monthly AdSense: (monthly views ÷ 1,000) × CPM
- Begin approaching sponsors (nano-influencer rates apply at 1k–10k subs)

### Phase 3: Scaling (Month 6–12+)

- Sponsorship negotiation at channel-specific rates
- Course or coaching product if applicable
- Channel memberships
- Super Thanks / Super Chat if doing live content

## Step 4. Build the prioritized revenue stack

Rank revenue streams by: (Speed to first dollar) × (Revenue ceiling) ÷ (Effort)

Output the stack for this channel:

```markdown
## Revenue Stack (Ranked by Priority)

### Stream 1: [Name] — START NOW
- **What it is:** [description]
- **First dollar in:** [X days]
- **Monthly potential at 1k views/day:** $X–$X
- **How to set up:** [specific steps, free tools only]
- **Specific programs to join:** [name 3–5 actual programs with URLs to search]

### Stream 2: [Name] — START AT 1,000 SUBSCRIBERS
[same format]

### Stream 3: [Name] — START AT 10,000 SUBSCRIBERS
[same format]

### Stream 4: [Name] — LONG TERM (10k+ subs)
[same format]
```

## Step 5. Produce the monetization playbook

```markdown
# YouTube Monetization Playbook — [Channel Niche]

## Income Potential Summary

| Phase | Subscribers | Est. Monthly Income | Primary Source |
|-------|-------------|--------------------|-|
| Phase 1 | 0–1,000 | $0–$200 | Affiliate only |
| Phase 2 | 1,000–10,000 | $200–$2,000 | AdSense + Affiliate |
| Phase 3 | 10,000–100,000 | $2,000–$15,000 | AdSense + Sponsors + Product |
| Phase 4 | 100,000+ | $15,000–$100,000+ | Full stack |

*Based on [niche] CPM of $X–$X and typical retention rates*

## Niche CPM Breakdown
- **AdSense CPM (estimated):** $X–$X per 1,000 views
- **RPM (what you actually receive after YouTube's cut):** $X–$X
- **Best-performing content for CPM:** [specific video types that get higher CPM in this niche]
- **Worst-performing for CPM:** [avoid these — low RPM]

## Phase 1: Pre-YPP Income (Start Today)

### Affiliate Programs to Join Now
[List 5 specific programs in this niche with: name, commission %, cookie duration, and what to search to find signup link]

### How to Place Affiliates Without Being Spammy
- Mention naturally in the script where the product is genuinely relevant
- Pin a comment with the link
- Add to description below the fold (YouTube shows description first 3 lines)
- Create a "tools I use" page if you have a website

### Digital Product Options (Zero Upfront Cost)
- **Templates/checklists:** Create in Canva, sell on Gumroad for $7–$27
- **Mini-course:** Record 5 videos, host free on Gumroad
- **Consulting calls:** Calendly free tier + PayPal

## Phase 2: YPP Active

### YPP Application Checklist
- [ ] 1,000 subscribers
- [ ] 4,000 watch hours (last 12 months)
- [ ] No community guideline violations
- [ ] AdSense account linked
- [ ] 2-step verification on Google account

### First Sponsor Outreach (at 1,000 subscribers)
- **What brands pay at this stage:** $50–$500 per video (integration mention)
- **How to find sponsors:** Search "[niche] software tools" + "affiliate program" — reach out directly
- **Email template:** [concise outreach template below]

**Sponsor outreach email:**
```
Subject: [Channel Name] Partnership — [Niche] audience of [X] subscribers

Hi [Name],

I run [Channel Name] on YouTube — [X] subscribers focused on [niche]. My audience is [describe in one sentence].

I noticed [Company] would be a perfect fit because [specific reason related to their product and your audience].

I'm offering: [30-second integration / dedicated video / Shorts mention] for $[rate].

[Link to your top-performing video]

Happy to send our media kit. Interested?

[Name]
```

## Phase 3: Full Monetization Stack

### Sponsorship Rate Card (Template)
| Format | Rate at 10k subs | Rate at 50k subs | Rate at 100k subs |
|--------|-----------------|------------------|-|
| 30-sec integration | $200–$500 | $500–$2,000 | $2,000–$5,000 |
| 60-sec dedicated spot | $400–$1,000 | $1,500–$4,000 | $5,000–$15,000 |
| Dedicated video | $800–$2,000 | $3,000–$8,000 | $10,000–$30,000 |
| Shorts mention | $50–$200 | $200–$800 | $800–$3,000 |

### Course / Product Launch
- **When to launch:** When a video about the topic hits 100k+ views
- **Validation:** Use YouTube comments as research — what do they keep asking?
- **Free hosting:** School (free tier), Gumroad, Payhip

## Fastest Path to $1,000/Month Estimate

Based on [niche] data:
- **Path 1 (AdSense-first):** [X] views/month needed → [X] subscribers needed → [timeframe]
- **Path 2 (Affiliate-first):** [X] affiliate sales/month at [average commission] → achievable at [X] subscribers
- **Path 3 (Hybrid):** [Recommended split strategy]

**Recommendation:** [1 paragraph on which path fits this creator's assets and goals]

## Monthly Tracking Checklist

Track these metrics every month to know if you're on pace:
- [ ] Subscribers this month: [target]
- [ ] Watch hours this month: [target toward 4k]
- [ ] Affiliate clicks: [target]
- [ ] Affiliate conversions: [target]
- [ ] AdSense RPM: [current]
- [ ] Sponsor deals closed: [target]
```

## Rules

- CPM estimates must come from research, not guesses. Label them as "estimated."
- Never promise specific income amounts as guaranteed. Always say "estimate" or "typical range."
- Affiliate programs named must be real programs in the stated niche — search to confirm they exist.
- The fastest path to income is affiliate marketing, not AdSense. Always lead with this for Phase 1.
- Be honest about timelines. "1 week to monetize" is only possible with an existing audience. Say so.
- Save output to `yt-monetization-playbook.md` in the project root.
