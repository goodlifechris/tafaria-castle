"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Barlow_Condensed } from 'next/font/google';
import VideoCard from "./videocard";
import BlogPostCard from "./blogpostcard";

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Images");
  const [images, setImages] = useState([
    "/images/1.png",
    "/images/4.png",
    "/images/3.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
    "/images/12.png",
    "/images/13.png",
    "/images/1.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
  ]);
  const [videos, setVideos] = useState([
    {
      id: 1, title: "Video 1",
      date: "2024-03-20",
      duration: "3:45",
      description: "Take a virtual tour through the magnificent halls of Tafaria Castle.", thumbnail: "/images/videos/1.png"
    },
    {
      id: 2, title: "Video 2",
      date: "2024-03-20",
      duration: "3:45",
      description: "Take a virtual tour through the magnificent halls of Tafaria Castle.", thumbnail: "/images/videos/2.png"
    },
    {
      id: 3, title: "Video 3",
      date: "2024-03-20",
      duration: "3:45",
      description: "Take a virtual tour through the magnificent halls of Tafaria Castle.", thumbnail: "/images/videos/3.png"
    },

  ]);
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Blog Post 1" },
    { id: 2, title: "Blog Post 2" },
    { id: 3, title: "Blog Post 3" },
    { id: 4, title: "Blog Post 4" },
  ]);

  const loadMoreItems = () => {
    // Load more items based on the active tab
    if (activeTab === "Images") {
      setImages((prevImages) => [
        ...prevImages,
        ...images.map((src, index) => `${src}?repeat=${prevImages.length + index}`), // Append unique query parameter
      ]);
    } else if (activeTab === "Videos") {
      setVideos((prevVideos) => [
        ...prevVideos,
        ...videos.map((video) => ({
          ...video,
          id: video.id + prevVideos.length, // Create a unique ID
        })),
      ]);
    } else if (activeTab === "Blogs") {
      setBlogs((prevBlogs) => [
        ...prevBlogs,
        ...blogs.map((blog) => ({
          ...blog,
          id: blog.id + prevBlogs.length, // Create a unique ID
        })),
      ]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (bottom) {
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab]);

  return (
    <>
      <div className="sticky bartop z-10 bg-white shadow-md">
        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b-2 border-gray-200">
          {["Images", "Videos", "Blogs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 font-bold ${barlow_condensed.className} ${activeTab === tab
                ? "border-b-4 border-[#902729] text-[#902729]"
                : "text-gray-500 hover:text-purple-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content - Moved outside sticky container */}
      <div className="mt-6 px-4 w-full">
        {(activeTab === "Images") && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <Link href="/categories" key={`${src}-${index}`}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="rounded-md shadow-md"
                />
              </Link>
            ))}
          </div>
        )}

        {(activeTab === "Videos") && (
          <div className="container mx-auto px-4 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  date={video.date}
                  description={video.description}
                  thumbnailUrl={video.thumbnail}
                  duration={video.duration}
                  link={`/videos/${video.id}`}
                />
              ))}
            </div>
          </div>
        )}
        {(activeTab === "Blogs") && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id}>
                <BlogPostCard
                  key={blog.id}
                  title="Uncover Tafaria's Heritage"
                  date="2024-09-18"
                  description="Explore the rich history and cultural significance of Tafaria Castle, from its architecture to the local legends."
                  imageUrl="/images/1.png"
                  link="/categories"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TabComponent;