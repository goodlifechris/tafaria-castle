// app/menu/page.tsx
import { Metadata } from 'next';
import { Suspense } from 'react';
import MenuClient from '../components/menuclient';
import Head from 'next/head';
import { QueryProviders } from '../providers/providers';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  const title = Array.isArray(searchParams.name) ? searchParams.name[0] : searchParams.name || 'Menu';
  
  return {
    title: `${title} | Tafaria Castle`,
    description: `Explore ${title} at Tafaria Castle`,
    openGraph: {
      title: `${title} | Tafaria Castle`,
      description: `Discover ${title} at Tafaria Castle`,
      url: `https://tafaria.com/menu?name=${encodeURIComponent(title)}`,
      images: [
        {
          url: `https://tafaria.com/images/og-${encodeURIComponent(title)}.jpg`,
          width: 1200,
          height: 630,
          alt: `${title} at Tafaria Castle`,
        },
      ],
    },
  };
}

export default function MenuPage() {
  return (
    <Suspense fallback={
      <div className="w-full flex justify-center p-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    }>
              <QueryProviders>

      <MenuClient />
      </QueryProviders>
    </Suspense>
  );
}