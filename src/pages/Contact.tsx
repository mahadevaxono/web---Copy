import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

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

const inputClass = `w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400
  focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/10
  transition-all duration-200`;

export default function Contact() {
  useReveal();

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', vertical: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-14 bg-white">
      {/* Hero */}
      <section className="bg-neutral-950 relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src="/images/light_background.jpg" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/50" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-700/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-teal-500 font-semibold mb-4 reveal">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 reveal reveal-delay-1">
              Let's talk about<br />
              <span className="gradient-text">your project</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed reveal reveal-delay-2">
              Tell us what you need to monitor. Our team will scope your deployment, recommend the right hardware, and walk you through a live demo.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">

            {/* Form */}
            <div className="lg:col-span-2 reveal-left">
              {submitted ? (
                <div className="bg-teal-50 border border-teal-100 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-3">Message received</h2>
                  <p className="text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. An Axono applications engineer will contact you within one business day to discuss your requirements.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Send us a message</h2>
                  <p className="text-neutral-500 mb-8">We respond within one business day.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          Full Name <span className="text-teal-500">*</span>
                        </label>
                        <input
                          required name="name" value={form.name} onChange={handleChange}
                         
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          Email Address <span className="text-teal-500">*</span>
                        </label>
                        <input
                          required type="email" name="email" value={form.email} onChange={handleChange}
                          
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          Company <span className="text-teal-500">*</span>
                        </label>
                        <input
                          required name="company" value={form.company} onChange={handleChange}
                          
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          Area of Interest
                        </label>
                        <select
                          name="vertical" value={form.vertical} onChange={handleChange}
                          className={`${inputClass} appearance-none cursor-pointer`}
                        >
                          <option value="">Select a solution...</option>
                          <option value="water">Water Metering</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="facility">Transformer</option>
                          <option value="other">Other / Multiple</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                        Your Requirements <span className="text-teal-500">*</span>
                      </label>
                      <textarea
                        required name="message" value={form.message} onChange={handleChange}
                        rows={5}
                        placeholder="Describe what you need to monitor — site type, number of units or assets, scale, and what outcomes you're aiming for..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <button type="submit" className="btn-primary px-8 py-3.5 text-sm group">
                        Send Message <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </button>
                      <span className="text-xs text-neutral-400">We'll respond within one business day</span>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-5 reveal-right">
              {/* Contact details */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-neutral-500 mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'General', value: 'contact@axono.io' },
                    { icon: Mail, label: 'Sales', value: 'sales@axono.io' },
                    { icon: Mail, label: 'Support', value: 'support@axono.io' },
                    { icon: Phone, label: 'Phone', value: '+1 (800) 000-AXONO' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-3.5 h-3.5 text-teal-600" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-400 mb-0.5">{item.label}</div>
                        <div className="text-sm font-medium text-neutral-800">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-neutral-500 mb-5">Office</h3>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <address className="text-sm text-neutral-700 not-italic leading-relaxed">
                    Axono IoT Solutions Pte. Ltd.<br />
                    10 Anson Road, #12-01<br />
                    International Plaza<br />
                    Singapore 079903
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-neutral-500 mb-5">Business Hours</h3>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-white border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <div className="text-sm text-neutral-600 leading-relaxed">All times in SGT (UTC+8)</div>
                </div>
                <div className="space-y-2.5 pl-11">
                  {[
                    { day: 'Mon – Fri', time: '09:00 – 18:00' },
                    { day: 'Saturday', time: '09:00 – 13:00' },
                    { day: 'Sunday', time: 'Closed' },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between text-sm">
                      <span className="text-neutral-500">{row.day}</span>
                      <span className={`font-medium ${row.time === 'Closed' ? 'text-neutral-400' : 'text-neutral-800'}`}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SLA */}
              <div className="bg-teal-600 rounded-2xl p-6">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-teal-200 mb-5">Response SLA</h3>
                <div className="space-y-3">
                  {[
                    { tier: 'Critical issues', time: '< 2 hours' },
                    { tier: 'Non-critical alerts', time: '< 8 hours' },
                    { tier: 'General enquiries', time: '< 1 business day' },
                  ].map((s) => (
                    <div key={s.tier} className="flex items-center justify-between text-sm">
                      <span className="text-teal-100">{s.tier}</span>
                      <span className="font-semibold text-white bg-white/15 px-2.5 py-0.5 rounded-full text-xs">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
