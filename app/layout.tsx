import type { Metadata } from 'next';
import './globals.css';
import { getSiteContent } from '@/lib/getContent';

export async function generateMetadata(): Promise<Metadata> {
  const { settings, landingPage } = await getSiteContent();

  return {
    title: `${settings.siteName} | Roger Robinson`,
    description: settings.metaDescription ?? landingPage.hero.subheadline,
    metadataBase: new URL(settings.siteUrl ?? 'https://humanincommand.com.au'),
    openGraph: {
      title: settings.siteName,
      description: settings.metaDescription ?? landingPage.hero.subheadline,
      type: 'website',
      images: [{ url: '/human-in-command-hero.png', width: 1200, height: 630 }],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings } = await getSiteContent();

  return (
    <html lang="en-AU">
      <body>
        <header className="site-header">
          <a className="brand" href="#top" aria-label={`${settings.siteName} home`}>
            <span className="brand-mark">HIC</span>
            <span>{settings.siteName}</span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            {(settings.navigation ?? []).map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          {settings.ctaLabel && settings.ctaHref && (
            <a className="header-cta" href={settings.ctaHref}>
              {settings.ctaLabel}
            </a>
          )}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
