import React, { useEffect, useState } from "react";

const images = [
  "https://www.rossocorsagallery.com/workspace/img/180402.jpg",
  "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mikebirdy-120049.jpg&fm=jpg",
  "https://img.freepik.com/premium-photo/black-supercar-is-shown-dark-image_951586-147011.jpg",
  "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/fe70b93e-887f-4a7c-9e0e-174cde30ac75/45c0043e-9c84-4fc9-b9f1-cedaf9e1d221.png",
];

export default function AutoSlidingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-screen h-[400px] bg-black overflow-hidden">
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full bg-black flex justify-center items-center"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
