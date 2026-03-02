import { Navbar } from "../components/Navbar";
import { Hero } from "../components/home/Hero";
import { Features } from "../components/home/Feature";
import { TrustSection } from "../components/home/Trust";
import { Footer } from "../components/Footer";
import { Templates } from "../components/home/Template";
import { CTA } from "../components/home/Cta";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <TrustSection />
        <Templates />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
