
import { Suspense } from 'react';
import MenuClient from '../../app/components/menuclient';
import { QueryProviders } from '../../app/providers/providers';
import { fetchCategories } from '../querries/categories/getcategories';
import { Metadata } from 'next';
 
  
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  const [categorySlug, postSlug] = resolvedParams.slug?.map(decodeURIComponent) ?? [];
  const categories = await fetchCategories();
  
  // Find the current category and post
  const category = categories.find(c => c.slug === categorySlug);
  const post = category?.posts.find(p => p.slug === postSlug);

  if (postSlug && post) {
    // This is a post page
    return {
      title: `${post.title} | ${category?.name} `,
      description: post.content.document?.children?.[0]?.children?.[0]?.text || 
                  `Read about ${post.title} in our ${category?.name} collection`,
      openGraph: {
        title: post.title,
        description: post.content.document?.children?.[0]?.children?.[0]?.text || '',
        images: post.images.length > 0 ? [{
          url: post.images[0].image.url,
          width: 800,
          height: 600,
          alt: post.title,
        }] : [],
      },
    };
  } else if (category) {
    // This is a category page
    return {
      title: category.name,
      description: category.description,
      openGraph: {
        title: category.name,
        description: category.description,
        images: category.image ? [{
          url: category.image.url,
          width: 800,
          height: 600,
          alt: category.name,
        }] : [],
      },
    };
  }

  // Fallback to default metadata
  return {
    title: 'Tafaria',
    description: 'Explore our collection of categories and posts',
  };
}

export async function generateStaticParams() {
  const categories = await fetchCategories();
  
  return categories.flatMap(category => [
    { slug: [category.slug] },
    ...category.posts.map(post => ({
      slug: [category.slug, post.slug]
    }))
  ]);
}
// Page component
export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await  params;
  const [name, type] = resolvedParams.slug?.map(decodeURIComponent) ?? [];

  return (
    <QueryProviders>
      <Suspense fallback={
        <div className="w-full flex justify-center p-8">
          <div className="animate-pulse">Loading...</div>
        </div>
      }>
  
        <MenuClient
          initialName={name}
          initialType={type}
        />
      </Suspense>
    </QueryProviders>
  );
}
