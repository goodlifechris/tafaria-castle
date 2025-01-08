"use client"
import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { fetchSingleImage } from "../querries/images/getimages"; // Import the function to fetch a single image by ID
import TopBar from "../components/topbar";
import PostCard from "../components/post";

const ImageDetails = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');


  console.log("id ",id)
  // Use React Query to fetch image details by ID

    const { data, isLoading, error } = useQuery({
      queryKey: ['categories', id],
      queryFn: () => fetchSingleImage(id || ''),
    }); 

  if (!id) {
    return (
      <div className="text-center p-4">
        <p>No image ID provided.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse">
          <div className="w-40 h-40 bg-gray-200 rounded"></div>
          <p className="mt-2 w-32 h-4 bg-gray-200 rounded"></p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p>Error loading image: {error?.message}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center p-4">
        <p>No image found</p>
      </div>
    );
  }

  // Render the image detail page
  return (
<div>
    <TopBar title={data.title || ''}/>

    <div className="flex items-center bg-white shadow-md">  
    
      
      {/* Image Details */}
      <div className="max-w-4xl mx-auto p-4 mt-16">
      <PostCard
      createdAt="2025-01-07T06:05:33.369Z"
          imageUrl={data.image.url || '/images/posts/1.png'}
          text={data.description}
          title={data.title}
        />
        {/* <img
          src={data.image.url}
          alt={data.image.url}
          className="w-full h-auto rounded-lg shadow-lg"
        /> */}
        
        {/* <div className="mt-6">
          <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
          <p className="mt-2 text-gray-600">{data.description}</p>
        </div> */}

        {/* <div className="flex mt-4 space-x-4">
          <button className="p-2 rounded-full bg-red-500 text-white">
            ❤️ Like
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Check out this image: ${data.title} - ${data.image.url}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-green-500 text-white rounded-full"
          >
            📤 Share
          </a>
        </div> */}


      </div>
    </div>
    </div>
  );
};
export default function ImageDetailPage() {
  const [queryClient] = useState(() => new QueryClient());
  return (

  <QueryClientProvider client={queryClient}>

      <ImageDetails />
  </QueryClientProvider>

  );
}