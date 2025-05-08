// components/SafeImage.tsx
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

 const SafeImage = ({ src, alt, width, height, style }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: `${height}px` }}>
      {(!loaded || error) && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#888'
        }}>
          {error ? 'Image unavailable' : 'Loading...'}
        </div>
      )}
      
      <Image
        src={error ? '/default-offer-image.jpg' : src}
        alt={alt}
        width={width}
        height={height}
        style={{
          ...style,
          opacity: loaded && !error ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};
export default SafeImage;
// Usage in your component:
