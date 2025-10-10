import React from "react";
import { motion } from "framer-motion";
import ContactCards from "@/components/contact/ContactCards";

const Contact = () => {
  return (
    <div>
      <div className="sm:max-h-[90vh] md:max-h-[80vh] lg:max-h-[60vw] px-6 lg:px-8">
        <div className="item-center lg:mx-0  my-15">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="md:text-9xl font-bold tracking-tight text-white text-7xl"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
            className="mt-2 md:mt-8 text-lg md:text-3xl text-pretty text-gray-200"
          >
            We’re here to answer your questions and assist you.{" "}
          </motion.p>
        </div>
      </div>

      <div className="bg-gradient-to-l from-[#2D415F] to-[#BCC9D6] py-20 px-4 sm:px-8 md:px-16">
        <ContactCards />
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1860.177588995579!2d72.832827!3d21.178045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5f22f17205%3A0x7f9cada3e22084a9!2sTirupati%20Sales%20Corporation!5e0!3m2!1sen!2sin!4v1755883342739!5m2!1sen!2sin"
          className="w-[100vw] h-[60vh] mx-auto"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
