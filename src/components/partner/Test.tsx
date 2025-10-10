"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import LogoClouds from "../partner/LogoClouds";
import AuthPartnerImg from "../../assets/authPartner.png";

export default function BrandPartners() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full my-10 bg-gradient-to-l from-[#2D415F] to-[#BCC9D6] py-10 md:px-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 overflow-hidden"
    >
      {/* Left Side: Authorized Partner Stamp */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block md:w-[15vw] border-r border-white pe-6"
      >
        <img
          src={AuthPartnerImg}
          alt="Authorized Partner"
          width={220}
          height={220}
          className="object-contain"
        />
      </motion.div>

      {/* Right Side: Title + Slider */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 w-full md:w-[60vw]"
      >
        <h2 className="text-center md:text-left text-2xl md:text-4xl font-bold text-white mb-6">
          Our Brand Partners
        </h2>
        <LogoClouds />
      </motion.div>
    </section>
  );
}
