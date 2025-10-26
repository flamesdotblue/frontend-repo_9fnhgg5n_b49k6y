import { Rocket, Megaphone, Gauge, LineChart } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Go-to-Market & Launch',
    desc: 'Positioning, messaging, and cross-channel launch plans crafted to make a premium first impression.',
  },
  {
    icon: Megaphone,
    title: 'Paid Media & Acquisition',
    desc: 'Full-funnel paid strategies across Meta, Google, TikTok, and LinkedIn tuned for efficient CAC.',
  },
  {
    icon: Gauge,
    title: 'Conversion & Experience',
    desc: 'CRO, landing pages, and speed optimizations that turn clicks into customers.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Automation',
    desc: 'Attribution, dashboards, and revenue automation that unlock scalable growth.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_30%_at_10%_10%,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-3 text-white/70">Premium end-to-end performance marketing engineered for the next decade.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-400/20 to-violet-500/20 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="absolute inset-0 -z-0 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-100 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
