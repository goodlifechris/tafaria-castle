"use client";

import React from "react";
import BookNow from "../components/booknow";
import Head from "next/head";


const Book = () => {

    return (
      <>
            <Head>
      <link rel="stylesheet" href="https://nebulacrs.hti.app/hostech/booknow/static/css/booknow.css" />
    </Head>
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl font-bold mb-4">Book Now</p>
             <BookNow />
      </div>
      </>

    );
  }
;


export default Book;