import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Granbury TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Granbury, TX families travel to F. Lee McLemore, DDS in Weatherford for expert dental care. General, cosmetic & pediatric dentistry. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/granbury` },
}
