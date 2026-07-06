import { Link } from '../router';

const solutionLinks = [
  { label: 'Water Metering', href: '/solutions/water' },
  { label: 'Agriculture', href: '/solutions/agriculture' },
  { label: 'Transformer Monitoring', href: '/solutions/facility' },
];

const companyLinks = [
  { label: 'About Us', href: '/company' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img src="/axono-logo-hd.png" alt="Axono" className="h-7 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-xs text-neutral-500">
              Remote monitoring solutions for water metering, agriculture, and transformer monitoring. We build our own hardware and manage the entire system.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {solutionLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">IoT Gateway</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">IoT Software</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Cloud Platform</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Edge Device</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-neutral-800">
              <p className="text-xs text-neutral-600">info@axonoiot.com</p>
              <p className="text-xs text-neutral-600 mt-1">+91 95667 22424</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-600 font-mono">
            &copy; {new Date().getFullYear()} Axono IoT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-neutral-600">
            <Link to="/privacy-policy" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-neutral-400 transition-colors">Terms of Use</Link>
            <Link to="/eula" className="hover:text-neutral-400 transition-colors">EULA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
