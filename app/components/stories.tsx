"use client";
import React, { Suspense, useRef, useState, useEffect } from "react"; // Add useState and useEffect
import { Montaga } from 'next/font/google';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons
import Search from "./search";
import { useRouter } from "next/navigation"; // Import useRouter

const montaga = Montaga({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// Create a separate component for the stories content
const StoriesContent = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('name');
  
  const categories = [
    { img: "images/status_images/1.png", title: "Hospitality" },
    { img: "images/status_images/2.png", title: "Education" },
    { img: "images/status_images/5.png", title: "Arts" },
    { img: "images/status_images/3.png", title: "Conferencing" },
    { img: "images/status_images/4.png", title: "Custom Programs" },
    { img: "images/status_images/7.png", title: "Tafaria Experience" },
    { img: "images/status_images/6.png", title: "Blogs" },
  ];

  return (
    <div className="flex space-x-6 px-4">
      {Array.from(categories).map((img) => (
        <Link 
          key={img.img} 
          href={`/menu?id=${img.title}&name=${encodeURIComponent(img.title)}`}
        >
          <div
            className="flex-shrink-0 flex flex-col items-center space-y-1 py-2 min-w-[80px] sm:min-w-[100px]"
          >
            <img
              className={`w-26 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 rounded-full object-cover
                ${activeCategory === img.title 
                  ? 'ring-4 ring-white' 
                  : 'ring-1 ring-gray-300'
                }`}
              src={img.img}
              alt="Story"
            />
            <p className="text-center text-white text-sm font-medium w-full">{img.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

// Main Stories component with Suspense
const Stories = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ref for the scrollable container
  const [showLeftArrow, setShowLeftArrow] = useState(false); // State for left arrow visibility
  const [showRightArrow, setShowRightArrow] = useState(true); // State for right arrow visibility
  const router = useRouter(); // Initialize useRouter
  const activities = [
    { id: 2, name: "Archery" },
    { id: 3, name: "Horseback riding" },
    { id: 4, name: "Horse Carriage driving" },
    { id: 5, name: "Medieval bowling" },
    { id: 6, name: "High altitude swimming" },
    { id: 7, name: "Open-air gym" },
    { id: 8, name: "A dance studio" },
    { id: 9, name: "The outdoor Viking’s pillow" },
    { id: 10, name: "Mini-golf" },
    { id: 11, name: "Lawn tennis" },
    { id: 12, name: "Basketball" },
    { id: 13, name: "Pool table" },
    { id: 14, name: "Big-screen cinema" },
    { id: 15, name: "Art tours" },
    { id: 16, name: "Museum tours" },
    { id: 17, name: "Herbarium tours" },
    { id: 18, name: "Farm tours" },
  ];
  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2; // Scroll half the width of the container
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0); // Show left arrow if not at the start
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth); // Show right arrow if not at the end
    }
  };
  const handleActivitySelect = (activity: { id: number; name: string }) => {
    // Navigate to the menu page with the selected activity's ID and name
    router.push(`/menu?id=Tafaria Experience&name=Tafaria Experience&card=${activity.name}`);
  };
  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll); // Add scroll event listener
      handleScroll(); // Initial check for arrow visibility
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll); // Clean up event listener
      }
    };
  }, []);

  return (
    <div className="items-center justify-items-center bg-[#902729] pb-5">
    <div className={`w-full bg-[#902729] pt-4 flex justify-center items-stretch  relative ${montaga.className}`}>
      {showLeftArrow && (
        <button onClick={() => scrollTo('left')} className="absolute left-2 z-10 flex items-center justify-center rounded-full bg-[#9f4446] p-2">
          <FaChevronLeft className="text-white text-2xl" />
        </button>
      )}
      <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar">
        <Suspense fallback={
          <div className="flex justify-center p-4">
            <div className="animate-pulse">Loading...</div>
          </div>
        }>
          <StoriesContent />
        </Suspense>
      </div>
      {showRightArrow && (
        <button onClick={() => scrollTo('right')} className="absolute right-2 z-10 flex items-center justify-center  shadow-sm rounded-full bg-[#9f4446] p-2">
          <FaChevronRight className="text-white text-2xl" />
        </button>
      )}
    </div>

    <Search activities={activities} onActivitySelect={handleActivitySelect} />
  
    </div>
  );
};

export default Stories;