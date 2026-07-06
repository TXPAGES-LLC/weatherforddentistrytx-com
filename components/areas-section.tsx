import Link from 'next/link'

const areas = [
  {
    city: 'Weatherford',
    href: '/areas/weatherford',
    desc: 'Our home base — conveniently located in the heart of Weatherford, TX.',
    county: 'Parker County',
  },
  {
    city: 'Aledo',
    href: '/areas/aledo',
    desc: 'Serving Aledo residents with comprehensive family dental care.',
    county: 'Parker County',
  },
  {
    city: 'Mineral Wells',
    href: '/areas/mineral-wells',
    desc: 'Quality dental treatment accessible to Mineral Wells patients.',
    county: 'Palo Pinto County',
  },
  {
    city: 'Springtown',
    href: '/areas/springtown',
    desc: 'Welcoming patients from Springtown for all dental needs.',
    county: 'Parker County',
  },
  {
    city: 'Hudson Oaks',
    href: '/areas/hudson-oaks',
    desc: 'Hudson Oaks families trust Dr. McLemore for expert dental care.',
    county: 'Parker County',
  },
  {
    city: 'Brock',
    href: '/areas/brock',
    desc: 'Patients from Brock and surrounding rural areas are always welcome.',
    county: 'Parker County',
  },
  {
    city: 'Cresson',
    href: '/areas/cresson',
    desc: 'Cresson residents receive the same attentive care as our local patients.',
    county: 'Hood / Johnson County',
  },
  {
    city: 'Granbury',
    href: '/areas/granbury',
    desc: 'Granbury families find trusted dental care a short drive away.',
    county: 'Hood County',
  },
  {
    city: 'Stephenville',
    href: '/areas/stephenville',
    desc: 'Stephenville patients are welcome for all general and specialty dental services.',
    county: 'Erath County',
  },
]

export default function AreasSection() {
  return (
    <section className="py-16 md:py-20 bg-surface" aria-labelledby="areas-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#2ec4b6' }}>
            Service Areas
          </span>
          <h2 id="areas-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
            Serving Weatherford &amp; Parker County
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Conveniently located in Weatherford, TX, our practice welcomes patients from across Parker County and nearby communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group block bg-white rounded-xl p-5 border border-border hover:border-primary hover:shadow-sm transition-all"
              aria-label={`Dentist serving ${area.city}, ${area.county}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {area.city}
                  </h3>
                  <span className="text-xs text-muted-foreground">{area.county}</span>
                </div>
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e6faf9', color: '#2ec4b6' }}>
                  <MapPinIcon />
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium" style={{ color: '#3b82f6' }}>
                Dentist near {area.city} <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://maps.google.com/?cid=2341254151701000531"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-surface transition-colors"
          >
            <MapPinIcon />
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
