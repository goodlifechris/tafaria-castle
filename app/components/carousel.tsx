import React, { useState, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import play/pause icons
import Image from 'next/image';

export interface Image {
  title: string;
  url: string;
}

export interface Video {
  title: string;
  url: string;
}

interface CarouselsProps {
  images: Image[];
  videos: Video[];
}

const Carousels: React.FC<CarouselsProps> = ({ images, videos }) => {
  const combinedUrls = [...images, ...videos];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [carouselHeight, setCarouselHeight] = useState<number | string>('auto');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Handle slide change
  const handleChange = (index: number) => {
    if (isPlaying) return; // Prevent slide change while playing video
    setActiveIndex(index);
    updateCarouselHeight();
  };

  // Handle Play/Pause Toggle
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      updateCarouselHeight();
    }
  };

  // Ensure correct height when video loads
  const handleVideoLoaded = () => {
    setTimeout(() => {
      if (videoRef.current) {
        setCarouselHeight(videoRef.current.clientHeight+25);
      }
    }, 100);
  };

  // Adjust height dynamically
  const updateCarouselHeight = () => {
    setTimeout(() => {
      if (containerRef.current) {
        setCarouselHeight(containerRef.current.clientHeight);
      }
    }, 100);
  };

  return (
    <div ref={containerRef} className="carousel rounded-box w-56 mb-4 sm:w-full bg-black" style={{ height: carouselHeight }}>
      <Carousel
        dynamicHeight={false}
        showThumbs={false}
        infiniteLoop
        autoPlay={!isPlaying}
        showStatus={false}
        selectedItem={activeIndex}
        onChange={handleChange}
        swipeable={!isPlaying}
      >
        {combinedUrls.map((media, index) => (
          <div key={index} className="relative">
            <p>{media.title}</p>
            {media?.url?.endsWith('.mp4') ? (
              <div>
                <video
                  playsInline
                  ref={videoRef}
                  controls={false} // Disable default controls
                  onClick={handlePlayPause} // Play/Pause on video click
                  onLoadedMetadata={handleVideoLoaded}
                  width="100%"
                  className="w-full object-cover h-auto transition duration-300"
                  style={{ maxHeight: 'auto' }}
                >
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Play/Pause Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={handlePlayPause} 
                    className="bg-white rounded-full p-3 shadow-lg cursor-pointer"
                  >
                    {isPlaying ? (
                      <FaPause className="text-[#902729] text-2xl" />
                    ) : (
                      <FaPlay className="text-[#902729] text-2xl" />
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <Image
              width={1000}
              height={100} 
                src={media.url} 
                alt={`Carousel image ${index + 1}`} 
                className="w-full object-cover"
              />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
