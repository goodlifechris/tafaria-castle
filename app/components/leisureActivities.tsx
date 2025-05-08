import React from 'react';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({
    subsets: ['latin'],
    weight: '400',
  });
const activities = [
  {
    title: 'Museum Tour',
    subtitle: '(The Big Reunion)',
    priceAdult: 'KSh 1,000',
    priceKids: 'KSh 500',
    image: '/museum.jpg', // Replace with your image URL or local path
  },
  {
    title: 'Archery',
    priceAdult: 'KSh 1,000',
    priceKids: 'KSh 500',
    image: '/archery.jpg',
  },
  {
    title: 'Mini Golf',
    priceAdult: 'KSh 1,000',
    priceKids: 'KSh 500',
    image: '/golf.jpg',
  },
];

const LeisureTickets: React.FC = () => {
  return (
    <div className="bg-[#1b2a26] text-white py-10 px-5 lg:px-20">
      <div className="text-center mb-8">
      <h1 className={`text-3xl lg:text-5xl font-bold text-yellow-500 ${cinzel.className}`}>
      TAFARIA LEISURE TICKETS</h1>
        <p className="mt-4 text-lg italic text-gray-300">
          Non-chargeable activities to inhouse guests: <span className="italic text-yellow-300">Kd’s kingdom</span> (slides, swings, seesaw and Vikings pillow), Swimming, Outdoor gym
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => (
          <div key={index} className="bg-[#2e3c38] rounded-2xl overflow-hidden shadow-lg text-center">
            <img src={activity.image} alt={activity.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-yellow-400">{activity.title}</h2>
              {activity.subtitle && <p className="text-sm text-gray-400">{activity.subtitle}</p>}
              <div className="mt-3 text-base">
                <p>{activity.priceAdult} <span className="text-sm text-gray-300">adult</span></p>
                <p>{activity.priceKids} <span className="text-sm text-gray-300">kids</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeisureTickets;
