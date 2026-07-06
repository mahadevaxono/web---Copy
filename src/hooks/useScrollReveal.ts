import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.12) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = containerRef.current ?? document;
    const els = (root === document ? document : root).querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}
