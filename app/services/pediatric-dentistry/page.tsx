import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Pediatric Dentistry in Weatherford TX | F. Lee McLemore, DDS',
  description:
    'Gentle kids & pediatric dentistry in Weatherford, TX. First dental visits, cleanings, sealants & fluoride for children of all ages. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/services/pediatric-dentistry` },
  openGraph: {
    title: 'Pediatric Dentistry in Weatherford TX | F. Lee McLemore, DDS',
    description: 'Gentle dental care for kids of all ages in Weatherford, TX. First visits, cleanings, sealants & fluoride from Dr. McLemore.',
    type: 'website',
    url: `${SITE_URL}/services/pediatric-dentistry`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Pediatric Dentistry — F. Lee McLemore, DDS, Weatherford TX' }],
  },
}

const relatedServices = [
  { label: 'General Dentistry', href: '/services/general-dentistry' },
  { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
  { label: 'Geriatric Dentistry', href: '/services/geriatric-dentistry' },
  { label: 'Special Needs Dentistry', href: '/services/special-needs-dentistry' },
]

export default function PediatricDentistryPage() {
  return (
    <ServicePageTemplate
      title="Pediatric Dentistry"
      headline="Pediatric Dentistry in Weatherford, TX"
      metaDescription="Gentle, friendly dental care for children in Weatherford, TX."
      heroText="Building great dental habits starts early. Dr. F. Lee McLemore provides gentle, patient, and kid-friendly dental care in Weatherford, TX — creating positive experiences that set your child up for a lifetime of healthy smiles."
      services={[
        {
          title: "First Dental Visits",
          description:
            "We recommend a child's first dental visit by their first birthday or when their first tooth appears. Early visits establish comfort and allow us to monitor development.",
        },
        {
          title: 'Dental Exams & Cleanings for Children',
          description:
            'Regular preventive care visits tailored to children, with gentle cleanings, fluoride treatment, and a thorough check of growth and development.',
        },
        {
          title: 'Fluoride Treatments',
          description:
            'Professional fluoride applications that strengthen developing tooth enamel and dramatically reduce the risk of cavities in children.',
        },
        {
          title: 'Dental Sealants',
          description:
            'Thin protective coatings applied to the chewing surfaces of back teeth — the most cavity-prone areas — to shield them from decay.',
        },
        {
          title: 'Cavity Fillings for Kids',
          description:
            'Gentle, tooth-colored fillings that restore decayed baby and permanent teeth with minimal discomfort for your child.',
        },
        {
          title: 'Orthodontic Screening',
          description:
            'Early assessment of tooth alignment and jaw development to identify any orthodontic needs before they become larger issues.',
        },
      ]}
      whySection={{
        heading: 'Making Kids Feel at Home at the Dentist',
        body:
          'We understand that dental visits can feel scary for children. Our team goes out of its way to create a calm, welcoming, and fun environment where kids feel safe. A positive first experience at the dentist is a gift that lasts a lifetime.',
        bullets: [
          'Patient, gentle approach designed for children',
          'Fun, welcoming office environment',
          'Parent education on home care and nutrition',
          'Serving children from infancy through the teen years',
          'Part of a full-family practice — the whole family in one place',
        ],
      }}
      relatedServices={relatedServices}
      faqItems={[
        {
          question: 'When should my child first visit the dentist?',
          answer:
            "The American Dental Association recommends a child's first dental visit within six months of the first tooth erupting, or by their first birthday — whichever comes first.",
        },
        {
          question: 'How can I prepare my child for their first dental visit?',
          answer:
            'Read books about dentist visits, play pretend dentist at home, and keep your own attitude positive. Avoid using the dentist as a threat for not brushing. Call our office and we are happy to walk you through what to expect.',
        },
        {
          question: 'How often should children see the dentist?',
          answer:
            'Most children benefit from dental exams and cleanings every six months. Some children with higher cavity risk may need to visit more frequently.',
        },
      ]}
    />
  )
}
