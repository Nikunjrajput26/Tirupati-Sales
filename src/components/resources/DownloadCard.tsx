// components/DownloadCard.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface DownloadCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  buttonStyle?: "green" | "orange" | "blue";
}

export default function DownloadCard({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
  buttonStyle = "green",
}: DownloadCardProps) {
  const buttonColors = {
    green: "bg-green-600 hover:bg-green-700",
    orange: "bg-orange-600 hover:bg-orange-700",
    blue: "bg-blue-600 hover:bg-blue-700",
  };

  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-4">
          <h3 className="text-lg md:text-xl font-bold text-white text-center">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-200 mt-2 text-center">
              {description}
            </p>
          )}
          <a
            href={buttonLink}
            download
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 inline-block px-5 py-2 text-sm font-semibold text-white rounded ${buttonColors[buttonStyle]} transition-colors`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
