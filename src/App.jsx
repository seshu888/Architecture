import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import Footer from "./Footer";
import Features from "./Features";

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      window.scrollBy({ top: event.deltaY, behavior: "smooth" });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
};

const App = () => {
  // useSmoothScroll();
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <Features />

      <Contact />

      <Footer />
    </div>
  );
};

export default App;
