import CarCarousel from "./AutoSlidingCarousel";
import React from "react";

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "Car 1",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/p90467422-highres-world-s-media-share-1677268347.jpg?crop=0.665xw:0.666xh;0.165xw,0.145xh&resize=980:*",
    },
    {
      id: 2,
      name: "Car 2",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/p90467422-highres-world-s-media-share-1677268347.jpg?crop=0.665xw:0.666xh;0.165xw,0.145xh&resize=980:*",
    },
    {
      id: 3,
      name: "Car 3",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/p90467422-highres-world-s-media-share-1677268347.jpg?crop=0.665xw:0.666xh;0.165xw,0.145xh&resize=980:*",
    },
    // Add more cars as needed
  ];

  return (
    <div>
      <CarCarousel cars={cars} />
    </div>
  );
};

export default Cars;
