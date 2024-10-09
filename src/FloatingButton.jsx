import React, { useState, useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton = ({ phoneNumber }) => {
  const buttonRef = useRef(null);
  const [isPhoneNumberVisible, setIsPhoneNumberVisible] = useState(false);

  const handleButtonClick = () => {
    if (window.innerWidth > 768) {
      setIsPhoneNumberVisible(!isPhoneNumberVisible);
    } else {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  useEffect(() => {
    const button = buttonRef.current;
    let animationInterval;

    const startAnimation = () => {
      let isGrowing = true;
      animationInterval = setInterval(() => {
        button.style.transform = isGrowing ? 'scale(1.1)' : 'scale(1)';
        isGrowing = !isGrowing;
      }, 500);
    };

    const stopAnimation = () => {
      clearInterval(animationInterval);
      button.style.transform = 'scale(1)';
    };

    button.addEventListener('mouseenter', stopAnimation);
    button.addEventListener('mouseleave', startAnimation);

    startAnimation();

    return () => {
      clearInterval(animationInterval);
      button.removeEventListener('mouseenter', stopAnimation);
      button.removeEventListener('mouseleave', startAnimation);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isPhoneNumberVisible && (
        <div className="mb-2 bg-black text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          <a href={`tel:${phoneNumber}`} className="text-lg font-semibold">
            {phoneNumber}
          </a>
        </div>
      )}
      <div
        ref={buttonRef}
        className="cursor-pointer"
        onClick={handleButtonClick}
      >
        <div className="text-gray-900 rounded-full bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none dark:focus:ring-teal-700 font-medium rounded-full text-sm px-3 py-3 text-center ">

          <Phone size={24} />
        </div>
      </div>
    </div>
  );
};

export default FloatingCallButton;