import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Special Needs Dentistry in Weatherford TX | F. Lee McLemore, DDS',
  description:
    'Compassionate special needs dentistry in Weatherford, TX. Adapted dental care for patients with physical, cognitive, or medical conditions. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/services/special-needs-dentistry` },
  openGraph: {
    title: 'Special Needs Dentistry in Weatherford TX | F. Lee McLemore, DDS',
    description: 'Adapted dental care for patients with physical, cognitive, or medical conditions in Weatherford, TX.',
    type: 'website',
    url: `${SITE_URL}/services/special-needs-dentistry`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Special Needs Dentistry — F. Lee McLemore, DDS, Weatherford TX' }],
  },
}

const relatedServices = [
  { label: 'General Dentistry', href: '/services/general-dentistry' },
  { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
  { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
  { label: 'Geriatric Dentistry', href: '/services/geriatric-dentistry' },
]

export default function SpecialNeedsDentistryPage() {
  return (
    <ServicePageTemplate
      title="Special Needs Dentistry"
      headline="Special Needs Dentistry in Weatherford, TX"
      metaDescription="Adapted, compassionate dental care for patients with special needs in Weatherford, TX."
      heroText="Every patient deserves quality dental care, regardless of their physical, cognitive, or medical challenges. Dr. F. Lee McLemore and his team are committed to providing individualized, compassionate dental treatment for patients with special needs in Weatherford, TX."
      services={[
        {
          title: 'Individualized Treatment Planning',
          description:
            'Every patient is unique. We develop a custom care plan that accounts for your specific condition, communication needs, and comfort level.',
        },
        {
          title: 'Adaptive Communication',
          description:
            'Our team is experienced in communicating with patients who have cognitive, developmental, or communication differences — using patience, visual aids, and a calm approach.',
        },
        {
          title: 'Physical Accessibility',
          description:
            'Our Weatherford office is designed to accommodate patients with mobility limitations, including those who use wheelchairs or other assistive devices.',
        },
        {
          title: 'Sensory-Friendly Appointments',
          description:
            'For patients with sensory sensitivities, we can adjust the environment — reducing noise, limiting bright lights, and slowing down procedures — to create a more comfortable experience.',
        },
        {
          title: 'Caregiver Collaboration',
          description:
            'We work closely with caregivers, parents, and support staff to understand each patient\'s needs and provide detailed home care guidance tailored to their abilities.',
        },
        {
          title: 'Medical History Coordination',
          description:
            'For patients with complex medical histories, we coordinate with physicians to ensure dental treatment is safe, appropriate, and minimizes risks.',
        },
      ]}
      whySection={{
        heading: 'Inclusive Dental Care for Every Patient',
        body:
          'Dr. McLemore believes that dental care is a right, not a privilege — and that includes patients who need a little extra time, patience, or accommodation. Our team approaches every special needs patient with dignity, respect, and genuine compassion.',
        bullets: [
          'Experience with a wide range of physical and cognitive conditions',
          'Flexible, unhurried appointments',
          'Family and caregiver welcome throughout the visit',
          'Patient history thoroughly reviewed before treatment',
          'Serving patients of all abilities in Weatherford and Parker County',
        ],
      }}
      relatedServices={relatedServices}
      faqItems={[
        {
          question: 'Does Dr. McLemore see patients with autism?',
          answer:
            'Yes. We have experience working with autistic patients and can adapt our approach — including sensory accommodations, visual schedules, and a patient pace — to make the visit as comfortable as possible.',
        },
        {
          question: 'Can I accompany my loved one into the treatment room?',
          answer:
            'Absolutely. For patients who benefit from having a familiar caregiver or family member present during treatment, we welcome that. Please let us know in advance so we can plan accordingly.',
        },
        {
          question: 'How do I prepare a patient with special needs for a dental visit?',
          answer:
            'Call our office ahead of your appointment. We are happy to walk through the visit in advance, discuss any concerns, and share strategies that have worked for other patients in similar situations.',
        },
      ]}
    />
  )
}
