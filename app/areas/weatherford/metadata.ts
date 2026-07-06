import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist in Weatherford TX | F. Lee McLemore, DDS',
  description:
    'F. Lee McLemore, DDS provides comprehensive dental care to Weatherford, TX residents. General, cosmetic, pediatric & special needs dentistry. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/weatherford` },
}
