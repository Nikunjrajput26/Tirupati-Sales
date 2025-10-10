import { MessageCircle, ClipboardList } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative flex items-center justify-center py-16 px-6 bg-gradient-to-r from-[#EF3E3E] via-[#F5C846] to-[#F5C846]">
      <div className="relative bg-[#EF3E3E] rounded-3xl shadow-xl max-w-4xl w-full px-8 py-12 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden">
        
        {/* Decorative gradient rings */}
        <div className="absolute right-[-100px] top-[-100px] w-[300px] h-[300px] bg-gradient-to-r from-[#F5C846] to-transparent rounded-full opacity-30" />
        <div className="absolute right-[-150px] top-[-150px] w-[450px] h-[450px] bg-gradient-to-r from-[#EF3E3E] to-transparent rounded-full opacity-20" />

        {/* Text Section */}
        <div className="relative z-10 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Let’s Get In Touch.
          </h2>
          <p className="text-sm md:text-base text-gray-200 max-w-md">
            Talk to our team of 150+ experts and get personalized assistance for
            your next project.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="relative z-10 flex gap-4 mt-6 md:mt-0">
          <button className="bg-black text-white font-semibold px-5 py-3 rounded-full flex items-center gap-2 shadow hover:bg-gray-900 transition">
            <MessageCircle className="w-5 h-5" />
            Talk to Our Expert
          </button>
          <button className="bg-black text-white font-medium px-5 py-3 rounded-full flex items-center gap-2 shadow hover:bg-gray-900 transition">
            <ClipboardList className="w-5 h-5" />
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
