import { Barlow_Condensed, Montaga } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';
import Carousels from './carousel';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // Import both outline and filled heart icons
import { FiSend } from "react-icons/fi";
import ContentView from './contentview';

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

interface Image {
  title: string;
  url: string;
}

interface Video {
  title: string;
  url: string;
}

interface DocumentChild {
  text?: string;
  bold?: boolean;
  children?: DocumentChild[];
}
interface Document {
  type: string;
  children: DocumentChild[];
}

interface Content {
  document: Document[];
}
interface BlogCardProps {
  id: string;
  imageUrls: Image[];
  videoUrls: Video[];
  title: string;
  createdAt: string;
  content: Content;
}

const BlogCard: React.FC<BlogCardProps> = ({id, imageUrls, videoUrls, title, createdAt, content }) => {
  // const [showSessions, setShowSessions] = useState(false); // State to manage session visibility
  const [liked, setLiked] = useState(false); // State to manage like status
  const [isReadMore, setIsReadMore] = useState(false); // State to manage "Read More" / "Read Less"

  // const toggleSessions = () => {
  //   setShowSessions((prev) => !prev); // Toggle the visibility
  // };

  const handleLike = () => {
    setLiked(!liked); // Toggle like status
  };

  const handleReadMore = () => {
    setIsReadMore((prev) => !prev); // Toggle "Read More" / "Read Less"
  };

  // Get the plain text content length
  const contentText = content.document
    .map(doc => doc.children.map(child => child.text).join(" "))
    .join(" ");
  

 


  
  return (
    <div className={`flex flex-col md:flex-row m-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-5 ${barlow_condensed.className}`}>
      {/* Image Section */}
      <h2 className="text-xl font-semibold ml-5 mt-4 lg:hidden md:hidden pb-5 text-[#902729]">{title}</h2>

      <div className="relative w-full md:w-1/3">
        <Carousels images={imageUrls} videos={videoUrls} />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between px-4 pb-4 md:w-2/3">
        <div>
          <h2 className="text-xl font-semibold md:block lg:block sm:hidden max-sm:hidden  text-[#902729]">{title}</h2>
          <div className="flex items-center mb-4 text-sm">
            <img src="/images/carlendar.svg" alt="SVG image" />
            <span className={`ml-2 my-2 text-gray-500 ${montaga.className}`}>
              {new Date(createdAt).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          {/* Show either full content or truncated content based on isReadMore */}
          <div className="text-gray-700">
            {isReadMore ? (
              <ContentView content={content} /> // Show full content if "Read More" is clicked
            ) : (
              <div>
                {/* Truncate content to first 200 characters */}
                <ContentView
                  content={{
                    document: [
                      {
                        type: "paragraph",
                        children: [
                          {
                            text: contentText.slice(0, 200) + "..."
                          }
                        ]
                      }
                    ]
                  }}
                />
              </div>
            )}
          </div>

          {/* Conditionally render Read More / Read Less based on content length */}
          {  (
            <div className="mt-4 flex space-x-4">
              <div
                className="text-[#902729] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center cursor-pointer"
                onClick={handleReadMore}
              >
                <span>{isReadMore ? 'Read Less' : 'Read More'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          )}
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

          <div className="flex items-center justify-start mb-2 space-x-4 pt-4">
            <button
              onClick={handleLike}
              className={`text-2xl ${liked ? "text-red-500" : "text-gray-400"}`}
            >
              {liked ? <FaHeart /> : <FaRegHeart />}
            </button>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `See this 😍: ${title} - View it here: http://209.38.189.197:3005/blog?id=${id}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-500 text-white rounded-full"
            >
              <FiSend />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
