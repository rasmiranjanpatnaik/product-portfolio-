import React from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  /** When true, content is visible immediately (no fade-in on first paint). Use for above-the-fold content. */
  visibleOnLoad?: boolean;
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  rootMargin = '0px 0px -40px 0px',
  threshold = 0.1,
  visibleOnLoad = false,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = React.useState(visibleOnLoad);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsInView(true);
        });
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isInView ? 'scroll-reveal-in' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
