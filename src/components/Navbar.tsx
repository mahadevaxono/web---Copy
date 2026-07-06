import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from '../router';
import { ChevronDown, Menu, X } from 'lucide-react';

const solutions = [
  { label: 'Water Metering', href: '/solutions/water' },
  { label: 'Agriculture', href: '/solutions/agriculture' },
  { label: 'Transformer Monitoring', href: '/solutions/facility' },
];

export default function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setSolutionsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-150 ${isActive ? 'text-teal-500' : 'text-neutral-600 hover:text-neutral-900'}`;

  const isSolutionActive = location.pathname.startsWith('/solutions');
  const isProductActive = location.pathname === '/products';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-200/80' : 'bg-white border-b border-neutral-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/axono-logo-hd.png" alt="Axono" className="h-7 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>

            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-150 ${isSolutionActive ? 'text-teal-500' : 'text-neutral-600 hover:text-neutral-900'}`}
              >
                Solutions <ChevronDown size={14} className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-neutral-200 shadow-xl rounded-sm animate-fade-in-down">
                  <div className="py-1.5">
                    {solutions.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${location.pathname === s.href ? 'text-teal-500 bg-teal-50' : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'}`}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/products"
              className={navLinkClass}
            >
              Products
            </NavLink>
            <NavLink to="/company" className={navLinkClass}>Company</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

            <Link to="/contact" className="btn-primary text-xs px-5 py-2.5">
              Request Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200 py-3 space-y-1 animate-fade-in-down">
            <Link to="/" className="block px-2 py-2 text-sm text-neutral-700 hover:text-neutral-900">Home</Link>
            <div>
              <button
                className="flex items-center justify-between w-full px-2 py-2 text-sm text-neutral-700"
                onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')}
              >
                Solutions <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'solutions' && (
                <div className="pl-4 space-y-1 border-l border-neutral-200 ml-2">
                  {solutions.map((s) => (
                    <Link key={s.href} to={s.href} className="block py-1.5 text-sm text-neutral-700">{s.label}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/products" className="block px-2 py-2 text-sm text-neutral-700">Products</Link>
            <Link to="/company" className="block px-2 py-2 text-sm text-neutral-700">Company</Link>
            <Link to="/contact" className="block px-2 py-2 text-sm text-neutral-700">Contact</Link>
            <div className="pt-2 px-2">
              <Link to="/contact" className="btn-primary w-full justify-center text-xs py-2">Request Demo</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
