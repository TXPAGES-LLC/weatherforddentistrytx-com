import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'F. Lee McLemore, DDS — Dentist in Weatherford TX'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2ec4b6',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Subtle dot pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Blue accent band at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '10px',
            background: '#3b82f6',
          }}
        />

        {/* White card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'white',
            borderRadius: '20px',
            padding: '52px 72px',
            maxWidth: '900px',
            width: '100%',
            boxShadow: '0 25px 60px rgba(0,0,0,0.18)',
            position: 'relative',
          }}
        >
          {/* Tooth icon SVG */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 32 32"
            style={{ marginBottom: '20px' }}
          >
            <circle cx="16" cy="16" r="16" fill="#2ec4b6" />
            <path
              d="M10 10 C10 7 12 6 14 7 C15 7.5 15.5 8 16 8 C16.5 8 17 7.5 18 7 C20 6 22 7 22 10 C22 13 21 14 21 17 C21 19.5 20.5 21 19.5 21 C18.5 21 18 19 17 17.5 C16.5 16.5 15.5 16.5 15 17.5 C14 19 13.5 21 12.5 21 C11.5 21 11 19.5 11 17 C11 14 10 13 10 10Z"
              fill="white"
            />
          </svg>

          {/* Practice name */}
          <div
            style={{
              fontSize: '42px',
              fontWeight: 700,
              color: '#0f172a',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '14px',
            }}
          >
            F. Lee McLemore, DDS
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '22px',
              color: '#475569',
              textAlign: 'center',
              marginBottom: '28px',
              lineHeight: 1.4,
            }}
          >
            Family &amp; Cosmetic Dentistry in Weatherford, TX
          </div>

          {/* Trust badges row */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['Serving Weatherford since 1991', 'All Ages Welcome', 'Most Insurance Accepted'].map(
              (badge) => (
                <div
                  key={badge}
                  style={{
                    background: '#eff6ff',
                    color: '#3b82f6',
                    borderRadius: '999px',
                    padding: '8px 20px',
                    fontSize: '16px',
                    fontWeight: 600,
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {badge}
                </div>
              )
            )}
          </div>

          {/* URL strip */}
          <div
            style={{
              marginTop: '28px',
              fontSize: '16px',
              color: '#94a3b8',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            weatherforddentistrytx.com &nbsp;·&nbsp; (817) 594-8665
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
