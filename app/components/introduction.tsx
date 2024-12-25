"use client"
import React, { useState } from "react";
import AfterIntroduction from "./afterintroduction";
import { motion, AnimatePresence } from "framer-motion";
import { Barlow_Condensed } from 'next/font/google'
import { Montaga } from 'next/font/google'

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})
const montaga = Montaga({
  weight: '400',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})
const Introduction = () => {
  const [showAfterIntroduction, setShowAfterIntroduction] = useState(false);

  const toggleReadMore = () => {
    setShowAfterIntroduction((prevState) => !prevState);
  };

  return (
    <>
      {/* Parallax Section */}
      <div
        className="relative w-full aspect-[1.75]   bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/images/home.png')` }}
      >
       
        {/* <Link href="https://apps.hti-systems.com/hostech/tafaria/desktop.html?locale=en_US">
          <img
            src="/images/checkin.png"
            width={500}
            height={500}
            className="justify-center justify-self-center mt-5 px-12"
            alt="Check-in Image"
          />
        </Link> */}
        <div className="flex w-full bottom-0 absolute  py-2 text-center our-story-background">
          <div className="w-screen flex justify-center items-center">
            <div className="text-gray-800 text-center mx-4 md:mx-20 lg:mx-40 text-sm md:text-base lg:text-lg">
              <h1 className={`font-inter text-3xl font-extrabold tracking-tight text-[#902729] ${barlow_condensed.className}`}>
                Our story
              </h1>
            </div>
          </div>
        </div>
        
        </div>
        <div className="text-center text-black text-sm  p-4 ">
        {!showAfterIntroduction && (
             <></>
              )}
              {!showAfterIntroduction && (
                <p className={montaga.className} >
                  Eunice and I founded the Tafaria Castle in 2012AD to transform
                  this village where I grew up... {!showAfterIntroduction && <span   onClick={toggleReadMore} className="underline text-blue-600">read more</span>}
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
            <AfterIntroduction />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Read More/Read Less Button */}
      {/* <div className="text-center">
        {showAfterIntroduction  && <span   onClick={toggleReadMore} className="underline text-blue-600">read less</span>}
      </div> */}
    </>
  );
};

export default Introduction;
