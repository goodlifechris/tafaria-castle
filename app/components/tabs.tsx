"use client";

import Link from "next/link";
import React, { useState } from "react";

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
  ];

  const videos = [
    { id: 1, title: "Video 1", thumbnail: "/images/5.png" },
    { id: 2, title: "Video 2", thumbnail: "/images/6.png" },
  ];

  const blogs = [
    { id: 1, title: "Blog Post 1" },
    { id: 2, title: "Blog Post 2" },
    { id: 3, title: "Blog Post 3" },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 border-b-2 border-gray-200">
        {["All", "Images", "Videos", "Blogs"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-semibold ${
              activeTab === tab
                ? "border-b-4 border-[#902729] text-[#902729]"
                : "text-gray-500 hover:text-purple-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6">
        {(activeTab === "All" || activeTab === "Images") && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
          <Link href="/categories"  key={index}>
          <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-md shadow-md"
              />
        </Link>
            
      
            ))}
          </div>
        )}

        {(activeTab === "All" || activeTab === "Videos") && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {videos.map((video) => (
                        <Link href="/categories"  key={video.id}>

              <div
                key={video.id}
                className="bg-white rounded-md shadow-md border p-4"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold text-purple-600">
                  {video.title}
                </h3>
              </div>
              </Link>

            ))}
          </div>
        )}

        {(activeTab === "All" || activeTab === "Blogs") && (
          <div className="mt-4 space-y-4">
            {blogs.map((blog) => (
                                      <Link href="/categories"  key={blog.id}>

              <div
                key={blog.id}
                className="p-4 bg-white rounded-md shadow-md border"
              >
                <h3 className="text-lg font-semibold text-purple-600">
                  {blog.title}
                </h3>
                <p className="text-gray-600">
                  This is a brief description of {blog.title}.
                </p>
              </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
