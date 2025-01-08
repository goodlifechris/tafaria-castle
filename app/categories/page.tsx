"use client";

import PostCard from "../components/post";
import TopBar from "../components/topbar";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Categories() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}

function CategoriesContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const imageUrl = searchParams.get("imageUrl") || "";

  return (
    <div>
      <TopBar title={title || "Categories"} />
      <div className="flex items-center bg-white shadow-md"></div>
      <div className="mt-16">
        <PostCard
          createdAt="2025-01-07T06:05:33.369Z"
          imageUrl={imageUrl || "/images/posts/1.png"}
          title={title || "Default Title"}
          text="Standing proudly beside the golf course is Jach, a stallion 🐎, with the plinth of honor attached to him, engraved with the names of those who helped build Tafaria castle."
        />
      </div>
    </div>
  );
}
