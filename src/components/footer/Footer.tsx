"use client";

import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [inView, setInView] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);

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

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#2D415F] text-gray-200 text-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className=" p-2 rounded-2xl">
            <img
              src="https://www.tirupatisales.com/site/images/TSC-Logos-White-red.png"
              alt="Tirupati Logo"
              className="h-14 mb-4"
            />
          </div>
          <p className="text-gray-400 text-xs">
            Empowering industries with reliable electrical solutions.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Products", "About Us", "Contact"].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#EF3E3E] transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="font-semibold text-white mb-4">Contact Us</h3>
          <p className="mb-3">
            Plot No. 52-53, Soma Kanji ni Wadi,
            <br />
            Udhna-Citylight BRTS Canal Road,
            <br />
            Surat-395002, Gujarat, India.
          </p>
          <p className="mb-2">Phone: +91 92279 15114</p>
          <p className="mb-2">
            Email:
            <a
              href="mailto:sales@tirupatisales.com"
              className="text-[#F5C846] hover:underline ml-1"
            >
              sales@tirupatisales.com
            </a>
          </p>
        </motion.div>

        {/* Stay Updated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 rounded-md text-black focus:outline-none bg-white"
            />
            <button className="bg-[#EF3E3E] text-white py-2 rounded-md hover:bg-[#c93030] transition">
              Sign Up
            </button>
          </form>
          <div className="flex gap-4 mt-5">
            <a href="#">
              <Facebook className="hover:text-[#F5C846]" size={20} />
            </a>
            <a href="#">
              <Instagram className="hover:text-[#F5C846]" size={20} />
            </a>
            <a href="#">
              <Linkedin className="hover:text-[#F5C846]" size={20} />
            </a>
            <a href="#">
              <X className="hover:text-[#F5C846]" size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="bg-[#1F2D3D] text-gray-400 text-center py-4 text-xs"
      >
        © 2025 Tirupati Sales Corporation. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
}
