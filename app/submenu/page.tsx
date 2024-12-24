"use client"
import React, { Suspense } from 'react';
import TabComponent from "../components/tabs";
import SubMenu from "../components/submenu";
import { useSearchParams } from 'next/navigation';

// Create a separate component for the submenu content
const SubMenuContent = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const description = searchParams.get('description');

  return (
    <div>   
      <SubMenu title={title || ''} description={description || ''}/>
      <TabComponent />
    </div>
  );
};

// Main Categories component with Suspense
export default function Categories() {
  return (
    <Suspense fallback={
      <div className="w-full flex justify-center p-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    }>
      <SubMenuContent />
    </Suspense>
  );
}