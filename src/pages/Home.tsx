import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from '../router';
import { ArrowRight, BarChart3, Shield, Zap, Globe, Cpu, Server } from 'lucide-react';
import SolutionCard from '../components/SolutionCard';

const slides = [
  {
    title: 'End to End Residential Water Metering',
    description: 'Our smart water meters track every unit in your building automatically. Leak detection, tamper alerts, and billing reports — no manual reads, ever.',
    image: '/images/water_bg1.png',
    badge: 'Water Metering',
    link: '/solutions/water',
  },
  {
    title: 'Agriculture: Smart Irrigation Control',
    description: 'Soil sensors, automatic motor control, and water flow valves working together to optimize usage and protect your crops.',
    image: '/images/agri_bg.png',
    badge: 'Agriculture',
    link: '/solutions/agriculture',
  },
  {
    title: 'Transformer Monitoring Solutions',
    description: 'Continuous monitoring of oil temperature, load, voltage, and fault events. Get early warnings before a failure — and prevent costly outages.',
    image: '/images/transformer_bg.png',
    badge: 'Transformer Monitoring',
    link: '/solutions/facility',
  },
];

function WordReveal({ text, active, baseDelay = 0 }: { text: string; active: boolean; baseDelay?: number }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="word-reveal" style={{ marginRight: '0.27em' }}>
          <span
            style={{
              animationDelay: active ? `${baseDelay + i * 0.055}s` : '0s',
              animationPlayState: active ? 'running' : 'paused',
              opacity: active ? undefined : 0,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </>
  );
}

const statItems = [
  '4G LTE + WiFi Connectivity',
  'IP65 Weatherproof',
  'SMS & Email Alerts',
  'Real-Time Dashboard',
  'Local Data Storage',
  'Remote Control',
  'Modbus + Analog Inputs',
  '99.9% Uptime SLA',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [titleKey, setTitleKey] = useState(0);
  const revealRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goToSlide((prev: number) => (prev + 1) % slides.length);
    }, 6000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goToSlide = useCallback((updater: number | ((prev: number) => number)) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(typeof updater === 'function' ? updater : () => updater);
    setTitleKey((k) => k + 1);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const handleIndicatorClick = useCallback((index: number) => {
    goToSlide(index);
    startTimer();
  }, [goToSlide, startTimer]);

  return (
    <div ref={revealRef} className="pt-14">
      {/* Hero Carousel */}
      <section className="relative overflow-hidden h-[560px] sm:h-[680px] lg:h-[720px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{
                  transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 8s ease',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/75 via-neutral-900/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/25 via-transparent to-transparent" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-2xl">
                <span
                  className="inline-block text-xs font-semibold text-teal-400 uppercase tracking-widest border border-teal-500/40 bg-teal-500/10 px-3 py-1.5 rounded-full mb-6"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 0.5s 0.1s, transform 0.5s 0.1s',
                  }}
                >
                  {slide.badge}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
                  <WordReveal key={`${index}-${titleKey}`} text={slide.title} active={index === currentSlide} baseDelay={0.25} />
                </h1>
                <p
                  className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-lg"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? 'translateY(0)' : 'translateY(12px)',
                    transition: 'opacity 0.7s 0.6s, transform 0.7s 0.6s',
                  }}
                >
                  {slide.description}
                </p>
                <div
                  className="flex flex-wrap items-center gap-4"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? 'translateY(0)' : 'translateY(12px)',
                    transition: 'opacity 0.7s 0.75s, transform 0.7s 0.75s',
                  }}
                >
                  <Link to={slide.link} className="btn-primary btn-glow px-7 py-3.5 text-sm group">
                    Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="btn-secondary px-7 py-3.5 text-sm">
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className="flex items-center justify-center py-3 px-1 group"
              aria-label={`Slide ${index + 1}`}
            >
              <span
                className={`block h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide ? 'bg-white w-10' : 'bg-white/35 w-5 group-hover:bg-white/60'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Slide number */}
        <div className="absolute bottom-8 right-6 sm:right-10 text-xs font-mono text-white/40">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </section>

      {/* Marquee feature strip */}
      <div className="bg-neutral-950 border-b border-neutral-800 py-3 overflow-hidden marquee-track">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...statItems, ...statItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-8 text-xs font-medium text-neutral-400 uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-teal-500 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* How it works */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">Simple by design</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                title: 'We install at your site',
                desc: 'Our team installs our own smart meters, sensors, and gateways — covering water metering, agriculture, or any industrial equipment you need to monitor.',
              },
              {
                step: '02',
                title: 'Data flows automatically',
                desc: 'Our gateway devices collect readings around the clock and send them securely to your online account — no manual checks needed.',
              },
              {
                step: '03',
                title: 'Monitor from anywhere',
                desc: 'View live readings, receive instant alerts, and download reports from your phone or computer — anytime, anywhere.',
              },
            ].map((item, i) => (
              <div key={item.step} className={`reveal reveal-delay-${i + 1} text-center sm:text-left`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-500 rounded-xl mb-6">
                  <span className="text-white font-mono text-sm font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions preview */}
      <section className="bg-white border-b border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="reveal">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-2">Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">What we monitor</h2>
            </div>
            <Link to="/solutions/water" className="reveal hidden sm:flex text-sm text-neutral-500 hover:text-neutral-900 font-medium items-center gap-1.5 transition-colors group">
              View all <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="reveal reveal-delay-1">
              <SolutionCard
                title="Water Metering"
                description="Our smart water meters track usage across every unit in your building automatically. Get alerts for leaks and generate billing reports without manual reads."
                href="/solutions/water"
                features={['Our own smart meters — fully managed', 'Instant leak and tamper alerts', 'Per-unit usage reports for billing']}
                image="/images/water_bg2.png"
              />
            </div>
            <div className="reveal reveal-delay-2">
              <SolutionCard
                title="Agriculture"
                description="Automate irrigation based on real soil conditions. Reduce water waste, protect crops from stress, and manage your entire farm remotely."
                href="/solutions/agriculture"
                features={['Automated irrigation — no manual valves', 'Soil moisture and temperature tracking', 'Weather station integration']}
                image="/images/agri_bg.png"
              />
            </div>
            <div className="reveal reveal-delay-3">
              <SolutionCard
                title="Transformer Monitoring"
                description="Monitor oil temperature, load, voltage, and fault events on your transformers around the clock. Get early warnings before an outage happens."
                href="/solutions/facility"
                features={['Continuous real-time monitoring', 'Early fault detection & alerts', 'Multi-site dashboard']}
                image="/images/transformer_bg.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard & Mobile */}
      <section className="bg-neutral-950 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/6 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl animate-blob-delay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <p className="text-xs uppercase tracking-widest text-teal-500 font-semibold mb-4">Platform</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight mb-6">
                Everything in<br />one place
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                The Axono platform brings all your sites and assets into a single dashboard — accessible on your phone, tablet, or computer. See what's happening now or review any point in history.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Live readings from all your sites, updated in real time',
                  'Instant alerts by SMS or email when something needs attention',
                  'View usage history and generate reports with one click',
                  'Role-based access for teams, clients, and managers',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-outline-teal px-7 py-3 text-sm group">
                See a live demo <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal-right">
              <div className="col-span-2 relative overflow-hidden rounded-xl">
                <img
                  src="/images/water_dashboard.png"
                  alt="Web dashboard"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <span className="text-sm font-semibold text-white">Web Dashboard</span>
                  <p className="text-xs text-neutral-300 mt-0.5">Real-time data across all sites</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/app.png"
                  alt="Mobile app"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                  <span className="text-xs font-semibold text-white">Mobile App</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/alert.png"
                  alt="Alerts"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                  <span className="text-xs font-semibold text-white">Instant Alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gateway hardware teaser */}
      <section className="bg-white border-b border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative reveal-left order-2 lg:order-1">
              <div className="relative rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center p-6 sm:p-10">
                <img
                  src="/images/gateway2.png"
                  alt="IoT Gateway"
                  className="w-full max-h-96 object-contain"
                />
              </div>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">Hardware</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight leading-tight mb-6">
                Our gateway hardware — built in-house
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Axono designs and builds its own gateway devices — which means faster support, custom configurations, and guaranteed compatibility with our software platform.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Works outdoors, in basements, on rooftops, and in fields',
                  'Powers our own smart water meters and industrial sensors',
                  'Sends data without on-site Wi-Fi',
                  'Stores readings locally if internet goes down',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-neutral-500">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/products" className="btn-primary px-7 py-3 text-sm group">
                View all products <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Axono */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">Why Axono</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">
              One vendor. Full ownership.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: 'We build our own hardware',
                desc: 'Axono designs and manufactures the gateway devices used in every project — full control over quality and support.',
              },
              {
                icon: Globe,
                title: 'One team handles everything',
                desc: 'From meter supply and installation to your online dashboard — one company, one point of contact.',
              },
              {
                icon: Shield,
                title: 'Built for tough environments',
                desc: 'Our devices are weatherproofed and field-tested for water distribution networks, farmland, substations, and rooftops.',
              },
              {
                icon: Zap,
                title: 'Connects to almost anything',
                desc: 'From our own smart water meters to industrial sensors and legacy equipment — our gateways handle it all.',
              },
              {
                icon: BarChart3,
                title: 'Alerts and reports, your way',
                desc: 'Define your own thresholds and get notified by SMS or email. Generate reports on demand or on a schedule.',
              },
              {
                icon: Server,
                title: 'Grows with your business',
                desc: 'Start with one building and scale to hundreds of sites. Our platform handles any size without added complexity.',
              },
            ].map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${(i % 3) + 1} bg-white rounded-xl border border-neutral-200 p-6 shadow-sm card-hover`}>
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                  <item.icon size={18} className="text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-neutral-950 overflow-hidden py-28">
        <div className="absolute inset-0">
          <img
            src="/images/light_background.jpg"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-950/90 to-teal-950/30" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <p className="text-xs uppercase tracking-widest text-teal-500 font-semibold mb-4">Get Started</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Talk to our team
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what you need to monitor and we'll show you exactly how Axono can help — with a live dashboard walkthrough tailored to your site.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary btn-glow px-8 py-4 text-sm group">
              Contact us <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/products" className="btn-secondary px-8 py-4 text-sm">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
