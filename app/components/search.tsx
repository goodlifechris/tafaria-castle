// app/components/Search.tsx
"use client";
import { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";

interface Activity {
  id: number;
  name: string;
}

interface SearchProps {
  activities: Activity[];
  onActivitySelect: (activity: Activity) => void;
}

const Search = ({ activities, onActivitySelect }: SearchProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const filteredActivities = activities.filter(activity =>
//     activity.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
  const filteredActivities = activities;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    const bartopElement = document.querySelector('.bartop') as HTMLElement; // Get the element by class name
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Example media query for mobile devices

    if (bartopElement) {
      if (isDropdownOpen) {
        bartopElement.style.top = mediaQuery.matches ? '32rem' : '34rem'; // Adjust top value based on media query
        bartopElement.style.backgroundColor = 'white'; // Set background color to red
      } else {
        bartopElement.style.top = mediaQuery.matches ? '17rem' : '19rem'; // Reset top value based on media query
        bartopElement.style.backgroundColor = ''; // Reset background color
      }
    }
  }, [isDropdownOpen]); 
  return (
    <div className="relative z-50"> {/* Set relative positioning for the parent */}
      <div className="flex justify-center"> {/* Added a wrapper for centering */}
        <button
          onClick={toggleDropdown}
          className="flex w-64 items-center bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full shadow hover:bg-gray-300"
        >
          <FaSearch className="mr-2" />
          Tafaria&apos;s Experience
        </button>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className=" bg-white shadow-md rounded-md mt-2 w-64 z-50"> {/* Set a high z-index */}
          {/* <input
            type="text"
            placeholder="Search activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          /> */}
          <div className="max-h-48 overflow-y-auto">
            <ul className="py-2">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <li
                    key={activity.id}
                    className="px-4 py-2 hover:bg-gray-200 text-black cursor-pointer"
                    onClick={() => {
                      onActivitySelect(activity); // Handle activity selection
                      setIsDropdownOpen(false); // Close the dropdown after selection
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
      )}
    </div>
  );
};

export default Search;