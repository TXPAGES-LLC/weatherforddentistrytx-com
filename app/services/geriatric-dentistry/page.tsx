import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Geriatric Dentistry in Weatherford TX | F. Lee McLemore, DDS',
  description:
    'Specialized dental care for older adults in Weatherford, TX. Dentures, implants, dry mouth treatment & more from Dr. F. Lee McLemore DDS. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/services/geriatric-dentistry` },
  openGraph: {
    title: 'Geriatric Dentistry in Weatherford TX | F. Lee McLemore, DDS',
    description: 'Specialized dental care for older adults in Weatherford, TX. Dentures, implants & dry mouth treatment from Dr. McLemore.',
    type: 'website',
    url: `${SITE_URL}/services/geriatric-dentistry`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Geriatric Dentistry — F. Lee McLemore, DDS, Weatherford TX' }],
  },
}

const relatedServices = [
  { label: 'General Dentistry', href: '/services/general-dentistry' },
  { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
  { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
  { label: 'Special Needs Dentistry', href: '/services/special-needs-dentistry' },
]

export default function GeriatricDentistryPage() {
  return (
    <ServicePageTemplate
      title="Geriatric Dentistry"
      headline="Geriatric Dentistry in Weatherford, TX"
      metaDescription="Compassionate dental care for older adults in Weatherford, TX."
      heroText="Dental needs change as we age. Dr. F. Lee McLemore offers specialized geriatric dentistry in Weatherford, TX, addressing the unique oral health challenges that come with aging — with the patience, expertise, and compassion older patients deserve."
      services={[
        {
          title: 'Complete & Partial Dentures',
          description:
            'Custom-fitted removable dentures designed for comfort, function, and a natural appearance — whether replacing a few teeth or a full arch.',
        },
        {
          title: 'Dental Implants',
          description:
            'Permanent tooth replacement that looks, feels, and functions like natural teeth. Ideal for patients who want a long-term solution to tooth loss.',
        },
        {
          title: 'Implant-Supported Dentures',
          description:
            'The stability of implants combined with the coverage of dentures — a superior option for patients with multiple missing teeth.',
        },
        {
          title: 'Dry Mouth Treatment',
          description:
            'Management of xerostomia (dry mouth), a common side effect of many medications, to protect teeth from the accelerated decay it causes.',
        },
        {
          title: 'Gum Disease Management',
          description:
            'Ongoing periodontal care to control gum disease — especially important as age increases susceptibility to bone and tissue loss.',
        },
        {
          title: 'Dental Bridges',
          description:
            'Fixed tooth replacements anchored to adjacent teeth, restoring your ability to chew and speak comfortably without removable appliances.',
        },
      ]}
      whySection={{
        heading: 'Dignified, Comfortable Care for Older Adults',
        body:
          'Dr. McLemore understands that older patients may have mobility limitations, medical complexities, or dental anxiety. We take extra time with each senior patient to ensure they are comfortable, informed, and receiving care that fits their overall health picture.',
        bullets: [
          'Experience with medically complex patients',
          'Coordination with physician care when needed',
          'Gentle approach for patients with sensitivity or anxiety',
          'Accessible office location in Weatherford',
          'Flexible appointment scheduling',
        ],
      }}
      relatedServices={relatedServices}
      faqItems={[
        {
          question: 'Can older adults get dental implants?',
          answer:
            'Yes, age alone is not a barrier to dental implants. Good bone density and overall health are more important factors. Dr. McLemore will evaluate your candidacy during a consultation.',
        },
        {
          question: 'How does medication affect dental health in older adults?',
          answer:
            'Many common medications cause dry mouth, which significantly increases cavity risk. Some blood thinners and other drugs also affect dental treatment planning. Always share your full medication list with our team.',
        },
      ]}
    />
  )
}
