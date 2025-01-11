"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { fetchPostById } from "../querries/posts/getposts"; // Import the function to fetch a single post by ID
import TopBar from "../components/topbar";
import PostCard from "../components/post";

const PostDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log("Post ID: ", id);
  // Use React Query to fetch post details by ID
  const { data, isLoading, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id || ""),
    enabled: !!id, // Ensure the query runs only if the ID exists
  });

  if (!id) {
    return (
      <div className="text-center p-4">
        <p>No post ID provided.</p>
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
        <p>Error loading post: {error?.message}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center p-4">
        <p>No post found.</p>
      </div>
    );
  }

  // Render the post detail page
  return (
    <div>
      <TopBar title={data.title || "Post Details"} />

      <div className="flex items-center bg-white shadow-md">
        {/* Post Details */}
        <div className="max-w-4xl mx-auto p-4 mt-16">
          <PostCard
            imageUrl={data.images?.[0]?.image?.url || "/images/posts/default.png"}
            text={data.content?.document?.[0]?.children?.[0]?.text || "No description"}
            title={data.title}
            createdAt={data.createdAt}
          />
        </div>
      </div>
    </div>
  );
};

export default function PostDetailPage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <PostDetails />
      </React.Suspense>
    </QueryClientProvider>
  );
}
