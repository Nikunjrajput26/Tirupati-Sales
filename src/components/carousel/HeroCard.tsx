import { motion } from "framer-motion";
import productImg from "../../assets/products.png";
import callToExpertImg from "../../assets/expert.png";

export default function HeroCard({
  onScrollToProducts,
}: {
  onScrollToProducts: () => void;
}) {
  return (
    <div className="relative isolate overflow-hidden px-4 py-16 sm:px-8 md:py-24 lg:py-32 h-[75vh]">
      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[60vw] px-2 sm:px-4 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Powering Progress. Delivering Trust.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            className="mt-6 text-sm sm:text-base md:text-xl font-medium text-gray-300 leading-relaxed "
          >
            With 30+ years of industry leadership, 36+ partner brands, and ₹350+
            crore annual turnover, we are India's trusted source for electrical
            solutions—from lighting to switchgear to ELV systems.
          </motion.p>
        </div>
      </div>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-10 flex flex-wrap justify-center gap-4 px-4"
      >
        {/* View Product */}
        <button
          onClick={onScrollToProducts}
          className="flex items-center rounded-full text-gray-800 px-3 py-2 sm:px-4 sm:py-2 cursor-pointer border border-gray-300 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-sm"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-md">
            <img
              alt="Fast Delivery"
              className="w-4 h-4 sm:w-6 sm:h-6"
              src={productImg}
            />
          </div>
          <span className="ml-3 text-xs sm:text-sm font-bold">
            View Product
          </span>
        </button>

        {/* Talk to Expert */}
        <a href="tel:+919876543210">
          <button className="flex items-center rounded-full text-gray-800 px-3 py-2 sm:px-4 sm:py-2 cursor-pointer border border-gray-300 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-sm">
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-md">
              <img
                alt="150+ Experts"
                className="w-4 h-4 sm:w-6 sm:h-6"
                src={callToExpertImg}
              />
            </div>
            <span className="ml-3 text-xs sm:text-sm font-bold">
              Talk to Our Expert
            </span>
          </button>
        </a>
      </motion.div>
    </div>
  );
}
