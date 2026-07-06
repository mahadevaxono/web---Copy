import { useEffect } from 'react';
import { Link } from '../../router';
import { ArrowRight, Thermometer, Zap, Activity, Bell, ShieldCheck, BarChart3 } from 'lucide-react';
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

export default function FacilitySolution() {
  useReveal();

  return (
    <div className="pt-14 bg-white">
      {/* Hero */}
      <section className="relative h-[480px] sm:h-[560px] overflow-hidden">
        <img
          src="/images/transformer_bg.png"
          alt="Transformer monitoring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold text-teal-400 uppercase tracking-widest border border-teal-500/40 bg-teal-500/10 px-3 py-1.5 rounded-full mb-6">
              Transformer Monitoring
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Know your transformer's health before it fails
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-lg">
              Continuous monitoring of oil temperature, load, voltage, and more. Get early warnings the moment parameters drift — and prevent costly outages before they happen.
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
            <span className="text-neutral-700 font-medium">Transformer Monitoring</span>
          </div>
        </div>
      </div>

      {/* Problem section */}
      <section className="py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">The Problem</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              Transformer failures are preventable
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Most failures don't happen without warning — the warning just goes unnoticed. These are the risks Axono eliminates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'No real-time visibility', desc: 'Manual inspections miss the gradual drift in oil temperature, load imbalance, or voltage anomalies that signal impending failure.' },
              { title: 'Unplanned outages', desc: 'A transformer that fails without warning can knock out power for hours — impacting operations, revenue, and safety.' },
              { title: 'Overloading goes undetected', desc: 'Seasonal or unexpected load spikes can push a transformer past safe limits without anyone knowing until it\'s too late.' },
              { title: 'Expensive reactive repairs', desc: 'Emergency replacement and repair costs dwarf the cost of proactive monitoring — especially for high-capacity units.' },
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

      {/* What we monitor */}
      <section className="py-20 border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">What We Monitor</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              Full transformer health at a glance
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Every critical parameter tracked continuously from a single dashboard.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Thermometer, title: 'Oil & Winding Temperature', desc: 'Track top-oil and winding hotspot temperatures against safe limits. Catch overheating before insulation degrades.' },
              { icon: Zap, title: 'Voltage & Load', desc: 'Monitor input/output voltage, current, and load percentage. Get alerted on overloads or voltage excursions.' },
              { icon: Activity, title: 'Power Factor & Harmonics', desc: 'Detect insulation deterioration and harmonic distortion early through continuous power quality analysis.' },
              { icon: BarChart3, title: 'Oil Level & Pressure', desc: 'Track conservator oil level and internal pressure. Low oil level and pressure spikes are early failure indicators.' },
              { icon: ShieldCheck, title: 'Buchholz & Protection Relays', desc: 'Log Buchholz relay trips, overcurrent events, and protection activations with precise timestamps for audit trails.' },
              { icon: Bell, title: 'Environmental Conditions', desc: 'Monitor ambient temperature and humidity around the transformer to assess external stress on the unit.' },
            ].map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${(i % 3) + 1} bg-white rounded-2xl p-7 border border-neutral-200 shadow-sm card-hover`}>
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-8">
                Continuous protection in three steps
              </h2>
              <div className="space-y-8">
                {[
                  { num: '01', title: 'We instrument your transformers', desc: 'Our team installs monitoring devices directly on your transformer — connecting to existing sensor ports, CT clamps, and relay outputs with no outage required for most installations.' },
                  { num: '02', title: 'Live data flows to your dashboard', desc: 'Temperature, voltage, load, and fault events stream in real time to your online account. Every reading is timestamped and stored for long-term trend analysis.' },
                  { num: '03', title: 'Alerts reach you before failure', desc: 'When any parameter exceeds your defined thresholds, your team is notified instantly by SMS or email — giving you time to act before an outage occurs.' },
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
                  src="/images/transformer_dashboard.png"
                  alt="Transformer monitoring dashboard"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100">
                <div className="text-3xl font-bold text-teal-600 mb-1">72h</div>
                <div className="text-sm text-neutral-600 font-medium">Avg. early warning</div>
                <div className="text-xs text-neutral-400 mt-0.5">before transformer failure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">Platform</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">See it in action</h2>
          </div>
          <div className="space-y-4 reveal">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/transformer_bg2.png"
                alt="Transformer monitoring dashboard"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-white font-semibold">Live transformer dashboard</span>
                <p className="text-neutral-300 text-xs mt-1">All units at a glance — temperature, load, voltage, and fault history</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl h-56">
                <img src="/images/transformer_alert.png" alt="Mobile alerts" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-3"><span className="text-white text-xs font-semibold">Mobile Alerts</span></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl h-56">
                <img src="/images/transformer_installation.png" alt="Transformer site" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-3"><span className="text-white text-xs font-semibold">On-site Installation</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">What you get</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: '24/7 continuous monitoring', desc: 'Every transformer tracked around the clock — no gaps, no manual checks, no missed events.' },
              { icon: Bell, title: 'Configurable threshold alerts', desc: 'Set your own safe-operating limits. Get notified by SMS or email the moment any parameter is exceeded.' },
              { icon: BarChart3, title: 'Long-term trend analysis', desc: 'See how temperature and load evolve over months. Identify gradual degradation before it becomes a failure.' },
              { icon: Zap, title: 'Fault event logging', desc: 'Every protection relay trip, Buchholz event, and overcurrent fault is recorded with a precise timestamp.' },
              { icon: ShieldCheck, title: 'Device health status', desc: 'Know immediately if a monitoring unit goes offline so you\'re never left with a blind spot in coverage.' },
              { icon: Thermometer, title: 'Remote multi-site management', desc: 'Manage transformers across multiple substations and sites from a single dashboard — no travel needed.' },
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

      {/* FAQ */}
      <section className="py-20 border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">FAQ</p>
            <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">Common questions</h2>
          </div>
          <div className="reveal">
            <FAQAccordion items={[
              { question: 'Does installation require taking the transformer offline?', answer: 'In most cases, no. Our team uses CT clamps and external sensor ports that can be connected without interrupting service. We assess your specific setup during the pre-installation survey.' },
              { question: 'Which transformer types do you support?', answer: 'We support oil-immersed distribution transformers, dry-type transformers, and power transformers across a wide voltage range. Our team will confirm compatibility during the site assessment.' },
              { question: 'Can we monitor transformers at multiple sites?', answer: 'Yes. All your transformers — regardless of location — appear in a single dashboard. Each site connects via our cellular gateway, so no on-site network infrastructure is needed.' },
              { question: 'How quickly do alerts reach us?', answer: 'Typically within 30–60 seconds of a threshold being exceeded. SMS and email notifications are sent simultaneously to all configured contacts.' },
              { question: 'Can multiple engineers receive different alerts?', answer: 'Yes. You can configure separate notification groups — for example, operations staff receive load and temperature alerts while maintenance teams receive fault event notifications.' },
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
                Stop reacting. Start preventing.
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto mb-10">
                Tell us about your transformers and we'll design the right monitoring solution for your sites.
              </p>
              <Link to="/contact" className="btn-primary px-8 py-3.5 text-sm group inline-flex">
                Request a Demo <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                <span className="text-neutral-500">Other solutions:</span>
                <Link to="/solutions/water" className="text-teal-500 hover:text-teal-400 flex items-center gap-1.5 transition-colors">Water Metering <ArrowRight size={12} /></Link>
                <Link to="/solutions/agriculture" className="text-teal-500 hover:text-teal-400 flex items-center gap-1.5 transition-colors">Agriculture <ArrowRight size={12} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
