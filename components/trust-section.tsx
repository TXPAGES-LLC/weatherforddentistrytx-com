export default function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="trust-heading">
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: '35+', label: 'Years Serving Weatherford' },
            { value: '100%', label: 'Satisfaction Commitment' },
            { value: '5', label: 'Dental Specialties' },
            { value: 'All Ages', label: 'Patients Welcome' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 sm:p-5 rounded-xl bg-surface border border-border">
              <div className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl mb-1" style={{ color: '#3b82f6' }}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Dr. McLemore */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#2ec4b6' }}>
              Meet Your Dentist
            </span>
            <h2 id="trust-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance mb-5">
              F. Lee McLemore, DDS
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. McLemore has proudly served the Weatherford, TX community for over three decades. His practice is built on a foundation of compassionate care, clinical excellence, and a genuine commitment to patient satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you need a routine cleaning, a smile transformation, or specialized care for a family member with unique needs, Dr. McLemore and his experienced team are here to deliver the dental treatment you deserve.
            </p>

            <ul className="space-y-3">
              {[
                'Comprehensive dental treatment for the entire family',
                'Gentle approach to patient comfort and anxiety',
                'Modern techniques paired with personalized care',
                'Accepting new patients and most major insurance plans',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e6faf9', color: '#2ec4b6' }}>
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <img
              src="https://weatherforddentistrytx.com/wp-content/uploads/2023/12/dental-care.png"
              alt="Dental care at F. Lee McLemore DDS in Weatherford TX — family and cosmetic dentistry"
              width="480"
              height="320"
              loading="lazy"
              className="w-full rounded-2xl object-cover border border-border"
            />

            {/* Trust badges row */}
            <div className="flex flex-col gap-3">
              {/* Google reviews CTA */}
              <a
                href="https://maps.google.com/?cid=2341254151701000531"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-white hover:border-primary hover:shadow-sm transition-all group"
                aria-label="Read our reviews on Google Maps"
              >
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Read Our Google Reviews</p>
                  <p className="text-xs text-muted-foreground">Trusted by Weatherford families</p>
                </div>
              </a>
              {/* BBB text badge */}
              <a
                href="https://www.bbb.org/us/tx/weatherford/profile/dentist/f-lee-mclemore-dds-pa-0825-153913257"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-white hover:border-primary hover:shadow-sm transition-all group"
                aria-label="View our Better Business Bureau profile"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xs" style={{ backgroundColor: '#003087' }}>
                  BBB
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Better Business Bureau</p>
                  <p className="text-xs text-muted-foreground">Weatherford, TX profile</p>
                </div>
              </a>
              {/* NAP quick reference */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e6faf9' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">610 Eureka St, Weatherford TX</p>
                  <a href="tel:+18175948665" className="text-xs text-primary hover:underline font-medium">(817) 594-8665 &middot; Mon–Thu 8am–5pm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
