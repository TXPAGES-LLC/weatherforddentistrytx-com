import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'General Dentistry in Weatherford TX | F. Lee McLemore, DDS',
  description:
    'Comprehensive general dentistry in Weatherford, TX. Exams, cleanings, fillings, root canals, extractions & more. Dr. F. Lee McLemore DDS. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/services/general-dentistry` },
  openGraph: {
    title: 'General Dentistry in Weatherford TX | F. Lee McLemore, DDS',
    description: 'Exams, cleanings, fillings, root canals & more from Dr. F. Lee McLemore, DDS in Weatherford, TX. Accepting new patients.',
    type: 'website',
    url: `${SITE_URL}/services/general-dentistry`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'General Dentistry — F. Lee McLemore, DDS, Weatherford TX' }],
  },
}

const relatedServices = [
  { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
  { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
  { label: 'Geriatric Dentistry', href: '/services/geriatric-dentistry' },
  { label: 'Special Needs Dentistry', href: '/services/special-needs-dentistry' },
]

export default function GeneralDentistryPage() {
  return (
    <ServicePageTemplate
      title="General Dentistry"
      headline="General Dentistry in Weatherford, TX"
      metaDescription="Comprehensive general dental care for your entire family in Weatherford, TX."
      heroText="From your first tooth to your last, Dr. F. Lee McLemore provides thorough, preventive-focused general dentistry for patients of all ages in Weatherford and the greater Parker County area."
      services={[
        {
          title: 'Comprehensive Dental Exams',
          description:
            'Thorough examinations to assess your oral health, detect early signs of decay, gum disease, or other issues before they become serious problems.',
        },
        {
          title: 'Professional Teeth Cleanings',
          description:
            'Regular prophylactic cleanings to remove plaque and tartar buildup that at-home brushing and flossing simply cannot reach.',
        },
        {
          title: 'Dental X-Rays',
          description:
            'Digital X-rays with significantly reduced radiation to give Dr. McLemore a complete picture of your dental and bone health.',
        },
        {
          title: 'Tooth-Colored Fillings',
          description:
            'Natural-looking composite resin fillings that restore cavities while blending seamlessly with your natural tooth color.',
        },
        {
          title: 'Root Canal Treatment',
          description:
            'Gentle root canal therapy to save infected or severely damaged teeth, eliminate pain, and prevent the need for extraction.',
        },
        {
          title: 'Tooth Extractions',
          description:
            'When a tooth cannot be saved, our team performs comfortable extractions and guides you through the best tooth replacement options.',
        },
        {
          title: 'Gum Disease Treatment',
          description:
            'Scaling and root planing, periodontal maintenance, and ongoing monitoring to manage and reverse gum disease at any stage.',
        },
        {
          title: 'Mouthguards & Night Guards',
          description:
            'Custom-fitted protective appliances to prevent sports injuries and protect against teeth grinding (bruxism) while you sleep.',
        },
      ]}
      whySection={{
        heading: 'Why Choose Dr. McLemore for General Dentistry?',
        body:
          'Dr. McLemore has built his Weatherford dental practice on the belief that preventive care is the best care. By catching small issues early and keeping your smile maintained with regular dental treatment, we help you avoid costly and complex procedures down the road.',
        bullets: [
          'Over 30 years of experience serving Weatherford families',
          'Gentle, patient-centered approach for anxious patients',
          'Accepting new patients and most major dental insurance',
          'Convenient office hours Monday through Friday',
          'Full-service practice — your whole family under one roof',
        ],
      }}
      relatedServices={relatedServices}
      faqItems={[
        {
          question: 'How often should I have a dental exam and cleaning?',
          answer:
            'For most patients, we recommend a comprehensive exam and professional cleaning every six months. Patients with a history of gum disease or other risk factors may benefit from more frequent visits.',
        },
        {
          question: 'Do you accept new patients?',
            answer:
            'Yes! New patients are always welcome at our Weatherford practice. Call (817) 594-8665 to schedule your first appointment.',
        },
        {
          question: 'What insurance plans do you accept?',
          answer:
            'We accept most major dental insurance plans. Please call our office and a team member will be happy to verify your coverage.',
        },
      ]}
    />
  )
}
