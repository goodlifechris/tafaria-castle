/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import BlogCard from "../components/blogcard";
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useRef, useEffect, useState } from "react"; // Add Suspense import
import ImagegalleryFromPost from "../components/imagegalleryfrompost";
import TopBar from "../components/topbar";
import Cart from "../components/cart/cart";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { fetchPostsByCategory } from "../querries/categories/getpostsfromcategories";
import ImageGallery from "../components/imagegallery";
import VideoGallery from "../components/videogallery";
import VideoGalleryFromPost from "../components/videogalleryfrompost";
import BlogCardHorizontal from "../components/blogCardHorizontal";

export interface Session {
  title: string;
  description: string;
}

const MenuContent = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('name');
  const type = searchParams.get('type');
  const card = searchParams.get('card'); // Get the card parameter
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({}); // Ref to store card references
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    // Scroll to the specific card if the card parameter is present
    if (card) {
      // Reload the page with the updated parameters
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('reload', Date.now().toString()); // Add a timestamp to prevent caching issues
      window.location.href = newUrl.toString();
      const targetCard = cardRefs.current[card];
      if (targetCard) {
        // Calculate the position to scroll to, adjusting for fixed header height
        const headerOffset = 360; // Adjust this value based on your fixed header height
        const elementPosition = targetCard.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [card]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['categories', title],
    queryFn: () => fetchPostsByCategory(title || ''),
  });

  if (isLoading) return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-[#94723C] rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-700 text-lg font-semibold">🛡️ Preparing your royal treasures... 🏰</p>
    </div>
  );
    if (error) return <p>Error: {error.message}</p>;


  return (
    <div className="w-full">
      <TopBar title={title || ''} type={type || ''} />

      <div className="mt-20">
        {data && data.name === 'Gift Shop' ? (
          <div className="text-center  text-gray-600">
            <Cart />
          </div>
        ) : <></>}
        {title === 'Images' ? (
          <div className="text-center  text-gray-600">
            <QueryClientProvider client={queryClient}>
              <ImageGallery />
            </QueryClientProvider>
          </div>
        ) : <></>}
        {title === 'Videos' ? (
          <div className="text-center  text-gray-600">
            <QueryClientProvider client={queryClient}>
              <VideoGallery />
            </QueryClientProvider>

          </div>
        ) : <></>}




{data && type === "Blogs" ? (
  <div className="relative">
    {/* Horizontal scroll container for mobile */}
    <div className="flex overflow-x-auto pb-4 space-x-4 md:hidden hide-scrollbar">
      {data?.posts.map((item, index) => (
        <div 
          key={index}
          ref={(el) => { if (el) cardRefs.current[item.title] = el; }}
          className="flex-shrink-0 w-[85vw]"
        >
          <BlogCard
            id={item.id}
            imageUrls={item.images.map((image: any) => ({
              title: image.title,
              url: image?.image?.url || '',
            }))}
            videoUrls={
              item.videos && item.videos.length > 0
                ? item.videos.map((video: any) => ({
                  title: video.title,
                  url: video?.video?.url || '',
                }))
                : []
            }
            title={item.title}
            createdAt={item.createdAt}
            content={item.content}
          />
        </div>
      ))}
    </div>

    {/* Grid layout for desktop */}
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.posts.map((item, index) => (
        <div 
          key={index}
          className="h-full"
          ref={(el) => { if (el) cardRefs.current[item.title] = el; }}
        >
          <BlogCardHorizontal
            id={item.id}
            imageUrls={item.images.map((image: any) => ({
              title: image.title,
              url: image?.image?.url || '',
            }))}
            videoUrls={
              item.videos && item.videos.length > 0
                ? item.videos.map((video: any) => ({
                  title: video.title,
                  url: video?.video?.url || '',
                }))
                : []
            }
            title={item.title}
            createdAt={item.createdAt}
            content={item.content}
          />
        </div>
      ))}
    </div>
  </div>
) : null}

{data && type == "Images" ? (

  <Suspense fallback={
    <div className="w-full flex justify-center p-8">
      <div className="animate-pulse">Loading...</div>
    </div>
  }>
  <ImagegalleryFromPost images={data.posts.flatMap(post => post.images?.map(img => img))} /> 
    </Suspense>
     ) : (
          <></>

        )}


{data && type == "Videos" ? (
  
  <Suspense fallback={
    <div className="w-full flex justify-center p-8">
      <div className="animate-pulse">Loading...</div>
    </div>
  }>

     <VideoGalleryFromPost videos={data.posts.flatMap(post => post.videos?.map(img => img))}/>
     </Suspense>
      
        
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

// Main Menu component with Suspense
export default function Menu() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Suspense fallback={
      <div className="w-full flex justify-center p-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    }>
      <QueryClientProvider client={queryClient}>

        <MenuContent />
      </QueryClientProvider>
    </Suspense>
  );
}