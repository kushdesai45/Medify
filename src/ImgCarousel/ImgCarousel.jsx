
import React, { useState } from 'react';
import './ImgCarousel.css';

const images = ['assests/medImg1.png','assests/medImg2.png','assests/medImg1.png','assests/medImg2.png','assests/medImg1.png','assests/medImg2.png','assests/medImg1.png','assests/medImg2.png','assests/medImg1.png'];


const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const itemsPerFrame = 3;
    const totalFrames = Math.ceil(images.length / itemsPerFrame);
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
    // Get the images for the current frame
    const getCurrentImages = () => {
      const startIndex = currentIndex * itemsPerFrame;
      return images.slice(startIndex, startIndex + itemsPerFrame);
    };
  
    return (
      <div className="carousel">
        <div className="carousel-inner">
          {getCurrentImages().map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="dots">
          {[...Array(totalFrames)].map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

export default ImageCarousel;
