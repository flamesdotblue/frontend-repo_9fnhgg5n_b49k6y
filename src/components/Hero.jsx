import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays for depth, ensure they don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,58,237,0.35)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_80%,rgba(14,165,233,0.25)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Futuristic growth marketing
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            AG — your edge in the digital future
          </h1>
          <p className="mt-6 text-white/70 text-lg">
            We design premium, performance-driven campaigns that fuse data, creativity, and emerging tech to scale your brand.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-black font-medium hover:bg-white/90 transition">Book a strategy call</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition">See our work</a>
          </div>
        </div>
      </div>
    </section>
  );
}
