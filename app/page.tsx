"use client";

import React, { Suspense } from 'react';
import TabComponent from "./components/tabs";
import Introduction from "./components/introduction";


const Home = () => {

  
  return (

    <>    
        <Suspense fallback={<div className="preloader">Loading...</div>}>
   
     <Introduction/>
     <TabComponent />
     </Suspense>
    </>


  )
};

export default Home;