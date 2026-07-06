import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist Serving Hudson Oaks TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Hudson Oaks, TX residents trust F. Lee McLemore, DDS in Weatherford for comprehensive family dental care. New patients welcome — call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/hudson-oaks` },
}
