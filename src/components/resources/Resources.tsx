// pages/Resources.tsx

import DownloadCard from "./DownloadCard";

export default function Resources() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mb-10">
      <DownloadCard
        title="Latest Price Lists"
        imageUrl="https://vashiisl.com/cdn/shop/files/Price-List_500x246.jpg?v=1699354763"
        buttonText="Download"
        buttonLink="/downloads/test"
        buttonStyle="green"
      />
      <DownloadCard
        title="Corporate Brochure"
        imageUrl="https://vashiisl.com/cdn/shop/files/Brochure_500x246.jpg?v=1699354763"
        buttonText="Download"
        buttonLink="/downloads/brochure.pdf"
        buttonStyle="blue"
      />
      <DownloadCard
        title="Annual Rate Contract"
        imageUrl="https://vashiisl.com/cdn/shop/files/ARC_500x246.jpg?v=1699354764"
        buttonText="Apply Now"
        buttonLink="/apply"
        buttonStyle="orange"
      />
    </div>
  );
}
