import { Link } from '../router';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono mb-6">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={10} className="text-neutral-300" />}
          {c.href ? (
            <Link to={c.href} className="hover:text-teal-500 transition-colors">{c.label}</Link>
          ) : (
            <span className="text-neutral-600">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
