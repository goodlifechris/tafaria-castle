/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaPause, FaPlay, FaTimes } from "react-icons/fa";
import { Video, VideoPlayerRef } from "reactjs-media";
import Image from "next/image";

export interface Image {
  title: string;
  url: string;
  link: string;
}

export interface Video {
  title: string;
  url: string;
  link: string;
}

export interface VideoLinks {
  title: string;
  url: string;
  link: string;
}

interface CarouselsProps {
  images: Image[];
  videos: Video[];
  videolinks: VideoLinks[];
}

const Carousels: React.FC<CarouselsProps> = ({
  images,
  videos,
  videolinks,
}) => {
  const combinedUrls = [...images, ...videos];
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const videoRef = useRef<VideoPlayerRef | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    console.log(isMobile, videolinks);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (index: number) => {
    if (playingIndex !== null) return;
    setActiveIndex(index);
  };

  const handleTogglePlayPause = async () => {
    if (!videoRef.current) return;
    try {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        await videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setPlayingIndex(null);
      showTemporaryControls();
    } catch (error) {
      console.error("Error toggling play/pause:", error);
    }
  };

  const showTemporaryControls = () => {
    setShowControls(true);
    setTimeout(() => setShowControls(false), 3000);
  };

  return (
    <div className="carousel w-56 mb-4 sm:w-full bg-[#902729]">
      <br />
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay={playingIndex === null}
        showStatus={false}
        selectedItem={activeIndex}
        onChange={handleChange}
        swipeable={playingIndex === null}
      >
        {combinedUrls.map((media, index) => (
          <div key={index} className="relative bg-[#902729]">
            {media.url.endsWith(".mp4") && (
              <div className="relative">
                <p className="mb-5">{media.title}</p>
                <div className="flex justify-center items-center w-full pb-10">
                  <div
                    style={{
                      position: "relative",
                      cursor: "pointer",
                    }}
                    onClick={handleTogglePlayPause}
                  >
                    <Video
                      ref={videoRef}
                      src={media.url}
                      controls={false}
                      height={800}
                      width={"1000vh"}
                    />
                  </div>
                </div>
                {showControls && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handleTogglePlayPause}
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      {isPlaying ? (
                        <FaPause className="text-[#902729] text-2xl" />
                      ) : (
                        <FaPlay className="text-[#902729] text-2xl" />
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            <div>
              {media.url.endsWith(".jpg") && (
                <div className="w-full relative">
                  {" "}
                  {/* Add relative positioning here */}
                  <Image
                    width={1000}
                    height={500}
                    src={media.url}
                    alt={`Carousel image ${index + 1}`}
                    className="w-full object-cover"
                    style={{ height: "600px" }}
                  />
                  {/* Mobile button positioned on top of the image */}
                  <div className="md:hidden absolute bottom-8 left-0 right-0 px-4">
                    <button
                      onClick={() => setShowBookingModal(true)}
                      className="bg-[#902729] hover:bg-[#a52b2d] text-white py-4 px-6 rounded-full w-full font-bold transition-all duration-300 ease-out shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                    >
                      Book Here 📅
                    </button>
                  </div>
                </div>
              )}

              {/* Desktop iframe */}
              <div className="hidden md:flex items-center w-full">
                <iframe
                  src="https://booking-engine-self.vercel.app"
                  height="440px"
                  title="Example Embed"
                  className="border-none m-0 p-0 absolute right-0 flex bg-red"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Booking Modal for Mobile */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Book Now</h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <iframe
                src="https://booking-engine-self.vercel.app"
                height="600px"
                width="100%"
                title="Booking Embed"
                className="border-none m-0 p-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousels;
