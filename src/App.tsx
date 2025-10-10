import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import MainHeader from "./components/navbar/MainHeader";
import AboutUs from "./components/aboutUs/AboutUs";
import ImageGalleryPage from "./pages/ImageGalleryPage";
import BlogPage from "./components/blog/BlogPage";
import Contact from "./pages/Contact";
import CareerPage from "./pages/CareerPage";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<ImageGalleryPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route
          path="/category/:parentCatId/:categoryId?"
          element={<CategoryPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
