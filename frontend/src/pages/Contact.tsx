import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { motion } from "framer-motion";
import type React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white-200"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1"
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" className=" w-fit hover:bg-slate-900">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
