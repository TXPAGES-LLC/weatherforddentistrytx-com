import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Aledo TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Aledo, TX families trust F. Lee McLemore, DDS in nearby Weatherford for general, cosmetic & pediatric dentistry. Easy drive from Aledo — call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/aledo` },
}
