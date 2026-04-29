import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="booking">
        <Booking />
      </section>

      {/* ✅ NEW LOCATION SECTION */}
      <section id="location">
        <Location />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}