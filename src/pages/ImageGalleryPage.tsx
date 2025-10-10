import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { motion } from "framer-motion";

export default function Page() {
  const images = [
    {
      name: "Office 1",
      img: "https://www.tirupatisales.com/uploads/images/14/50MM9686-min-1.webp",
      category: "Office Images",
    },
    {
      name: "Office 2",
      img: "https://www.tirupatisales.com/uploads/images/14/50MM9713-min-1.webp",
      category: "Office Images",
    },
    {
      name: "Office 3",
      img: "https://www.tirupatisales.com/uploads/images/14/50MM9713-min.webp",
      category: "Office Images",
    },
    {
      name: "Office 4",
      img: "https://www.tirupatisales.com/uploads/images/14/50MM9739-min.webp",
      category: "Office Images",
    },
    {
      name: "Office 5",
      img: "https://www.tirupatisales.com/uploads/images/14/50MM9924-min.webp",
      category: "Office Images",
    },
    {
      name: "Office 6",
      img: "https://www.tirupatisales.com/uploads/images/14/DSC_0065-min.webp",
      category: "Office Images",
    },

    {
      name: "Store 1",
      img: "https://www.tirupatisales.com/uploads/images/15/DSC_0066-min.jpg",
      category: "Stores",
    },
    {
      name: "Store 2",
      img: "https://www.tirupatisales.com/uploads/images/15/DSC_0068-min.jpg",
      category: "Stores",
    },
    {
      name: "Store 3",
      img: "https://www.tirupatisales.com/uploads/images/15/EL9C0267-min.jpg",
      category: "Stores",
    },
    {
      name: "Store 4",
      img: "https://www.tirupatisales.com/uploads/images/15/EL9C0304-min.jpg",
      category: "Stores",
    },
    {
      name: "Store 5",
      img: "https://www.tirupatisales.com/uploads/images/15/EL9C0328-min.jpg",
      category: "Stores",
    },
    {
      name: "Store 6",
      img: "https://www.tirupatisales.com/uploads/images/15/EL9C9524-min.jpg",
      category: "Stores",
    },
    {
      name: "TPL Event 1",
      img: "https://www.tirupatisales.com/uploads/images/54/TPL-01.jpg",
      category: "TPL",
    },
    {
      name: "TPL Event 2",
      img: "https://www.tirupatisales.com/uploads/images/54/TPL-02.jpg",
      category: "TPL",
    },
    {
      name: "TPL Event 3",
      img: "https://www.tirupatisales.com/uploads/images/54/TPL-03.jpg",
      category: "TPL",
    },
    {
      name: "TPL Event 4",
      img: "https://www.tirupatisales.com/uploads/images/54/TPL-04.jpg",
      category: "TPL",
    },
    {
      name: "TPL Event 5",
      img: "https://www.tirupatisales.com/uploads/images/54/TPL-05.jpg",
      category: "TPL",
    },
    {
      name: "TPL Event 6",
      img: "https://www.tirupatisales.com/uploads/images/54/TPL-06.jpg",
      category: "TPL",
    },
    {
      name: "TPL Event 7",
      img: "https://www.tirupatisales.com/uploads/images/54/TPL-07.jpg",
      category: "TPL",
    },
    // Dubai Tour
    {
      name: "Dubai Tour 1",
      img: "https://www.tirupatisales.com/uploads/images/53/Dubai-01.jpg",
      category: "Tours",
    },
    {
      name: "Dubai Tour 2",
      img: "https://www.tirupatisales.com/uploads/images/53/Dubai-02.jpg",
      category: "Tours",
    },
    {
      name: "Dubai Tour 3",
      img: "https://www.tirupatisales.com/uploads/images/53/Dubai-03.jpg",
      category: "Tours",
    },
    {
      name: "Dubai Tour 4",
      img: "https://www.tirupatisales.com/uploads/images/53/Dubai-04.jpg",
      category: "Tours",
    },
    {
      name: "Dubai Tour 5",
      img: "https://www.tirupatisales.com/uploads/images/53/Dubai-05.jpg",
      category: "Tours",
    },
    {
      name: "Dubai Tour 6",
      img: "https://www.tirupatisales.com/uploads/images/53/Dubai-06.jpg",
      category: "Tours",
    },

    // Europe Tour
    {
      name: "Europe Tour 1",
      img: "https://www.tirupatisales.com/uploads/images/53/Europe-01.jpeg",
      category: "Tours",
    },
    {
      name: "Europe Tour 2",
      img: "https://www.tirupatisales.com/uploads/images/53/Europe-02.jpeg",
      category: "Tours",
    },
    {
      name: "Europe Tour 3",
      img: "https://www.tirupatisales.com/uploads/images/53/Europe-03.jpeg",
      category: "Tours",
    },
    {
      name: "Europe Tour 4",
      img: "https://www.tirupatisales.com/uploads/images/53/Europe-04.jpeg",
      category: "Tours",
    },
    {
      name: "Europe Tour 5",
      img: "https://www.tirupatisales.com/uploads/images/53/Europe-05.jpeg",
      category: "Tours",
    },
    {
      name: "Europe Tour 6",
      img: "https://www.tirupatisales.com/uploads/images/53/Europe-06.jpeg",
      category: "Tours",
    },

    // Imagica Tour
    {
      name: "Imagica Tour 1",
      img: "https://www.tirupatisales.com/uploads/images/53/Imagica-01.jpg",
      category: "Tours",
    },
    {
      name: "Imagica Tour 2",
      img: "https://www.tirupatisales.com/uploads/images/53/Imagica-02.jpg",
      category: "Tours",
    },
    {
      name: "Imagica Tour 3",
      img: "https://www.tirupatisales.com/uploads/images/53/Imagica-03.jpg",
      category: "Tours",
    },
    {
      name: "Imagica Tour 4",
      img: "https://www.tirupatisales.com/uploads/images/53/Imagica-04.jpg",
      category: "Tours",
    },
    {
      name: "Imagica Tour 5",
      img: "https://www.tirupatisales.com/uploads/images/53/Imagica-05.jpg",
      category: "Tours",
    },
    {
      name: "Imagica Tour 6",
      img: "https://www.tirupatisales.com/uploads/images/53/Imagica-06.jpg",
      category: "Tours",
    },
    // 26th January
    {
      name: "26th Jan 1",
      img: "https://www.tirupatisales.com/uploads/images/52/26-Jan-01.jpg",
      category: "Festivals",
    },
    {
      name: "26th Jan 2",
      img: "https://www.tirupatisales.com/uploads/images/52/26-Jan-02.jpg",
      category: "Festivals",
    },
    {
      name: "26th Jan 3",
      img: "https://www.tirupatisales.com/uploads/images/52/26-Jan-03.jpg",
      category: "Festivals",
    },
    {
      name: "26th Jan 4",
      img: "https://www.tirupatisales.com/uploads/images/52/26-Jan-04.jpeg",
      category: "Festivals",
    },
    {
      name: "26th Jan 5",
      img: "https://www.tirupatisales.com/uploads/images/52/26-Jan-05.jpeg",
      category: "Festivals",
    },
    {
      name: "26th Jan 6",
      img: "https://www.tirupatisales.com/uploads/images/52/26-Jan-06.jpeg",
      category: "Festivals",
    },

    // Diwali
    {
      name: "Diwali 1",
      img: "https://www.tirupatisales.com/uploads/images/52/Diwali-01.jpg",
      category: "Festivals",
    },
    {
      name: "Diwali 2",
      img: "https://www.tirupatisales.com/uploads/images/52/Diwali-02.jpg",
      category: "Festivals",
    },
    {
      name: "Diwali 3",
      img: "https://www.tirupatisales.com/uploads/images/52/Diwali-03.jpg",
      category: "Festivals",
    },
    {
      name: "Diwali 4",
      img: "https://www.tirupatisales.com/uploads/images/52/Diwali-04.jpg",
      category: "Festivals",
    },
    {
      name: "Diwali 5",
      img: "https://www.tirupatisales.com/uploads/images/52/Diwali-05.jpg",
      category: "Festivals",
    },
    {
      name: "Diwali 6",
      img: "https://www.tirupatisales.com/uploads/images/52/Diwali-06.jpg",
      category: "Festivals",
    },
    {
      name: "Diwali 7",
      img: "https://www.tirupatisales.com/uploads/images/52/Diwali-07.jpg",
      category: "Festivals",
    },

    // Ganesh Chaturthi
    {
      name: "Ganesh 1",
      img: "https://www.tirupatisales.com/uploads/images/52/Ganesh-01.jpg",
      category: "Festivals",
    },
    {
      name: "Ganesh 2",
      img: "https://www.tirupatisales.com/uploads/images/52/Ganesh-02.jpg",
      category: "Festivals",
    },
    {
      name: "Ganesh 3",
      img: "https://www.tirupatisales.com/uploads/images/52/Ganesh-03.jpg",
      category: "Festivals",
    },
    {
      name: "Ganesh 4",
      img: "https://www.tirupatisales.com/uploads/images/52/Ganesh-04.jpg",
      category: "Festivals",
    },
    {
      name: "Ganesh 5",
      img: "https://www.tirupatisales.com/uploads/images/52/Ganesh-05.jpg",
      category: "Festivals",
    },
    {
      name: "Ganesh 6",
      img: "https://www.tirupatisales.com/uploads/images/52/Ganesh-06.jpg",
      category: "Festivals",
    },

    // Holi
    {
      name: "Holi 1",
      img: "https://www.tirupatisales.com/uploads/images/52/Holi-01.jpg",
      category: "Festivals",
    },
    {
      name: "Holi 2",
      img: "https://www.tirupatisales.com/uploads/images/52/Holi-02.jpg",
      category: "Festivals",
    },
    {
      name: "Holi 3",
      img: "https://www.tirupatisales.com/uploads/images/52/Holi-03.jpg",
      category: "Festivals",
    },
    {
      name: "Holi 4",
      img: "https://www.tirupatisales.com/uploads/images/52/Holi-04.jpg",
      category: "Festivals",
    },
    {
      name: "Holi 5",
      img: "https://www.tirupatisales.com/uploads/images/52/Holi-05.jpg",
      category: "Festivals",
    },
    {
      name: "Holi 6",
      img: "https://www.tirupatisales.com/uploads/images/52/Holi-06.jpg",
      category: "Festivals",
    },

    // Janmashtami
    {
      name: "Janmashtami 1",
      img: "https://www.tirupatisales.com/uploads/images/52/Janmashtami-01.png",
      category: "Festivals",
    },
    {
      name: "Janmashtami 2",
      img: "https://www.tirupatisales.com/uploads/images/52/Janmashtami-02.png",
      category: "Festivals",
    },
    {
      name: "Janmashtami 3",
      img: "https://www.tirupatisales.com/uploads/images/52/Janmashtami-03.png",
      category: "Festivals",
    },
    {
      name: "Janmashtami 4",
      img: "https://www.tirupatisales.com/uploads/images/52/Janmashtami-04.png",
      category: "Festivals",
    },
    {
      name: "Janmashtami 5",
      img: "https://www.tirupatisales.com/uploads/images/52/Janmashtami-05.png",
      category: "Festivals",
    },
    {
      name: "Janmashtami 5",
      img: "https://www.tirupatisales.com/uploads/images/52/Janmashtami-06.png",
      category: "Festivals",
    },
  ];

  return (
    <div className="">
      {/* <h1 className="text-5xl text-white font-bold mb-4 md:mb-12">Gallery</h1> */}
      <div className="relative isolate overflow-hidden py-4 md:py-16">
        <div className="sm:max-w-[90vh] md:max-w-[80vh] lg:max-w-[90vw] px-6 lg:px-8">
          <div className="lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="md:text-7xl font-bold tracking-tight text-white text-4xl"
            >
              Life at Tirupati Sales Corporation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
              className="mt-2 md:mt-8 text-lg md:text-3xl text-pretty text-gray-200"
            >
              Moments from our office, store, and festive gatherings.
            </motion.p>
          </div>
        </div>
      </div>
      <ImageGallery images={images} />
    </div>
  );
}
