import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Stephenville TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Stephenville & Erath County families trust F. Lee McLemore, DDS in Weatherford for family, cosmetic & pediatric dental care. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/stephenville` },
}
