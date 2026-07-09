import type { Metadata } from 'next'
import MineralWellsPage from '@/components/areas/mineral-wells-page'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Mineral Wells TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Mineral Wells, TX patients choose F. Lee McLemore, DDS in Weatherford for trusted dental care. General, cosmetic & family dentistry. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/mineral-wells` },
  openGraph: {
    title: 'Dentist Serving Mineral Wells TX | F. Lee McLemore, DDS — Weatherford',
    description: 'General, cosmetic & family dentistry for Mineral Wells, TX patients. Serving the area from Weatherford. Call (817) 594-8665.',
    type: 'website',
    url: `${SITE_URL}/areas/mineral-wells`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dentist serving Mineral Wells TX — F. Lee McLemore, DDS' }],
  },
}

export default function Page() {
  return <MineralWellsPage />
}
