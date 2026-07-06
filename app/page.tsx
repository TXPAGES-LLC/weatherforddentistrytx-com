import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import TrustSection from '@/components/trust-section'
import AreasSection from '@/components/areas-section'
import CtaBand from '@/components/cta-band'
import BlogPreviewSection from '@/components/blog-preview-section'
import StructuredData from '@/components/structured-data'
import MobileCta from '@/components/mobile-cta'
import VerifiedProfilesSection from '@/components/verified-profiles-section'

export const metadata: Metadata = {
  title: 'Dentist in Weatherford TX | F. Lee McLemore, DDS',
  description:
    'F. Lee McLemore, DDS provides family & cosmetic dental care in Weatherford, TX. General, pediatric, cosmetic & special needs dentistry. Serving Parker County since 1991. Call (817) 594-8665.',
  keywords:
    'dentist Weatherford TX, family dentist Weatherford, cosmetic dentistry Weatherford, F. Lee McLemore DDS, general dentistry, pediatric dentistry, dental care Parker County TX',
  alternates: {
    canonical: 'https://weatherforddentistrytx.com',
  },
  openGraph: {
    title: 'Dentist in Weatherford TX | F. Lee McLemore, DDS',
    description:
      'Family & cosmetic dental care in Weatherford, TX since 1991. General, pediatric, cosmetic & special needs dentistry. New patients welcome — call (817) 594-8665.',
    type: 'website',
    url: 'https://weatherforddentistrytx.com',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'F. Lee McLemore, DDS — Dentist in Weatherford, TX' }],
  },
}

export default function Page() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <VerifiedProfilesSection />
        <CtaBand />
        <AreasSection />
        <BlogPreviewSection />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
