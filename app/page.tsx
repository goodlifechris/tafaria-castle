"use client";

import React, { useState } from "react";
import Head from "next/head";
import { FaHeart, FaComment, FaShare, FaWhatsapp } from "react-icons/fa";
import TabComponent from "./components/tabs";
import Introduction from "./components/introduction";
import WhatsAppButton from "./components/whatsappbutton";
import Stories from "./components/stories";
import Header from "./components/header";

const Home = () => {
  const [expandedPost, setExpandedPost] = useState(false);

  const togglePost = () => setExpandedPost((prev) => !prev);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Head>
        <title>Tafaria Castle</title>
        <meta
          name="description"
          content="Tafaria Castle - Once upon a Dream"
        />
      </Head>

<div className="sticky top-0 z-10 w-full">
  {/* Header */}
  <Header/>

  {/* Stories */}
<Stories/>
</div>
<Introduction/>
<WhatsAppButton/>
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

        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="bg-white shadow rounded-md overflow-hidden w-full sm:w-9/12 lg:w-6/12">
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop&q=60"
              alt="Post"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-800">
                {expandedPost
                  ? "Full post content here..."
                  : "Shortened post content..."}
                <span
                  className="text-purple-600 cursor-pointer hover:underline"
                  onClick={togglePost}
                >
                  {expandedPost ? " See Less" : " See More"}
                </span>
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <button className="text-purple-600 hover:text-purple-800">
                    <FaHeart />
                  </button>
                  <button className="text-purple-600 hover:text-purple-800">
                    <FaComment />
                  </button>
                  <button className="text-purple-600 hover:text-purple-800">
                    <FaShare />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <FaWhatsapp />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;