import { Hero } from "../components/home/Hero";
import { Features } from "../components/home/Feature";
import { TrustSection } from "../components/home/Trust";
import { Templates } from "../components/home/Template";
import { CTA } from "../components/home/Cta";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Features />
        <TrustSection />
        <Templates />
        <CTA />
      </main>
    </div>
  );
}
