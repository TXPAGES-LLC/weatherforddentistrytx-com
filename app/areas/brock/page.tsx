import type { Metadata } from 'next'
import BrockPage from '@/components/areas/brock-page'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Brock TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Brock, TX residents visit F. Lee McLemore, DDS in Weatherford for comprehensive dental care. General, cosmetic & family dentistry. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/brock` },
}

export default function Page() {
  return <BrockPage />
}
