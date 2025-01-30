import React from "react";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Luxury Sedan",
    description: "A smooth and comfortable ride, perfect for city drives.",
    image:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228142243/ezgif.com-gif-maker-98-5.jpg",
  },
  {
    id: 2,
    name: "Sports Car",
    description: "Unleash the power of speed and performance on every road.",
    image:
      "https://www.cartoq.com/wp-content/uploads/2016/08/bmw_lead_2_7series.jpg",
  },
  {
    id: 3,
    name: "Electric SUV",
    description: "Eco-friendly and powerful for your adventurous journeys.",
    image: "https://img.indianautosblog.com/2023/10/19/audi-1c9a.jpg",
  },
  {
    id: 4,
    name: "Convertible",
    description: "Enjoy the wind in your hair with this stylish car.",
    image: "https://www.rossocorsagallery.com/workspace/img/180402.jpg",
  },
  {
    id: 5,
    name: "Hybrid Coupe",
    description: "Fuel-efficient and elegant, designed for modern lifestyles.",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202005/861a4abe_2fec_44aa_aa21_c79ceca1cdc3_660_080520125004.jpg?size=1200:675",
  },
];

export default function CarGrid() {
  const navigate = useNavigate();

  const handleCarClick = (id: number) => {
    navigate(`/car-details/${id}`); // Redirect to car details page
  };

  return (
    <div className="bg-black container mx-auto py-10 space-y-10">
      {cars.map((car) => (
        <div
          key={car.id}
          className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
        >
          {/* Car Image */}
          <div className="m-2 p-2 w-full md:w-1/3">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Car Name and Description */}
          <div className="w-full md:w-2/3 flex flex-col items-start justify-center space-y-4 p-4 bg-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">{car.name}</h2>
            <p className="text-white">{car.description}</p>
            <button
              onClick={() => handleCarClick(car.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
