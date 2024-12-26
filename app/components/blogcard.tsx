import { Barlow_Condensed } from 'next/font/google';
import Link from 'next/link';
import SessionList from './sessions';
import React, { useState } from 'react';
import Carousels from './carousel';

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export interface Session {
  title: string;
  description: string;
}

const BlogCard = ({
  imageUrls,
  title,
  description,
  sessions,
}: {
  imageUrls:string[];
  title: string;
  description: string;
  sessions: Session[];
}) => {
  const [showSessions, setShowSessions] = useState(false); // State to manage session visibility

  const toggleSessions = () => {
    setShowSessions((prev) => !prev); // Toggle the visibility
  };

  return (
    <div className={`flex flex-col md:flex-row m-5 bg-white rounded-lg overflow-hidden mt-5 ${barlow_condensed.className}`}>
      {/* Image Section */}
      <div className="relative w-full md:w-1/3">
        {/* <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg md:rounded-l-lg md:rounded-r-lg"
        /> */}
              <Carousels images={imageUrls} />

      </div>
      {/* Content Section */}
      <div className="p-4 md:w-2/3">
        <h2 className="text-xl font-semibold text-[#902729]">{title}</h2>
        <p className={`mt-2 text-gray-600 ${barlow_condensed.className}`}>{description}</p>
        <br />
        {sessions.length > 0 && (
          <>
          
            {showSessions && <SessionList sessions={sessions} />}
          </>
        )}
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

          <div className="text-[#902729] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center"            onClick={toggleSessions}>
            <span className='text-[#902729] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center'>{showSessions ? 'Read Less' : 'Read More'}   </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;