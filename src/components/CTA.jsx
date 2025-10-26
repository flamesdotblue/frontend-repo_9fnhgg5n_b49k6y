import { Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(35%_40%_at_80%_30%,rgba(236,72,153,0.15)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14 backdrop-blur">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s design your next growth leap</h3>
              <p className="mt-3 text-white/70">Share your goals, timeline, and budget. We’ll come back with a sharp, tailored plan within 24 hours.</p>
            </div>
            <a
              href="mailto:hello@ag.studio?subject=Project%20Inquiry%20-%20AG"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-black font-medium hover:bg-white/90 transition"
            >
              <Mail className="h-5 w-5" /> Start a conversation
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">AG — a premium digital marketing agency</p>
      </div>
    </section>
  );
}
