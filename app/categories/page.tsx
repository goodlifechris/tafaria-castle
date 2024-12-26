"use client";
import PostCard from "../components/post";
import { FaAngleLeft, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";

export default function Categories() {
  const router = useRouter(); // Initialize useRouter
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

  const activities = [
  
    { id: 2, name: "Archery" },
    { id: 3, name: "Horseback riding" },
    { id: 4, name: "Horse Carriage driving" },
    { id: 5, name: "Medieval bowling" },
    { id: 6, name: "High altitude swimming" },
    { id: 7, name: "Open-air gym" },
    { id: 8, name: "A dance studio" },
    { id: 9, name: "The outdoor Viking’s pillow" },
    { id: 10, name: "Mini-golf" },
    { id: 11, name: "Lawn tennis" },
    { id: 12, name: "Basketball" },
    { id: 13, name: "Pool table" },
    { id: 14, name: "Big-screen cinema" },
    { id: 15, name: "Art tours" },
    { id: 16, name: "Museum tours" },
    { id: 17, name: "Herbarium tours" },
    { id: 18, name: "Farm tours" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const filteredActivities = activities.filter(activity =>
  //   activity.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleActivitySelect = (activity: { id: number; name: string }) => {
    // Navigate to the menu page with the selected activity's ID and name
    router.push(`/menu?id=Tsafaria Experience&name=Tsafaria Experience&card=${activity.name }`
      // pathname: '/menu', // Adjust the path as necessary
      // query: { id: activity.id, name: activity.name },
    );
    setIsDropdownOpen(false); // Close the dropdown after selection
  };
  return (
    <div>
      <div className="flex items-center px-4 py-2 bg-white shadow-md">
        {/* Back Button */}
  <Link href="/" className="text-[#94723C] hover:underline mx-5">
  <FaAngleLeft size={30}  />
  </Link>

        {/* Search Button */}
        <div className="">
          <button
            onClick={toggleDropdown}
            className="flex w-64 items-center bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full shadow hover:bg-gray-300"
          >
            <FaSearch className="mr-2" />
            Tafaria&apos;s Experience
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-md rounded-md mt-2 w-64 z-10">
              {/* <input
                type="text"
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-b border-gray-300 p-2 w-full focus:outline-none"
              /> */}
              <div className="max-h-48 overflow-y-auto">
                <ul className="py-2">
                  {activities.length > 0 ? (
                    activities.map((activity) => (
                      <li
                        key={activity.id}
                        className="px-4 py-2 hover:bg-gray-200 text-black cursor-pointer"
                        onClick={() => handleActivitySelect(activity)} // Handle activity selection
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

      </div>

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
  );
}