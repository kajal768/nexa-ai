import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Common/Loader";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact/>
        <Footer/>
        <Loader />
        
      </main>
    </>
  );
}

export default App;