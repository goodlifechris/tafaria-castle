"use client"
import React from "react";
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
const SubMenu = ({ title,description }: { title: string ,description:string}) => {


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
              <br/>
                <p className={montaga.className} >
                  {description} heellelle
                  </p>
                

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubMenu;
