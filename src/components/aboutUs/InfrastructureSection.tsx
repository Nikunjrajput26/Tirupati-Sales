import { motion } from "framer-motion";
import warehouse from "../../assets/warehoust-i.png";
import shipping from "../../assets/shipping.png";
import location from "../../assets/locaions.png";
import warehouseImg from "../../assets/warehouse.avif";

export default function InfrastructureSection() {
  const points = [
    {
      icon: warehouse,
      title: "1,00,000 sq. ft. State-of-the-Art Warehouse in Hazira",
      description:
        "We operate one of the region’s largest warehouses, equipped with in-house logistics for a smooth and efficient supply chain.",
    },
    {
      icon: shipping,
      title: "Fast Turnaround, Every Time",
      description:
        "By packing and shipping from the same facility, we cut lag time and ensure quick distribution. Products reach customers faster, building trust and repeat business.",
    },
    {
      icon: location,
      title: "Closer to Our Markets",
      description:
        "Our warehouse is strategically located near target markets for quick deliveries and efficient returns handling, meeting high customer expectations.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <img
            src={warehouseImg}
            alt="Warehouse"
            className="rounded-xl object-contain w-full max-w-md shadow-lg"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
            Our Infrastructure
          </h2>

          <div className="space-y-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white p-5 rounded-lg shadow-lg border hover:border-orange-600 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={point.icon}
                  alt={point.title}
                  className="w-10 h-10 mr-4 flex-shrink-0"
                />
                <div>
                  <h3 className="text-md md:text-xl font-bold text-gray-600">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
