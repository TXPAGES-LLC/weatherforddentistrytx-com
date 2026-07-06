import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://weatherforddentistrytx.com/sitemap.xml',
    host: 'https://weatherforddentistrytx.com',
  }
}
