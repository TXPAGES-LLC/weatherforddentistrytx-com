import type { Metadata } from 'next'
import BrockPage from '@/components/areas/brock-page'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Brock TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Brock, TX residents visit F. Lee McLemore, DDS in Weatherford for comprehensive dental care. General, cosmetic & family dentistry. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/brock` },
  openGraph: {
    title: 'Dentist Serving Brock TX | F. Lee McLemore, DDS — Weatherford',
    description: 'General, cosmetic & family dentistry for Brock, TX residents. Located in nearby Weatherford. Call (817) 594-8665.',
    type: 'website',
    url: `${SITE_URL}/areas/brock`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dentist serving Brock TX — F. Lee McLemore, DDS' }],
  },
}

export default function Page() {
  return <BrockPage />
}
