import React, { useEffect, useState } from 'react';
import { HERO_SLIDES } from '../data/greensproutData';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen w-full items-stretch overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt=""
            className={`absolute inset-0 h-full min-h-full w-full min-w-full max-w-full object-cover transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.25,.1,.25,1)] ${index === currentSlide ? 'scale-[1.05] opacity-100' : 'scale-[1.13] opacity-0'
              }`}
          />
        ))}
        {/* Subtle gradient at top for navbar/quotes, fading to transparent at the bottom so the hero image remains clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/35 via-forest/15 to-transparent" />
      </div>

      <div className="relative z-[2] flex min-h-screen w-full px-6 max-[991px]:px-8 max-[575px]:px-4">
        <div className="mx-auto flex min-h-screen w-full max-w-[1620px] border-l border-white/60 max-[991px]:flex-col">
          <div className="flex min-h-screen w-[66.42%] flex-col border-r border-white/60 max-[991px]:w-full max-[991px]:border-r-0">
            <div className="flex min-h-0 flex-1 items-end justify-end border-b border-white/40 p-6 max-[991px]:px-8 max-[575px]:p-4">
              <div className="relative w-full max-w-[424px] text-right max-[991px]:max-w-[351px] max-[575px]:max-w-none">
                {HERO_SLIDES.map((slide, index) => {
                  const isActive = index === currentSlide;

                  return (
                    <p
                      key={slide.id}
                      className={`font-sans text-[18px] font-light leading-[18px] tracking-[-0.3px] text-white transition-[opacity,transform] duration-700 ease-[cubic-bezier(.25,.1,.25,1)] max-[575px]:text-[16px] max-[575px]:tracking-[-0.4px] ${isActive
                        ? 'relative translate-y-0 opacity-100'
                        : 'absolute bottom-6 right-0 translate-y-4 opacity-0'
                        }`}
                    >
                      {slide.quote}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="flex min-h-[260px] shrink-0 items-center bg-transparent p-6 backdrop-blur-[6px] max-[991px]:p-8 max-[575px]:px-4 max-[575px]:py-6">
              <div className="max-w-[990px] overflow-hidden">
                <h1 className="font-sans text-[56px] font-light leading-[64px] tracking-[-3px] text-white max-[991px]:text-[44px] max-[991px]:leading-[52px] max-[991px]:tracking-[-2px] max-[575px]:text-[34px] max-[575px]:leading-[40px]">
                  We believe in cultivating a future where innovation nourishes the earth
                </h1>
              </div>
            </div>
          </div>

          <div className="flex w-[33.58%] min-w-[484px] items-end justify-end pb-[66px] pr-6 max-[991px]:w-[160px] max-[991px]:min-w-[161px] max-[991px]:pb-[66px] max-[991px]:pr-8 max-[575px]:w-[82px] max-[575px]:min-w-[82px] max-[575px]:justify-center max-[575px]:p-0 max-[575px]:pb-8">
            <div className="flex flex-col items-center gap-1.5">
              {HERO_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                const connectorHeight = index === HERO_SLIDES.length - 1 ? 'h-[126px]' : 'h-8';

                return (
                  <React.Fragment key={slide.id}>
                    <button
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Show ${slide.tag} slide`}
                      aria-pressed={isActive}
                      className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border font-sans text-[14px] font-normal leading-[1.15em] text-white transition-colors duration-300 ${isActive ? 'border-white bg-white/15' : 'border-transparent bg-transparent'
                        }`}
                    >
                      {slide.badgeNumber}
                    </button>

                    {(
                      <div className={`relative w-px ${connectorHeight} overflow-hidden bg-white/40`}>
                        <div
                          className={`absolute left-0 top-0 h-full w-full bg-yellow transition-[transform] duration-[5000ms] ease-linear ${isActive ? 'origin-top scale-y-100' : 'origin-top scale-y-0'
                            }`}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

              <div className="mt-4">
                <p className="whitespace-nowrap font-sans text-[18px] font-light leading-[18px] tracking-[-0.3px] text-white max-[575px]:text-[16px] max-[575px]:tracking-[-0.4px]">
                  {HERO_SLIDES[currentSlide].tag}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
