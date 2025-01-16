import React from "react";
import Image from "next/image";

export interface Image {
  title: string;
  url: string;
  height: number; // Add height to the Image interface
}

interface SimpleGalleryProps {
  images: Image[]; // Array of image objects
}

const SimpleGallery: React.FC<SimpleGalleryProps> = ({ images }) => {
  return (
    <div className="masonry">
      {images.map((image, index) => (
        <div
          key={index}
          className="masonry-item"
        >
          <Image
            src={image.url}
            alt={image.title}
            width={1920} // Specify width
            height={image.height} // Use correct height based on your data
            className="w-full h-auto object-cover transition-transform transform group-hover:scale-105"
            priority={index < 2} // Make sure the first few images load quickly
          />
        </div>
      ))}
    </div>
  );
};

export default SimpleGallery;
