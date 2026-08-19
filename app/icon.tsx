import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

// Standard favicon size for crisp rendering in browser tabs and bookmarks
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/**
 * Favicon — a tight crop of the official Google Business Profile logo
 * (public/gbp-logo.png), zoomed into the tooth mark and cropping out the
 * business-name text band beneath it. Colors and artwork are untouched —
 * this only crops/repositions the existing image, no recoloring or effects.
 */
export default function Icon() {
  const logoBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'gbp-logo.png'))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '50%',
        }}
      >
        <img
          src={logoSrc}
          width={58}
          height={58}
          style={{
            width: '58px',
            height: '58px',
            marginLeft: '-13px',
            marginTop: '-6px',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
