import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({ lowQualitySrc, highQualitySrc, alt }) => {
  const [imageSrc, setImageSrc] = useState(lowQualitySrc);
  
  useEffect(() => {
    const loadImage = () => {
      const highQualityImage = new Image();
      highQualityImage.src = highQualitySrc;
      highQualityImage.onload = () => {
        setImageSrc(highQualitySrc);
      };
    };

    loadImage();
  }, [highQualitySrc]);

  return <img src={imageSrc} alt={alt} />;
};

export default ProgressiveImage;
