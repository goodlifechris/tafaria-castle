// app/components/Toolbar.tsx
"use client";
import React, { useEffect } from 'react';

const Toolbar = () => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // const handleScroll = () => {
      // if (window.scrollY > 100) {
      //   setIsCollapsed(true);
      // } else {
      //   setIsCollapsed(false);
      // }
    // };

    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <div className={`transition-all 'max-h-0 overflow-hidden' : 'max-h-screen'}`}>
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