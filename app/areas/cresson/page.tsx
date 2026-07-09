import type { Metadata } from 'next'
import CressonPage from '@/components/areas/cresson-page'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Cresson TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Cresson, TX patients choose F. Lee McLemore, DDS in Weatherford for trusted family dental care. New patients welcome — call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/cresson` },
  openGraph: {
    title: 'Dentist Serving Cresson TX | F. Lee McLemore, DDS — Weatherford',
    description: 'Trusted family dental care for Cresson, TX patients. New patients welcome in Weatherford. Call (817) 594-8665.',
    type: 'website',
    url: `${SITE_URL}/areas/cresson`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dentist serving Cresson TX — F. Lee McLemore, DDS' }],
  },
}

export default function Page() {
  return <CressonPage />
}
