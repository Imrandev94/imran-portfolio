import Navbar from "../components/Navbar";
import Blog from "../sections/Blog";
import Footer from "../sections/Footer";

export const metadata = {
  title: "Blog — Imrandev®",
  description: "Des conseils pratiques sur la création de sites web, le SEO et la stratégie digitale.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
    </>
  );
}
