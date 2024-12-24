"use client"
import BlogCard from "../components/blogcard";
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from "react"; // Add Suspense import

const MenuContent = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('name');
  return <div className="w-full">   
    <h1 className="text-3xl font-bold text-center my-8 tracking-tight text-[#94723C] capitalize border-b-2 border-[#902729] pb-4 max-w-2xl mx-auto">
      {title}
    </h1><BlogCard
        imageUrl="/images/categories/godream.png"
        title="goDream Life Skills & Leadership Program"
        description="goDream is a Tafaria custom life skills building and leadership program for students that blends creative/arts workshops and fun hands-on activities, ensuring that each student discovers new talents, develops practical..."
      />
      <BlogCard
        imageUrl="/images/categories/1.png"
        title="Community Engagement"
        description="Tafaria supports community based initiatives chiefly:
Creating community linkages with visiting local and international artists for training & skills building, mentorships and capacity building..."
      />
      <BlogCard
        imageUrl="/images/categories/2.png"
        title="Tafaria Nano Herbarium"
        description="The Tafaria Nano Herbarium offers a unique, educational experience, guiding visitors
toward environmental consciousness and a deeper understanding of botany promoting conservation through the Arts..."
      />
      <BlogCard
        imageUrl="/images/categories/3.png"
        title="Tafaria Nano Farm"
        description="Tafaria Nano Farm offers a rich agricultural experience where visitors explore sustainable farming in an inspiring, hands-on environment. The farm features a
diverse orchard, a vegetable garden, greenhouses, and a variety of livestock..."
      />
            <BlogCard
        imageUrl="/images/categories/2.png"
        title="Museum"
        description="Tafaria Evolution Science Museum offers a captivating journey through human history, geology, and Kenyan heritage. Visitors here explore applied visual arts illustrating the dynamic forces of geology and volcanoes..."
      />
  </div>
  }

  // Main Menu component with Suspense
export default function Menu() {
  return (
    <Suspense fallback={
      <div className="w-full flex justify-center p-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    }>
      <MenuContent />
    </Suspense>
  );
}