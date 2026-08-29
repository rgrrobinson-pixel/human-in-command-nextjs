import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const builder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source: any) {
  return builder?.image(source) ?? null;
}
