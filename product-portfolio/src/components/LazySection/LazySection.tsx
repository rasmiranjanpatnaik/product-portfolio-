import React from 'react';

type LazySectionProps = {
  children: React.ReactNode;
  rootMargin?: string;
  minHeight?: number | string;
};

const LazySection: React.FC<LazySectionProps> = ({
  children,
  rootMargin = '200px 0px',
  minHeight = 1,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;

