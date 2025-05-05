import { MetadataRoute } from 'next';
import { fetchSitemapData } from './lib/sitemap-queries';




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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchSitemapData();
  
  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://tafaria.com';

  // Static pages
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  // Dynamic content URLs
  const dynamicUrls = data.categories.flatMap(category => {
    const categoryName = encodeURIComponent(category.name);
    const categorySlug = encodeURIComponent(category.slug);
    const baseParams = `id=${categorySlug}&name=${categoryName}`;

    return [
      // Main category page
      {
        url: `${baseUrl}/menu?${baseParams}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      // Content type variations
      ...['Blogs', 'Images', 'Videos'].map(type => ({
        url: `${baseUrl}/menu?${baseParams}&type=${encodeURIComponent(type)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      })),
      // Individual posts
      ...category.posts.map(post => ({
        url: `${baseUrl}/post/${encodeURIComponent(post.slug)}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      }))
    ];
  });

  // Properly escape all URLs for XML output
  const allUrls = [...staticUrls, ...dynamicUrls].map(item => ({
    ...item,
    url: escapeXml(item.url)
  }));

  return allUrls;
}

export const revalidate = 86400; // 24-hour ISR