import { MetadataRoute } from 'next'
import { fetchCategories } from './querries/categories/getcategories';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await fetchCategories()

  const  baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tafaria.com'
  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    }
  ]

  categories.forEach(category => {
    entries.push({
      url: `${baseUrl}/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
 
    category.posts.forEach(item => {
      entries.push({
        url: `${baseUrl}/${category.slug}/${item.slug}`,
        lastModified: new Date(item.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    })

    //for images 
    category.posts.forEach(item => {
      entries.push({
        url: `${baseUrl}/images/${category.slug}`,
        lastModified: new Date(item.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    })


    // //for videos 
    // category.posts.forEach(item => {
    //   entries.push({
    //     url: `${baseUrl}/videos/${category.slug}`,
    //     lastModified: new Date(item.updatedAt),
    //     changeFrequency: 'monthly',
    //     priority: 0.5,
    //   })
    // })
  })

  return entries
}