import { motion } from "framer-motion";
import type React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-white mb-8">
            At PremiumCars, we are passionate about delivering the finest luxury
            automobiles to our discerning clientele. With years of experience
            and a keen eye for excellence, we curate a collection of the world's
            most prestigious vehicles, ensuring that each car in our inventory
            meets the highest standards of performance, design, and
            craftsmanship.
          </p>
          <p className="text-white text-lg ">
            Our team of automotive experts is dedicated to providing an
            unparalleled car buying experience, offering personalized service
            and expert guidance to help you find the perfect vehicle that
            matches your unique style and preferences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
