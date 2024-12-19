"use client";

import React, { useState } from "react";
import Head from "next/head";
import { FaHeart, FaComment, FaShare, FaWhatsapp } from "react-icons/fa";
import TabComponent from "./components/tabs";
import Introduction from "./components/introduction";

const Home = () => {
  const [expandedPost, setExpandedPost] = useState(false);

  const togglePost = () => setExpandedPost((prev) => !prev);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">

<Introduction/>

      <TabComponent />
      {/* Posts Section */}
      <div id="posts-section" className="container mx-auto px-4 py-6">
        <div className="flex overflow-x-scroll no-scrollbar space-x-4 py-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white shadow rounded-md overflow-hidden w-64"
            >
              <img
                src={`https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?w=800&auto=format&fit=crop&q=60`}
                alt={`Post ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-purple-700">
                  Post {index + 1}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
};

export default Home;