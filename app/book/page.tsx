"use client";

import React from "react";
import { FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";

const Book = () => {
  return (
    <>
      <div className="mx-auto justify-center items-center min-h-screen">
        <div className="bg-green-50 p-6 rounded-lg shadow max-w-md w-full mx-auto m-12">
          <h3 className="font-semibold mb-4 text-black mt-5">
            Our booking engine is currently being updated, to reserve kindly contact us on:
          </h3>
          
          <div className="space-y-4">
            <a 
              href="tel:+254700151480" 
              className="flex items-center hover:bg-green-100 p-2 rounded-lg transition-colors"
            >
              <FaPhone className="text-green-600 mr-3" size={24} />
              <div>
                <p className="text-gray-700 hover:text-green-700">+254 700151480</p>
              </div>
            </a>
            
            <a 
              href="https://wa.me/254708877244" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:bg-green-100 p-2 rounded-lg transition-colors"
            >
              <FaWhatsapp className="text-green-600 mr-3" size={24} />
              <div>
                <p className="text-gray-700 hover:text-green-700">+254 708877244</p>
              </div>
            </a>
            
            <a 
              href="mailto:info@tafaria.com" 
              className="flex items-center hover:bg-green-100 p-2 rounded-lg transition-colors"
            >
              <FaMailBulk className="text-green-600 mr-3" size={24} />
              <div>
                <p className="text-gray-700 hover:text-green-700">info@tafaria.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;