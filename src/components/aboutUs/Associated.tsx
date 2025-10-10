"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

type Company = {
  name: string;
  category: string;
  address: string;
  phone?: string[];
  email?: string;
  image: string;
};

const companies: Company[] = [
  {
    name: "Global Electrifyshop",
    category: "Fans, Air Conditioners",
    address:
      "24, Navjivan Industrial Estate, Near Unique Hospital, Udhna BRTS Canal Road, Udhna, Surat - 395002",
    image:
      "https://www.tirupatisales.com/uploads/images/13/Global_The_Electrify_Shop_03.jpg", // replace with your image path
  },
  {
    name: "Tirupati Electrify Shops",
    category: "Industrial Motors and Drives",
    address:
      "Plot No. 52-53, Soma Kanji Ni Wadi, Udhna-Citylight BRTS Canal Road, Near Savera Complex, Khatodara, Udhna, Surat - 395002",
    phone: ["+91 96382 77766", "+91 261 2704000"],
    email: "anish.mittal@tespl.in",
    image:
      "https://www.tirupatisales.com/uploads/images/13/Tirupati_Sales_Corporation_01.jpg",
  },
  {
    name: "Ideal Sales Corporation",
    category: "Cable & Panel Accessories",
    address:
      "19, Soma Kanji Ke Wadi, Near Savera Complex, Khatodara, Surat - 395002",
    phone: ["+91 98793 83934", "+91 261 2632186"],
    email: "sales@idealsales.co.in",
    image:
      "https://www.tirupatisales.com/uploads/images/13/Ideal_The_Electrify_Shop_04.jpg",
  }
];

export default function Associated() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-l from-[#2D415F] to-[#BCC9D6] py-20 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl font-extrabold text-center text-white mb-12"
        >
          Our Associated Companies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.7 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform  overflow-hidden"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {company.name}
                </h3>
                <p className="text-sm text-red-600 font-medium mb-4">
                  {company.category}
                </p>

                <div className="space-y-3 text-gray-600 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-red-500 mt-1 mr-2" />
                    <span>{company.address}</span>
                  </div>

                  {company.phone &&
                    company.phone.map((phone, idx) => (
                      <div key={idx} className="flex items-center">
                        <Phone className="h-4 w-4 text-red-500 mr-2" />
                        <span>{phone}</span>
                      </div>
                    ))}

                  {company.email && (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-red-500 mr-2" />
                      <a
                        href={`mailto:${company.email}`}
                        className="hover:underline"
                      >
                        {company.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
