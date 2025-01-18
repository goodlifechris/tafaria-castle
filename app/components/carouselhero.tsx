/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaPause, FaPlay } from "react-icons/fa"; // Import play icon
import { Video, VideoPlayerRef } from "reactjs-media";

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
  const combinedUrls = [...images, ...videos];

  const [activeIndex, setActiveIndex] = useState(0); // Track active slide
  const [playingIndex, setPlayingIndex] = useState<number | null>(null); // Track which video is playing

  const handleChange = (index: number) => {
    if (playingIndex !== null) return; // Prevent slide change when a video is playing
    setActiveIndex(index);
  };


  const videoRef = useRef<VideoPlayerRef | null>(null); // Video ref

  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

    // Toggle play/pause on screen tap
  // Toggle play/pause on screen tap
  const handleTogglePlayPause = async () => {
    if (!videoRef.current) return;

    try {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        await videoRef.current.play(); // Ensure play completes before proceeding
      }
      setIsPlaying(!isPlaying);
      setPlayingIndex(null);
      showTemporaryControls();
    } catch (error) {
      console.error("Error toggling play/pause:", error);
    }
  };
  
    // Show controls temporarily on tap
    const showTemporaryControls = () => {
      setShowControls(true);
      setTimeout(() => setShowControls(false), 3000); // Hide after 3 seconds
    };

  // const handlePlay = () => {
  //   if (videoRef.current) {
  //     videoRef.current.play(); // Directly call play on the video ref
  //   }
  // };

  // const handlePause = () => {
  //   if (videoRef.current) {
  //     videoRef.current.pause(); // Directly call pause on the video ref
  //   }
  // };

  return (
    <div className="carousel w-56 mb-4 sm:w-full bg-[#902729]">
      <br />
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay={playingIndex === null} // Only autoPlay when no video is playing
        showStatus={false}
        selectedItem={activeIndex} // Track the selected index manually
        onChange={handleChange}
        swipeable={playingIndex === null} // Disable swipe when video is playing
      >
        {combinedUrls.map((media, index) => (
          <div key={index} className="relative bg-[#902729] ">
            {media.url.endsWith(".mp4") ? (
              <div className="relative">
                {/* Video Element */}
                <p className="mb-5">{media.title }</p>

                {/* <video
                playsInline
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  controls
                  width="100%"
                  height="auto"
                  className="w-full  aspect-video object-contain bg-[#902729]"
            autoPlay
                  style={{ maxHeight: "500px" }}
                  onPause={() => setPlayingIndex(null)}
                  onPlay={() => setPlayingIndex(index)}
                >
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <div className="flex justify-center bg-[#d . . . . . . .  wdmnc ewmn, wemv wnv ] items-center w-full pb-10">
                {/* <Video
                        ref={videoRef} // Attach ref to Video component

         src={media.url} 
         controls={false} // Hide default controls
        height={500}
        width={800}
      /> */}
            {/* <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button> */}

            <div
      style={{
        position: "relative",
        cursor: "pointer",
      }}
      onClick={handleTogglePlayPause} // Toggle video on click/tap
    >
      {/* Video Component */}
      <Video
        ref={videoRef}
        src={media.url}
        controls={false} // Hide default controls
        height={800}
        width={'1000vh'}
      />

     
    </div>
      </div>

                {/* Play Button Overlay */}
                {showControls && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handleTogglePlayPause}
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg">
                    {isPlaying ?  <FaPause className="text-[#902729] text-2xl" /> :  <FaPlay className="text-[#902729] text-2xl" />}
                     
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <img
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
