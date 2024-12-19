"use client"
import Link from "next/link";
import PostCard from "../components/post";

export default function Categories() {
    return <div>   
      
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
  {/* Back Button */}
  <button
    className="text-[#902729] text-lg font-semibold flex items-center hover:underline"
    onClick={() => window.history.back()} // Navigate back
  >
    &#8592; Back
  </button>


  {/* Image */}
  <Link href="https://apps.hti-systems.com/hostech/tafaria/desktop.html?locale=en_US">
    <img
      src="/images/checkin.png"
      className="w-10 h-10 object-cover rounded-full"
      alt="Check-in Image"
    />
  </Link>
</div>
  

<PostCard/>
<PostCard/>
<PostCard/>
  </div>
  }