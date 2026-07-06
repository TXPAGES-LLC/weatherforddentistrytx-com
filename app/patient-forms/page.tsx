import type { Metadata } from 'next'
import PatientFormsClient from '@/components/patient-forms-client'

export const metadata: Metadata = {
  title: 'Patient Forms | F. Lee McLemore, DDS — Weatherford TX Dentist',
  description:
    'Download and complete our new patient forms before your visit to F. Lee McLemore, DDS in Weatherford, TX. Save time at your appointment.',
  alternates: {
    canonical: 'https://weatherforddentistrytx.com/patient-forms',
  },
  openGraph: {
    title: 'Patient Forms | F. Lee McLemore, DDS — Weatherford TX Dentist',
    description: 'Download new patient forms for F. Lee McLemore, DDS in Weatherford, TX. Save time at your first appointment.',
    type: 'website',
    url: 'https://weatherforddentistrytx.com/patient-forms',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Patient Forms — F. Lee McLemore, DDS' }],
  },
}

export default function PatientFormsPage() {
  return <PatientFormsClient />
}
