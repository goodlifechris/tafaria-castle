// app/components/carousel.tsx
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Define the props interface
interface CarouselsProps {
  images: string[]; // Array of image URLs
}

const Carousels: React.FC<CarouselsProps> = ({ images }) => {
  return (
    <div className="carousel rounded-box w-56 sm:w-full">
      <Carousel showThumbs={false} infiniteLoop autoPlay showStatus={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;