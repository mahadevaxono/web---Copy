import { useEffect } from 'react';

const sections = [
  {
    title: '1. Grant of License',
    content: `AXONO IoT Solutions grants you a non-exclusive, non-transferable, limited license to install and use the AXONO platform software (including Edge node software, gateway firmware and web application) solely for your own internal business operations and in accordance with the documentation and these terms.`,
  },
  {
    title: '2. Open-Source Components',
    content: `The AXONO platform incorporates open-source software components, including code licensed under Apache License 2.0. These components are subject to their respective licenses. AXONO customisations, branding, configuration and proprietary integrations remain the intellectual property of AXONO IoT Solutions.`,
  },
  {
    title: '3. Restrictions',
    content: `You may not:`,
    bullets: [
      'Copy, modify, merge, sublicense or distribute the proprietary portions of the software',
      'Reverse-engineer, decompile or disassemble the software except as permitted by law',
      'Remove or alter copyright, trademark or proprietary notices',
      'Use the software to build a competing product or service',
      'Install the software on hardware or systems not authorised under your license',
    ],
  },
  {
    title: '4. Firmware License (IoT Gateway)',
    content: `AXONO IoT Gateway hardware is supplied with proprietary firmware. The firmware is licensed, not sold. You may use the firmware solely on AXONO-supplied or AXONO-approved hardware. Firmware updates delivered via OTA are subject to this EULA. Unauthorised modification of gateway firmware voids warranty.`,
  },
  {
    title: '5. Intellectual Property',
    content: `All proprietary components of the AXONO platform — including but not limited to the dashboard builder, rule engine customisations, SCADA HMI framework, gateway management system and AI modules — are and remain the intellectual property of AXONO IoT Solutions.`,
  },
  {
    title: '6. Updates & Upgrades',
    content: `AXONO may provide software updates, patches or new versions. Updates delivered via OTA or platform upgrade are subject to this EULA. Major version upgrades may require a new license agreement. AXONO may discontinue support for older versions with 90 days notice.`,
  },
  {
    title: '7. Warranty Disclaimer',
    content: `The software is provided "as is" without warranty of any kind, express or implied. AXONO does not warrant that the software will be error-free or uninterrupted. You assume all risk for the selection and use of the software for your intended application.`,
  },
  {
    title: '8. Termination',
    content: `This license is effective until terminated. Your rights under this EULA terminate automatically without notice if you fail to comply with any term. Upon termination you must cease all use and destroy all copies of the software in your possession.`,
  },
];

export default function EULA() {
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
            End User License Agreement
          </h1>
          <p className="text-neutral-400 text-sm mb-4">Last updated: May 2026</p>
          <p className="text-neutral-400 text-sm italic max-w-2xl">
            IMPORTANT: Please read this End User License Agreement carefully before installing or using AXONO software. By installing, copying or using the software, you agree to be bound by the terms of this agreement.
          </p>
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
              Questions about this license? Contact us at{' '}
              <a href="mailto:info@axonoiot.com" className="text-teal-600 hover:underline">info@axonoiot.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
