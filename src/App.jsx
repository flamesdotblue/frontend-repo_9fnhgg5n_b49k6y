import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* Anchor for case studies / work section placeholder text */}
        <section id="work" className="bg-black text-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected work</h2>
              <p className="mt-3 text-white/70">A glimpse at campaigns that combined world-class creative with measurable results.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                  <div className="h-40 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 ring-1 ring-white/10" />
                  <div className="mt-4">
                    <h3 className="font-medium">Campaign {i}</h3>
                    <p className="mt-1 text-sm text-white/70">Performance brand sprint delivering multi-channel growth.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
    </div>
  );
}

export default App;
