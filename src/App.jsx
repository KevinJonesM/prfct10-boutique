import { useState } from "react";
import { products } from "./data/products";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BrandIntro from "./components/BrandIntro/BrandIntro";
import ProductSection from "./components/ProductSection/ProductSection";
import MintCTA from "./components/MintCTA/MintCTA";
import BrandLines from "./components/BrandLines/BrandLines";
import ProductModal from "./components/ProductModal/ProductModal";
import PrfctCode from "./components/PrfctCode/PrfctCode";
import About from "./components/About/About";
import SocialCTA from "./components/SocialCTA/SocialCTA";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <ProductSection products={products} onSelectProduct={setSelectedProduct} />
        <MintCTA />
        <BrandLines />
        <PrfctCode />
        <About />
        <section className="final-wrap">
          <div className="final-wrap__overlay" aria-hidden="true" />
          <div className="final-wrap__dots" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} style={{ "--dot-index": index }} />
            ))}
          </div>
          <SocialCTA />
          <div className="final-photo-wrap">
            <FinalCTA />
            <Footer products={products} onSelectProduct={setSelectedProduct} />
          </div>
        </section>
      </main>
      <ProductModal product={selectedProduct} products={products} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
