import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import Script from 'next/script'
import ScrollToTop from '@/components/scroll-to-top'
import { SITE_URL } from '@/lib/site-config'
import { GA_ID } from '@/lib/gtag'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dentist in Weatherford TX | F. Lee McLemore, DDS',
  description:
    'Need a reliable dentist in Weatherford, TX? Get expert family & cosmetic dental care near you. Serving Weatherford, Aledo, Mineral Wells & nearby areas. Call today!',
  keywords:
    'dentist Weatherford TX, family dentist Weatherford, cosmetic dentistry, pediatric dentistry, general dentistry, F. Lee McLemore DDS',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Dentist in Weatherford TX | F. Lee McLemore, DDS',
    description:
      'Expert family & cosmetic dental care in Weatherford, TX. Serving the greater Parker County area since 1991. New patients welcome — call (817) 594-8665.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'F. Lee McLemore, DDS',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'F. Lee McLemore, DDS — Family & Cosmetic Dentistry in Weatherford, TX',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentist in Weatherford TX | F. Lee McLemore, DDS',
    description:
      'Expert family & cosmetic dental care in Weatherford, TX. New patients welcome — call (817) 594-8665.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  userScalable: true,
  themeColor: '#2ec4b6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} bg-background`}>
      <head>
        {/* Preconnect to external image host used in LCP hero */}
        <link rel="preconnect" href="https://weatherforddentistrytx.com" />
        <link rel="dns-prefetch" href="https://weatherforddentistrytx.com" />
        {/* Preconnect to Google Fonts CDN (loaded by next/font but benefits from early hint) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      {/* pb-16 reserves space for the fixed mobile CTA bar on small screens, preventing CLS */}
      <body className="font-sans antialiased md:pb-0 pb-16">
        {/* GA4 — loads after page is interactive, does not block render */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
