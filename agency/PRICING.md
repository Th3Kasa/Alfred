# Growvera Pricing — One-Off Fees + Monthly Retainers

All prices AUD, ex GST. Target market: Australian local/small businesses (trades, clinics, hospitality, professional services) — the Growvera base. Calibrated against what these businesses already pay local agencies, with Alfred's delivery speed as the margin engine, not a reason to discount.

**Model:** one-off upfront fee per custom project + ongoing monthly retainer. 50% deposit before work starts, 50% on written approval of the Vercel preview. Retainer starts the month after launch.

**Pricing rules**
- Never quote hours. Quote outcomes and scope.
- Start at the top of the range; you can discount, you can't raise.
- Anchor with the cost of NOT doing it ("what's one new customer worth to you per month?").
- Revisit every quarter against actual delivery hours (`post-mortem` data) using the `pricing-strategy` skill.

---

## One-Off Project Fees

| Service | Range (AUD) | Typical | What's included |
|---|---|---|---|
| Web design (UI/UX) | $1,500 – $4,000 | $2,500 | Design-in-code for up to 5 pages, design tokens, mobile-first, CRO pass, a11y report |
| Copywriting | $800 – $2,500 | $1,200 | Brand voice file + website copy (up to 5 pages) or one campaign (email sequence / ad set) |
| SEO + AEO setup | $1,200 – $3,000 | $1,800 | Full technical + AEO audit, 90-day plan, schema markup, GBP optimization, citation submissions |
| Branding package | $1,800 – $5,000 | $3,000 | Positioning, voice guide, colour/type system, logo (contractor cost baked in), brand guidelines doc |
| Website (full build) | $3,500 – $12,000 | $5,500 | Up to 8 pages on the Growvera starter, copy included, schema, analytics, deployed on Vercel. Bookings/payments (Stripe) +$1,500–3,000 |
| Automation (productized) | $900 – $2,500 each | $1,500 | One of: lead capture → CRM/notification, review-request sequence, social auto-posting. Includes setup + testing + alerting |
| Automation audit | $500 flat | $500 | Process mapping + hours-wasted report + prioritized automation list. Credited against first build if they proceed within 30 days |

**Bundles (the real product):**

| Bundle | Price | Contents | vs separate |
|---|---|---|---|
| Local Launch | $6,500 | Website build + SEO/AEO setup + brand sheet | ~$8,000 |
| Full Rebrand | $9,500 | Branding + website + copywriting | ~$11,000 |
| Growth Stack | $12,500 | Website + SEO/AEO + 2 automations + copy | ~$15,000 |

---

## Monthly Retainer Tiers

Minimum term 3 months (matches the agreement). Hours don't roll over. Anything beyond included scope is quoted as a change request or a tier upgrade.

| | **Care** — $250/mo | **Growth** — $750/mo | **Partner** — $1,800/mo |
|---|---|---|---|
| Who it's for | "Keep it running" | "Bring me customers" | "Be my marketing department" |
| Hosting, domain, SSL, uptime monitoring | ✓ | ✓ | ✓ |
| Software updates + security patches | ✓ | ✓ | ✓ |
| Content/copy edits | 1 hr/mo | 3 hrs/mo | 8 hrs/mo |
| Monthly SEO maintenance (rankings, GBP, fixes) | — | ✓ | ✓ |
| AEO citation tracking + optimization | — | ✓ | ✓ |
| Monthly report (rankings, citations, traffic, leads) | uptime only | ✓ | ✓ |
| Blog/content pieces | — | 1/mo | 4/mo |
| Automation hosting + maintenance | +$100/mo per automation | 1 included | 3 included |
| Landing pages for campaigns | — | — | 1/quarter |
| Quarterly strategy call | — | ✓ | ✓ monthly |
| Response time | 3 business days | 2 business days | next business day |

**Notes**
- Automations are retainer-mandatory: if you built it, you host and maintain it. Standalone automation hosting without another retainer = $100/mo per automation, Care minimum.
- Annual prepay: 2 months free (i.e. pay 10). Improves cash flow, cuts churn.
- Grandfather pricing for the first 5 retainer clients per tier; raise list price after.

---

## Rationale

**Why these numbers.** Australian local agencies charge $3k–$15k for small-business websites and $500–$2,000/mo for SEO retainers; freelancers undercut at $1k–$3k but deliver slower and don't maintain. Growvera sits mid-market on price, top-market on speed (preview URL in days, not weeks) and on a capability nobody local sells yet: AEO. A plumber who shows up when someone asks ChatGPT "best plumber near me" understands that value instantly.

**Why retainers carry the business.** One-off fees fund delivery; retainers are the business. 20 Growth-tier clients = $15k MRR, sustainable solo. Every one-off project's closing email pitches the retainer while the preview-approval goodwill is fresh.

**Why 50/50 payment terms.** Deposit filters non-serious clients and funds the work; balance-on-approval is fair because they've seen the live preview before paying it. IP transfers only on final payment (enforced in the Service Agreement) — the preview URL stays yours until then.

**Why the automation audit is $500, not free.** Free audits attract tyre-kickers and devalue the findings. $500 is low enough to say yes to, high enough that they act on it — and it's credited back if they buy, so serious buyers effectively pay nothing extra.

**Why Care is only $250.** It's deliberately cheap insurance — near-zero marginal effort (hosting + an hour of edits) but it keeps the relationship alive, keeps their site on your infrastructure, and is the upgrade path to Growth. Churn from Care to nothing is rare; upgrade from Care to Growth is the expected motion.

**Review cadence.** Quarterly, using `pricing-strategy` + post-mortem hour data. If actual delivery hours put any service's effective rate under ~$120/hr, raise the price or tighten the scope.
