import Image from 'next/image';
import { Barlow_Condensed, Montaga } from 'next/font/google';
import React, { useState } from 'react'; // Import useState
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // Import both outline and filled heart icons
import { FiSend } from "react-icons/fi";

interface BlogPostCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
}

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});
const montaga = Montaga({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const BlogPostCard = ({ title, date, description, imageUrl }: BlogPostCardProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false); // State to toggle description
  const [liked, setLiked] = useState(false); // State to manage like status

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription); // Toggle the state
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
    <div className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col pl-6">
        <h3 className={`text-xl text-[#902729] hover:text-[#b33235] transition-colors duration-200 ${barlow_condensed.className}`}>
          {title}
        </h3>
        <div className="flex items-center mb-4 text-sm">
          <img src="/images/carlendar.svg" alt="SVG image" />
          <span className={`ml-2 text-gray-500 ${montaga.className}`}>
            {new Date(date).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
      {/* Image at the top */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      <div className="flex items-center justify-start mb-2 space-x-4 pt-4 pl-5">
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
      {/* Content below image */}
      <div className="flex flex-col px-5 pb-4">
        <p className={`text-gray-600 pb-4  ${montaga.className}`}>
          {showFullDescription || description.length <= 20
            ? description
            : `${description.substring(0, 40)}... `}
     
        </p>
        {description.length > 40 && (

        <button
              onClick={toggleDescription}
              className="text-blue-500 hover:underline"
            >
   <span className={`text-[#94723C] text-sm hover:text-[#b33235] underline transition-colors duration-200 flex items-center mt-auto ${barlow_condensed.className}`}>
   {showFullDescription ? "Read Less" : "Read More"}
        </span>
            </button>
        )}

     
       
      </div>
    </div>
  );
};

export default BlogPostCard;