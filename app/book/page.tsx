"use client";

import React from "react";
import { FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";


const Book = () => {

    return (
      <>
 
      <div className="mx-auto justify-center items-center min-h-screen ">
        <div className="bg-green-50 p-6 rounded-lg shadow max-w-md w-full mx-auto m-12">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Our booking engine is currently being updated,<br/> To reserve kindly contact us on: </h3>
       
              <div className="space-y-4">
                <div className="flex items-center">
                <FaPhone className="text-green-600 mr-3" size={36} />

                <div>
                    <p className="font-medium text-gray-500">Call Us:</p>
                    <p className="text-gray-700">+254 700151480</p>
                  </div>
                </div>
                <div className="flex items-center">
                <FaWhatsapp className="text-green-600 mr-3" size={36} />

                <div>
                    <p className="font-medium text-gray-500">WhatsApp:</p>
                    <p className="text-gray-700">+254 708877244</p>
                  </div>
                </div>

                
                <div className="flex items-center">
                  <FaMailBulk className="text-green-600 mr-3" size={36} />
                  <div>
                    <p className="font-medium text-gray-700">Email Us:</p>
                    <p className="text-gray-700">info@tafaria.com</p>
                  </div>
                </div>
              </div>
              
      
            </div>
      </div>

     
     
      </>

    );
  }
;


export default Book;