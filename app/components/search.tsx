// app/components/Search.tsx
"use client";
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
  const { isDropdownOpen } = useDropdown();
  const { toggleDropdown } = useDropdown(); // Access the toggle function

  const filteredActivities = activities;
  return (
    <div className="relative z-50 "> {/* Set relative positioning for the parent */}
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

        <div className=" bg-white shadow-md rounded-md  w-64 z-50 mt-2 mx-auto "> {/* Set a high z-index */}
                <div className="flex justify-center"> {/* Added a wrapper for centering */}
          <div className="max-h-48 overflow-y-auto">
            <ul className="py-2">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <li
                    key={activity.id}
                    className="px-4 py-2 hover:bg-gray-200 text-black cursor-pointer"
                    onClick={() => {
                      onActivitySelect(activity); // Handle activity selection
                      toggleDropdown(); // Close the dropdown after selection
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