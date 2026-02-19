export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary-bg">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 blur-[150px] rounded-full animate-bounce" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <span className="text-accent-blue font-mono tracking-[0.5em] uppercase mb-4 block text-xs md:text-sm">
          Gustavo Liendo // G-CODE
        </span>
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
          CRAFTING <span className="text-transparent bg-clip-text bg-gradient-primary">DIGITAL</span><br/>EXPERIENCES
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
          Full Stack Developer specializing in high-performance headless architectures and emotional storytelling through code.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#work" className="bg-gradient-primary px-10 py-4 rounded-full font-bold text-white shadow-lg shadow-accent-blue/20 hover:scale-105 transition-transform">
            View Projects
          </a>
          <a href="#contact" className="text-sm font-bold tracking-widest uppercase border-b-2 border-accent-pink pb-1 hover:text-accent-pink transition-colors">
            Let's Talk →
          </a>
        </div>
      </div>
    </section>
  );
}