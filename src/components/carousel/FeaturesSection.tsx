const features = [
  {
    icon: "../src/assets/experts.png",
    text: "Fast Delivery",
  },
  {
    icon: "../src/assets/experts.png",
    text: "150+ Experts",
  },
  {
    icon: "../src/assets/experts.png",
    text: "Huge Inventory",
  },
  {
    icon: "../src/assets/experts.png",
    text: "After Sales Support",
  },
];

export default function FeaturesSection() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex md:items-center gap-1 md:gap-3 bg-gray-200 rounded-lg p-1 shadow-sm"
        >
          <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center border border-gray-500 rounded-md">
            <img src={item.icon} alt={item.text} className="w-4 h-4 md:w-6 md:h-6" />
          </div>
          <div className="text-xs md:text-sm font-semibold text-gray-800 px-2 md:px-4">{item.text}</div>
        </div>
      ))}
    </div>
  );
}
