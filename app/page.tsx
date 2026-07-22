import Image from 'next/image';
import { getSiteContent } from '@/lib/getContent';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const { settings, landingPage, isMissingSanityConfig } = await getSiteContent();

  if (!landingPage) {
    return (
      <>
        <section className="hero content-soon" id="top">
          <Image
            className="hero__image"
            src="/human-in-command-hero.png"
            alt="A mature business architect directing AI-assisted workstreams in a calm studio."
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__scrim" />
          <div className="hero__content">
            <p className="eyebrow">{settings.tagline ?? 'Human in Command'}</p>
            <h1>Content coming soon</h1>
            <p className="hero__copy">
              The Human in Command website is connected to Sanity. Create and
              publish a Landing Page document in Studio to replace this placeholder.
            </p>
            {isMissingSanityConfig && (
              <p className="config-note">
                Sanity environment variables are not configured yet.
              </p>
            )}
          </div>
        </section>
        <footer className="footer">
          <p>{settings.siteName} by Roger Robinson</p>
          <p>Sunshine Coast, Australia</p>
        </footer>
      </>
    );
  }

  const hero = landingPage.hero ?? {};

  return (
    <>
      <section className="hero" id="top">
        <Image
          className="hero__image"
          src="/human-in-command-hero.png"
          alt="A mature business architect directing AI-assisted workstreams in a calm studio."
          fill
          priority
          sizes="100vw"
        />
        <div className="hero__scrim" />
        <div className="hero__content">
          <p className="eyebrow">{hero.eyebrow ?? settings.tagline ?? 'Human in Command'}</p>
          <h1>{hero.headline ?? 'Content coming soon'}</h1>
          <p className="hero__copy">
            {hero.subheadline ??
              'Create and publish the Landing Page content in Sanity Studio to complete this page.'}
          </p>
          <div className="button-row">
            {hero.primaryCtaLabel && hero.primaryCtaHref && (
              <a className="button button--primary" href={hero.primaryCtaHref}>
                {hero.primaryCtaLabel}
              </a>
            )}
            {hero.secondaryCtaLabel && hero.secondaryCtaHref && (
              <a className="button button--secondary" href={hero.secondaryCtaHref}>
                {hero.secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="intro-band__heading">
          <p>{landingPage.introHeading}</p>
        </div>
        <aside className="quote-panel">
          <p>{landingPage.introQuote}</p>
        </aside>
      </section>

      <section className="section" id="method">
        <div className="section-heading">
          <p className="eyebrow">{landingPage.methodEyebrow}</p>
          <h2>{landingPage.methodHeading}</h2>
          <p>{landingPage.methodBody}</p>
        </div>
        <div className="method-grid">
          {(landingPage.methodPillars ?? []).map((pillar) => (
            <article key={pillar.number ?? pillar.title}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="proof">
        <div>
          <p className="eyebrow">{landingPage.proofEyebrow}</p>
          <h2>{landingPage.proofHeading}</h2>
          <p>{landingPage.proofBody}</p>
        </div>
        <div className="proof-list">
          {(landingPage.caseStudies ?? []).map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section course" id="course">
        <div className="section-heading">
          <p className="eyebrow">{landingPage.courseEyebrow}</p>
          <h2>{landingPage.courseHeading}</h2>
        </div>
        <ol className="course-list">
          {(landingPage.courseModules ?? []).map((module) => (
            <li key={module.title}>
              <span>{module.title}</span>
              {module.body}
            </li>
          ))}
        </ol>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">Questions</p>
          <h2>{landingPage.faqHeading}</h2>
        </div>
        <div className="faq-list">
          {(landingPage.faqs ?? []).map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">{landingPage.finalEyebrow}</p>
          <h2>{landingPage.finalHeading}</h2>
        </div>
        {landingPage.finalCtaLabel && landingPage.finalCtaHref && (
          <a className="button button--primary" href={landingPage.finalCtaHref}>
            {landingPage.finalCtaLabel}
          </a>
        )}
      </section>

      <footer className="footer">
        <p>{settings.siteName} by Roger Robinson</p>
        <p>Sunshine Coast, Australia</p>
      </footer>
    </>
  );
}
