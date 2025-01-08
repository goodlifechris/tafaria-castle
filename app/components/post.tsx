"use client";

import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Import both outline and filled heart icons
import { FiSend } from "react-icons/fi";
import { formatTimestamp } from "../video/dateutil";

const PostCard = ({ imageUrl, text ,title,createdAt }: { imageUrl: string; text: string;  title: string; createdAt: string }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleLike = () => setIsLiked(!isLiked);
  
  // const handleShare = () => {
  //   // http://localhost:3000/categories?title=Images&imageUrl=%2Fimages%2F12.png
  //   // const link = `http://localhost:3000/categories?title=Images&imageUrl=${imageUrl}`; // The link you want to share
  //   const link = `https://tafaria-castle.vercel.app/categories?title=Images&imageUrl=${imageUrl}`; // The link you want to share
  //   const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + link)}`; // Share text and link

  //   window.open(whatsappUrl, "_blank"); // Open WhatsApp share link
  // };

  return (
    <div className="max-w-md mx-auto mt-2 rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt="Post Image"
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Like and Share Buttons */}
        <div className="flex items-center justify-start mb-2 space-x-4">
          <button
            onClick={toggleLike}
            className={`text-2xl ${isLiked ? "text-red-500" : "text-gray-400"}`}
          >
            {isLiked ? <FaHeart /> : <FaRegHeart />} {/* Conditional rendering of heart icon */}
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Check out this image: ${title} - ${imageUrl}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" ml-0 pt-2"
          >
              <button
            className="text-2xl text-gray-400 hover:text-blue-500"
          >
            <FiSend />
          </button>
          </a>
       
        </div>

        {/* Post Description */}
        <p className="text-gray-700 leading-relaxed">
          {showMore || text.length <= 100
            ? text
            : `${text.substring(0, 100)}... `}
          {text.length > 100 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-500 hover:underline"
            >
              {showMore ? "see less" : "read more"}
            </button>
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="p-4 text-gray-400 text-sm">
        <span>
          {formatTimestamp(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default PostCard;