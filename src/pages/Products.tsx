import { useEffect, useRef } from 'react';
import { Link } from '../router';
import {
  Cpu, Smartphone, Cloud, Zap,
  Wifi, Shield, BarChart3, Bell,
  Database, Radio, ArrowRight,
} from 'lucide-react';

const products = [
  {
    id: 'gateway',
    tag: '01',
    name: 'IoT Gateway',
    tagline: 'The bridge between your sensors and the cloud.',
    description:
      'A rugged, field-ready device that collects data from all connected sensors and transmits it securely to our cloud. Works with 4G LTE, WiFi, and Ethernet. Supports Modbus, analog, and digital sensor inputs.',
    image: '/images/gateway1.png',
    icon: Cpu,
    accentColor: 'teal',
    specs: [
      { label: 'Connectivity', value: '4G LTE + WiFi + Ethernet' },
      { label: 'Sensor Interfaces', value: 'Modbus RTU, 4-20mA, Pulse' },
      { label: 'Enclosure', value: 'IP65 rated, -20°C to +60°C' },
      { label: 'Security', value: 'TLS 1.3, device certificates' },
    ],
    highlights: ['Connects to almost any existing sensor or meter', 'Stores readings locally if internet drops', 'Remote firmware updates over the air'],
  },
  {
    id: 'software',
    tag: '02',
    name: 'IoT Software',
    tagline: 'Control everything from your phone or desktop.',
    description:
      'Native mobile apps for Android and iOS, plus a full-featured web dashboard. View live data, configure alerts, control devices remotely, and generate reports — all without any technical knowledge required.',
    image: '/images/webdash.png',
    icon: Smartphone,
    accentColor: 'teal',
    specs: [
      { label: 'Mobile', value: 'Android & iOS native apps' },
      { label: 'Dashboard', value: 'Responsive web dashboard' },
      { label: 'Alerts', value: 'SMS, email, push notifications' },
      { label: 'Access', value: 'Role-based team permissions' },
    ],
    highlights: ['No technical knowledge required', 'Works offline with automatic sync', 'Customizable dashboards and reports'],
  },
  {
    id: 'cloud',
    tag: '03',
    name: 'Cloud Platform',
    tagline: 'Enterprise infrastructure, fully managed.',
    description:
      'Our cloud platform handles everything behind the scenes — secure data storage, real-time analytics, automated alerts, and 99.9% uptime. Built for scale, from a single building to thousands of sites.',
    image: '/images/cloud_platform.png',
    icon: Cloud,
    accentColor: 'teal',
    specs: [
      { label: 'Uptime SLA', value: '99.9% guaranteed' },
      { label: 'Security', value: 'Bank-grade encryption, GDPR' },
      { label: 'Storage', value: 'Unlimited historical data' },
      { label: 'Integrations', value: 'REST API, CSV/Excel export' },
    ],
    highlights: ['Geo-redundant backups across regions', 'Automated anomaly detection', 'API access for third-party integrations'],
  },
  {
    id: 'edge',
    tag: '04',
    name: 'Edge Devices',
    tagline: 'Compact sensors designed for the real world.',
    description:
      'Purpose-built sensors for temperature, humidity, pressure, flow, and level monitoring. Ultra-low power design with battery life measured in years. Wireless connectivity with simple QR-code setup.',
    image: 'https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Zap,
    accentColor: 'teal',
    specs: [
      { label: 'Battery Life', value: '2-5 years typical' },
      { label: 'Connectivity', value: 'LoRa, WiFi, or Cellular' },
      { label: 'Parameters', value: 'Temp, humidity, pressure, flow' },
      { label: 'Setup', value: 'QR code scan — no config needed' },
    ],
    highlights: ['Mount anywhere, no cabling required', 'Solar-powered option available', 'Waterproof and dustproof design'],
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const isEven = index % 2 === 0;
  const Icon = product.icon;

  return (
    <div
      className={`reveal reveal-delay-${index + 1} grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-shadow duration-500 ${
        isEven ? '' : ''
      }`}
    >
      {/* Image side */}
      <div className={`relative overflow-hidden h-72 lg:h-auto ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent" />
        <div className="absolute top-6 left-6">
          <span className="text-xs font-mono text-white/70 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
            {product.tag}
          </span>
        </div>
        <div className="absolute bottom-6 left-6">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className={`bg-white p-8 lg:p-12 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">{product.name}</h2>
        <p className="text-teal-600 font-medium mb-4 text-sm">{product.tagline}</p>
        <p className="text-neutral-600 leading-relaxed mb-8 text-sm">{product.description}</p>

        {/* Spec grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {product.specs.map((spec) => (
            <div key={spec.label} className="bg-neutral-50 rounded-lg p-3">
              <div className="text-xs text-neutral-400 mb-0.5">{spec.label}</div>
              <div className="text-sm font-medium text-neutral-900">{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-8">
          {product.highlights.map((h) => (
            <div key={h} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0" />
              <span className="text-sm text-neutral-600">{h}</span>
            </div>
          ))}
        </div>

        <div>
          <Link to="/contact" className="btn-primary px-6 py-2.5 text-sm group">
            Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const pageRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white pt-14">
      {/* Page Hero */}
      <section className="bg-neutral-950 relative overflow-hidden noise">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-700/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-teal-500 font-semibold mb-4 reveal">Products</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 reveal reveal-delay-1">
              Built end-to-end.<br />
              <span className="gradient-text">Owned end-to-end.</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed reveal reveal-delay-2">
              From the sensor on your pipe to the dashboard on your phone — every component is designed, built, and supported by Axono.
            </p>
          </div>
        </div>
      </section>

      {/* Product ecosystem visual */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-0">
            {[
              { icon: Radio, label: 'Edge Devices', sub: 'Measure' },
              { icon: Cpu, label: 'IoT Gateway', sub: 'Collect' },
              { icon: Cloud, label: 'Cloud Platform', sub: 'Process' },
              { icon: Smartphone, label: 'IoT Software', sub: 'Monitor' },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center">
                <div className="reveal text-center px-6 lg:px-10" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-14 h-14 bg-white border border-neutral-200 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-sm font-semibold text-neutral-900">{item.label}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{item.sub}</div>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex items-center text-neutral-300">
                    <div className="w-8 h-px bg-neutral-200" />
                    <ArrowRight size={12} className="text-neutral-300" />
                    <div className="w-8 h-px bg-neutral-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-neutral-50 border-y border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              One Stack. Zero Integration Headaches.
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Because every layer is built by the same team, everything works together seamlessly from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'One SLA', desc: 'Single vendor, single point of accountability for hardware and software.' },
              { icon: Zap, title: 'Fast Support', desc: 'Our support team can see all layers — no blaming another vendor.' },
              { icon: BarChart3, title: 'Better Insights', desc: 'Data flows unobstructed from field to dashboard with no compatibility gaps.' },
              { icon: Bell, title: 'Instant Alerts', desc: 'Hardware events trigger software alerts in seconds, not minutes.' },
            ].map((item, i) => (
              <div key={item.title} className={`bg-white rounded-xl p-6 border border-neutral-200 shadow-sm card-hover reveal reveal-delay-${i + 1}`}>
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            Ready to see it all in action?
          </h2>
          <p className="text-lg text-neutral-500 mb-10">
            We'll walk you through a live demo tailored to your use case.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary px-8 py-3 text-sm group">
              Request a Demo <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/solutions/water" className="btn-outline px-8 py-3 text-sm">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
