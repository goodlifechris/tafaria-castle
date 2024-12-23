import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Barlow_Condensed } from 'next/font/google'

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})
const Footer = () => {
  return (
    <div className={`divide-y divide-gray-200 inline-flex w-lvw mt-5	${barlow_condensed.className}`}>
      {/* Bottom Section - Social Media */}
      <div className='flex  w-full  pa-10 bg-[#94723C]'>
      <p className='flex text-white p-10'>Tafaria. © 2024 All rights reserved.</p>
        <div className='flex items-center  space-x-4'>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;