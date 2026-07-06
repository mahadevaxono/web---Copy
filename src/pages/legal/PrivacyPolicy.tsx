import { useEffect } from 'react';

const sections = [
  {
    title: '1. Introduction',
    content: `AXONO IoT Solutions ("AXONO", "we", "our", "us") is committed to protecting your personal data and your right to privacy. This Privacy Policy explains how we collect, use, store and share information when you use our platform, website and IoT services.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect information in the following categories:`,
    bullets: [
      'Account Information: Name, email address, company name, phone number and role — provided when you create an account or contact us.',
      'Device Telemetry: Industrial sensor readings, device status, alarm events and operational data transmitted by your connected devices to the AXONO platform.',
      'Usage Data: Log data, browser type, pages visited, dashboard interactions and feature usage to help us improve the platform.',
      'Payment Information: Processed securely through third-party payment processors. We do not store raw card data.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: `We use collected data to:`,
    bullets: [
      'Provide, operate and improve the AXONO platform and services',
      'Send service notifications, security alerts and support messages',
      'Analyse usage patterns to improve performance and user experience',
      'Comply with legal obligations and enforce our terms',
    ],
  },
  {
    title: '4. Data Storage & Security',
    content: `Your data is stored on secure cloud infrastructure with encryption at rest (AES-256) and in transit (TLS 1.3). We maintain access controls, audit logging, regular vulnerability assessments and follow industry-standard security practices. Device telemetry data is stored in isolated tenant environments — your data is never shared with other customers.`,
  },
  {
    title: '5. Data Sharing',
    content: `We do not sell, rent or trade your personal data. We may share data with trusted service providers who assist in operating our platform (cloud hosting, payment processing, email delivery) under strict confidentiality obligations. We may disclose data when required by law or to protect our rights.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to access, correct, delete or export your personal data. You may withdraw consent or request restriction of processing at any time. To exercise these rights, contact us at privacy@axono.io.`,
  },
  {
    title: '7. Cookies',
    content: `We use essential cookies for authentication and session management, and optional analytics cookies to understand platform usage. You can control cookie preferences through your browser settings.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy periodically. We will notify you of significant changes by email or prominent notice on the platform. Continued use after changes constitutes acceptance.`,
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-14 bg-white">
      {/* Hero */}
      <section className="bg-neutral-950 relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0">
          <img src="/images/light_background.jpg" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/50" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-teal-500 font-semibold mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm">Last updated: July 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="border-b border-neutral-100 pb-10 last:border-0 last:pb-0">
                <h2 className="text-lg font-semibold text-neutral-900 mb-3">{s.title}</h2>
                <p className="text-neutral-600 leading-relaxed text-sm">{s.content}</p>
                {s.bullets && (
                  <ul className="mt-3 space-y-2">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
            <p className="text-sm text-neutral-500">
              Questions about this policy? Contact us at{' '}
              <a href="mailto:privacy@axono.io" className="text-teal-600 hover:underline">privacy@axono.io</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
