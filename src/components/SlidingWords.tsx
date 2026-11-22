import React, { useEffect, useRef } from 'react';

interface SlidingWordsProps {
  text: string;
  animateOnView?: boolean;
  respectReducedMotion?: boolean;
}

export const SlidingWords: React.FC<SlidingWordsProps> = ({
  text,
  animateOnView = true,
  respectReducedMotion = false,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || !animateOnView || typeof window === 'undefined') return;

    if (
      respectReducedMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      root.classList.add('is-word-reveal-ready');
      root.classList.add('is-word-reveal-visible');
      return;
    }

    root.classList.add('is-word-reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          requestAnimationFrame(() => {
            root.classList.add('is-word-reveal-visible');
          });
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px',
      },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      root.classList.remove('is-word-reveal-visible');
      root.classList.remove('is-word-reveal-ready');
    };
  }, [animateOnView, respectReducedMotion, text]);

  const words = text.split(/\s+/);

  return (
    <span
      ref={containerRef}
      aria-hidden="true"
      className={`word-reveal block w-full ${respectReducedMotion ? 'word-reveal-respects-motion' : ''}`}
    >
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden align-bottom">
            <span
              data-word
              className="revealed-word"
              style={animateOnView ? { animationDelay: `${index * 30}ms` } : undefined}
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </span>
  );
};
