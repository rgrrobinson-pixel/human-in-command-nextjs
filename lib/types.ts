export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  alt?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteSettings {
  _id?: string;
  siteName: string;
  tagline?: string;
  metaDescription?: string;
  contactEmail?: string;
  siteUrl?: string;
  navigation?: NavItem[];
  footerLinks?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  chatEnabled?: boolean;
  chatGreeting?: string;
  chatUrl?: string;
  logoUrl?: string;
  logo?: SanityImage;
}

export interface HeroContent {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  heroImage?: SanityImage;
}

export interface MethodPillar {
  number?: string;
  title?: string;
  body?: string;
}

export interface CaseStudy {
  title?: string;
  body?: string;
}

export interface CourseModule {
  title?: string;
  body?: string;
}

export interface FaqItem {
  _id?: string;
  question?: string;
  answer?: string;
}

export interface AboutSection {
  eyebrow?: string;
  heading: string;
  body?: any[];
  image?: SanityImage;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface LandingPageContent {
  _id?: string;
  hero?: HeroContent;
  introHeading?: string;
  introQuote?: string;
  methodEyebrow?: string;
  methodHeading?: string;
  methodBody?: string;
  methodPillars?: MethodPillar[];
  trialEyebrow?: string;
  trialHeading?: string;
  trialBody?: string;
  trialCtaLabel?: string;
  trialCtaHref?: string;
  proofEyebrow?: string;
  proofHeading?: string;
  proofBody?: string;
  caseStudies?: CaseStudy[];
  courseEyebrow?: string;
  courseHeading?: string;
  courseModules?: CourseModule[];
  faqHeading?: string;
  faqs?: FaqItem[];
  finalEyebrow?: string;
  finalHeading?: string;
  finalCtaLabel?: string;
  finalCtaHref?: string;
}

export interface SiteContent {
  settings: SiteSettings;
  landingPage: LandingPageContent | null;
  isMissingSanityConfig: boolean;
}
