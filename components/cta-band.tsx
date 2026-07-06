const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'

export default function CtaBand() {
  return (
    <section
      style={{ backgroundColor: '#3b82f6' }}
      className="py-12 md:py-16"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left text-white">
          <h2 id="cta-heading" className="font-serif text-2xl md:text-3xl font-bold text-balance mb-2">
            For Appointments or Inquiries
          </h2>
          <p className="text-white/90 text-base text-pretty">
            New patients welcome. Call us Monday–Thursday 8am–5pm. We are closed Friday through Sunday.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base bg-white transition-colors hover:bg-white/90"
            style={{ color: '#3b82f6' }}
            aria-label={`Call ${PHONE} to schedule an appointment`}
          >
            <PhoneIcon />
            {PHONE}
          </a>
          <a
            href="https://www.google.com/maps/search/F.+Lee+McLemore+DDS+Weatherford+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base bg-white/20 text-white hover:bg-white/30 transition-colors border border-white/30"
          >
            <MapPinIcon />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
