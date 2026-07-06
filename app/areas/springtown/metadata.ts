import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Springtown TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Springtown, TX families trust F. Lee McLemore, DDS in Weatherford for comprehensive dental care. New patients welcome — call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/springtown` },
}
