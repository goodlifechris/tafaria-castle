 /* eslint-disable @typescript-eslint/no-explicit-any */ 
import React, { useState, useEffect } from "react";
import { fetchPosts, Post } from "../querries/posts/getposts"; // Modify this import based on where your post query function is
import { useInfiniteQuery } from "@tanstack/react-query";
import { FiShare2, FiHeart, FiX } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import BlogCard from "./blogcard";

const PostGallery = () => {
  const [likedPosts, setLikedPosts] = useState<string[]>([]); // Track liked posts
  const [showScrollToTop, setShowScrollToTop] = useState(false); // Show "Scroll to Top" button
  const [selectedPost, setSelectedPost] = useState<Post | null>(null); // Track selected post for fullscreen modal

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ }) => {
      const posts = await fetchPosts(); // Modify fetchPosts to accept pagination if needed
      return posts;
    },
    getNextPageParam: (pages) => {
      if (pages.length < 5) return pages.length + 1; // Example: Limit to 5 pages
      return undefined;
    },
    initialPageParam: 1,
  });

  const toggleLike = (id: string) => {
    setLikedPosts((prev) =>
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

  // Handle fullscreen post modal
  // const openPostModal = (post: Post) => {
  //   setSelectedPost(post);
  // };

  const closePostModal = () => {
    setSelectedPost(null);
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
          <p className="text-gray-500">No posts available at the moment.</p>
        </div>
      )}
      <div>
      {data.pages.flatMap((page, index) =>
        page.map((post: Post) => (
          <BlogCard
            key={index}
            id={post.id}
            imageUrls={post.images.map((image: any) => ({
              title: image.title,
              url: image?.image?.url || '',
            }))}
            videoUrls={
              post.videos && post.videos.length > 0
                ? post.videos.map((video: any) => ({
                  
                    title: video.title,
                    url: video?.video?.url || '',
                  }))
                : []
            }
            title={post.title}
            createdAt={post.createdAt}
            content={post.content}
            // description={post.content.document[0].children[0].text}
            // sessions={post.content.document}
          />
        ))
      )}
      </div>

      <div ref={loadMoreRef} className="h-20 mt-4">
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

      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg w-3/4 max-w-4xl">
            <button
              onClick={closePostModal}
              className="absolute top-4 left-4 text-[#902729] text-3xl"
            >
              <FiX />
            </button>
            <div className="flex flex-col items-center">
              {selectedPost.images && selectedPost.images[0] && (
                <img
                  src={selectedPost.images[0].image.url}
                  alt={selectedPost.title}
                  className="w-full object-contain h-auto max-h-96 mb-4"
                />
              )}
              <h3 className="text-xl font-bold mb-2">{selectedPost.title}</h3>
              <p className="text-md text-gray-700 mb-4">{selectedPost.content.document[0]?.children[0]?.text || "No description"}</p>
              <div className="flex space-x-6">
                <button
                  className={`p-2 rounded-full ${
                    likedPosts.includes(selectedPost.id)
                      ? "bg-red-500 text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(selectedPost.id);
                  }}
                >
                  <FiHeart size={24} />
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Check out this post: ${selectedPost.title} - View it here: https://www.tafaria.com/post?id=${selectedPost.id}`
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

export default PostGallery;
