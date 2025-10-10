"use client";
import React from "react";
import { logos } from "../../utils/getImagesPartner";

type SliderProps = { className?: string };

export function Slider({ className }: SliderProps) {
  const images = [...logos, ...logos]; // simple loop effect

  return (
    <div className={`overflow-hidden w-full py-6 ${className ?? ""}`}>
      <div className="flex animate-scroll whitespace-nowrap">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-24 px-2 flex items-center justify-center mx-4 border border-gray-300 rounded-lg shadow-sm bg-white"
          >
            <img
              src={src}
              alt={`Logo ${index + 1}`}
              className="h-24 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
