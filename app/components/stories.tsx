"use client";
import React, { Suspense, useRef, useState, useEffect } from "react"; // Add useState and useEffect
import { Montaga } from 'next/font/google';
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from "../querries/categories/getcategories";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Image from "next/image";
import { useParams } from "next/navigation";


const montaga = Montaga({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// Create a separate component for the stories content
const StoriesContent = () => {
  const params = useParams() as { slug: string[] };
  const slugSegments = params?.slug || [];
  // Decode segments
  const [category = "Default Category", 
    name = "Default Name", 
    type = "All"] = slugSegments.map((segment: string) => 
decodeURIComponent(segment)
);
  const activeCategory =category;
  console.log("Active searchParams: ", category);
  console.log("Active Category: ", name);
  console.log("Active Category: ", type);
  const { data, isLoading, error } = useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const categories = data;
  return (
    <div className="flex space-x-6 px-4">
      {categories && Array.from(categories).map((img) => (
        <Link 
          key={img.image.url} 
          // href={`/menu?id=${img.name}&name=${encodeURIComponent(img.name)}&type=${encodeURIComponent('Blogs')}`}
          href={`/menu/${encodeURIComponent(img.name)}/${encodeURIComponent('Blogs')}`}
        >
          <div
            className="flex-shrink-0 flex flex-col items-center space-y-1 py-2 min-w-[80px] sm:min-w-[100px]"
          >
            <Image
            width={100}
            height={100}
              className={`w-26 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 rounded-full object-cover
                ${activeCategory === img.name 
                  ? 'ring-4 ring-white' 
                  : 'ring-1 ring-gray-300'
                }`}
              src={img.image.url}
              alt="Story"
            />
            <p className="text-center text-white text-sm font-medium w-full">{img.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};





const Stories = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ref for the scrollable container
  const [showLeftArrow, setShowLeftArrow] = useState(false); // State for left arrow visibility
  const [showRightArrow, setShowRightArrow] = useState(true); // State for right arrow visibility

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
  // const handleActivitySelect = (activity: { id: string; name: string }) => {
  //   // http://209.38.189.197:3001/blog?id=${id}
  //   // Navigate to the menu page with the selected activity's ID and name
  //   router.push(`/menu?id=Tafaria experience&name=Tafaria experience&card=${activity.name}`);
  //   // let id="cm5m1izia0002l0z0r58z4r6w";
  //   // router.push(`/menu?id=${id}`);
  // };
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 800) {
        // setIsCollapsed(true);
        setShowLeftArrow(false);
        setShowRightArrow(false);

      } else {
        // setIsCollapsed(false);
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          setShowLeftArrow(scrollLeft > 0); // Show left arrow if not at the start
          setShowRightArrow(scrollLeft + clientWidth < scrollWidth); // Show right arrow if not at the end
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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

  const [queryClient] = useState(() => new QueryClient());
  return (
    <div className="items-center justify-items-center bg-[#902729] pb-5">
    <div className="flex space-x-6 px-4">

  
  
    </div>
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
              {/* <div className={`transition-all? 'max-h-0 overflow-hidden' : 'max-h-screen'}`}> */}
             <div> 
              <QueryClientProvider client={queryClient}>
          <StoriesContent />
          </QueryClientProvider>
          </div>
        </Suspense>
      </div>
      {showRightArrow && (
        <button onClick={() => scrollTo('right')} className="absolute right-2 z-10 flex items-center justify-center  shadow-sm rounded-full bg-[#9f4446] p-2">
          <FaChevronRight className="text-white text-2xl" />
        </button>
      )}
    </div>
    {/* <AnimatedImage 
  src="/images/banner.png" 
  alt="Description" 
  width={500} 
  height={300}
/> */}
    {/* <QueryClientProvider client={queryClient}>
    <Search onActivitySelect={handleActivitySelect} />
    </QueryClientProvider> */}

    </div>
  );
};

export default Stories;
