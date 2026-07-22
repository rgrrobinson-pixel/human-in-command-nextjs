import { createClient } from 'next-sanity';
import type { LandingPageContent, SiteContent, SiteSettings } from './types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2026-07-21';

const fallbackSettings: SiteSettings = {
  siteName: 'Human in Command',
  tagline: "Roger Robinson's AI-era operating method",
  metaDescription:
    'Human in Command teaches non-programmers how to lead AI agents with judgement, structure, and weekly operating discipline.',
  contactEmail: 'rgrrobinson@gmail.com',
  siteUrl: 'https://human-in-command.vercel.app',
  navigation: [],
  ctaLabel: 'Join the early list',
  ctaHref: 'mailto:rgrrobinson@gmail.com?subject=Human%20in%20Command',
};

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
      perspective: 'published',
    })
  : null;

const settingsQuery = `*[_type == "siteSettings"][0]{
  _id,
  siteName,
  tagline,
  metaDescription,
  contactEmail,
  siteUrl,
  navigation,
  footerLinks,
  ctaLabel,
  ctaHref,
  logo
}`;

const landingPageQuery = `*[_type == "landingPage"][0]{
  _id,
  hero,
  introHeading,
  introQuote,
  methodEyebrow,
  methodHeading,
  methodBody,
  methodPillars,
  proofEyebrow,
  proofHeading,
  proofBody,
  caseStudies,
  courseEyebrow,
  courseHeading,
  courseModules,
  faqHeading,
  faqs,
  finalEyebrow,
  finalHeading,
  finalCtaLabel,
  finalCtaHref
}`;

export async function getSiteContent(): Promise<SiteContent> {
  if (!client) {
    return {
      settings: fallbackSettings,
      landingPage: null,
      isMissingSanityConfig: true,
    };
  }

  try {
    const [settings, landingPage] = await Promise.all([
      client.fetch<SiteSettings | null>(settingsQuery),
      client.fetch<LandingPageContent | null>(landingPageQuery),
    ]);

    return {
      settings: settings ?? fallbackSettings,
      landingPage,
      isMissingSanityConfig: false,
    };
  } catch (error) {
    console.error('Sanity content fetch failed', error);
    return {
      settings: fallbackSettings,
      landingPage: null,
      isMissingSanityConfig: false,
    };
  }
}
