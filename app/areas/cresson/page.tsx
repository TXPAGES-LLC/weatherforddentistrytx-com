import type { Metadata } from 'next'
import CressonPage from '@/components/areas/cresson-page'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Cresson TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Cresson, TX patients choose F. Lee McLemore, DDS in Weatherford for trusted family dental care. New patients welcome — call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/cresson` },
}

export default function Page() {
  return <CressonPage />
}
