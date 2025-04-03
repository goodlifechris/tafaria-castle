"use client";

import React from "react";
import BookNow from "../components/booknow";


const Book = () => {

    return (
      <>
 
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl font-bold mb-4">Book Now</p>
             <BookNow />
      </div>
      </>

    );
  }
;


export default Book;