import { useEffect } from 'react';
import { Link } from '../router';
import { ArrowRight, Cpu, Code, Cloud, Users } from 'lucide-react';

export default function Company() {
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
    <div className="pt-14 bg-white">
      {/* Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src="/images/pcb.jpg"
          alt="Axono team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/60 to-neutral-950/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs uppercase tracking-widest text-teal-400 font-semibold mb-4">About Us</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Axono IoT Solutions</h1>
          <p className="text-neutral-400 mt-4 max-w-xl text-lg">A new company with deep roots</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="py-20 border-b border-neutral-100">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-6 tracking-tight">
              A New Company. Deep Experience.
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Axono is a fresh IoT solutions company founded by a team with decades of combined experience in hardware design and software development. We bring the agility of a startup and the wisdom of veterans to every project.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="py-20 border-b border-neutral-100">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">Our Story</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-6 tracking-tight">Why We Started Axono</h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  Having worked in the IoT and embedded systems industry for years, we saw the same problems repeat across projects: hardware from one vendor, software from another, integration from a third party, and nobody fully responsible when something went wrong.
                </p>
                <p>
                  We believed there was a better way. Axono builds the hardware, the firmware, the cloud platform, and the mobile apps — all under one roof. One team, one point of accountability, solutions that work end-to-end.
                </p>
                <p>
                  As a new company, we bring the hunger of a startup combined with the wisdom of decades in the field.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl reveal-right">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Team collaboration"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="py-20 border-b border-neutral-100">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">Expertise</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">Decades of Experience, Fresh Perspective</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, value: '15+', label: 'Years in Hardware', desc: 'PCB design, RF engineering, embedded systems — products deployed across industries.' },
              { icon: Code, value: '25+', label: 'Years in Software', desc: 'Full-stack, cloud architecture, mobile apps — software at scale is in our DNA.' },
              { icon: Cloud, value: '99.9%', label: 'Platform Uptime', desc: 'Built on robust infrastructure designed for reliability from day one.' },
              { icon: Users, value: '1', label: 'Team to Call', desc: 'One contact for hardware, software, and support. No vendor blame games.' },
            ].map((item, i) => (
              <div key={item.label} className={`reveal reveal-delay-${i + 1} bg-neutral-50 rounded-2xl p-7 card-hover border border-neutral-100`}>
                <item.icon className="w-8 h-8 text-teal-600 mb-5" />
                <div className="text-4xl font-bold text-neutral-900 mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-neutral-700 mb-3">{item.label}</div>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Build */}
        <div className="py-20 border-b border-neutral-100">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">What We Build</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-6 tracking-tight">
                Complete IoT Solutions, Start to Finish
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Because every layer is built by the same team, everything works together seamlessly. There's no integration tax, no compatibility issues, and no finger-pointing between vendors.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'IoT Gateways', desc: 'Designed and built in-house — complete control over quality, compatibility, and support.' },
                  { label: 'Cloud Platform', desc: 'Built from scratch. No white-labeled platforms — our data, our architecture, our reliability.' },
                  { label: 'Mobile & Web Apps', desc: 'Native apps and web dashboards built by the same team as the hardware.' },
                  { label: 'End-to-End Support', desc: 'We install, commission, and stand behind every deployment long-term.' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-neutral-900 mb-0.5">{item.label}</div>
                      <div className="text-sm text-neutral-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 reveal-right">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/163100/circuit-board-circuit-electronics-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Hardware manufacturing"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Circuit boards"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Software dashboard"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20">
          <div className="bg-neutral-950 rounded-2xl px-8 sm:px-12 py-12 text-center reveal">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight">Ready to work with us?</h2>
            <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
              Tell us what you need to monitor and we'll show you how Axono can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary px-7 py-3 group">
                Contact us <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/products" className="btn-secondary px-7 py-3">
                View products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
