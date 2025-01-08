"use client"
import React, {  useState } from "react";
import { useSearchParams } from 'next/navigation';

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { fetchSingleVideo } from "../querries/videos/getvideos"; // Import the function to fetch a single video by ID
import TopBar from "../components/topbar";

const VideoDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  console.log("id ", id);
  // Use React Query to fetch video details by ID
  const { data, isLoading, error } = useQuery({
    queryKey: ['videos', id],
    queryFn: () => fetchSingleVideo(id || ''),
  });

  if (!id) {
    return (
      <div className="text-center p-4">
        <p>No video ID provided.</p>
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
        <p>Error loading video: {error?.message}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center p-4">
        <p>No video found</p>
      </div>
    );
  }

  // Render the video detail page
  return (
    <div>
      <TopBar title={data.title || ''} />

      <div className="flex items-center bg-white shadow-md">
        {/* Video Details */}
        <div className="max-w-4xl mx-auto p-4 mt-16">
          <PostCard
            videoUrl={data.video.url || ''}
            text={data.description}
            title={data.title}
          />
        </div>
      </div>
    </div>
  );
};


 const PostCard = ({ videoUrl, text, title }: { videoUrl: string; text: string; title: string }) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl text-[#902729] font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">{text}</p>
      {videoUrl && (
        <div className="mt-4">
          <video controls className="w-full h-auto">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};



export default function VideoDetailPage() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <VideoDetails />
    </QueryClientProvider>
  );
}
