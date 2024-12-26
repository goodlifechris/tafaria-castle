"use client";
import PostCard from "../components/post";
import TopBar from "../components/topbar";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function Categories() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}

function CategoriesContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  return (
    <div>
      <TopBar title={title || ''}/>
      <div className="flex items-center bg-white shadow-md">  
      </div>

      <div className="mt-16">
        <PostCard
          imageUrl="/images/posts/2.png"
          text="Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle."
        />
        <PostCard
          imageUrl="/images/posts/1.png"
          text="goDream is a Tafaria custom life skills building and leadership program for students that blends creative/arts workshops and fun hands-on activities, ensuring that each student discovers new talents, develops practical."
        />
        <PostCard
          imageUrl="/images/posts/3.png"
          text="Tafaria supports community based initiatives chiefly: Creating community linkages with visiting local and international artists for training & skills building, mentorships and capacity building..."
        />
        <PostCard
          imageUrl="/images/posts/4.png"
          text="Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle."
        />
      </div>
    </div>
  );
}