import Navbar from "../components/Navbar";
import Projets from "../sections/Projets";
import Footer from "../sections/Footer";

export const metadata = {
  title: "Projets — Imrandev®",
  description: "Découvrez les sites vitrines réalisés par Imrandev — modernes, rapides et optimisés SEO.",
};

export default function ProjetsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Projets />
      </main>
      <Footer />
    </>
  );
}
