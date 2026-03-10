import api from "@/configs/axios";
import { authClient } from "@/lib/auth-client";
import { Sparkles, ArrowRight, Loader2Icon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Hero = () => {
  const { data: session } = authClient.useSession();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!session?.user) {
        return toast.error("Please sign in to create a project");
      } else if (!input.trim()) {
        return toast.error("Please enter a message");
      }
      setLoading(true);
      const { data } = await api.post("/api/user/project", {
        initial_prompt: input
      });
      setLoading(false);
      navigate(`/projects/${data.projectId}`);
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
    }
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-screen grid-bg pointer-events-none -z-10 opacity-40"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center gap-10">
        {/* Free Trial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm cursor-pointer hover:bg-primary/20 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-primary-light text-xs font-bold uppercase tracking-wider">
            Start your 14-day free trial
          </span>
        </motion.div>

        {/* Text */}
        <div className="max-w-4xl flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white glow-text"
          >
            Build the future,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-light to-primary">
              prompt by prompt.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed"
          >
            Describe your dream website and watch ParuAI turn thoughts into
            production-ready code instantly. No config, just create.
          </motion.p>
        </div>

        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-3xl relative z-10"
        >
          {/* Subtle static glow */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 blur-lg opacity-20 pointer-events-none"></div>

          {/* Main container */}
          <form
            onSubmit={onSubmitHandler}
            className="relative bg-surface-dark/85 backdrop-blur-lg border border-border-dark rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] focus-within:border-primary/70 transition-colors duration-200"
          >
            {/* Sparkle icon */}
            <div className="absolute top-5 left-5 text-primary animate-pulse">
              <Sparkles className="w-5 h-5" />
            </div>

            {/* Textarea */}
            <textarea
              onChange={(e) => setInput(e.target.value)}
              rows={6}
              placeholder="Describe your website idea... 
For example: A modern coffee shop landing page with dark mode and smooth animations."
              className="w-full resize-none bg-transparent text-white placeholder:text-text-secondary outline-none pl-14 pr-6 pt-6 pb-20 text-lg leading-relaxed font-medium"
            />

            {/* Button */}
            <div className="absolute bottom-5 right-5">
              <button className="bg-white text-background-dark rounded-lg px-6 py-3 font-semibold text-sm flex items-center gap-2 active:scale-95 transition-transform duration-150">
                {!loading ? (
                  "Create with AI"
                ) : (
                  <>
                    Creating{" "}
                    <Loader2Icon className="animate-spin size-4 text-primary" />
                  </>
                )}

                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Suggestion tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {["Landing Page", "SaaS Dashboard", "Portfolio", "E-commerce"].map(
              (tag) => (
                <button
                  key={tag}
                  className="text-xs text-text-secondary hover:text-white bg-surface-dark border border-border-dark rounded-full px-3 py-1.5 transition-colors duration-200"
                >
                  {tag}
                </button>
              ),
            )}
          </div>
        </motion.div>

        {/* DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full mt-16 relative px-4"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark pointer-events-none" />

          <div className="relative mx-auto w-full max-w-6xl rounded-2xl border border-border-dark bg-surface-dark/60 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Browser Top Bar */}
            <div className="h-10 border-b border-border-dark bg-surface-dark flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <div className="ml-4 h-6 px-3 flex items-center bg-background-dark/50 rounded-md border border-border-dark/60">
                <span className="text-xs text-text-secondary font-mono">
                  http://localhost:3000
                </span>
              </div>
            </div>

            {/* Website Layout */}
            <div className="w-full flex flex-col">
              {/* Navbar */}
              <div className="h-14 border-b border-border-dark flex items-center justify-between px-6 bg-surface-dark/80">
                <div className="h-6 w-24 bg-primary/40 rounded-md" />
                <div className="hidden md:flex items-center gap-6">
                  <div className="h-4 w-16 bg-border-dark rounded" />
                  <div className="h-4 w-16 bg-border-dark rounded" />
                  <div className="h-4 w-16 bg-border-dark rounded" />
                </div>
                <div className="h-8 w-20 bg-primary rounded-md" />
              </div>

              {/* Hero Section */}
              <div className="px-6 py-16 bg-background-dark flex flex-col items-center gap-6">
                <div className="h-8 w-2/3 md:w-1/2 bg-primary/30 rounded-md" />
                <div className="h-4 w-3/4 md:w-1/3 bg-border-dark rounded" />
                <div className="h-10 w-40 bg-primary rounded-lg" />
              </div>

              {/* Feature Grid */}
              <div className="px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-surface-dark/70">
                <div className="h-32 bg-background-dark border border-border-dark rounded-xl" />
                <div className="h-32 bg-background-dark border border-border-dark rounded-xl" />
                <div className="h-32 bg-background-dark border border-border-dark rounded-xl" />
              </div>

              {/* Footer */}
              <div className="h-16 border-t border-border-dark bg-surface-dark/80 flex items-center justify-center">
                <div className="h-4 w-40 bg-border-dark rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
