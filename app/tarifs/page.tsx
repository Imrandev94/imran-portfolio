import Navbar from "../components/Navbar";
import Pricing from "../sections/Pricing";
import FooterCTA from "../sections/FooterCTA";
import Footer from "../sections/Footer";

export const metadata = {
  title: "Tarifs — Imrandev®",
  description: "Des offres claires pour créer votre site web. Simple à 499€, Pro à 1 299€, ou sur devis pour les projets complexes.",
};

export default function TarifsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Pricing />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
