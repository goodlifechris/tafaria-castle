import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Barlow_Condensed } from 'next/font/google';

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  return (
    <div className={`flex flex-col sm:flex-row w-full p-5 bg-[#94723C] justify-between items-center ${barlow_condensed.className}`}>
      <div className='flex items-center space-x-4 m-5 sm:mb-0'>
        <a href="https://www.google.com/maps/search/Tafaria+Castle/@-0.1164533,36.6279602,17z?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
          <p className='text-white'><span className='text-[#902729]'>Location:</span> 1910 Park Rise, off Asunder Road on Deighton Downs Avenue along Nyeri Nyahururu Road</p>
        </a>
      </div>
      <div className='flex items-center space-x-4 mr-20'>
        <a href="https://www.facebook.com/TafariaCaslteArts/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-white" />
        </a>
        <a href="https://x.com/tafariacastle?lang=en" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white" />
        </a>
        <a href="https://www.instagram.com/tafaria.castle/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;