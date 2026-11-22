import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export interface CharacterRevealProps {
  text: string;
  duration?: number;
  easing?: string;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export const CharacterReveal: React.FC<CharacterRevealProps> = ({
  text,
  duration = 400,
  easing = 'power2.out',
  className = '',
  direction = 'vertical',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const root = containerRef.current;
    if (!root || typeof window === 'undefined') return;

    const characters = root.querySelectorAll<HTMLElement>('[data-character]');
    if (!characters.length) return;

    let hasRevealed = false;
    let observer: IntersectionObserver | null = null;

    const reveal = () => {
      if (hasRevealed) return;
      hasRevealed = true;
      gsap.to(characters, {
        x: 0,
        yPercent: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: duration > 10 ? duration / 1000 : duration,
        stagger: 0.03,
        ease: easing,
        clearProps: 'transform,opacity,filter',
      });
      observer?.disconnect();
      observer = null;
    };

    const horizontal = direction === 'horizontal';

    gsap.set(characters, {
      x: horizontal ? 10 : 0,
      yPercent: horizontal ? 0 : 115,
      opacity: 0,
      filter: horizontal ? 'blur(0px)' : 'blur(8px)',
    });

    const revealLine = window.innerHeight * 0.85;
    const bottomInset = Math.round(window.innerHeight * 0.15);

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const bounds = root.getBoundingClientRect();

        if (entry?.isIntersecting && bounds.top <= revealLine && bounds.bottom > 0) {
          reveal();
        }
      },
      {
        threshold: 0.05,
        rootMargin: `0px 0px -${bottomInset}px 0px`,
      },
    );

    observer.observe(root);

    return () => {
      observer?.disconnect();
      gsap.killTweensOf(characters);
    };
  }, [direction, duration, easing, text]);

  const words = text.split(/\s+/);
  let characterIndex = 0;

  return (
    <span ref={containerRef} aria-hidden="true" className={`block w-full ${className}`}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={`${word}-${wordIndex}`}>
          <span className="inline-block whitespace-nowrap align-bottom">
            {Array.from(word).map((character) => {
              const index = characterIndex;
              characterIndex += 1;

              const characterSpan = (
                <span
                  data-character=""
                  className="inline-block will-change-[transform,opacity]"
                >
                  {character}
                </span>
              );

              return direction === 'horizontal' ? (
                <React.Fragment key={`${index}-${character}`}>{characterSpan}</React.Fragment>
              ) : (
                <span key={`${index}-${character}`} className="inline-block overflow-hidden align-bottom">
                  {characterSpan}
                </span>
              );
            })}
          </span>
          {wordIndex < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </span>
  );
};
