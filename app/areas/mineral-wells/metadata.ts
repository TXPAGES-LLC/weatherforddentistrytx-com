import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Mineral Wells TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Mineral Wells, TX patients choose F. Lee McLemore, DDS in Weatherford for trusted dental care. General, cosmetic & family dentistry. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/mineral-wells` },
}
