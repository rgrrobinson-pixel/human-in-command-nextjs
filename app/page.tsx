import Image from 'next/image';
import { getSiteContent } from '@/lib/getContent';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const { settings, landingPage, usingSampleContent } = await getSiteContent();
  const hero = landingPage.hero;

  return (
    <>
      {usingSampleContent && (
        <div className="sample-banner">
          Demo mode: connect Sanity content to replace the built-in Human in Command copy.
        </div>
      )}

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
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p className="hero__copy">{hero.subheadline}</p>
          <div className="button-row">
            <a className="button button--primary" href={hero.primaryCtaHref}>
              {hero.primaryCtaLabel}
            </a>
            <a className="button button--secondary" href={hero.secondaryCtaHref}>
              {hero.secondaryCtaLabel}
            </a>
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
          {landingPage.methodPillars.map((pillar) => (
            <article key={pillar.number}>
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
          {landingPage.caseStudies.map((item) => (
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
          {landingPage.courseModules.map((module) => (
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
          {landingPage.faqs.map((faq) => (
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
        <a className="button button--primary" href={landingPage.finalCtaHref}>
          {landingPage.finalCtaLabel}
        </a>
      </section>

      <footer className="footer">
        <p>{settings.siteName} by Roger Robinson</p>
        <p>Sunshine Coast, Australia</p>
      </footer>
    </>
  );
}
