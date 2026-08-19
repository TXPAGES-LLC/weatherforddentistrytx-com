import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

// Standard apple-touch-icon size used for iOS/Safari bookmarks and home screen
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/**
 * Apple touch icon — the same crop used for the favicon, scaled up for
 * bookmarks and home-screen shortcuts. Colors and artwork are untouched.
 */
export default function AppleIcon() {
  const logoBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'gbp-logo.png'))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '180px',
          height: '180px',
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '50%',
        }}
      >
        <img
          src={logoSrc}
          width={326}
          height={326}
          style={{
            width: '326px',
            height: '326px',
            marginLeft: '-73px',
            marginTop: '-34px',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
