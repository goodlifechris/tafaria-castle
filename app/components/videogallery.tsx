"use client"
import React, { useState, useEffect } from "react";
import { fetchVideos, Video } from "../querries/videos/getvideos"; // Update this path to your correct query file
import { useInfiniteQuery } from "@tanstack/react-query";
import { FiShare2, FiHeart, FiX } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const VideoGallery = () => {
  const [likedVideos, setLikedVideos] = useState<string[]>([]); // Track liked videos
  const [showScrollToTop, setShowScrollToTop] = useState(false); // Show "Scroll to Top" button
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null); // Track selected video for fullscreen modal

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["videos"],
    queryFn: async ({  }) => {
      const videos = await fetchVideos(); // Modify fetchVideos to accept pagination if needed
      return videos;
    },
    getNextPageParam: ( pages) => {
      if (pages.length < 4) return pages.length; // Example: Limit to 5 pages
      return undefined;
    },
    initialPageParam: 1,
  });

  const toggleLike = (id: string) => {
    setLikedVideos((prev) =>
      prev.includes(id) ? prev.filter((likedId) => likedId !== id) : [...prev, id]
    );
  };

  const { ref: loadMoreRef } = useInView({
    threshold: 1.0,
    onChange: (inView) => {
      if (inView && hasNextPage) fetchNextPage();
    },
  });

  // Scroll to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle fullscreen video modal
  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  if (isLoading || !data) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="w-full h-48 bg-gray-300 rounded"></div>
            <p className="mt-2 w-3/4 h-4 bg-gray-300 rounded"></p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-4">
      {data.pages.flatMap((page) => page).length === 0 && (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-500">No videos available at the moment.</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.pages.flatMap((page, index) =>
          page.map((video: Video) => (
            <div
              key={index}
              className="relative bg-black rounded shadow-lg overflow-hidden group transition-transform transform hover:scale-105"
              onClick={() => openVideoModal(video)}
            >
              <div className="relative w-full h-auto overflow-hidden">
              {video?.video?.url ? (
  <video
    src={video.video.url}
    className="w-full object-cover h-auto transition duration-300"
    controls
  />
) : (
  <>No video available</>
)}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white font-bold">{video.title}</h3>
                <p className="text-sm text-gray-200">{video.description}</p>
                <div className="flex mt-2 space-x-4">
                  <button
                    className={`p-2 rounded-full ${
                      likedVideos.includes(video.id)
                        ? "bg-red-500 text-white"
                        : "bg-gray-700 text-gray-200"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(video.id);
                    }}
                  >
                    <FiHeart size={20} />
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Check out this video: ${video.title} - View it here: http://209.38.189.197:3001/video?id=${video.id}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-500 text-white rounded-full"
                  >
                    <FiShare2 size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div ref={loadMoreRef}>
        {isFetchingNextPage && (
          <p className="text-center animate-pulse">Loading more...</p>
        )}
      </div>

      {showScrollToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          ↑
        </button>
      )}

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg w-3/4 max-w-4xl">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 left-4 text-[#902729] text-3xl"
            >
              <FiX />
            </button>
            <div className="flex flex-col items-center">
              <video
                src={selectedVideo.video.url}
                className="w-full object-contain h-auto max-h-96 mb-4"
                controls
              />
              <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-md text-gray-700 mb-4">{selectedVideo.description}</p>
              <div className="flex space-x-6">
                <button
                  className={`p-2 rounded-full ${
                    likedVideos.includes(selectedVideo.id)
                      ? "bg-red-500 text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(selectedVideo.id);
                  }}
                >
                  <FiHeart size={24} />
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Check out this video: ${selectedVideo.title} - View it here: http://209.38.189.197:3001/Video?id=${selectedVideo.id}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-500 text-white rounded-full flex items-center"
                >
                  <FiShare2 size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
