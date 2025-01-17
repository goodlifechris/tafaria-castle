"use client";
import React, { useState, useEffect } from "react";
import { fetchVideos, Video } from "../querries/videos/getvideos";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { FaPlay } from "react-icons/fa";

const VideoGallery = () => {
  const [likedVideos, setLikedVideos] = useState<string[]>([]);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      return await fetchVideos();
    },
    getNextPageParam: (pages) => {
      if (pages.length < 4) return pages.length;
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

  // Handle scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open video in fullscreen
  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
    window.history.pushState({ modalOpen: true }, ""); // Push state for back navigation
    document.body.style.overflow = "hidden"; // Lock scroll
  };

  // Close video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
    window.history.back(); // Simulate back press
    document.body.style.overflow = "auto"; // Unlock scroll
  };

  // Handle browser back button to close modal
  useEffect(() => {
    const handlePopState = () => {
      setSelectedVideo(null);
      document.body.style.overflow = "auto"; // Unlock scroll
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle swipe down or up to close modal
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY !== null) {
      const touchEndY = e.touches[0].clientY;

      // Check if the swipe is down (to close the modal)
      if (touchEndY - touchStartY > 100) {
        closeVideoModal(); // Close modal if swipe down
      }

      // Optionally, you can also add a swipe-up gesture to close the modal
      if (touchStartY - touchEndY > 100) {
        closeVideoModal(); // Close modal if swipe up
      }
    }
  };

  return (
    <div className="p-4">
      {data?.pages.flatMap((page) => page).length === 0 && (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-500">No videos available at the moment.</p>
        </div>
      )}
      <div className="masonry">
        {data?.pages.flatMap((page, index) =>
          page.map((video: Video) => (
            <div
              key={index}
              className="relative bg-black rounded shadow-lg overflow-hidden group transition-transform transform hover:scale-105 masonry-item"
              onClick={() => openVideoModal(video)} // Tap to open fullscreen
            >
              <div className="relative w-full h-auto overflow-hidden">
              <button
    onClick={() => openVideoModal(video)}
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-white text-black rounded-full hover:bg-gray-300 transition"
  >
                         <FaPlay className="text-[#902729] text-2xl" />
   
  </button>
                {video?.video?.url ? (
                  <video
                    playsInline
                    src={video.video.url}
                    className="w-full object-cover h-auto transition duration-300"
                    controls={false}
                  />
                ) : (
                  <>No video available</>
                )}
              </div>

              {/* Title, description, and play icon */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-[#902729] to-transparent p-6">
                <h3 className="text-white text-lg font-bold">{video.title}</h3>
                <p className="text-sm text-gray-200">{video.description}</p>
         
              </div>

              {/* Like and Share buttons */}
              {/* <div className="absolute bottom-4 right-4 flex space-x-4">
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
              </div> */}
            </div>
          ))
        )}
      </div>

      {/* Load More */}
      <div ref={loadMoreRef}>
        {isFetchingNextPage && (
          <p className="text-center animate-pulse">Loading more...</p>
        )}
      </div>

      {/* Scroll to Top */}
      {showScrollToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20  right-8 p-3 bg-[#902729] text-white rounded-full shadow-lg hover:bg-[#94723C]"
        >
          ↑
        </button>
      )}

      {/* Fullscreen Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] bg-black flex justify-center items-center transition-opacity duration-300"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="relative w-full max-w-4xl ">
            {/* Dark overlay from bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent p-6">
              <h3 className="text-white text-2xl font-bold ">{selectedVideo.title}</h3>
              <p className="text-white text-sm  mb-10">{selectedVideo.description}</p>
            </div>
            <video
              src={selectedVideo.video.url}
              className="w-full h-screen object-contain"
              controls
              autoPlay
            />
            {/* Bottom buttons */}
            <div className="absolute bottom-8 pb-20 right-4 flex  items-center">
              <button
                className={`p-3 mr-2 rounded-full ${
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
                  `Check out this video: ${selectedVideo.title} - View it here: http://209.38.189.197:3001/video?id=${selectedVideo.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-500 text-white rounded-full"
              >
                <FiShare2 size={24} />
              </a>
            </div>
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 left-4 text-white text-3xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
