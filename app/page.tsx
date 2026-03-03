import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Portfolio from "./sections/Portfolio";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import FooterCTA from "./sections/FooterCTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Portfolio />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
