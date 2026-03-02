import { Box, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
          {/* Desktop CTA */}
          <button className="hidden md:flex items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(91,19,236,0.25)] hover:shadow-[0_0_18px_rgba(91,19,236,0.35)] hover:-translate-y-[1px] active:translate-y-0">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center rounded-full h-10 w-10 bg-primary text-white transition-all duration-300 shadow-[0_0_12px_rgba(91,19,236,0.25)] hover:shadow-[0_0_18px_rgba(91,19,236,0.35)] hover:-translate-y-[1px] active:translate-y-0"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          {/* Dropdown animation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden absolute top-full left-0 w-full bg-surface-dark border-t border-border-dark backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: 0.1,
                      },
                    },
                    hidden: {},
                  }}
                  className="flex flex-col items-center py-8 gap-6 text-white"
                >
                  {["My Projects", "Community", "Pricing"].map((item) => (
                    <motion.a
                      key={item}
                      variants={{
                        hidden: { opacity: 0, y: -8, filter: "blur(4px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                    >
                      {item}
                    </motion.a>
                  ))}

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: -8, filter: "blur(4px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.3 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-4 rounded-full h-10 px-6 bg-primary text-white text-sm font-semibold shadow-[0_0_12px_rgba(91,19,236,0.25)]"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
