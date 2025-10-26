import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-cyan-400 to-violet-500" />
            <span className="font-semibold tracking-tight text-white">AG</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
            <a href="#work" className="text-white/80 hover:text-white transition">Work</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">Start a Project</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
