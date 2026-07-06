'use client'

import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'
import { events } from '@/lib/gtag'

export default function PatientFormsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="bg-background">
        {/* Hero */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#2ec4b6' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Patient Forms
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Complete your new patient paperwork before your visit to save time at check-in.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Instructions */}
            <div className="mb-8 p-6 rounded-xl border border-border bg-surface">
              <h2 className="text-lg font-semibold text-foreground mb-3">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                <li>View or download the patient form below</li>
                <li>Print the form and fill it out completely</li>
                <li>Bring the completed form to your appointment</li>
              </ol>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/patient-forms.pdf"
                  download="F-Lee-McLemore-DDS-Patient-Forms.pdf"
                  onClick={() => events.patientFormDownload()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  <DownloadIcon />
                  Download PDF
                </a>
              </div>
            </div>

            {/* Fallback note */}
            <p className="mt-8 text-sm text-muted-foreground text-center">
              Having trouble downloading? Contact us at{' '}
              <a href="tel:+18175948665" className="text-primary hover:underline">
                (817) 594-8665
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
