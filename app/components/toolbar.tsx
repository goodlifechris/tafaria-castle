// app/components/Toolbar.tsx
"use client";
import React, { useState, useEffect } from 'react';

const Toolbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`transition-all duration-300 ${isCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-screen'}`}>
      <div className="p-4 bg-gray-800 text-white">
        <div className="space-y-4">
          <div className="p-4 bg-gray-700 rounded">Toolbar Item 1</div>
          <div className="p-4 bg-gray-700 rounded">Toolbar Item 2</div>
          <div className="p-4 bg-gray-700 rounded">Toolbar Item 3</div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;