export const CTA = () => (
  <section className="py-24 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-primary/5 to-background-dark pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
        Ready to build something <br />
        amazing today?
      </h2>
      <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
        Join thousands of developers and designers building faster with ParuAI.
        No credit card required to start.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_14px_rgba(91,19,236,0.28)] hover:shadow-[0_0_20px_rgba(91,19,236,0.38)] hover:-translate-y-[1px] active:translate-y-0">
          Get Started for Free
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-surface-dark border border-border-dark text-white rounded-full font-semibold text-lg transition-all duration-200 hover:bg-white/3 hover:-translate-y-[1px] active:translate-y-0">
          View Documentation
        </button>
      </div>
      <p className="mt-6 text-sm text-text-secondary">
        Free tier includes 5 generations per day.
      </p>
    </div>
  </section>
);
