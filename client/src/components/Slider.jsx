import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img className="w-full" src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <button
          className="text-white font-bold bg-black bg-opacity-50 rounded-full py-1 px-3"
          onClick={handlePrevSlide}
        >
          &#8249;
        </button>
        <button
          className="text-white font-bold bg-black bg-opacity-50 rounded-full py-1 px-3"
          onClick={handleNextSlide}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Slider;
