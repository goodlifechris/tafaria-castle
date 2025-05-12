
import { Suspense } from 'react';
import MenuClient from '../../app/components/menuclient';
import { QueryProviders } from '../../app/providers/providers';

// type Props = {
//     params: {
//       slug: string[]
//     }
//   }
 
  
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
