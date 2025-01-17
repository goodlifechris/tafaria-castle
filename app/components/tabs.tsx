"use client";
import React, { useState, useEffect } from "react";
import { Barlow_Condensed } from 'next/font/google';
import { useDropdown } from "../context/DropdownContext";
import { useNavigation } from '../context/NavigationContext';
import { usePathname } from "next/navigation"; // Import useRouter
import ImageGallery from "./imagegallery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import VideoGallery from "./videogallery";
import PostGallery from "./bloggallery";

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

const TabComponent = () => {

  const [activeTab, setActiveTab] = useState("Images");

  const [images, setImages] = useState([
    "/images/1.png",
    "/images/3.png",
    "/images/5.png",
    "/images/4.png",
    "/images/15.jpeg",
    "/images/16.jpeg",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
    "/images/12.png",
    "/images/13.png",
    "/images/6.png",
    "/images/7.png",

    // //accommodation
    "/images/accommodation/1.jpg",
    "/images/accommodation/2.jpg",
    "/images/accommodation/2.jpg",
    "/images/accommodation/4.jpg",
    "/images/accommodation/5.jpg",
    "/images/accommodation//6.jpg",


    //arts
    "/images/arts/1.jpeg",
    "/images/arts/2.jpeg",
    "/images/arts/3.jpeg",
    "/images/arts/4.jpeg",
    "/images/arts/5.jpeg",
    "/images/arts/6.jpeg",
    "/images/arts/7.jpeg",

    //arts/arts
    "/images/arts/arts/1.jpg",
    "/images/arts/arts/2.jpg",
    "/images/arts/arts/3.jpg",
    "/images/arts/arts/4.jpg",
    "/images/arts/arts/5.jpg",
    "/images/arts/arts/6.jpg",
    "/images/arts/arts/7.jpg",
    "/images/arts/arts/8.jpg",
    "/images/arts/arts/9.jpg",

    //category
    "/images/categories/1.png",
    "/images/categories/2.png",
    "/images/categories/3.png",
    "/images/categories/godream.png",

    //conference
    "/images/conference/1.jpg",
    "/images/conference/2.jpg",
    "/images/conference/3.jpg",
    "/images/conference/4.jpg",



    //dining
    "/images/dining/1.jpg",

    //gym
    "/images/gym/1.jpg",

    //herbarium
    "/images/herbarium/1.jpg",
    "/images/herbarium/2.jpg",
    "/images/herbarium/3.jpg",
    "/images/herbarium/4.jpg",


    //hiking
    "/images/hiking/1.jpg",
    "/images/hiking/2.jpg",
    "/images/hiking/3.jpg",

    //horseriding
    "/images/horseriding/horseriding.jpg",

    //posts
    "/images/posts/1.png",
    "/images/posts/2.png",
    "/images/posts/3.png",
    "/images/posts/4.png",
    "/images/posts/5.png",
    "/images/posts/6.png",

    //status_images

    "/images/status_images/6.png",
    "/images/status_images/7.png",

    //wedding
    "/images/wedding/1.jpg",
    "/images/wedding/2.jpg",
    "/images/wedding/3.jpg",
    "/images/wedding/4.jpg",
    "/images/wedding/5.jpg",


    //swimming
    "/images/swimming/1.jpg",

    //hiking
    "/images/hiking/horseriding.jpg",


    //dining
    "/images/dining/1.jpg",


  ]);

  const [videos, setVideos] = useState([
    {
      id: 1, title: "Video 1",
      date: "2024-03-20",
      duration: "3:45",
      src: "/videos/tafaria_video.mp4",
      description: "Take a virtual tour through the magnificent halls of Tafaria Castle.",
    },
    {
      id: 2, title: "Video 2",
      date: "2024-03-20",
      duration: "3:45",
      src: "/videos/tafaria_video2.mp4",
      description: "TAFARIA CASTLE🏰🎠 Tafaria Castle and Country Lodge endeavors to be guests’ dream come true. George "
    },
    {
      id: 3, title: "Video 3",
      date: "2024-03-20",
      duration: "3:45",
      src: "/videos/tafaria_video.mp4",
      description: "Take a virtual tour through the magnificent halls of Tafaria Castle.", thumbnail: "/images/videos/3.png"
    },
  ]);
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Blog Post 1", media_type: "video", url: "/videos/tafaria_video.mp3" },
    { id: 2, title: "Blog Post 1", media_type: "image", url: "/images/1.png" },
    { id: 3, title: "Blog Post 1", media_type: "image", url: "/images/2.png" },
    { id: 4, title: "Blog Post 1", media_type: "image", url: "/images/3.png" },
    { id: 5, title: "Blog Post 1", media_type: "image", url: "/images/4.png" },
  ]);

  const loadMoreItems = () => {
    // Load more items based on the active tab
    if (activeTab === "Images") {
      setImages((prevImages) => [
        ...prevImages,
        ...images.map((src) => `${src}?repeat=${prevImages.length}`), // Append unique query parameter
      ]);
    } else if (activeTab === "Videos") {
      setVideos((prevVideos) => [
        ...prevVideos,
        ...videos.map((video) => ({
          ...video,
          id: video.id + prevVideos.length, // Create a unique ID
        })),
      ]);
    } else if (activeTab === "Blogs") {
      setBlogs((prevBlogs) => [
        ...prevBlogs,
        ...blogs.map((blog) => ({
          ...blog,
          id: blog.id + prevBlogs.length, // Create a unique ID
        })),
      ]);
    }
  };

  const { addToHistory } = useNavigation();
  const pathname = usePathname(); // Get the current pathname


  // useEffect(() => {
  //   addToHistory(pathname); // Add current path to history
  // }, [pathname, addToHistory]);

  useEffect(() => {
    addToHistory(pathname); // Add current path to history

    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100; // Trigger before reaching the bottom
      if (bottom) {
        loadMoreItems();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab]);
  const { isDropdownOpen } = useDropdown();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <div className={`sticky bartop ${isDropdownOpen ? 'open' : 'closed'} z-10 bg-white shadow-md`}>
        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b-2 border-gray-200">
          {["Images", "Videos", "Blogs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 font-bold ${barlow_condensed.className} ${activeTab === tab
                ? "border-b-4 border-[#902729] text-[#902729]"
                : "text-gray-500 hover:text-purple-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Content - Moved outside sticky container */}
      <div className="mt-6 w-full m">
        {(activeTab === "Images") && (
          <QueryClientProvider client={queryClient}>
            <ImageGallery />
          </QueryClientProvider>
        )}

        {(activeTab === "Videos") && (
          <QueryClientProvider client={queryClient}>
            <div>
              <VideoGallery />
            </div>
          </QueryClientProvider>

        )}
        {(activeTab === "Blogs") && (

          <QueryClientProvider client={queryClient}>
                       <PostGallery />
          </QueryClientProvider>

        )}
      </div>
    </>
  );
};

export default TabComponent;