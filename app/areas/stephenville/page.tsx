import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import StephenvillePage from '@/components/areas/stephenville-page'

export const metadata: Metadata = {
  title: 'Dentist Near Stephenville TX | F. Lee McLemore, DDS — Weatherford',
  description:
    'Stephenville, TX residents welcome at F. Lee McLemore, DDS in Weatherford. Geriatric & special needs dentistry available. About 45 min northeast on US-281. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/areas/stephenville` },
  openGraph: {
    title: 'Dentist Near Stephenville TX | F. Lee McLemore, DDS — Weatherford',
    description: 'Dental care for Stephenville residents. Geriatric & special needs expertise. Call (817) 594-8665.',
    type: 'website',
    url: `${SITE_URL}/areas/stephenville`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dentist near Stephenville TX — F. Lee McLemore, DDS' }],
  },
}

export default function Page() {
  return <StephenvillePage />
}
