import { Suspense } from 'react';
import type { Metadata } from 'next';
import MenuClient from '../../components/menuclient';
import { QueryProviders } from '../../providers/providers';
import { generateMenuMetadata } from '../../lib/metadata';

// Generate dynamic metadata based on slug
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const [name = '', type = ''] = resolvedParams.slug?.map(decodeURIComponent) ?? [];

  return generateMenuMetadata({
    name: name || undefined,
    type: type || undefined,
  });
}

// Page component
export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const [name,type] = resolvedParams.slug?.map(decodeURIComponent) ?? [];

  return (
    <QueryProviders>
      <Suspense fallback={
        <div className="w-full flex justify-center p-8">
          <div className="animate-pulse">Loading...</div>
        </div>
      }>
        {/* <h1 className="text-black">Dynamic Page videos: {(await params).slug?.join('/')}</h1>
        <h1 className="text-black">{name} {type}</h1> */}
        <MenuClient
          initialName={name}
          initialType={type || "videos"}  
        />
      </Suspense>
    </QueryProviders>
  );
}
