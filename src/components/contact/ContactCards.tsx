import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

// Types
export type ContactItem = {
  id: string;
  label: "Address" | "Phone" | "Email" | string;
  value: string;
  href?: string; // optional override link (else auto-generated)
  icon?: React.ReactNode;
};

// Default demo data — edit as you like or pass items as a prop
const DEFAULT_ITEMS: ContactItem[] = [
  {
    id: "address",
    label: "Address",
    value: `Plot no. 52-53, soma Kanji ni Wadi, Nr Savera Complex Udhna-City, BRTS, Vesu Canal Rd, Khatodra Wadi, Surat, Gujarat 395002`,
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 98765 43210",
  },
  { id: "email", label: "Email", value: "hello@tirupatisales.com" },
];

// Small helpers to build sensible links
const buildHref = (item: ContactItem) => {
  if (item.href) return item.href;
  const v = item.value.trim();
  const label = item.label.toLowerCase();

  if (label.includes("phone")) {
    const digits = v.replace(/[^+\d]/g, "");
    return `tel:${digits}`;
  }
  if (label.includes("email")) {
    return `mailto:${v}`;
  }
  if (label.includes("address")) {
    const q = encodeURIComponent(v);
    return `https://maps.google.com/?q=${q}`;
  }
  return undefined;
};

const iconFor = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("phone")) return <Phone className="size-6" aria-hidden />;
  if (l.includes("email")) return <Mail className="size-6" aria-hidden />;
  return <MapPin className="size-6" aria-hidden />;
};

// Card component
const ContactCard: React.FC<{ item: ContactItem }> = ({ item }) => {
  const href = buildHref(item);
  const isLink = Boolean(href);

  const content = (
    <div className="flex flex-col justify-center py-6 items-start gap-4">
      <div className="shrink-0  rounded-xl p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white drop-shadow-sm">
        {item.icon ?? iconFor(item.label)}
      </div>
      <div className="min-w-0">
        <p className="text-xl font-bold text-[#2D425C] group-hover:text-red-600 transition-colors duration-300">
          {item.label}
        </p>
        <p className="mt-3 text-gray-600 leading-[1.2] md:text-base">
          {item.value}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group h-full rounded-2xl border  bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-neutral-700"
    >
      {isLink ? (
        <a
          href={href}
          target={
            item.label.toLowerCase().includes("address") ? "_blank" : undefined
          }
          rel={
            item.label.toLowerCase().includes("address")
              ? "noopener noreferrer"
              : undefined
          }
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 rounded-xl"
          aria-label={`${item.label}: ${item.value}`}
        >
          {content}
        </a>
      ) : (
        <div aria-label={`${item.label}: ${item.value}`}>{content}</div>
      )}
    </motion.div>
  );
};

// Grid wrapper
export default function ContactCards({
  items = DEFAULT_ITEMS,
}: {
  items?: ContactItem[];
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8">
        <p className="mt-1 text-neutral-100 text-xl">
          Reach us the way that suits you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ContactCard key={item.id} item={item} />
        ))}
      </div>

      {/* Footnote for small screens */}
      <p className="mt-6 text-xs text-neutral-100">
        Tip: tap the cards to call, email, or open maps.
      </p>
    </section>
  );
}

// Usage example (Next.js / React):
// <ContactCards />
// or pass custom data:
// const data: ContactItem[] = [
//   { id: "address", label: "Address", value: "123 Park Street, Mumbai, MH 400001" },
//   { id: "phone", label: "Phone", value: "+91 98765 43210" },
//   { id: "email", label: "Email", value: "contact@brand.in" },
// ];
// <ContactCards items={data} />
