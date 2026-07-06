import type { Metadata } from 'next'
import ContactPageClient from '@/components/contact-page-client'

export const metadata: Metadata = {
  title: 'Contact Us | F. Lee McLemore, DDS — Dentist in Weatherford, TX',
  description:
    'Get in touch with our Weatherford dental office. Call (817) 594-8665, visit us at 610 Eureka St, or use the form to send a message. We serve Parker County and surrounding areas.',
  alternates: {
    canonical: 'https://weatherforddentistrytx.com/contact',
  },
  openGraph: {
    title: 'Contact Us | F. Lee McLemore, DDS — Dentist in Weatherford, TX',
    description: 'Call (817) 594-8665 or visit 610 Eureka St, Weatherford TX. Mon–Thu 8am–5pm.',
    type: 'website',
    url: 'https://weatherforddentistrytx.com/contact',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contact F. Lee McLemore, DDS — Weatherford, TX' }],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
