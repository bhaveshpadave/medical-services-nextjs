import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./sections/Footer";
import ServiceCarousel from "./sections/ServicesCarousel";
import JoinUs from "./sections/JoinUs";
// import TrustedBy from "./sections/TrustedBy";
import OurPartners from "./sections/OurPartners"; 


export default function Home() {
  return (
    <>
    <Hero />
    <main id="main">
      <ServiceCarousel />
      <JoinUs />
      <OurPartners />
      <Footer />
    </main>
    </>
  );
}
