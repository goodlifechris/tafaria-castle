"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { fetchSingleImage } from "../querries/images/getimages"; // Import the function to fetch a single image by ID
import TopBar from "../components/topbar";
import PostCard from "../components/post";

const ImageDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  // Use React Query to fetch image details by ID
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories", id],
    queryFn: () => fetchSingleImage(id || ""),
    enabled: !!id, // Ensure query runs only if ID exists
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
      <TopBar slug={data.slug} title={data.title || ""}  type={type || ''}/>

      <div className="flex items-center bg-white shadow-md">
        {/* Image Details */}
        <div className="max-w-4xl mx-auto p-4 mt-16">
          <PostCard
            createdAt={"2025-01-07T06:05:33.369Z"}
            imageUrl={data.image.url || "/images/posts/1.png"}
            text={data.description}
            title={data.title}
          />
        </div>
      </div>
    </div>
  );
};

export default function ImageDetailPage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ImageDetails />
      </React.Suspense>
    </QueryClientProvider>
  );
}
