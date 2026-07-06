import { useEffect } from 'react';
import { Link } from '../../router';
import { ArrowRight, Leaf, Droplets, Thermometer, Wind, Bell, BarChart3 } from 'lucide-react';
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

export default function AgricultureSolution() {
  useReveal();

  return (
    <div className="pt-14 bg-white">
      {/* Hero */}
      <section className="relative h-[480px] sm:h-[560px] overflow-hidden">
        <img
          src="/images/agri_bg.png"
          alt="Smart agriculture irrigation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold text-teal-400 uppercase tracking-widest border border-teal-500/40 bg-teal-500/10 px-3 py-1.5 rounded-full mb-6">
              Agriculture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Water your crops based on what the soil needs
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-lg">
              Stop guessing when to irrigate. Soil sensors trigger irrigation automatically — reduce water waste, protect crops from stress, and manage your farm from your phone.
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
            <span className="text-neutral-700 font-medium">Agriculture</span>
          </div>
        </div>
      </div>

      {/* What we monitor */}
      <section className="py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">What We Monitor</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              Every condition that affects your crop
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              From soil to sky, our sensors give you a complete picture of what's happening in your fields.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Droplets, title: 'Soil Moisture', desc: 'Know exactly when and where irrigation is needed — per zone, in real time.' },
              { icon: Thermometer, title: 'Soil & Air Temperature', desc: 'Protect crops from heat and frost stress before damage occurs.' },
              { icon: Wind, title: 'Weather Station', desc: 'On-farm weather data including humidity, wind, and rainfall for smarter scheduling.' },
              { icon: Leaf, title: 'Water Flow & Valves', desc: 'Monitor flow through pipes and control motorized valves automatically or manually.' },
            ].map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${i + 1} bg-neutral-50 rounded-2xl p-7 border border-neutral-100 card-hover`}>
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
      <section className="py-20 border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-8">
                Precision irrigation on autopilot
              </h2>
              <div className="space-y-8">
                {[
                  { num: '01', title: 'Sensors go into the ground', desc: 'Soil sensors are placed in each irrigation zone. Installation is quick and doesn\'t disrupt existing crops.' },
                  { num: '02', title: 'The system decides when to irrigate', desc: 'When soil moisture drops below your set threshold, valves open automatically. When it\'s met, they close.' },
                  { num: '03', title: 'You see everything in real time', desc: 'Monitor all zones, override valves manually, review water usage, and get alerts when conditions change — from your phone.' },
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
                  src="/images/agri_dashboard.png"
                  alt="Agri Dashboard"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100">
                <div className="text-3xl font-bold text-teal-600 mb-1">30%</div>
                <div className="text-sm text-neutral-600 font-medium">Water savings</div>
                <div className="text-xs text-neutral-400 mt-0.5">vs manual irrigation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">In the Field</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">Remote control from anywhere</h2>
          </div>
          <div className="space-y-4 reveal">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/agri_bg2.jpg"
                alt="Crop field irrigation"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-white font-semibold">Zone control dashboard</span>
                <p className="text-neutral-300 text-xs mt-1">Live soil readings and valve status per zone</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl h-56">
                <img src="/images/soil_sensor.jpg" alt="Field sensor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-3"><span className="text-white text-xs font-semibold">Soil Sensors</span></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl h-56">
                <img src="/images/agri_valve.jpg" alt="Control panel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-3"><span className="text-white text-xs font-semibold">Valve Control</span></div>
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
              { icon: Droplets, title: 'Automated irrigation', desc: 'Valves open and close automatically based on real soil readings — no manual intervention.' },
              { icon: Bell, title: 'Crop stress alerts', desc: 'Get alerted when soil moisture is critically low or temperature puts your crop at risk.' },
              { icon: BarChart3, title: 'Usage analytics', desc: 'See how much water each zone has used daily, weekly, and seasonally. Spot waste and optimize.' },
              { icon: Wind, title: 'Weather integration', desc: 'On-farm weather station data automatically adjusts irrigation schedules to match real conditions.' },
              { icon: Thermometer, title: 'Multi-parameter monitoring', desc: 'Track soil moisture, soil temperature, EC, pH, and air conditions all from one platform.' },
              { icon: Leaf, title: 'Works for any crop', desc: 'Configure thresholds per crop type. Our system adapts to fruits, vegetables, grains, and more.' },
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
      <section className="py-20 border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">FAQ</p>
            <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">Common questions</h2>
          </div>
          <div className="reveal">
            <FAQAccordion items={[
              { question: 'Can I control valves manually from my phone?', answer: 'Yes. The mobile app lets you open or close any valve on demand. You can also override the automatic schedule or pause irrigation across all zones at once.' },
              { question: 'How many zones can one system manage?', answer: 'Each gateway supports multiple zones. Large farms with many independent zones can use multiple gateways — all managed from the same dashboard.' },
              { question: 'Does it work for greenhouses and open fields?', answer: 'Yes. Our sensors and gateways work in both environments. For greenhouses, we also support supplemental lighting and temperature control integration.' },
              { question: 'What happens if the internet connection drops?', answer: 'Irrigation schedules continue to run locally on the gateway. Once connectivity returns, all event logs and usage data sync to your cloud account.' },
              { question: 'How does it decide when to irrigate?', answer: 'You set target moisture ranges per zone. When soil moisture drops below your threshold, irrigation triggers automatically. It stops when the upper limit is reached.' },
            ]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 rounded-2xl px-8 sm:px-16 py-16 text-center relative overflow-hidden reveal">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Ready to automate your irrigation?
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto mb-10">
                Talk to our team about your farm setup and we'll recommend the right sensor and gateway configuration.
              </p>
              <Link to="/contact" className="btn-primary px-8 py-3.5 text-sm group inline-flex">
                Request a Demo <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                <span className="text-neutral-500">Other solutions:</span>
                <Link to="/solutions/water" className="text-teal-500 hover:text-teal-400 flex items-center gap-1.5 transition-colors">Water Metering <ArrowRight size={12} /></Link>
                <Link to="/solutions/facility" className="text-teal-500 hover:text-teal-400 flex items-center gap-1.5 transition-colors">Transformer <ArrowRight size={12} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
