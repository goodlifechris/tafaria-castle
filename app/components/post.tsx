"use client";

import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa"; // Import Font Awesome icons
import { FiSend } from "react-icons/fi";

const PostCard = ({ imageUrl, text }: { imageUrl: string; text: string }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleLike = () => setIsLiked(!isLiked);
  
  const handleShare = () => {
    const link = "https://tafaria-castle.vercel.app/categories"; // The link you want to share
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + link)}`; // Share text and link

    window.open(whatsappUrl, "_blank"); // Open WhatsApp share link
  };

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
            <FaRegHeart />
          </button>
          <button
            onClick={handleShare}
            className="text-2xl text-gray-400 hover:text-blue-500"
          >
            <FiSend />
          </button>
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
        <span>14 hours ago</span>
      </div>
    </div>
  );
};

export default PostCard;