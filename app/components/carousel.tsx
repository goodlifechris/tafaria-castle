"use client";
import React, { useState, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaPlay } from 'react-icons/fa'; // Import play icon

// Define the props interface
interface CarouselsProps {
  images: string[]; // Array of image URLs
}

const Carousels: React.FC<CarouselsProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active index
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
  const videoRef = useRef<HTMLVideoElement | null>(null); // Ref to access the video element

  const handleChange = (index: number) => {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current?.pause(); // Pause the video when changing slides
    }
    setActiveIndex(index);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current?.pause(); // Pause the video
    } else {
      setIsPlaying(true);
      videoRef.current?.play(); // Play the video
    }
  };

  const handleVideoClick = () => {
    // Toggle play/pause when the video container is clicked
    handlePlayPause();
  };

  return (
    <div className="carousel rounded-box w-56 sm:w-full bg-black">
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        autoPlay={false} 
        showStatus={false} 
        onChange={handleChange} // Set the onChange handler
      >
        {images.map((image, index) => (
          <div key={index} className="relative">
            {image.endsWith('.mp4') ? (
              <div > {/* Add onClick to the video container */}
                <video
                onClick={handleVideoClick}
                  ref={videoRef} // Attach the ref to the video element
                  controls
                  width="100%"
                  height="100%"
                  className={`video-player ${isPlaying && activeIndex === index ? 'playing' : ''}`}
                >
                  <source src={image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Play Button Overlay */}
                {!isPlaying && activeIndex === index && (
                 
                           <div className="absolute inset-0 flex items-center justify-center" onClick={handlePlayPause}>
                           <div className="bg-white rounded-full p-3 shadow-lg cursor-pointer">
                             <FaPlay className="text-[#902729] text-2xl" /> {/* Play icon */}
                           </div>
                         </div>
                )}
                        {/* Play Button Overlay */}
    </div>
            ) : (
              <img src={image} alt={`Carousel image ${index + 1}`} />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;