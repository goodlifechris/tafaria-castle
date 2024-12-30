import { Barlow_Condensed, Montaga } from 'next/font/google';
import Link from 'next/link';
import SessionList from './sessions';
import React, { useState } from 'react';
import Carousels from './carousel';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // Import both outline and filled heart icons
import { FiSend } from "react-icons/fi";

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const montaga = Montaga({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export interface Session {
  title: string;
  description: string;
}
export interface ImageUrls {
  text: string;
  imageUrl: string;
}

const BlogCard = ({
  imageUrls,
  title,
  description,
  sessions,
}: {
  imageUrls: ImageUrls[];
  title: string;
  description: string;
  sessions: Session[];
}) => {
  const [showSessions, setShowSessions] = useState(false); // State to manage session visibility
  const [liked, setLiked] = useState(false); // State to manage like status

  const toggleSessions = () => {
    setShowSessions((prev) => !prev); // Toggle the visibility
  };

  const handleLike = () => {
    setLiked(!liked); // Toggle like status
  };

  const handleShare = () => {
    const link = "https://tafaria-castle.vercel.app/categories"; // The link you want to share
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent("Welcome to tafaria" + " " + link)}`; // Share text and link
    window.open(whatsappUrl, "_blank"); // Open WhatsApp share link
  };

  return (
    <div className={`flex flex-col md:flex-row m-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-5 ${barlow_condensed.className}`}>
      {/* Image Section */}
      <div className="relative w-full md:w-1/3">
        <Carousels images={imageUrls} />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between px-4 pb-4 md:w-2/3">
        <div>
          <h2 className="text-xl font-semibold text-[#902729]">{title}</h2>
          <div className="flex items-center mb-4 text-sm">
            <img src="/images/carlendar.svg" alt="SVG image" />
            <span className={`ml-2 text-gray-500 ${montaga.className}`}>
              18th November 2025
            </span>
          </div>
          <p className={`mt-2 text-gray-600 ${montaga.className}`}>{description}</p>
          <br />
          {sessions.length > 0 && showSessions && <SessionList sessions={sessions} />}
        </div>

        <div className="mt-4 flex space-x-4">
          <Link
            href="https://apps.hti-systems.com/hostech/tafaria/desktop.html?locale=en_US"
            className="text-[#94723C] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center"
          >
            <span>Schedule a visit</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <div className="text-[#902729] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center" onClick={toggleSessions}>
            <span className='text-[#902729] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center'>{showSessions ? 'Read Less' : 'Read More'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-start mb-2 space-x-4 pt-4">
          <button
            onClick={handleLike}
            className={`text-2xl ${liked ? "text-red-500" : "text-gray-400"}`}
          >
            {liked ? <FaHeart /> : <FaRegHeart />} {/* Conditional rendering of heart icon */}
          </button>
          <button
            onClick={handleShare}
            className="text-2xl text-gray-400 hover:text-blue-500"
          >
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;