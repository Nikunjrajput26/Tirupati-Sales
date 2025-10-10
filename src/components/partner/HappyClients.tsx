"use client";
import { clients } from "@/utils/getClients";

type HappyClientsProps = { className?: string };

export function HappyClients({ className }: HappyClientsProps) {
  const items = [...clients, ...clients]; // repeat for scrolling effect

  return (
    <div className={`overflow-hidden w-full py-10 ${className ?? ""}`}>
      <h2 className="text-3xl text-center md:text-4xl font-bold text-[#2D425C] mb-4">
        Our Happy Clients
      </h2>
      <div className="flex animate-scroll whitespace-nowrap">
        {items.map((client, index) => (
          <div key={index} className="flex-shrink-0 w-64 mx-6 text-center">
            <div className="w-32 h-32 mx-auto p-2 rounded-full overflow-hidden shadow-md mb-3 border-2 border-blue-200">
              <img
                src={client.src}
                alt={client.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* <p className="font-medium">{client.name}</p> */}
            <p className="text-sm text-gray-600 italic">{client.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
