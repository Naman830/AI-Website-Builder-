import { CTA } from "@/components/pricing/CTA";
import { FeatureComparison } from "@/components/pricing/FeatureComparison";
import { Hero } from "@/components/pricing/Hero";
import { PricingCards } from "@/components/pricing/PricingCards";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-screen grid-bg pointer-events-none -z-10 opacity-40"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      
      <main className="flex-grow">
        <Hero />
        <PricingCards />
        <FeatureComparison />
        <CTA />
      </main>

    </div>
  );
}
