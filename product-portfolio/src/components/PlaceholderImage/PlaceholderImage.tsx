import React, { useState } from 'react';
import './PlaceholderImage.css';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div 
        className={`placeholder-image ${className}`}
        style={{ width, height }}
      >
        <div className="placeholder-content">
          <i className="fas fa-image placeholder-icon"></i>
          <span className="placeholder-text">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div 
          className={`placeholder-image loading ${className}`}
          style={{ width, height }}
        >
          <div className="placeholder-content">
            <i className="fas fa-spinner fa-spin placeholder-icon"></i>
            <span className="placeholder-text">Loading...</span>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? 'loaded' : 'loading'}`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ 
          width, 
          height,
          display: imageLoaded ? 'block' : 'none'
        }}
      />
    </>
  );
};

export default PlaceholderImage;
