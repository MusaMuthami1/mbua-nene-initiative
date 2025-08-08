import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = { className: '' };

export const metadata: Metadata = {
  title: {
    default: 'Mbua Nene Initiative - Empowering Communities, Transforming Lives',
    template: '%s | Mbua Nene Initiative'
  },
  description: 'Creating sustainable positive change in East African communities through education, healthcare, environmental stewardship, and economic empowerment programs designed and implemented in partnership with local communities.',
  keywords: ['nonprofit', 'NGO', 'East Africa', 'community development', 'education', 'healthcare', 'environment', 'volunteer'],
  authors: [{ name: 'Mbua Nene Initiative' }],
  creator: 'Mbua Nene Initiative',
  publisher: 'Mbua Nene Initiative',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mbuanene.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Mbua Nene Initiative',
    title: 'Mbua Nene Initiative - Empowering Communities, Transforming Lives',
    description: 'Creating sustainable positive change in East African communities through education, healthcare, environmental stewardship, and economic empowerment programs.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mbua Nene Initiative - Community members working together on development projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mbuanene',
    creator: '@mbuanene',
    title: 'Mbua Nene Initiative - Empowering Communities, Transforming Lives',
    description: 'Creating sustainable positive change in East African communities through education, healthcare, environmental stewardship, and economic empowerment programs.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Mbua Nene Initiative",
              "alternateName": "Mbua Nene",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://mbuanene.org",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://mbuanene.org"}/images/logo.png`,
              "description": "Creating sustainable positive change in East African communities through education, healthcare, environmental stewardship, and economic empowerment programs designed and implemented in partnership with local communities.",
              "foundingDate": "2018",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Kenya",
                "addressLocality": "Nairobi",
                "postalCode": "12345",
                "streetAddress": "P.O. Box 12345"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254 700 123 456",
                "contactType": "customer service",
                "email": "info@mbuanene.org"
              },
              "sameAs": [
                "https://facebook.com/mbuaneneinitiative",
                "https://twitter.com/mbuanene",
                "https://instagram.com/mbuaneneinitiative",
                "https://linkedin.com/company/mbua-nene-initiative"
              ],
              "areaServed": ["Kenya", "Uganda", "Tanzania"],
              "knowsAbout": ["Community Development", "Education", "Healthcare", "Environmental Conservation", "Economic Empowerment"]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}