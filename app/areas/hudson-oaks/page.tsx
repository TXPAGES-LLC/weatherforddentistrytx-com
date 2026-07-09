import type { Metadata } from 'next'
import HudsonOaksPage from '@/components/areas/hudson-oaks-page'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Hudson Oaks TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Hudson Oaks, TX residents trust F. Lee McLemore, DDS in Weatherford for comprehensive family dental care. New patients welcome — call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/hudson-oaks` },
  openGraph: {
    title: 'Dentist Serving Hudson Oaks TX | F. Lee McLemore, DDS — Weatherford',
    description: 'Comprehensive family dental care for Hudson Oaks, TX residents. Located in Weatherford. Call (817) 594-8665.',
    type: 'website',
    url: `${SITE_URL}/areas/hudson-oaks`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dentist serving Hudson Oaks TX — F. Lee McLemore, DDS' }],
  },
}

export default function Page() {
  return <HudsonOaksPage />
}
