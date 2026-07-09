import type { Metadata } from 'next'
import AledoPage from '@/components/areas/aledo-page'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Aledo TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Aledo, TX families trust F. Lee McLemore, DDS in nearby Weatherford for general, cosmetic & pediatric dentistry. Easy drive from Aledo — call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/aledo` },
  openGraph: {
    title: 'Dentist Serving Aledo TX | F. Lee McLemore, DDS — Weatherford',
    description: 'General, cosmetic & pediatric dentistry for Aledo families. Just minutes away in Weatherford. Call (817) 594-8665.',
    type: 'website',
    url: `${SITE_URL}/areas/aledo`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dentist serving Aledo TX — F. Lee McLemore, DDS' }],
  },
}

export default function Page() {
  return <AledoPage />
}
