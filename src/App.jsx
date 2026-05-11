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
        {/* =========================
            PRIMARY SEO
        ========================= */}
        <title>
          GuruPhix | Phone Repair in Nairobi – iPhone & Android Fix Experts
        </title>

        <meta
          name="description"
          content="GuruPhix offers fast and reliable phone repair in Nairobi. We fix iPhone, Samsung and Android devices including screen replacement, battery issues, charging ports and diagnostics."
        />

        <meta
          name="keywords"
          content="phone repair Nairobi, mobile repair Kenya, iPhone repair Nairobi, Samsung repair Kenya, screen replacement Nairobi, charging port repair, GuruPhix"
        />

        <meta name="author" content="GuruPhix" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.guruphix.com/" />

        {/* =========================
            OPEN GRAPH (SOCIAL MEDIA)
        ========================= */}
        <meta property="og:title" content="GuruPhix | Phone Repair Nairobi" />

        <meta
          property="og:description"
          content="Fast and affordable phone repair services in Nairobi. Screen, battery and hardware repair experts."
        />

        <meta property="og:url" content="https://www.guruphix.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.guruphix.com/preview.jpg" />

        {/* =========================
            TWITTER CARD
        ========================= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GuruPhix Phone Repair Nairobi" />
        <meta
          name="twitter:description"
          content="Professional phone repair services in Nairobi. Fast, affordable and reliable."
        />
        <meta name="twitter:image" content="https://www.guruphix.com/preview.jpg" />

        {/* =========================
            LOCAL BUSINESS SCHEMA
        ========================= */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GuruPhix",
            "url": "https://www.guruphix.com/",
            "image": "https://www.guruphix.com/logo.png",
            "telephone": "+254XXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            },
            "description": "GuruPhix provides expert phone repair services in Nairobi including screen replacement, battery repair, charging port repair and diagnostics.",
            "areaServed": "Nairobi",
            "priceRange": "$$"
          }
        `}
        </script>
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