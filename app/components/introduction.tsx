"use client";
import React, { useState, useEffect, Suspense } from "react";
// import AfterIntroduction from "./afterintroduction";
// import { motion, AnimatePresence } from "framer-motion";
import Hero from "./hero";
// import Videoyoutubeplayer from "./videoyoutubeplayer";
import AboutsIntro from "./aboutsintro";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Introduction = () => {
  // const [showAfterIntroduction, setShowAfterIntroduction] = useState(false);
  // const [imageLoaded, setImageLoaded] = useState(false); // State to track image loading

  // const toggleReadMore = () => {
  //   setShowAfterIntroduction((prevState) => !prevState);
  // };
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = "/images/home.png";
    img.onload = () => {
      // setImageLoaded(true); // Set imageLoaded to true when the image is loaded
    };
  }, []);

  return (
    <>
      <Suspense fallback={<div className="preloader">Loading...</div>}>
        <Hero />
      </Suspense>
      <QueryClientProvider client={queryClient}>
        <AboutsIntro />
      </QueryClientProvider>

      {/* Animated AfterIntroduction Section */}
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
    </>
  );
};

export default Introduction;
