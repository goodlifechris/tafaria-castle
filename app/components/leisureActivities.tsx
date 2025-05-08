import React, { useState } from 'react';
import { Cinzel } from 'next/font/google';
import { useLeisureActivities } from '../features/activities/hooks/useOffers';
import Image from 'next/image';
const cinzel = Cinzel({
    subsets: ['latin'],
    weight: '400',
  });




const LeisureTickets: React.FC = () => {
    const { data, isLoading, error } = useLeisureActivities();
    const [clickedId, setClickedId] = useState(null);

    const handleImageClick = (activity) => {
      setClickedId(activity.id);
      
      // Send description to WhatsApp
      const message = encodeURIComponent(
        `I'm interested in this activity:\n\n${activity.description || activity.title}`
      );
      const whatsappUrl = `https://wa.me/254708877244?text=${message}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset animation after 500ms
      setTimeout(() => setClickedId(null), 500);
    };
    if (isLoading) return <div>Loading...</div>;
    if (error || !data) return <div>Failed to load activities</div>;
    
  
  return (
    <div className="bg-[#1b2a26] text-white py-10 px-5 lg:px-20">
   
      <div className="text-center mb-8">
      <h1 className={`text-3xl lg:text-5xl font-bold text-yellow-500 ${cinzel.className}`}>
      TAFARIA LEISURE TICKETS {data.length}</h1>
        <p className="mt-4 text-lg italic text-gray-300">
          Non-chargeable activities to inhouse guests: <span className="italic text-yellow-300">Kd’s kingdom</span> (slides, swings, seesaw and Vikings pillow), Swimming, Outdoor gym
        </p>
      </div>

      
      <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 align-items-center justify-items-center">


        {data.map((activity,index) => ( 
<img key={index} className="object-contain md:object-cover" onClick={() => handleImageClick(activity)} src={activity.image.url} />

          ))}
  
      </div>
    </div>
    </div>
  );
};

export default LeisureTickets;
