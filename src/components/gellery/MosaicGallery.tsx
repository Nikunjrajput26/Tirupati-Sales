import React, { useEffect, useState } from "react";

type ImageItem = { src: string; alt?: string };
type MosaicGalleryProps = { images: ImageItem[]; className?: string };

const layoutPattern = [
  "col-span-12 md:col-span-6 aspect-[16/9]",
  "col-span-6 md:col-span-3 aspect-square",
  "col-span-6 md:col-span-3 aspect-[4/3]",
  "col-span-6 md:col-span-3 aspect-[3/4]",
  "col-span-6 md:col-span-3 aspect-[4/3]",
  "col-span-12 md:col-span-6 aspect-[21/9]",
  "col-span-6 md:col-span-3 aspect-square",
  "col-span-6 md:col-span-3 aspect-[4/3]",
  "col-span-6 md:col-span-3 aspect-[3/4]",
  "col-span-6 md:col-span-3 aspect-[4/3]",
];

const MosaicGallery: React.FC<MosaicGalleryProps> = ({ images, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const classesForIndex = (i: number) => layoutPattern[i % layoutPattern.length];

  const close = () => setOpenIndex(null);
  const next = () =>
    setOpenIndex((i) => (i === null ? 0 : (i + 1) % images.length));
  const prev = () =>
    setOpenIndex((i) =>
      i === null ? 0 : (i - 1 + images.length) % images.length
    );

  // esc + arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  // swipe
  const [touchX, setTouchX] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (dx > 40) prev();
    if (dx < -40) next();
    setTouchX(null);
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className={`${classesForIndex(i)} overflow-hidden rounded-xl shadow-sm cursor-pointer`}
            onClick={() => setOpenIndex(i)}
            aria-label="Open image"
          >
            <img
              src={img.src}
              alt={img.alt ?? `image-${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          {/* image area */}
          <div
            className="absolute inset-0 mx-auto flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={images[openIndex].src}
              alt={images[openIndex].alt ?? "photo"}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              draggable={false}
            />

            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/20"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/20"
            >
              ›
            </button>

            {/* Close */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-white backdrop-blur hover:bg-white/20"
            >
              ✕
            </button>

            {/* Counter */}
            <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-white backdrop-blur">
              {openIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MosaicGallery;
