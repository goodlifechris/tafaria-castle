 /* eslint-disable @typescript-eslint/no-explicit-any */ 
"use client";
import React, { Suspense, useState } from "react"; // Add useState and useEffect
import { useQuery } from '@tanstack/react-query';
import { fetchHerosection } from "../querries/herosection/getherosection";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CarouselHero from "./carouselhero";


// Create a separate component for the stories content
const HeroSection = () => {


  const { data, isLoading, error } = useQuery({ queryKey: ['herosection'], queryFn: fetchHerosection });
  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const herosection = data;
  return (
    <div className="flex space-x-6">

   <CarouselHero 
   images={herosection?.images?.map((image: any) => ({
    title: image.title,
    url: image?.image?.url || '',
  })) || []}
  videos={herosection?.videos?.map((video: any) => ({
    title: video.title,
    url: video?.video?.url || '',
  })) || []} />
    </div>
  );
};





const Hero = () => {

  const [queryClient] = useState(() => new QueryClient());
  return (
    <div className="items-center justify-items-center bg-white pb-5">
    <div className="flex space-x-6 px-4">

    </div>
 
        <Suspense fallback={
          <div className="flex justify-center p-4">
            <div className="animate-pulse">Loading...</div>
          </div>
        }>
              <QueryClientProvider client={queryClient}>
          <HeroSection />
          </QueryClientProvider>
        </Suspense>
  

    </div>
  );
};

export default Hero;
