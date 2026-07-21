# Human in Command — Next.js + Sanity

Human in Command is Roger Robinson's AI-era operating method for non-programmer business architects.

This site was adapted from the `solo-launch-nextjs` template and converted into a dedicated Human in Command authority site.

## Stack

- Next.js 15 App Router
- React 19
- Sanity CMS schemas for editable site content
- Vercel-ready deployment

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The site uses built-in sample content when Sanity is not configured, so it will run immediately.

## Sanity Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-21
NEXT_PUBLIC_SITE_URL=https://humanincommand.com.au
```

## Editable Content Types

Sanity Studio includes:

- `Site Settings`
- `Landing Page`

The landing page document controls:

- Hero copy
- Intro quote
- Method pillars
- Proof/case studies
- Course modules
- FAQs
- Final CTA

## Deployment

Push the repo to GitHub, then import it into Vercel.

Once the domain is registered, point `humanincommand.com.au` at the Vercel project.

## Current Note

This is the first Next.js/Sanity version of the site. It intentionally keeps the architecture simple: one strong landing page first, then expand into course, articles, case studies, and lead capture once the positioning is proven.
