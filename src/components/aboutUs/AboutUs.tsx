import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import warehouse from "../../assets/warehouse.avif"; // Adjust the path as necessary
import Associated from "./Associated";
import CompanyVision from "./CompanyVision";
import InfrastructureSection from "./InfrastructureSection";

const values = [
  {
    title: "Our Mission",
    text: "Develop Best Solutions and Services According to customers need for a satisfy smile",
  },
  {
    title: "Our Vision",
    text: "To be the Leader in Electrical Solutions through excellence in customer Service and Innovation.",
  },
  {
    title: "Our Commitment",
    text: "We deliver quality products and services at fair prices, ensuring true value for money. Our focus is client satisfaction, sustainable growth, and safety through global standards.",
  },
];

const AboutUs = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // only run once
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
    <div>
      {/* HEADER SECTION */}
      <div className="relative isolate overflow-hidden py-4 md:py-16">
        <div className="sm:max-w-[90vh] md:max-w-[80vh] lg:max-w-[60vw] px-6 lg:px-8">
          <div className="lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="md:text-9xl font-bold tracking-tight text-white text-7xl"
            >
              About Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
              className="mt-2 md:mt-8 text-lg md:text-3xl text-pretty text-gray-200"
            >
              Powering progress for 30+ years with trusted electrical solutions
              across India.
            </motion.p>
          </div>
        </div>
      </div>
      <CompanyVision />
      <InfrastructureSection />
      <Associated />
    </div>
  );
};

export default AboutUs;
