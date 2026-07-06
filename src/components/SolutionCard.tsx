import { Link } from '../router';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  features?: string[];
  image?: string;
}

export default function SolutionCard({ title, description, href, features, image }: SolutionCardProps) {
  return (
    <Link
      to={href}
      className="group block bg-white rounded-2xl border border-neutral-200 hover:border-teal-500/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {image && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
          <div className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/10 transition-colors duration-300" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">{title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed mb-5">{description}</p>
        {features && (
          <ul className="space-y-2 mb-5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-xs text-neutral-600">
                <div className="w-1 h-1 bg-teal-500 rounded-full mt-1.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center gap-2 text-sm font-semibold text-teal-600 group-hover:gap-3 transition-all duration-200">
          Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
