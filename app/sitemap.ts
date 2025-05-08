import { MetadataRoute } from 'next';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tafaria.com'; // Always use production URL
  
  // Your exact URLs (converted from localhost to production domain)
  const urls = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/menu?id=Country%20Lodge&name=Country%20Lodge&type=Blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu?id=Conference%20Center&name=Conference%20Center&type=Blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu?id=For%20Students&name=For%20Students&type=Blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu?id=Leisure%20Activities&name=Leisure%20Activities&type=Blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu?id=Gift%20Shop&name=Gift%20Shop&type=Blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu?id=Blogs&name=Blogs&type=Blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ];

  // Properly escape all URLs for XML output
  return urls.map(item => ({
    ...item,
    url: escapeXml(item.url)
  }));
}

// No need for revalidation since this is completely static