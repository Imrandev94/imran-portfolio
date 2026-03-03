import Navbar from "../components/Navbar";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";

export const metadata = {
  title: "FAQ — Imrandev®",
  description: "Toutes les réponses à vos questions sur la création de votre site web avec Imrandev.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
