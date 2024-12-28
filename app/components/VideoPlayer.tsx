"use client"
import React, {useState } from 'react';
import ReactPlayer from 'react-player';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // Import both outline and filled heart icons
import { FaPlay } from 'react-icons/fa'; // Import the play icon
import { Barlow_Condensed } from 'next/font/google'
import { FiSend } from "react-icons/fi";

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})


interface VideoPlayerProps {
    video: {
      id: number;
      title: string;
      date: string;
      duration: string;
      src: string;
      description: string;
    //   thumbnail: string;
    };
  }

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  const [playing, setPlaying] = useState(false); // State to manage play/pause
//   const [height, setHeight] = useState('400px'); // Default height
  const [liked, setLiked] = useState(false); // State to manage like status

  const handlePlayPause = () => {
    setPlaying(!playing); // Toggle play/pause state
  };

  const handleLike = () => {
    setLiked(!liked); // Toggle like status
  };
  const handleShare = () => {
    const link = `http://localhost:3000?tab=Videos&videoId=${video.id}`; // The link you want to share
    // const link = `https://tafaria-castle.vercel.app?tab=Videos&videoId=${videoId}`; // The link you want to share
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent("Welcome to tafaria" + " " + link)}`; // Share text and link

    window.open(whatsappUrl, "_blank"); // Open WhatsApp share link
  };

  return (
    <div className='w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className="video-container w-full bg-white rounded-lg  relative" onClick={handlePlayPause}> {/* Add click handler */}
        <ReactPlayer
          url={video.src} // Path to your video file
          className="react-player"
          width="100%" // Full width
          height="250" // Use dynamic height
          controls={false} // Hide default controls
          playing={playing} // Use state for playing
          light={false} // Show a thumbnail before playing
          onPlay={() => console.log('Playing')} // Event handler for play
          onPause={() => console.log('Paused')} // Event handler for pause
          onEnded={() => console.log('Ended')} // Event handler for end
        />
        {/* Play Button Overlay */}
        {!playing && ( // Show play button only when not playing
          <div className="absolute inset-0 flex items-center justify-center" onClick={handlePlayPause}>
            <div className="bg-white rounded-full p-3 shadow-lg cursor-pointer">
              <FaPlay className="text-[#902729] text-2xl" /> {/* Play icon */}
            </div>
          </div>
        )}
      </div> 
      
      {/* Video container */}
            <div className="flex items-center justify-start mb-2 space-x-4 pb-2 pl-5">
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

      <div className="flex flex-col px-5">
          <h3 className={`text-xl text-[#902729] mb-4 hover:text-[#b33235] transition-colors duration-200  ${barlow_condensed.className}`}>
           {video.description}
          </h3>
          </div>
    </div>
  );
};

export default VideoPlayer;