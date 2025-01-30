import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import type React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black shadow-md"
    >
      <div className="bg-black container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-white"
          >
            PremiumCars
          </motion.div>
        </Link>
        <nav>
          <ul className="text-white flex space-x-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Premium Collection", path: "/premium-collection" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path}>
                  <Button variant="ghost">{item.name}</Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
