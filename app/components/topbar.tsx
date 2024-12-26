import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Barlow_Condensed } from 'next/font/google'

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})

const TopBar = ({title}:{title:string}) => {
    const handleBackClick = () => {
        window.location.href = '/'; // Force reload the home page
      };
      
  return (
    <div className="w-full">
<h1 className={`${barlow_condensed.className} text-2xl fixed bg-white z-10 w-full font-bold text-center pt-4 tracking-tight text-[#902729] capitalize border-b-2 border-[#902729] pb-4 mx-auto flex items-center`}>
  <a onClick={handleBackClick} className="text-[#94723C] hover:underline mx-5">
  <FaAngleLeft className="mr-2" />
  </a>
  {title}
</h1>
</div>

  );
};

export default TopBar;