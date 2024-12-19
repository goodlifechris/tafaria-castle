"use client";
import React from "react";

const Stories = () => {
  
  const categories = [
    { img: "images/status_images/1.png", title: "Hospitality" },
    { img: "images/status_images/2.png", title: "Education" },
    { img: "images/status_images/3.png", title: "Conferencing" },
    { img: "images/arts.png", title: "Arts" },
    { img: "images/status_images/4.png", title: "Tafaria Experience" },
  ];
  return (
    
    <div className="w-full bg-[#902729] shadow py-4 flex justify-center">
    <div className="flex overflow-x-scroll no-scrollbar space-x-6 px-4">
      {Array.from(categories).map((img) => (
        <div
          key={img.img}
          className="flex-shrink-0 flex flex-col items-center space-y-1 py-2"
        >
          <img
            className="w-11 h-11  sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full ring-1 ring-gray-300"
            src={img.img}
            alt="Story"
          />
          <p className="text-center text-white text-sm font-medium">{img.title}</p>
        </div>
      ))}
    </div>
  </div>


  );
};

export default Stories;
