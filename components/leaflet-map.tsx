'use client'

import { useEffect, useRef } from 'react'

interface LeafletMapProps {
  lat: number
  lng: number
  label: string
  zoom?: number
}

export default function LeafletMap({ lat, lng, label, zoom = 15 }: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    // Dynamically import Leaflet only on the client
    import('leaflet').then((L) => {
      // Fix default icon paths broken by bundlers
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const map = L.map(containerRef.current!, { zoomControl: true, scrollWheelZoom: false }).setView(
        [lat, lng],
        zoom,
      )

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<strong>${label}</strong>`, { closeButton: false })
        .openPopup()

      mapRef.current = map
    })

    return () => {
      if (mapRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(mapRef.current as any).remove()
        mapRef.current = null
      }
    }
  }, [lat, lng, label, zoom])

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin="anonymous"
      />
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%' }}
        role="application"
        aria-label={`Map showing the location of ${label}`}
      />
    </>
  )
}
