/* eslint-disable @typescript-eslint/no-explicit-any */ 
import React, { useState, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaPlay } from 'react-icons/fa'; // Import play icon

export interface Image {
  title: string;
  url: string;
}

export interface Video {
  title: string;
  url: string;
}

// Define the props interface
interface CarouselsProps {
  images: Image[]; // Array of image objects
  videos: Video[]; // Array of video objects
}

const Carousels: React.FC<CarouselsProps> = ({ images, videos }) => {
    console.log("imagesN", images); 
    console.log("videos", videos);

  const combinedUrls = [...images, ...videos];

  console.log("combinedUrls", combinedUrls);

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
    <div className="carousel rounded-box w-56 mb-4 sm:w-full bg-black">
      <br />
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay={true}
        showStatus={false}
        onChange={handleChange}
      >
        {combinedUrls.map((media, index) => (
          <div key={index} className="relative">
            <p>{media.title}</p>
            {media.url.endsWith('.mp4') ? (
              <div>
                <video
                  onClick={handleVideoClick}
                  ref={videoRef}
                  controls
                  width="100%"
                  height="100%"
                  className={`video-player ${isPlaying && activeIndex === index ? 'playing' : ''}`}
                >
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {!isPlaying && activeIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center" onClick={handlePlayPause}>
                    <div className="bg-white rounded-full p-3 shadow-lg cursor-pointer">
                      <FaPlay className="text-[#902729] text-2xl" />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <img src={media.url} alt={`Carousel image ${index + 1}`} />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;