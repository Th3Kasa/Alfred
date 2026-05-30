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

**Channel location: Sydney, Australia.** Apply Australian-specific context throughout:
- AdSense pays in AUD. Australian CPM is typically **20–40% higher than the global average** due to advertiser competition in AU/NZ markets.
- AdSense earnings are subject to Australian tax (GST-registered creators may receive GST-inclusive payments — advise user to consult an accountant once income exceeds $75,000 AUD/year).
- YouTube withholds US tax at 0% for Australian creators (Australia has a tax treaty with the US) — user must complete the W-8BEN form in AdSense settings.
- Australian affiliate programs often pay in AUD and have separate sign-up portals from US versions (e.g., Commission Factory, Awin AU, Impact AU).
- Sponsors targeting Australian audiences pay a premium — flag this when reaching out.

Search: `"[niche]" YouTube CPM Australia 2024 2025 RPM rates`
Search: `"[niche]" YouTube CPM 2024 2025 RPM rates`
Search: `"[niche]" YouTube sponsorship rates Australia 2024`
Search: `"[niche]" affiliate programs Australia commission rates`
Search: `"[niche]" YouTube creator income breakdown`

Extract:
- Typical CPM range for this niche (report both global and AU estimates)
- Common sponsor categories and what they pay per 1,000 views
- Top affiliate programs with commission rates
- Creator fund / other platform income if applicable

## Step 3. Map the monetization timeline

Calculate milestone dates based on the user's current status and niche research.

**Reference benchmark — Leo Grundström's real path:**
Leo started his "howtoai" channel while working in a supermarket and studying full-time. The channel made $0 for the first 3 months. He almost quit. Then it clicked. Within 2 years he built a $2M+ business. The lesson: the first 3 months are the hardest and most discouraging — this is normal and expected. Do not quit before month 4.

### Phase 0: First 30 Videos (Weeks 1–6)

This is the foundation phase. Before thinking about monetization, the goal is to post 30 videos. This is Leo's exact starting formula:
- Post 4–6 videos per week (faceless channel) or 1–2/week (face on camera)
- Each video should copy a proven topic from competitor research (from `yt-competitor-analysis.md`)
- No monetization will come here — this is purely building the content library and learning the workflow

**Why 30 videos first?**
- YouTube's algorithm needs a body of content to understand what your channel is about
- You will improve dramatically between video 1 and video 30
- The watch hours and subscribers begin compounding after video 20–30 in most niches

### Phase 1: Zero to YPP (Month 1 to 3 — posting 4–6/week)

**YouTube Partner Program requirements:**
- 1,000 subscribers
- 4,000 watch hours in the past 12 months
- OR 10 million Shorts views in 90 days
- AdSense account approved

**Realistic timeline at 4–6 videos/week:**
- High-cadence posting is the fastest path to YPP watch hours
- Formula: (4,000 hours needed) ÷ (average views per video × average watch %) = videos needed
- At 4 videos/week: typically 2–4 months to hit YPP thresholds in a good niche
- At 1 video/week: typically 6–18 months
- Be honest — even high-cadence channels often see $0 for the first 2–3 months. This is normal.

**What to do in Phase 1 (before YPP):**
- Affiliate links in video descriptions (no follower requirement) — prioritise AU-based programs via Commission Factory or Awin AU first, then global programs
- Digital products (Gumroad, Payhip — free to list, both accept AUD)
- Referral programs that pay per sign-up
- Services (use the channel as a portfolio)
- **W-8BEN form:** Complete immediately in Google AdSense → Payments → Tax info. Required for 0% US withholding under the Australia–US tax treaty. Do this before the first cent is earned.

### Phase 2: YPP Active — Scale to $5K/Month

- AdSense income activates
- Estimate monthly AdSense: (monthly views ÷ 1,000) × CPM
- Keep posting at 4–6/week — do not slow down once monetized
- Begin approaching sponsors (nano-influencer rates apply at 1K–10K subs)
- Target: $5,000 AUD/month is the VA hire threshold

### Phase 3: $5K/Month → Hire VAs (Leo's Exact Trigger Point)

At $5,000 AUD/month in combined revenue (AdSense + affiliate):

**Hire Virtual Assistants from Upwork:**
- **Scriptwriter VA** — trained on your script template + competitor analysis, writes 3–5 scripts per week ($3–8/hour, Philippines/Indonesia)
- **Video editor VA** — trained on the CapCut workflow, edits 1–2 videos per day ($4–10/hour)
- **Researcher VA** — finds trending topics weekly using the competitor analysis method ($3–6/hour)
- **Thumbnail VA** — creates thumbnails using your brand template ($3–8/hour)

**Managing the VA team:**
- Use Kloudboard (Leo's own tool, currently in beta — waitlist at kloudboard.com) or Notion/Trello as alternatives
- Create SOPs (Standard Operating Procedures) for each role based on the skills in this division
- Quality review every video before publish — this is now the human's primary role

### Phase 4: Scaling (Month 6–12+)

- Full VA team running production with minimal input from you
- Add community/Discord (Leo's Automation Lab model — 20K members, significant revenue)
- Launch a paid course or community once you have proof of concept
- Consider launching a second channel in the same or adjacent niche
- Sponsorship negotiation at channel-specific rates

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

*Based on [niche] CPM of $X–$X AUD and typical retention rates. Channel based in Sydney, Australia.*

## Niche CPM Breakdown
- **AdSense CPM — Global average (estimated):** $X–$X USD per 1,000 views
- **AdSense CPM — Australian audience (estimated):** $X–$X AUD (typically 20–40% above global average)
- **RPM (what you actually receive after YouTube's 45% cut):** $X–$X AUD
- **Currency note:** AdSense pays in AUD to Australian accounts. All income figures in this playbook are AUD unless stated otherwise.
- **Best-performing content for CPM:** [specific video types that get higher CPM in this niche]
- **Worst-performing for CPM:** [avoid these — low RPM]
- **Tax reminder:** Complete W-8BEN in AdSense → Payments → Tax info for 0% US withholding.

### Affiliate Programs — Australia Priority
Check these AU-specific networks before defaulting to US programs:
- **Commission Factory** — largest AU affiliate network, covers most major AU brands
- **Awin AU** — strong finance, retail, and SaaS coverage
- **Impact AU** — good for SaaS and tech tools
- **Rakuten AU** — retail and lifestyle brands

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
