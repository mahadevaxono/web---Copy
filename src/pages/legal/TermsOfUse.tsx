import { useEffect } from 'react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the AXONO IoT platform, website or any related services, you agree to be bound by these Terms of Use. If you do not agree, do not use our services. These terms apply to all users including customers, trial users and API integrators.`,
  },
  {
    title: '2. Permitted Use',
    content: `You may use AXONO services for lawful industrial monitoring, automation and control purposes. You agree NOT to:`,
    bullets: [
      'Attempt to gain unauthorised access to other customer data or platform systems',
      'Use the platform to transmit malware, spam or disruptive content',
      'Reverse-engineer, decompile or disassemble the platform software',
      'Resell or sublicense access to the platform without written agreement',
      'Use the platform for safety-critical applications without appropriate validation',
    ],
  },
  {
    title: '3. Account Responsibilities',
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately at security@axono.io if you suspect unauthorised access.`,
  },
  {
    title: '4. Data Ownership',
    content: `You retain full ownership of all device telemetry and operational data you transmit to the AXONO platform. AXONO does not claim ownership of your data and will not use it for any purpose other than providing the contracted services. You may export or delete your data at any time.`,
  },
  {
    title: '5. Service Availability',
    content: `AXONO targets 99.9% platform uptime for cloud-hosted deployments. Scheduled maintenance will be communicated in advance. The AXONO Edge node is designed for continuous offline operation — cloud unavailability does not affect local monitoring or data logging.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `AXONO shall not be liable for indirect, incidental, consequential or punitive damages arising from use of the platform. Our maximum liability is limited to the fees paid in the 12 months preceding the claim. AXONO is not responsible for decisions made based on platform data without appropriate validation.`,
  },
  {
    title: '7. Termination',
    content: `Either party may terminate the service agreement with 30 days written notice. Upon termination, you will have 30 days to export your data before it is permanently deleted from our servers.`,
  },
  {
    title: '8. Governing Law',
    content: `These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.`,
  },
];

export default function TermsOfUse() {
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
            Terms of Use
          </h1>
          <p className="text-neutral-400 text-sm">Last updated: May 2026</p>
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
              Questions about these terms? Contact us at{' '}
              <a href="mailto:info@axonoiot.com" className="text-teal-600 hover:underline">info@axonoiot.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
