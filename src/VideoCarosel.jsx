import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';

const RealEstateCarousel = ({ listings }) => {

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listings.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listings.length) % listings.length);
  };

  const currentListing = listings[currentIndex];

  function handleRedirect(url) {
    if (url) {
      window.open(url, "_blank"); // Opens in a new tab
    } else {
      console.error("URL is not valid");
    }
  }
  

  return (
    <div className="relative w-full max-w-6xl mx-auto font-sans">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="relative">
          <video
            ref={videoRef}
            src={currentListing.videoUrl}
            className="w-full h-auto"
            controls
            autoPlay
            muted
            loop
          />
          <div className="absolute bottom-4 left-4 p-4 text-white bg-gray-800 bg-opacity-80 rounded-lg hidden md:block">
            <h2 className="text-xl font-bold mb-1">{currentListing.location}</h2>
            <p className="text-lg mb-2">{currentListing.price}</p>
            <div className="flex space-x-2">
              <button 
              onClick={() => handleRedirect(currentListing.locationUrl)}
              className="bg-white text-black px-3 py-1 rounded-full flex items-center text-sm hover:bg-gray-200 transition-colors">
                <MapPin size={16} className="mr-1" />
                Location
              </button>
              <button onClick={()=>{navigate('/readMore')}}
              className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center text-sm hover:bg-blue-600 transition-colors">
                Read More
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop navigation buttons */}
      <div className="hidden md:block">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-all duration-200 focus:outline-none"
          aria-label="Previous property"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-all duration-200 focus:outline-none"
          aria-label="Next property"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Mobile view */}
      <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-1">{currentListing.location}</h2>
        <p className="text-2xl font-bold mb-2">{currentListing.price}</p>
        <div className="flex space-x-2 mb-4">
        <div className="bg-gray-100 text-black px-4 py-2 rounded-full flex items-center text-sm hover:bg-gray-200 transition-colors flex-1 justify-center">
      
  <MapPin size={16} className="mr-2" />
  <a href={currentListing.locationUrl} target="_blank" rel="noopener noreferrer">
    Location
  </a>
</div>



          <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center text-sm hover:bg-blue-600 transition-colors flex-1 justify-center">
            Read More
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
        {/* Mobile navigation buttons */}
        <div className="flex justify-between mt-2">
          <button
            onClick={prevSlide}
            className="bg-gray-200 text-black px-4 py-2 rounded-full flex items-center text-sm hover:bg-gray-300 transition-colors"
            aria-label="Previous property"
          >
            <ChevronLeft size={20} className="mr-1" /> Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-200 text-black px-4 py-2 rounded-full flex items-center text-sm hover:bg-gray-300 transition-colors"
            aria-label="Next property"
          >
            Next <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {listings.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to property ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RealEstateCarousel;