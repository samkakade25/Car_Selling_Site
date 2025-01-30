import { Button } from "./ui/button";
import { useNavigate, useParams } from "react-router-dom";

type CarDetailsType = {
  [key: number]: {
    name: string;
    description: string;
    image: string;
    specifications: {
      engine: string;
      horsepower: string;
      fuelType: string;
      transmission: string;
    };
  };
};

const carDetails: CarDetailsType = {
  1: {
    name: "Luxury Sedan",
    description: "A smooth and comfortable ride, perfect for city drives.",
    image:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228142243/ezgif.com-gif-maker-98-5.jpg",
    specifications: {
      engine: "2.0L Turbocharged I4",
      horsepower: "250 HP",
      fuelType: "Petrol",
      transmission: "Automatic",
    },
  },
  2: {
    name: "Sports Car",
    description: "Unleash the power of speed and performance on every road.",
    image:
      "https://www.cartoq.com/wp-content/uploads/2016/08/bmw_lead_2_7series.jpg",
    specifications: {
      engine: "3.0L V6",
      horsepower: "400 HP",
      fuelType: "Petrol",
      transmission: "Manual",
    },
  },
  3: {
    name: "Electric SUV",
    description: "Eco-friendly and powerful for your adventurous journeys.",
    image: "https://img.indianautosblog.com/2023/10/19/audi-1c9a.jpg",
    specifications: {
      engine: "3.0L V6",
      horsepower: "400 HP",
      fuelType: "Petrol",
      transmission: "Manual",
    },
  },
  4: {
    name: "Convertible",
    description: "Enjoy the wind in your hair with this stylish car.",
    image: "https://www.rossocorsagallery.com/workspace/img/180402.jpg",
    specifications: {
      engine: "3.0L V6",
      horsepower: "400 HP",
      fuelType: "Petrol",
      transmission: "Manual",
    },
  },
  5: {
    name: "Hybrid Coupe",
    description: "Fuel-efficient and elegant, designed for modern lifestyles.",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202005/861a4abe_2fec_44aa_aa21_c79ceca1cdc3_660_080520125004.jpg?size=1200:675",
    specifications: {
      engine: "3.0L V6",
      horsepower: "400 HP",
      fuelType: "Petrol",
      transmission: "Manual",
    },
  },
};

export default function CarDetails() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  const { id } = useParams<{ id: string }>();
  const car = carDetails[Number(id)];

  if (!car) {
    return <div className="text-center py-10">Car not found</div>;
  }

  return (
    <div className="bg-black container mx-auto py-10">
      <div className="w-full max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-6">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-auto rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-white mb-4">{car.name}</h1>
        <p className="text-white text-lg">{car.description}</p>
        <h2 className="text-white mt-4 text-2xl font-semibold mb-2">
          Specifications
        </h2>
        <ul className="text-white list-disc list-inside">
          <li>Engine: {car.specifications.engine}</li>
          <li>Horsepower: {car.specifications.horsepower}</li>
          <li>Fuel Type: {car.specifications.fuelType}</li>
          <li>Transmission: {car.specifications.transmission}</li>
        </ul>
        <div className="mt-6">
          <button
            onClick={handleNavigate}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Click for ENQUIRY
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
