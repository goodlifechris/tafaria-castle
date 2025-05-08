import { MetadataRoute } from 'next';

// Function to escape XML special characters
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

// Dynamically determine base URL
const isDev = process.env.NODE_ENV === 'development';
const baseUrl = isDev ? 'http://localhost:3000' : 'https://tafaria.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Paths that define categories, and these will have the last segment for each of Blogs, Videos, Images
  const categories = ['Blogs', 'Videos', 'Images'];
  
  // These are the different sections like 'Country Lodge', 'For Students', etc.
  const sections = [
    'Country Lodge',
    'Conference Center',
    'For Students',
    'Leisure Activities',
    'Gift Shop',
    'Blogs',
  ];

  // Now, generate the URLs by iterating over both sections and categories
  const urls = sections.flatMap(section => 
    categories.map(category => {
      const path = `/menu/${encodeURIComponent(section)}/${encodeURIComponent(category)}`;
      return {
        url: escapeXml(`${baseUrl}${path}`),
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      };
    })
  );

  return urls;
}
