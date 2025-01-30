import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function AuroraBackgroundDemo() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <AuroraBackground className="bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://hips.hearstapps.com/hmg-prod/images/p90467422-highres-world-s-media-share-1677268347.jpg?crop=0.665xw:0.666xh;0.165xw,0.145xh&resize=980:*)",
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Premium Cars with Premium Quality..
        </div>
        <div className="text-2xl font-extralight  md:text-4x text-white py-4">
          Pune's No. 1 Car Rental Service
        </div>
        <button
          onClick={handleNavigate}
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
        >
          Contact now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
