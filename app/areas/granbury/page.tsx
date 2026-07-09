import type { Metadata } from 'next'
import GranburyPage from '@/components/areas/granbury-page'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Granbury TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Granbury, TX families travel to F. Lee McLemore, DDS in Weatherford for expert dental care. General, cosmetic & pediatric dentistry. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/granbury` },
  openGraph: {
    title: 'Dentist Serving Granbury TX | F. Lee McLemore, DDS — Weatherford',
    description: 'General, cosmetic & pediatric dentistry for Granbury, TX families. Located in Weatherford. Call (817) 594-8665.',
    type: 'website',
    url: `${SITE_URL}/areas/granbury`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dentist serving Granbury TX — F. Lee McLemore, DDS' }],
  },
}

export default function Page() {
  return <GranburyPage />
}
