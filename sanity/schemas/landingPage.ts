import { defineField, defineType } from 'sanity';

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'subheadline', title: 'Subheadline', type: 'text', rows: 4 }),
        defineField({ name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string' }),
        defineField({ name: 'primaryCtaHref', title: 'Primary CTA Link', type: 'string' }),
        defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string' }),
        defineField({ name: 'secondaryCtaHref', title: 'Secondary CTA Link', type: 'string' }),
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({ name: 'introHeading', title: 'Intro Heading', type: 'text', rows: 3 }),
    defineField({ name: 'introQuote', title: 'Intro Quote', type: 'text', rows: 3 }),
    defineField({ name: 'methodEyebrow', title: 'Method Eyebrow', type: 'string' }),
    defineField({ name: 'methodHeading', title: 'Method Heading', type: 'string' }),
    defineField({ name: 'methodBody', title: 'Method Body', type: 'text', rows: 3 }),
    defineField({
      name: 'methodPillars',
      title: 'Method Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
          ],
        },
      ],
    }),
    defineField({ name: 'trialEyebrow', title: 'Trial Eyebrow', type: 'string' }),
    defineField({ name: 'trialHeading', title: 'Trial Heading', type: 'text', rows: 3 }),
    defineField({ name: 'trialBody', title: 'Trial Body', type: 'text', rows: 6 }),
    defineField({ name: 'trialCtaLabel', title: 'Trial CTA Label', type: 'string' }),
    defineField({ name: 'trialCtaHref', title: 'Trial CTA Link', type: 'string' }),
    defineField({ name: 'proofEyebrow', title: 'Proof Eyebrow', type: 'string' }),
    defineField({ name: 'proofHeading', title: 'Proof Heading', type: 'string' }),
    defineField({ name: 'proofBody', title: 'Proof Body', type: 'text', rows: 4 }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
          ],
        },
      ],
    }),
    defineField({ name: 'courseEyebrow', title: 'Course Eyebrow', type: 'string' }),
    defineField({ name: 'courseHeading', title: 'Course Heading', type: 'string' }),
    defineField({
      name: 'courseModules',
      title: 'Course Modules',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
          ],
        },
      ],
    }),
    defineField({ name: 'faqHeading', title: 'FAQ Heading', type: 'string' }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 3 }),
          ],
        },
      ],
    }),
    defineField({ name: 'finalEyebrow', title: 'Final CTA Eyebrow', type: 'string' }),
    defineField({ name: 'finalHeading', title: 'Final CTA Heading', type: 'string' }),
    defineField({ name: 'finalCtaLabel', title: 'Final CTA Label', type: 'string' }),
    defineField({ name: 'finalCtaHref', title: 'Final CTA Link', type: 'string' }),
  ],
  preview: {
    select: { title: 'hero.headline', subtitle: 'hero.eyebrow', media: 'hero.heroImage' },
  },
});
