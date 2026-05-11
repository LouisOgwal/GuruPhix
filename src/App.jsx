import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Problems from "./components/Problems";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Helmet>
        <title>
          GuruPhix | Phone Repair Services in Nairobi
        </title>

        <meta
          name="description"
          content="Professional iPhone, Samsung and Android phone repair services in Nairobi. Screen replacement, charging port repair, battery replacement and diagnostics."
        />

        <meta
          name="keywords"
          content="phone repair Nairobi, iPhone repair Kenya, Android repair, screen replacement, charging port repair, GuruPhix"
        />

        <meta name="author" content="GuruPhix" />

        <meta
          property="og:title"
          content="GuruPhix | Phone Repair Services in Nairobi"
        />

        <meta
          property="og:description"
          content="Professional phone repair services in Nairobi including screen replacement, battery replacement and diagnostics."
        />

        <meta
          property="og:url"
          content="https://guruphix.com"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* PROBLEMS */}
      <section id="problems">
        <Problems />
      </section>

      {/* WHY US */}
      <section id="whyus">
        <WhyUs />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* BOOKING */}
      <section id="booking">
        <Booking />
      </section>

      {/* LOCATION */}
      <section id="location">
        <Location />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}