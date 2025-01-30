import React from "react";

interface CarCardProps {
  image: string;
  name: string;
  price: string;
  specs: string[];
}

const CarCard: React.FC<CarCardProps> = ({ image, name, price, specs }) => {
  return (
    <div className="bg-white text-golden border border-golden p-4 rounded-lg shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <p className="text-sm">{price}</p>
      <ul className="mt-2 space-y-1 text-xs">
        {specs.map((spec, idx) => (
          <li key={idx}>- {spec}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarCard;
