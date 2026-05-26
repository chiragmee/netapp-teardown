# NetApp Product Teardown — Chirag Mewara

> A deep PM-style teardown of NetApp's product, positioning, and strategic opportunities in the enterprise infrastructure market.

**Live:** [netapp-teardown.vercel.app](https://netapp-teardown.vercel.app)

---

## Why This Was Built

Product teardowns are a core PM skill — the ability to read a market, understand a product's strategic position, identify gaps, and propose prioritized bets without inside information. This teardown demonstrates that skill end-to-end.

NetApp sits at an inflection point: a legacy storage vendor trying to reposition as a multi-cloud data infrastructure platform. That tension — between what it is and what it needs to become — makes it worth pulling apart.

---

## What's Covered

The teardown is structured as an interactive experience across 11 sections:

| Section | What It Covers |
|---|---|
| Hero | NetApp overview, key stats, and framing |
| The True Problem | Why AI and cloud create data layer challenges NetApp is uniquely positioned — but struggling — to address |
| Proof It's Real | Market data, analyst reports, and customer evidence |
| User Personas | Enterprise infrastructure buyer + NetApp platform engineer |
| Market Sizing | TAM / SAM / SOM with bottoms-up sizing methodology |
| Pain Points | Real G2 and Gartner user quotes on where NetApp falls short |
| Competitive Landscape | NetApp vs Pure Storage vs AWS vs Cohesity — positioning map |
| Product Solution | How ONTAP, BlueXP, and Keystone address the AI data problem |
| RICE Prioritisation | 6 product bets scored and ranked with explicit rationale |
| Metrics | North Star metric + AARRR framework applied to enterprise infra |
| GTM & Risks | Go-to-market recommendations and risk matrix |

---

## Product Thinking Demonstrated

- **TAM/SAM/SOM** with bottoms-up sizing, not just top-down analyst estimates
- **Competitive positioning** using a multi-dimensional map, not a feature checklist
- **RICE prioritization** with explicit assumptions behind reach, impact, and effort scores
- **Persona-driven framing** — every problem statement tied to a specific user experiencing it
- **GTM strategy** grounded in NetApp's existing enterprise motion

---

## Tech Stack

| | |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (formerly Framer Motion) |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Running Locally

```bash
git clone https://github.com/chiragmee/netapp-teardown.git
cd netapp-teardown
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build    # production build
npm run preview  # preview production build locally
```

---

## Author

Chirag Mewara · Associate Product Manager  
chirag.mewara.18@gmail.com · [chirag-mewara-portfolio.vercel.app](https://chirag-mewara-portfolio.vercel.app)
