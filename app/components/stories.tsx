"use client";
import React from "react";
import { Montaga } from 'next/font/google'
import BlogCard from "./blogcard";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

//👇 Configure our font object
const montaga = Montaga({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Stories = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('name');
  
  const categories = [
    { img: "images/status_images/1.png", title: "Hospitality" },
    { img: "images/status_images/2.png", title: "Education" },
    { img: "images/status_images/5.png", title: "Arts " },
    { img: "images/status_images/3.png", title: "Conferencing" },
    { img: "images/status_images/4.png", title: "Tafaria Experience" },

  ];

  return (
    <div className={`w-full bg-[#902729] py-4 flex justify-center ${montaga.className}`}>
      <div className="flex overflow-x-scroll no-scrollbar space-x-6 px-4">
        {Array.from(categories).map((img) => (
          <Link 
            key={img.img} 
            href={`/menu?id=${img.title}&name=${encodeURIComponent(img.title)}`}
          >
            <div
              className="flex-shrink-0 flex flex-col items-center space-y-1 py-2 min-w-[80px] sm:min-w-[100px]"
            >
              <img
                className={`w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover
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
    </div>
  );
};

export default Stories;