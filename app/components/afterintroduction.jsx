"use client";
import React, { useState } from "react";

//👇 Import Open Sans font
import { Montaga, Parisienne } from 'next/font/google'

//👇 Configure our font object
const montaga = Montaga({
  weight: '400',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})
//👇 Configure our font object
const parisienne = Parisienne({
  weight: '400',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})
const AfterIntroduction = () => {
  return (
    <div className={`p-4 w-screen flex justify-center items-center ${montaga.className}`}>
      <div className="text-gray-800 text-center  mx-4 md:mx-20 lg:mx-40 text-sm md:text-base lg:text-lg">
   
        <p>
     Eunice and I founded the Tafaria Castle in 2012AD to transform this village where I grew up. My family settled here in 1979 making us the earliest settlers after the Deighton Downs ranch was subdivided. I grew up in these plains which were then very isolated, remote, lonely and hardship ranged from wildlife conflicts, droughts, lack of water, strenuous daily chores and absence of social infrastructure typical of most rural Kenya. This  is the background upon which my childhood dream to see my village transform grew
        </p>
        <br/>
    <p>
      The journey in making this dream a reality began in 2007 with acquisition of the land that Tafaria sits and the subsequent construction of a Roman-type amphitheater as a community information center. This was later followed by a Castle and a country lodge which opened in 2012AD. Over the years, Tafaria has grown into a Center for the Arts, a Conference Center, a Museum, and a herbarium. These facilities offer Hospitality, Conferencing, Arts & Educational programs.
    </p>
    <br />
    <p>
      Welcome to our Love
    </p> 
    <br/>
    <p className={`${parisienne.className} text-[#94723C] text-2xl`} >
    George Tafaria
    </p>

  </div>
</div>


  );
};

export default AfterIntroduction;
