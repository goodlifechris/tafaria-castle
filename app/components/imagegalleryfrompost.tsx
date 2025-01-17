import React, { useState, useEffect } from "react";
import {  Image } from "../querries/images/getimages";
import { FiShare2, FiHeart, FiX } from "react-icons/fi";

const ImagegalleryFromPost = ({images}:{images:Image[]}) => {
  const [likedImages, setLikedImages] = useState<string[]>([]); // Track liked images
  const [showScrollToTop, setShowScrollToTop] = useState(false); // Show "Scroll to Top" button
  const [selectedImage, setSelectedImage] = useState<Image | null>(null); // Track selected image for fullscreen modal

 

  const toggleLike = (id: string) => {
    setLikedImages((prev) =>
      prev.includes(id) ? prev.filter((likedId) => likedId !== id) : [...prev, id]
    );
  };

 

  // Scroll to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const closeImageModal = () => {
    setSelectedImage(null);
  };



  return (
    <div className="">

       
      <div className="masonry mx-5 ">
        { images.map((image: Image,index) => (
            <div
              key={index}
              className="relative bg-white rounded shadow-lg overflow-hidden group transition-transform transform hover:scale-105 pb-0 m-2"
              // onClick={() => openImageModal(image)}
            >
              <div className="masonry-item">
              {image?.image?.url ? (
  <img
    src={image.image.url}
    alt={image.title || 'Image'}
    loading="lazy"
    className="w-full object-cover h-auto transition duration-300"
    style={{ aspectRatio: 'auto' }}
  />

  
) : (
  <></>
)}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white font-bold text-center pa-5">{image.title}</h3>
                <p className="text-sm text-gray-200 p-5 text-center">{image.description}</p>
                <div className="flex mt-2 space-x-4">
                  <button
                    className={`p-2 rounded-full ${
                      likedImages.includes(image.id)
                        ? "bg-red-500 text-white"
                        : "bg-gray-700 text-gray-200"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(image.id);
                    }}
                  >
                    <FiHeart size={20} />
                  </button>
                  <a
  href={`https://wa.me/?text=${encodeURIComponent(
    `Check out this image: ${image.title} - View it here: http://209.38.189.197:3001/image?id=${image.id}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 bg-green-500 text-white rounded-full"
>
  <FiShare2 size={20} />
</a>
            
                </div>
              </div>
            </div>
          ))
}
      </div>


      {showScrollToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          ↑
        </button>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-75 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg w-3/4 max-w-4xl">
            <button
              onClick={closeImageModal}
              className="absolute top-4 rounded left-4 text-[#902729] text-3xl"
            >
              <FiX />
            </button>
            <h3 className="text-xl text-[#902729] font-bold mt-4 mb-2">{selectedImage.title}</h3>

            <div className="flex flex-col items-center">
              <img
                src={selectedImage.image.url}
                alt={selectedImage.title}
                className="w-full object-contain h-auto max-h-96 mb-4"
              />
              <p className="text-md text-gray-700 mb-4">{selectedImage.description}</p>
              <div className="flex space-x-6">
                <button
                  className={`p-2 rounded-full ${
                    likedImages.includes(selectedImage.id)
                      ? "bg-red-500 text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(selectedImage.id);
                  }}
                >
                  <FiHeart size={24} />
                </button>
                <a
           
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Check out this image: ${selectedImage.title} - View it here: http://209.38.189.197:3001/image?id=${selectedImage.id}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-500 text-white rounded-full flex items-center"
                >
                  <FiShare2 size={24} />
                </a>
              </div>
              {/* <p className="mt-4 text-gray-500">Number of Likes: {likedImages.filter(id => id === selectedImage.id).length}</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagegalleryFromPost;
