import { Barlow_Condensed, Montaga } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';
import Carousels from './carousel';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FiSend } from "react-icons/fi";
import ContentView from './contentview';
import Image from 'next/image';

// Font configuration
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

const BlogCardHorizontal: React.FC<BlogCardProps> = ({id, imageUrls, videoUrls, title, createdAt, content }) => {
  const [liked, setLiked] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleReadMore = () => {
    setIsReadMore((prev) => !prev);
  };

  const contentText = content.document
    .map(doc => doc.children.map(child => child.text).join(" "))
    .join(" ");

  return (
    <div className={`flex flex-col h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${barlow_condensed.className}`}>
      {/* Image Carousel - Fixed height */}
      <div className="relative w-full aspect-video">
        <Carousels images={imageUrls} videos={videoUrls} />
      </div>

      {/* Content Section - Flexible height */}
      <div className="flex flex-col flex-grow p-5">
        {/* Title */}
        <h2 className="text-xl font-semibold text-[#902729] mb-2 line-clamp-2">{title}</h2>

        {/* Date */}
        <div className="flex items-center mb-3 text-sm">
          <Image width={18} height={18} src="/images/carlendar.svg" alt="Calendar icon" />
          <span className={`ml-2 text-gray-500 ${montaga.className}`}>
            {new Date(createdAt).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>

        {/* Content */}
        <div className="text-gray-700 flex-grow">
          {isReadMore ? (
            <ContentView content={content} />
          ) : (
            <ContentView
              content={{
                document: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        text: contentText.slice(0, 200) + (contentText.length > 200 ? "..." : "")
                      }
                    ]
                  }
                ]
              }}
            />
          )}
        </div>

        {/* Read More/Less Button */}
        {contentText.length > 200 && (
          <button
            onClick={handleReadMore}
            className="mt-2 text-[#902729] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center self-start"
          >
            {isReadMore ? 'Read Less' : 'Read More'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isReadMore ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
            </svg>
          </button>
        )}

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
          <Link
            href="https://apps.hti-systems.com/hostech/tafaria/desktop.html?locale=en_US"
            className="text-[#94723C] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center"
          >
            <span>Schedule a visit</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`text-2xl ${liked ? "text-red-500" : "text-gray-400"}`}
              aria-label={liked ? "Unlike" : "Like"}
            >
              {liked ? <FaHeart /> : <FaRegHeart />}
            </button>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `See this 😍: ${title} - View it here: https://www.tafaria.com/blog?id=${id}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              aria-label="Share via WhatsApp"
            >
              <FiSend />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardHorizontal;