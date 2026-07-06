import { useEffect } from 'react';
import { Link } from '../../router';
import { ArrowRight, Droplets, Bell, FileText, Wifi, ShieldCheck, Scale } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }); },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default function WaterSolution() {
  useReveal();

  return (
    <div className="pt-14 bg-white">
      {/* Hero */}
      <section className="relative h-[480px] sm:h-[560px] overflow-hidden">
        <img
          src="/images/water_bg4.png"
          alt="Smart water metering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold text-teal-400 uppercase tracking-widest border border-teal-500/40 bg-teal-500/10 px-3 py-1.5 rounded-full mb-6">
              Water Metering
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Know exactly how much every unit uses
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-lg">
              Replace manual meter reading with continuous automated monitoring. Our smart water meters install directly in your building — catch leaks early, resolve disputes with real data, and manage billing without a single site visit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-7 py-3.5 text-sm group">
                Request a Demo <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/products" className="btn-secondary px-7 py-3.5 text-sm">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
            <span>/</span>
            <span>Solutions</span>
            <span>/</span>
            <span className="text-neutral-700 font-medium">Water Metering</span>
          </div>
        </div>
      </div>

      {/* Problem section */}
      <section className="py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">The Problem</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              Manual metering is broken
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Every property manager knows the pain. These are the problems Axono solves.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Staff visit every unit', desc: 'Someone physically reads each meter, records it, and enters it manually — error-prone and impossible to scale.' },
              { title: 'Billing disputes', desc: 'Estimated readings and data errors lead to tenant complaints with no way to prove the correct figure.' },
              { title: 'Leaks go undetected', desc: 'A leak can run for weeks before the next read cycle — wasting water and damaging property.' },
              { title: 'Tampering is invisible', desc: 'Without automatic monitoring, unauthorized usage goes undetected until losses have already occurred.' },
            ].map((p, i) => (
              <div key={p.title} className={`reveal reveal-delay-${i + 1} bg-neutral-50 rounded-2xl p-6 border border-neutral-100 card-hover`}>
                <div className="w-2 h-8 bg-teal-500 rounded-full mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-2 text-sm">{p.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-8">
                Three steps to full visibility
              </h2>
              <div className="space-y-8">
                {[
                  { num: '01', title: 'We install our smart meters at your building', desc: 'Our team fits Axono water meters at every unit. No major pipe work — a full building typically takes one or two days.' },
                  { num: '02', title: 'Data flows to your dashboard automatically', desc: 'Each unit\'s usage is collected multiple times a day and sent securely to your online account.' },
                  { num: '03', title: 'Manage billing and alerts from anywhere', desc: 'View consumption history, receive leak alerts, and export billing reports from your phone or computer.' },
                ].map((s) => (
                  <div key={s.num} className="flex gap-5">
                    <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-white font-mono text-xs font-bold">{s.num}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1.5">{s.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal-right">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/water_dashboard.png"
                  alt="Building with smart meters"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100">
                <div className="text-3xl font-bold text-teal-600 mb-1">18%</div>
                <div className="text-sm text-neutral-600 font-medium">Water loss reduced</div>
                <div className="text-xs text-neutral-400 mt-0.5">typical deployment result</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">Platform</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">See it in action</h2>
          </div>
          <div className="space-y-4 reveal">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-900">
              <img
                src="/images/water_bg2.png"
                alt="Water metering dashboard"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent rounded-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-white font-semibold">Web Dashboard — all units at a glance</span>
                <p className="text-neutral-300 text-xs mt-1">Live readings, historical trends, alerts</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl h-56">
                <img src="/images/app.png" alt="Mobile app" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-3"><span className="text-white text-xs font-semibold">Mobile App</span></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl h-56">
                <img src="/images/alert.png" alt="Alerts" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-3"><span className="text-white text-xs font-semibold">Instant Alerts</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">What you get</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Droplets, title: 'Automatic readings', desc: 'Meters read multiple times daily with no site visits. Every reading is timestamped and securely stored.' },
              { icon: Bell, title: 'Leak & tamper alerts', desc: 'Unusually high flow triggers an alert to your phone or email within minutes.' },
              { icon: FileText, title: 'Billing reports', desc: 'Export per-unit consumption reports for billing or dispute resolution with one click.' },
              { icon: Wifi, title: 'Works without Wi-Fi', desc: 'Our gateway uses cellular — no on-site network required. Readings arrive regardless.' },
              { icon: ShieldCheck, title: 'Device health', desc: 'You\'re notified if a meter goes offline before it creates a gap in your data.' },
              { icon: Scale, title: 'Any building size', desc: 'From 10-unit blocks to complexes with thousands of units — scales with no added complexity.' },
            ].map((f, i) => (
              <div key={f.title} className={`reveal reveal-delay-${(i % 3) + 1} bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm card-hover`}>
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware callout */}
      <section className="py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal-left order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center p-6 shadow-sm">
                <img
                  src="/images/water_meter.png"
                  alt="Water meter hardware"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">Our Hardware</p>
              <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-6">Built for buildings</h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Axono supplies and installs its own smart water meters — no modifications to your plumbing required. One gateway covers an entire floor cluster and connects via cellular so you need no on-site Wi-Fi.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Our own smart meters — no third-party hardware dependency',
                  'IP65 rated — suitable for basements and outdoor risers',
                  'Local storage keeps data safe if connection drops',
                  'Remote firmware updates — no on-site maintenance',
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
              <Link to="/products" className="btn-primary px-7 py-3 text-sm group">
                See all products <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">FAQ</p>
            <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">Common questions</h2>
          </div>
          <div className="reveal">
            <FAQAccordion items={[
              { question: 'Do you replace our existing meters?', answer: 'Yes. We supply and install Axono smart water meters — we don\'t retrofit sensors onto existing ones. This guarantees accuracy and gives you full end-to-end support from a single supplier.' },
              { question: 'How many units can one gateway cover?', answer: 'Each gateway can cover up to 64 units. For larger buildings, we deploy multiple gateways — typically one per floor cluster. Our team handles all the planning and setup.' },
              { question: 'What happens if the internet goes down?', answer: 'Our gateway stores readings locally during any outage. Once connectivity is restored, all data is automatically synced to your dashboard — with no gaps in the history.' },
              { question: 'Can the data connect to our billing software?', answer: 'Yes. You can export usage data in standard formats or connect it directly to most property management tools. Our team helps set up the integration.' },
              { question: 'How long does installation take?', answer: 'For a typical 200-unit building, installation takes 1–2 days with a two-person team. We handle meter supply, installation, and commissioning — everything is included.' },
            ]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 rounded-2xl px-8 sm:px-16 py-16 text-center relative overflow-hidden reveal">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-teal-700/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Ready to automate your water metering?
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto mb-10">
                Talk to our team for a site assessment and a quote tailored to your building.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary px-8 py-3.5 text-sm group">
                  Request a Demo <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                <span className="text-neutral-500">Other solutions:</span>
                <Link to="/solutions/agriculture" className="text-teal-500 hover:text-teal-400 flex items-center gap-1.5 transition-colors">Agriculture <ArrowRight size={12} /></Link>
                <Link to="/solutions/facility" className="text-teal-500 hover:text-teal-400 flex items-center gap-1.5 transition-colors">Transformer <ArrowRight size={12} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
