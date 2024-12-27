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

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false); // State to manage play/pause
//   const [height, setHeight] = useState('400px'); // Default height
  const [liked, setLiked] = useState(false); // State to manage like status

  const handlePlayPause = () => {
    setPlaying(!playing); // Toggle play/pause state
  };

//   const updateHeight = async () => {
//     const aspectRatio = 16 / 9; // Use a fixed aspect ratio (16:9)
//     const width = window.innerWidth; // Get the current window width
//     const newHeight = width / aspectRatio; // Calculate height based on aspect ratio

//     // Set a maximum height to prevent it from being too tall
//     const maxHeight = 200; // Set your desired maximum height
//     setHeight(`${Math.min(newHeight, maxHeight)}px`); // Set the new height, ensuring it doesn't exceed maxHeight
//   };

//   useEffect(() => {
    // updateHeight(); // Set initial height
//     window.addEventListener('resize', updateHeight); // Add resize event listener

//     return () => {
//       window.removeEventListener('resize', updateHeight); // Cleanup on unmount
//     };
//   }, []);

  const handleLike = () => {
    setLiked(!liked); // Toggle like status
  };
  const handleShare = () => {
    const link = "https://tafaria-castle.vercel.app/categories"; // The link you want to share
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent("Welcome to tafaria" + " " + link)}`; // Share text and link

    window.open(whatsappUrl, "_blank"); // Open WhatsApp share link
  };

  return (
    <div className='w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className="video-container w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative" onClick={handlePlayPause}> {/* Add click handler */}
        <ReactPlayer
          url="/videos/tafaria_video.mp4" // Path to your video file
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
      </div> {/* Video container */}
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

      <div className="flex flex-col px-5">
          <h3 className={`text-xl text-[#902729] mb-4 hover:text-[#b33235] transition-colors duration-200  ${barlow_condensed.className}`}>
           Welcome to Tafaria Castle
          </h3>
          </div>
    </div>
  );
};

export default VideoPlayer;