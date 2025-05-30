import { Suspense } from 'react';
import MenuClient from '../../app/components/menuclient';
import { QueryProviders } from '../../app/providers/providers';
import { fetchCategories } from '../querries/categories/getcategories';
import { Metadata } from 'next';
import StructuredData from '../../app/components/structureddata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const [categorySlug, postSlug] = resolvedParams.slug?.map(decodeURIComponent) ?? [];
  const categories = await fetchCategories();
  
  const category = categories.find(c => c.slug === categorySlug);
  const post = category?.posts.find(p => p.slug === postSlug);

  if (postSlug && post) {
    return {
      title: `${post.title} | ${category?.name}`,
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

export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const [categorySlug, postSlug] = resolvedParams.slug?.map(decodeURIComponent) ?? [];
  const categories = await fetchCategories();
  
  const category = categories.find(c => c.slug === categorySlug);
  const post = category?.posts.find(p => p.slug === postSlug);

  // Generate appropriate structured data
  let structuredData;
  
  if (postSlug && post) {
    // Schema for blog post
    structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.content.document?.children?.[0]?.children?.[0]?.text || '',
      "author": {
        "@type": "Organization",
        "name": "Tafaria"
      },
      "datePublished": post.createdAt || new Date().toISOString(),
      "image": post.images.length > 0 ? post.images[0].image.url : undefined,
      "publisher": {
        "@type": "Organization",
        "name": "Tafaria",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tafaria.com/logo.png"
        }
      }
    };
  } else if (category) {
    // Schema for category page
    structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": category.name,
      "description": category.description,
      "image": category.image?.url || undefined,
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": category.posts.map((post, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "BlogPosting",
            "name": post.title,
            "url": `https://tafaria.com/${category.slug}/${post.slug}`
          }
        }))
      }
    };
  } else {
    // Fallback schema
    structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Tafaria",
      "description": "Explore our collection of categories and posts"
    };
  }

  return (
    <QueryProviders>
      <Suspense fallback={
        <div className="w-full flex justify-center p-8">
          <div className="animate-pulse">Loading...</div>
        </div>
      }>
        {/* Add StructuredData component */}
        <StructuredData data={structuredData} />
        
        <MenuClient
          initialName={categorySlug}
          initialType={postSlug}
        />
      </Suspense>
    </QueryProviders>
  );
}