"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Barlow_Condensed } from 'next/font/google'
import VideoCard from "./videocard";
import BlogPostCard from "./blogpostcard";

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '600',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})
const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("All");

  const images = [
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
    "/images/jach.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",

  ];

  const video =
  {
    id: 1,
    title: "Castle Tour",
    date: "2024-03-20",
    description: "Take a virtual tour through the magnificent halls of Tafaria Castle.",
    thumbnail: "/images/video-thumbnail-1.jpg",
    duration: "5:30",
    link: "/videos/castle-tour"
  }
    // ... more videos
    ;
  const videos = [
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
      id: 3, title: "Video 1",
      date: "2024-03-20",
      duration: "3:45",
      description: "Take a virtual tour through the magnificent halls of Tafaria Castle.", thumbnail: "/images/videos/3.png"
    },
    {
      id: 4, title: "Video 1",
      date: "2024-03-20",
      duration: "3:45",
      description: "Take a virtual tour through the magnificent halls of Tafaria Castle.", thumbnail: "/images/videos/3.png"
    },
    // { id: 4, title: "Video 2", thumbnail: "/images/videos/1.png" },
  ];

  const blogs = [
    { id: 1, title: "Blog Post 1" },
    { id: 2, title: "Blog Post 2" },
    { id: 3, title: "Blog Post 3" },
    { id: 4, title: "Blog Post 3" },
  ];

  return (
    <>
      <div className="sticky bartop z-10 bg-white shadow-md">
        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b-2 border-gray-200">
          {["All", "Images", "Videos", "Blogs"].map((tab) => (
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
        {(activeTab === "All" || activeTab === "Images") && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <Link href="/categories" key={index}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="rounded-md shadow-md"
                />
              </Link>
            ))}
          </div>
        )}


        {(activeTab === "All" || activeTab === "Videos") && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            {videos.map((video) => (  // Changed parameter name to 'video'
              <div className="bg-white rounded-md shadow-md border p-4" key={video.id}>
                <VideoCard
                  key={video.id}
                  title={video.title}
                  date={video.date || "2024-03-20"}  // Provide default if not in data
                  description={video.description || "Take a virtual tour through the magnificent halls of Tafaria Castle."}  // Provide default if not in data
                  thumbnailUrl={video.thumbnail}
                  duration={video.duration || "5:30"}  // Provide default if not in data
                  link="/categories"
                />
              </div>
            ))}
          </div>
        )}

        {(activeTab === "All" || activeTab === "Blogs") && (
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