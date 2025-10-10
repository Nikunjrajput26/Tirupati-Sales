"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Fire Safety & PA",
    image:
      "https://www.tirupatisales.com/uploads/images/16/16__FIRE_SAFETY,_PA,.png",
  },
  {
    name: "Lugs & Glands",
    image: "https://www.tirupatisales.com/uploads/images/16/28_LUGS_GLANDS.png",
  },
  {
    name: "Cable Tray",
    image: "https://www.tirupatisales.com/uploads/images/16/29_Cable_Tray.png",
  },
  {
    name: "Motor",
    image: "https://www.tirupatisales.com/uploads/images/16/30__MOTOR.png",
  },
  {
    name: "Conduit Pipes & Metal RCOM",
    image:
      "https://www.tirupatisales.com/uploads/images/16/31__CONDUIT_PIPES_METAL_RCOM_GI_PRECISION_BRAND.png",
  },
  {
    name: "Testing Instruments (MECO)",
    image:
      "https://www.tirupatisales.com/uploads/images/16/32_TESTNG_INSTRUMENTS_MECO.png",
  },
  {
    name: "Architecture Light",
    image:
      "https://www.tirupatisales.com/uploads/images/16/33__ARCHITECTURE_LIGHT.png",
  },
  {
    name: "MRO",
    image: "https://www.tirupatisales.com/uploads/images/16/34_MRO.png",
  },
  {
    name: "Cable",
    image: "https://www.tirupatisales.com/uploads/images/16/CABLE.png",
  },
  {
    name: "Cable Tie",
    image: "https://www.tirupatisales.com/uploads/images/16/Cable_Tie.png",
  },
  {
    name: "Domestic Fan",
    image: "https://www.tirupatisales.com/uploads/images/16/DOMESTIC_FAN.png",
  },
  {
    name: "Earthing",
    image: "https://www.tirupatisales.com/uploads/images/16/EARTHING.png",
  },
  {
    name: "Extra Item",
    image: "https://www.tirupatisales.com/uploads/images/16/Cable_Tie.png",
  },
  {
    name: "Another Item",
    image: "https://www.tirupatisales.com/uploads/images/16/DOMESTIC_FAN.png",
  },
];

export default function CategoryGrid() {
  const [showAll, setShowAll] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const visibleCategories = showAll ? categories : categories.slice(0, 12);

  return (
    <div ref={sectionRef} className="w-full py-16 bg-[#F9FAFB]">
      <h2 className="text-3xl text-center md:text-4xl font-bold text-[#2D425C] mb-4">
        Product Categories
      </h2>
      <p className="text-center text-[#4B5563] mb-12">
        Powering industries with trusted electrical solutions
      </p>

      <div className="grid grid-cols-2 mx-auto px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl">
        <AnimatePresence>
          {visibleCategories.map((item, index) => (
            <Link
              key={item.name}
              to="/category/industrial-fans/wall-mounted-fans"
              className="cursor-pointer group transform hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 40 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <div className="relative rounded-lg p-2 flex items-center justify-center bg-white border border-[#BCC9D6] shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-38 h-38 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-semibold text-[#2D425C] mt-3 text-center group-hover:text-[#E03131] transition-colors duration-300">
                  {item.name}
                </h3>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </div>

      {!showAll && categories.length > 12 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#2D425C] text-white px-6 py-2 rounded-md hover:bg-[#E03131] transition"
          >
            Show All
          </button>
        </motion.div>
      )}

      <div className="h-1 w-32 bg-gradient-to-r from-[#F5F79E] to-[#D4D85C] rounded-full mx-auto mt-16"></div>
    </div>
  );
}
