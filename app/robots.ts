import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.macrocephalon.com/sitemap.xml',
    host: 'https://www.macrocephalon.com',
  }
}
