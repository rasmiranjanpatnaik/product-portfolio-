import React from 'react';

type PageTransitionProps = {
  children: React.ReactNode;
};

/**
 * Simple route-level transition wrapper.
 * Fades and slightly slides the page content in on mount.
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Defer to the next frame so the initial render can apply the base styles
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <main className={`page-transition ${isVisible ? 'page-transition--in' : ''}`.trim()}>
      {children}
    </main>
  );
};

export default PageTransition;

