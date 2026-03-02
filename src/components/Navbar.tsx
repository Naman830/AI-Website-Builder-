import { Box } from "lucide-react";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border-dark">
    <div className="relative max-w-[1280px] mx-auto px-6 h-20 flex items-center">
      {/* Left */}
      <div className="flex items-center gap-3 text-white">
        <div className="text-primary">
          <Box className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold tracking-tight">ParuAI</h2>
      </div>

      {/* Center - TRUE CENTER */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
        {["Home", "My Projects", "Community", "Pricing"].map((item) => (
          <a
            key={item}
            className="text-text-secondary hover:text-white transition-colors text-sm font-medium"
            href="#"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right */}
      <div className="ml-auto flex items-center gap-4">
        <button className="flex items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(91,19,236,0.25)] hover:shadow-[0_0_18px_rgba(91,19,236,0.35)] hover:-translate-y-[1px] active:translate-y-0 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  </nav>
);