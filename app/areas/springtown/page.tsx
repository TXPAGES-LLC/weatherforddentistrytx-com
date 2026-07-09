import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import SpringtownPage from '@/components/areas/springtown-page'

export const metadata: Metadata = {
  title: 'Dentist Near Springtown TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Springtown, TX families trust F. Lee McLemore, DDS in nearby Weatherford for general, cosmetic & pediatric dentistry. About 20 minutes south on TX-51. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/springtown` },
  openGraph: {
    title: 'Dentist Near Springtown TX | F. Lee McLemore, DDS — Weatherford',
    description: 'Family dentistry for Springtown residents. About 20 min south on TX-51. Call (817) 594-8665.',
    type: 'website',
    url: `${SITE_URL}/areas/springtown`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dentist near Springtown TX — F. Lee McLemore, DDS' }],
  },
}

export default function Page() {
  return <SpringtownPage />
}
