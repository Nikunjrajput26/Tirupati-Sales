"use client";
import { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";

const trustFactors = [
  {
    value: 30,
    suffix: "+",
    title: "Years of Experience",
    description:
      "Supplying to infrastructure, industries, and government projects.",
  },
  {
    value: 36,
    suffix: "+",
    title: "Authorized Brand Partners",
    description: "Working with 36+ global electrical brands.",
  },
  {
    value: 350,
    suffix: "+ Cr",
    title: "Turnover",
    description: "Trusted by top builders, infra firms, and government bodies.",
  },
  {
    value: 150,
    suffix: "+",
    title: "Trained Experts",
    description: "Staff with deep technical know-how and support beyond sales.",
  },
];

const AnimatedNumber = ({
  value,
  suffix,
  start,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  start: boolean;
  delay?: number;
}) => {
  const { number: springNumber } = useSpring({
    from: { number: 0 },
    to: { number: start ? value : 0 },
    config: { tension: 40, friction: 10 },
    delay: start ? delay : 0, // apply delay only when start is true
    reset: false,
  });

  return (
    <animated.div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
      {springNumber.to((n) => `${Math.floor(n)}${suffix || ""}`)}
    </animated.div>
  );
};

export default function TrustFactors() {
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow mb-6"
        >
          Why Businesses Trust Tirupati Sales
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Our legacy, scale, and service make us a dependable partner across
          industries.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.2, duration: 0.7 }}
              className="group cursor-pointer list-none rounded-2xl border border-transparent py-8 px-2 bg-white shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:border-red-400"
            >
              <AnimatedNumber
                value={item.value}
                suffix={item.suffix}
                start={inView}
                delay={i * 300 + 600}
              />
              <h3 className="mt-5 text-xl font-bold text-[#2D425C] group-hover:text-red-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-[1.2] md:text-base">
                {item.description}
              </p>
            </motion.li>
          ))}
        </div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mt-16 origin-left"
        />
      </div>
    </section>
  );
}
