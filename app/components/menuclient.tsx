// app/components/MenuClient.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BlogCard from "../components/blogcard";
import React, { useEffect, useRef } from "react";
import ImagegalleryFromPost from "../components/imagegalleryfrompost";
import TopBar from "../components/topbar";
import Cart from "../components/cart/cart";
import { useQuery } from "@tanstack/react-query";
import { fetchPostsByCategorySlug } from "../querries/categories/getpostsfromcategories";
import ImageGallery from "../components/imagegallery";
import VideoGallery from "../components/videogallery";
import VideoGalleryFromPost from "../components/videogalleryfrompost";
// import BlogCardHorizontal from "../components/blogCardHorizontal";
// import LeisureTickets from "../components/leisureActivities";

export interface Session {
  title: string;
  description: string;
}

export default function MenuClient({
  initialName,
  initialType,
}: {
  initialName?: string;
  initialType?: string;
}) {
  const slug = initialName ? decodeURIComponent(initialName) : "";
  let type = initialType ? decodeURIComponent(initialType) : undefined;
  let cardSlug= "";
  if(initialType === undefined) {
type = "blogs";

  }else if (initialType === "images") {
    type = "images";
  } else if (initialType === "videos") {
    type = "videos";
  } else {
    type= initialType;
    cardSlug=initialType
  }

  console.log("Title: ", slug); //Country%20Lodge
  console.log("type: ", type);

  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});


  const { data, isLoading, error } = useQuery({
    queryKey: ["categories", slug],
    // queryFn: () => fetchPostsByCategory(title || ""),
    queryFn: () => fetchPostsByCategorySlug(slug || ""),
  });

  const title=data?.name;
  useEffect(() => {
    if (cardSlug && cardRefs.current[cardSlug]) {
      // Wait a brief moment for the layout to settle
      const timer = setTimeout(() => {
        cardRefs.current[cardSlug]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center' // Scrolls to center the element vertically
        });
      }, 100); // Small delay to ensure DOM is ready
      
      return () => clearTimeout(timer); // Cleanup
    }
  }, [cardSlug, data]); // Depend on cardSlug and data

  if (isLoading)
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-[#94723C] rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 text-lg font-semibold">
          🛡️ Preparing your royal treasures... 🏰
        </p>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    // <QueryClientProvider client={queryClient}>
    <div className="w-full">
      {/* {title === "Leisure Activities" ? (
        <LeisureTickets />
      ) : ( */}
        <>
          <TopBar slug={data?.slug || ''} title={data?.name || ''} type={type || ""} />

          <div className="mt-20">
            {data && data.name === "Gift Shop" && <Cart />}

            {title === "images" && (
              <div className="text-center text-gray-600">
                <ImageGallery />
              </div>
            )}

            {title === "videos" && (
              <div className="text-center text-gray-600">
                <VideoGallery />
              </div>
            )}

            {data && (type != "videos" && type !="images")  && (
              <div className="relative">
                <div className=" pb-4 overflow-x-auto container mx-auto">
                  <p className=" max-w-1xl text-center mx-auto text-gray-700 leading-relaxed font-serif text-lg my-6 px-6">
  {data?.description}
</p>
                  {data?.posts.map((item, index) => (
                    <div
                      key={index}
                      ref={(el) => {
                        if (el) cardRefs.current[item.slug] = el;
                      }}
                      className="flex-shrink-0 snap-start"
                    >
                      
                      <p className="text-black">{slug} / {item.slug}</p>
                      <BlogCard
                        id={item.slug}
                        imageUrls={item.images.map((image: any) => ({
                          title: image.title,
                          url: image?.image?.url || "",
                        }))}
                        videoUrls={
                          item.videos?.map((video: any) => ({
                            title: video.title,
                            url: video?.video?.url || "",
                          })) || []
                        }
                        slug={item.slug}
                        type={slug}
                        title={item.title}
                        createdAt={item.createdAt}
                        content={item.content}
                      />
                    </div>
                  ))}
                </div>

                {/* Desktop - Grid Layout */}
                {/* <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.posts.map((item, index) => (
        <div 
          key={index}
          className="h-full"
          ref={(el) => { if (el) cardRefs.current[item.title] = el; }}
        >
          <BlogCardHorizontal
            id={item.id}
            imageUrls={item.images.map((image: any) => ({
              title: image.title,
              url: image?.image?.url || '',
            }))}
            videoUrls={
              item.videos?.map((video: any) => ({
                title: video.title,
                url: video?.video?.url || '',
              })) || []
            }
            title={item.title}
            createdAt={item.createdAt}
            content={item.content}
          />
        </div>
      ))}
    </div> */}
              </div>
            )}

            {data && type === "images" && (
              <ImagegalleryFromPost
               
              
                images={data.posts.flatMap((post) =>
                  post.images?.map((img) => img)
                )}
              />
            )}

            {data && type === "videos" && (
              <VideoGalleryFromPost
                videos={data.posts.flatMap((post) =>
                  post.videos?.map((img) => img)
                )}
              />
            )}
          </div>
        </>
      {/* )} */}
    </div>
    // </QueryClientProvider>
  );
}
