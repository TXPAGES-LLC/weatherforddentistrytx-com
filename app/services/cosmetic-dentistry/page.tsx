import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry in Weatherford TX | F. Lee McLemore, DDS',
  description:
    'Transform your smile with cosmetic dentistry in Weatherford, TX. Teeth whitening, veneers, bonding & smile makeovers from Dr. F. Lee McLemore DDS. Call (817) 594-8665.',
  alternates: { canonical: `${SITE_URL}/services/cosmetic-dentistry` },
  openGraph: {
    title: 'Cosmetic Dentistry in Weatherford TX | F. Lee McLemore, DDS',
    description: 'Teeth whitening, veneers, bonding & smile makeovers from Dr. F. Lee McLemore, DDS in Weatherford, TX.',
    type: 'website',
    url: `${SITE_URL}/services/cosmetic-dentistry`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Cosmetic Dentistry — F. Lee McLemore, DDS, Weatherford TX' }],
  },
}

const relatedServices = [
  { label: 'General Dentistry', href: '/services/general-dentistry' },
  { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
  { label: 'Geriatric Dentistry', href: '/services/geriatric-dentistry' },
  { label: 'Special Needs Dentistry', href: '/services/special-needs-dentistry' },
]

export default function CosmeticDentistryPage() {
  return (
    <ServicePageTemplate
      title="Cosmetic Dentistry"
      headline="Cosmetic Dentistry in Weatherford, TX"
      metaDescription="Smile makeovers and cosmetic dental treatments in Weatherford, TX."
      heroText="A beautiful, confident smile can change the way you feel every day. Dr. F. Lee McLemore offers a range of cosmetic dentistry treatments in Weatherford, TX, designed to enhance your smile while preserving the health and integrity of your teeth."
      services={[
        {
          title: 'Professional Teeth Whitening',
          description:
            'Safe, effective in-office and take-home whitening treatments that can brighten your smile by several shades, removing years of staining.',
        },
        {
          title: 'Porcelain Veneers',
          description:
            'Ultra-thin custom porcelain shells bonded to the front of your teeth to correct chips, cracks, gaps, discoloration, and misshapen teeth.',
        },
        {
          title: 'Dental Bonding',
          description:
            'A quick, affordable cosmetic solution that uses tooth-colored resin to repair chips, close small gaps, or reshape uneven teeth.',
        },
        {
          title: 'Tooth-Colored Restorations',
          description:
            'Replace old metal or amalgam fillings with natural-looking composite restorations that blend seamlessly with your smile.',
        },
        {
          title: 'Smile Makeovers',
          description:
            'A comprehensive, personalized treatment plan combining multiple cosmetic procedures to achieve your ideal smile — designed just for you.',
        },
        {
          title: 'Dental Crowns',
          description:
            'Tooth-shaped crowns crafted to match your natural teeth, restoring the look and function of damaged or misshapen teeth.',
        },
      ]}
      whySection={{
        heading: 'A Natural-Looking Smile You Can Be Proud Of',
        body:
          'Dr. McLemore takes a conservative approach to cosmetic dentistry — enhancing what is naturally yours rather than creating an artificial look. Every cosmetic treatment is planned with your overall dental health in mind, so your results are both beautiful and long-lasting.',
        bullets: [
          'Custom treatment plans tailored to your smile goals',
          'Conservative techniques that preserve healthy tooth structure',
          'Results that look natural, not overdone',
          'Combined cosmetic and restorative expertise',
          'Welcoming office environment for a stress-free experience',
        ],
      }}
      relatedServices={relatedServices}
      faqItems={[
        {
          question: 'How long does teeth whitening last?',
          answer:
            'Professional whitening results typically last 1–3 years depending on your diet and oral hygiene habits. Touch-up treatments can help maintain your results.',
        },
        {
          question: 'Are veneers permanent?',
          answer:
            'Porcelain veneers are a long-term commitment, as a small amount of enamel is removed during the process. However, they are highly durable and can last 10–15 years with proper care.',
        },
        {
          question: 'Is cosmetic dentistry covered by insurance?',
          answer:
            'Most purely cosmetic procedures are not covered by dental insurance. However, some treatments like crowns or bonding may be partially covered if they also serve a restorative function. Our team can help you understand your coverage.',
        },
      ]}
    />
  )
}
