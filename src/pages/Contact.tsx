import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const API_ENDPOINT = 'https://ym5jkf1hk9.execute-api.ap-south-1.amazonaws.com/contact';

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

interface FormFields {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}

const BLANK_ERRORS: FormErrors = { name: '', email: '', phone: '', company: '', product: '', message: '' };

function validate(f: FormFields): FormErrors {
  const e = { ...BLANK_ERRORS };
  if (!f.name.trim()) e.name = 'Full name is required';
  if (!f.email.trim()) e.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address';
  if (!f.phone.trim()) e.phone = 'Phone number is required';
  else if (!/^[+]?[\d\s\-().]{7,20}$/.test(f.phone)) e.phone = 'Enter a valid phone number';
  if (!f.company.trim()) e.company = 'Company name is required';
  if (!f.product) e.product = 'Please select a product';
  if (!f.message.trim()) e.message = 'Project description is required';
  else if (f.message.trim().length < 20) e.message = 'Please provide at least 20 characters';
  return e;
}

function hasErrors(e: FormErrors) {
  return Object.values(e).some((v) => v !== '');
}

const inputClass = (error: string) =>
  `w-full bg-neutral-50 border rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400
  focus:outline-none focus:bg-white focus:ring-2 transition-all duration-200 ${
    error
      ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10'
      : 'border-neutral-200 focus:border-teal-500 focus:ring-teal-500/10'
  }`;

function FieldError({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
      <AlertCircle size={11} /> {msg}
    </p>
  );
}

export default function Contact() {
  useReveal();

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [form, setForm] = useState<FormFields>({ name: '', email: '', phone: '', company: '', product: '', message: '' });

  const errors = validate(form);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, company: true, product: true, message: true });
    if (hasErrors(errors)) return;

    const nameParts = form.name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'xxxxxxxx';

    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const visibleError = (field: keyof FormFields) => (touched[field] ? errors[field] : '');

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
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          Full Name <span className="text-teal-500">*</span>
                        </label>
                        <input
                          name="name" value={form.name} onChange={handleChange} onBlur={handleBlur}
                        
                          className={inputClass(visibleError('name'))}
                        />
                        <FieldError msg={visibleError('name')} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          Email Address <span className="text-teal-500">*</span>
                        </label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur}
                          
                          className={inputClass(visibleError('email'))}
                        />
                        <FieldError msg={visibleError('email')} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          Phone Number <span className="text-teal-500">*</span>
                        </label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange} onBlur={handleBlur}
                          placeholder="+91 98765 43210"
                          className={inputClass(visibleError('phone'))}
                        />
                        <FieldError msg={visibleError('phone')} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          Company <span className="text-teal-500">*</span>
                        </label>
                        <input
                          name="company" value={form.company} onChange={handleChange} onBlur={handleBlur}
                          
                          className={inputClass(visibleError('company'))}
                        />
                        <FieldError msg={visibleError('company')} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                        Product / Area of Interest <span className="text-teal-500">*</span>
                      </label>
                      <select
                        name="product" value={form.product} onChange={handleChange} onBlur={handleBlur}
                        className={`${inputClass(visibleError('product'))} appearance-none cursor-pointer`}
                      >
                        <option value="">Select a solution...</option>
                        <option value="water">Water Metering</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="transformer">Transformer Monitoring</option>
                        <option value="other">Other / Multiple</option>
                      </select>
                      <FieldError msg={visibleError('product')} />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                        Project Description <span className="text-teal-500">*</span>
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} onBlur={handleBlur}
                        rows={5}
                        placeholder="Describe what you need to monitor — site type, number of units or assets, scale, and what outcomes you're aiming for..."
                        className={`${inputClass(visibleError('message'))} resize-none`}
                      />
                      <div className="flex items-start justify-between mt-1">
                        <FieldError msg={visibleError('message')} />
                        <span className={`text-xs ml-auto ${form.message.trim().length < 20 && form.message.length > 0 ? 'text-red-400' : 'text-neutral-400'}`}>
                          {form.message.trim().length} / 20 min
                        </span>
                      </div>
                    </div>

                    {submitError && (
                      <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
                        <AlertCircle size={15} className="shrink-0" />
                        {submitError}
                      </div>
                    )}

                    <div className="flex items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary px-8 py-3.5 text-sm group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? 'Sending...' : (
                          <>Send Message <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></>
                        )}
                      </button>
                      <span className="text-xs text-neutral-400">We'll respond within one business day</span>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-5 reveal-right">
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-neutral-500 mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'General', value: 'info@axonoiot.com' },
                    { icon: Phone, label: 'Phone', value: '+91 95667 22424' },
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

              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-neutral-500 mb-5">Office</h3>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <address className="text-sm text-neutral-700 not-italic leading-relaxed">
                    Axono IoT Solutions.<br />
                    Incuspaze Olympia Crest<br />
                    Plot No. 73, Rajiv Gandhi Salai,<br />
                    Perungudi, Chennai, Tamil Nadu 600096
                  </address>
                </div>
              </div>

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
