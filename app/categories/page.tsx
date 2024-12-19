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
  imageUrl="/images/posts/2.png"
  text="Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle."
/>

<PostCard
  imageUrl="/images/posts/1.png"
  text="goDream is a Tafaria custom life skills building and leadership program for students that blends creative/arts workshops and fun hands-on activities, ensuring that each student discovers new talents, develops practical"
/>
<PostCard
  imageUrl="/images/posts/3.png"
  text="Tafaria supports community based initiatives chiefly:
Creating community linkages with visiting local and international artists for training & skills building, mentorships and capacity building..."/>
<PostCard
  imageUrl="/images/posts/4.png"
  text="Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle."
/>
  </div>
  }