import { useRef } from "react";
import { HappyClients } from "@/components/partner/HappyClients";
import HeroCard from "../components/carousel/HeroCard";
import ProductBentoGrid from "../components/Category/ProductBentoGrid";
import Test from "../components/partner/Test";
import Resources from "../components/resources/Resources";
import TrustFactors from "../components/TrustFactors/TrustFactors";

const HomePage = () => {
  const productRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Pass the function as a prop, HeroCard can call it on click */}
      <HeroCard onScrollToProducts={scrollToProducts} />

      <TrustFactors />

      {/* attach ref to ProductBentoGrid */}
      <div ref={productRef}>
        <ProductBentoGrid />
      </div>

      <Test />
      <Resources />
      <HappyClients />
    </>
  );
};

export default HomePage;
