// app/components/Search.tsx
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useDropdown } from '../context/DropdownContext';

interface Activity {
  id: number;
  name: string;
}

interface SearchProps {
  activities: Activity[];
  onActivitySelect: (activity: Activity) => void;
}

const Search = ({ activities, onActivitySelect }: SearchProps) => {
  const { isDropdownOpen, toggleDropdown } = useDropdown();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isDropdownOpen) {
          toggleDropdown();
          setDropdownOpened(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isDropdownOpen, toggleDropdown]);

  const handleButtonClick = () => {
    toggleDropdown();
    setDropdownOpened(true);
  };

  const filteredActivities = activities;
  return (
    <div className="relative z-50">
      <div className="flex justify-center">
        <button
          onClick={handleButtonClick}
          className="flex w-64 items-center bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full shadow hover:bg-gray-300"
        >
          <FaSearch className="mr-2" />
          Tafaria&apos;s Experience
        </button>
      </div>

      {isDropdownOpen && (
        <div ref={dropdownRef} className="bg-white shadow-md rounded-md w-64 z-50 mt-2 mx-auto">
          <div className="flex justify-center">
            <div className="max-h-48 overflow-y-auto">
              <ul className="py-2">
                {filteredActivities.length > 0 ? (
                  filteredActivities.map((activity) => (
                    <li
                      key={activity.id}
                      className="px-4 py-2 hover:bg-gray-200 text-black cursor-pointer"
                      onClick={() => {
                        onActivitySelect(activity);
                        toggleDropdown();
                      }}
                    >
                      {activity.name}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-black">No results found</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;