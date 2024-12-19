"use client";

import React, { useState } from "react";

const PostCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const postContent =
    "Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle.";

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="max-w-md mx-auto mt-2 rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <div className="relative">
        <img
          src="/images/jach.png" // Replace with your image path
          alt="Post Image"
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Like and Send Buttons */}
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={toggleLike}
            className={`text-2xl ${
              isLiked ? "text-red-500" : "text-gray-400"
            }`}
          >
            ♥
          </button>
          <button className="text-2xl text-gray-500 hover:text-gray-700">
            ✈️
          </button>
        </div>

        {/* Post Description */}
        <p className="text-gray-700 leading-relaxed">
          {showMore || postContent.length <= 100
            ? postContent
            : `${postContent.substring(0, 100)}... `}
          {postContent.length > 100 && (
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
