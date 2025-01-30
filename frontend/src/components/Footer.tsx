import type { SocialLink } from "../types";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import type React from "react";

const socialLinks: SocialLink[] = [
  { name: "Facebook", url: "https://facebook.com", icon: Facebook },
  { name: "Twitter", url: "https://twitter.com", icon: Twitter },
  { name: "Instagram", url: "https://instagram.com", icon: Instagram },
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">PremiumCars</h3>
            <p className="text-sm">
              Luxury automobiles for the discerning driver
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <address className="not-italic text-sm">
              123 Luxury Lane
              <br />
              Beverly Hills, CA 90210
              <br />
              Phone: (555) 123-4567
              <br />
              Email: info@premiumcars.com
            </address>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-primary transition-colors duration-200"
                >
                  <link.icon width={24} height={24} />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} PremiumCars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
