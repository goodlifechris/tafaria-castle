import { MetadataRoute } from 'next';
import { fetchCategories } from './querries/categories/getcategories';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tafaria.com';

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  try {
    const categories = await fetchCategories();

    categories.forEach((category) => {
      // Category page
      entries.push({
        url: `${baseUrl}/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });

      category.posts.forEach((post) => {
        const updatedAt = new Date(post.updatedAt);

        // Post page
        entries.push({
          url: `${baseUrl}/${category.slug}/${post.slug}`,
          lastModified: updatedAt,
          changeFrequency: 'monthly',
          priority: 0.5,
        });

        // Image page
        entries.push({
          url: `${baseUrl}/images/${category.slug}/${post.slug}`,
          lastModified: updatedAt,
          changeFrequency: 'monthly',
          priority: 0.4,
        });

        // Uncomment if you support video pages
        // entries.push({
        //   url: `${baseUrl}/videos/${category.slug}/${post.slug}`,
        //   lastModified: updatedAt,
        //   changeFrequency: 'monthly',
        //   priority: 0.4,
        // });
      });
    });
  } catch (error) {
    console.error('❌ Failed to generate sitemap entries:', error);
  }

  return entries;
}
