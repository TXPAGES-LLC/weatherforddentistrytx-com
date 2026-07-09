import type { Metadata } from 'next'
import WeatherfordPage from '@/components/areas/weatherford-page'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dentist for Weatherford TX Residents | F. Lee McLemore, DDS',
  description:
    'F. Lee McLemore, DDS has served Weatherford, TX families since 1991. General, cosmetic, pediatric & special needs dentistry at 610 Eureka St. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/weatherford` },
  openGraph: {
    title: 'Dentist for Weatherford TX Residents | F. Lee McLemore, DDS',
    description: 'Serving Weatherford, TX families since 1991. General, cosmetic, pediatric & special needs dentistry. Call (817) 594-8665.',
    type: 'website',
    url: `${SITE_URL}/areas/weatherford`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dentist in Weatherford TX — F. Lee McLemore, DDS' }],
  },
}

export default function Page() {
  return <WeatherfordPage />
}
