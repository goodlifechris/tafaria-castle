"use client";
import React, { useState, useEffect, Suspense } from "react";
import AfterIntroduction from "./afterintroduction";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./hero";




const Introduction = () => {
  const [showAfterIntroduction, setShowAfterIntroduction] = useState(false);
  // const [imageLoaded, setImageLoaded] = useState(false); // State to track image loading

  const toggleReadMore = () => {
    setShowAfterIntroduction((prevState) => !prevState);
  };

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = '/images/home.png';
    img.onload = () => {
      // setImageLoaded(true); // Set imageLoaded to true when the image is loaded
    };
  }, []);

  return (
    <>
      {/* Parallax Section */}
      {/* {imageLoaded && ( // Render only if the image is loaded
        <div
          className="relative w-full aspect-[1.75] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url('/images/home.png')` }}
        >
          <div className="flex w-full bottom-0 absolute py-2 text-center our-story-background">
            <div className="w-screen flex justify-center items-center">
              <div className="text-gray-800 text-center mx-4 md:mx-20 lg:mx-40 text-sm md:text-base lg:text-lg">
                <h1 className={`font-inter mt-9 text-2xl font-extrabold tracking-tight text-[#902729] ${barlow_condensed.className}`}>
                  Once upon a Dream ...,
                </h1>
              </div>
            </div>
          </div>
        </div>
      )} */}
        <Suspense fallback={<div className="preloader">Loading...</div>}>

      <Hero/>
      </Suspense>

      <div className="text-center text-black text-base px-4">
        {!showAfterIntroduction && (
          <p className="cutom-text">
            Eunice and I founded the Tafaria Castle in 2012AD to transform
            this village where I grew up...{" "}
            <span onClick={toggleReadMore} className="underline text-blue-600">read more</span>
          </p>
        )}
      </div>

      {/* Animated AfterIntroduction Section */}
      <AnimatePresence>
        {showAfterIntroduction && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AfterIntroduction toggleReadMore={toggleReadMore}/>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Introduction;