"use client";
import { useEffect, useState, useRef } from "react";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";
import trust from "../../assets/trust.png";
import { motion } from "framer-motion";

const trustFactors = [
  {
    Image: mission,
    title: "Mission",
    description:
      "Develop best solutions and services according to customers' needs for a satisfying smile.",
  },
  {
    Image: vision,
    title: "Vision",
    description:
      "To be the leader in electrical solutions through excellence in customer service and innovation.",
  },
  {
    Image: trust,
    title: "Commitment",
    description:
      "We deliver quality at a fair price, exceed client expectations, and uphold growth, responsibility, and safety standards",
  },
];

export default function CompanyVision() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // stop observing after first trigger
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-l from-[#2D415F] to-[#BCC9D6] py-20 px-4 sm:px-8 md:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFactors.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.2, duration: 0.7 }}
              className="group cursor-pointer list-none rounded-2xl border border-transparent p-6 bg-white shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:border-red-400 "
            >
              <div className="flex flex-col items-center sm:flex-row  sm:items-start gap-6">
                {/* Image */}
                <div className="flex-shrink-0 flex sm:justify-start">
                  <img
                    className="w-20 h-20 object-contain"
                    src={item.Image}
                    alt={item.title}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 text-center sm:text-left">
                  <h5 className="text-md md:text-xl md:text-left font-extrabold text-gray-600 ">
                    Our
                  </h5>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-600 ">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-gray-600 md:text-left text-center leading-tight md:text-base">
                {item.description}
              </p>
            </motion.li>
          ))}
        </div>
      </div>
    </section>
  );
}
