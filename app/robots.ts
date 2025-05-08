// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://tafaria.com';
      
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/lib/', '/api/', '/_next/', '/_static/','/providers','/hooks'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}