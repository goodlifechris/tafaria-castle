"use client"
import Link from "next/link";
import PostCard from "../components/post";

export default function Categories() {
    return <div>   
      
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
  {/* Back Button */}
  <button
    className="text-[#902729] text-lg font-semibold flex items-center hover:underline pr-5"
    onClick={() => window.history.back()} // Navigate back
  >
    &#8592; 
  </button>


  {/* Image */}
  <Link href="https://apps.hti-systems.com/hostech/tafaria/desktop.html?locale=en_US">
    <img
      src="/images/checkin.png"
      className=" h-10 "
      alt="Check-in Image"
    />
  </Link>
</div>
  
<PostCard
  imageUrl="/images/posts/1.png"
  text="Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle."
/>

<PostCard
  imageUrl="/images/posts/2.png"
  text="Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle."
/>
<PostCard
  imageUrl="/images/3.png"
  text="Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle."
/>
<PostCard
  imageUrl="/images/2.png"
  text="Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle."
/>
  </div>
  }