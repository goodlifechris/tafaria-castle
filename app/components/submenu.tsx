"use client"
import React, { useState } from "react";
import Link from "next/link";
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
const SubMenu = ({ title }: { title: string }) => {
  const [showAfterIntroduction, setShowAfterIntroduction] = useState(false);

  const toggleReadMore = () => {
    setShowAfterIntroduction((prevState) => !prevState);
  };

  return (
    <>
      {/* Parallax Section */}
      <div
        className="relative w-full " >
       
        <div className="flex bottom-0 w-full text-white py-2  mt-8 text-center">
          <div className="w-screen flex justify-center items-center">
            <div className="text-gray-800 text-center mx-4 md:mx-20 lg:mx-40 text-sm md:text-base lg:text-lg">
              <h1 className={`font-inter text-4xl font-extrabold tracking-tight text-[#902729] ${barlow_condensed.className}`}>
                {title}
              </h1>
              {!showAfterIntroduction && (
                <br/>
              )}
              {!showAfterIntroduction && (
                <p className={montaga.className} >
                 The Tafaria Nano Herbarium offers a unique, educational experience, guiding visitors toward environmental consciousness and a deeper understanding of botany promoting conservation through the Arts. 

<br/>
Led by either the resident botanist or expert guides, visitors explore essential botanical skills, from specimen collection to species identification, labeling, cataloging, and data recording. This uniquely styled display herbarium, simplifies complex botanical concepts through the Tafaria Taxonomy which is an innovative approach that blends science and art. 
<br/>
Tafaria Nano Herbarium is a valuable resource for fostering ecological awareness and inspiring a commitment to conservation.                </p>
              )}
            </div>
          </div>
        </div>
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
    </>
  );
};

export default SubMenu;
