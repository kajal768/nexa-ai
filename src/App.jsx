import { useEffect } from "react";
import Loader from "./components/Common/Loader";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";


function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Loader />
      <Header />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact/>
      </main>

      <Footer />
    </>
  );
}

export default App;
