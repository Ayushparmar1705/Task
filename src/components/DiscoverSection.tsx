import React from 'react';
import { DISCOVER_ITEMS } from '../data/greensproutData';
import { CharacterReveal } from './CharacterReveal';

export const DiscoverSection: React.FC = () => {
  return (
    <section id="discover-section" className="flex flex-col gap-[68px] overflow-hidden bg-cream pt-[100px] pb-0 max-[991px]:gap-12 max-[991px]:pt-16 max-[575px]:gap-8 max-[575px]:pt-12">
      <div className="mx-auto w-full max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">
        <div className="mx-auto flex max-w-[783px] flex-col items-center gap-4 text-center">
          <h2
            aria-label="Discover the next evolution of organic farming"
            className="text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
          >
            <CharacterReveal
              text="Discover the next evolution of organic farming"
              duration={400}
              direction="horizontal"
              easing="power1.out"
            />
          </h2>
          <p className="max-w-[680px] text-[20px] font-normal leading-7 -tracking-[.4px] text-[#5e5e5e] max-[575px]:text-[16px] max-[575px]:leading-6">
            We envision a future where innovation nourishes the earth and enhances sustainable agriculture.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-[kirkiMarquee_25s_linear_infinite] hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-4 pr-4">
              {DISCOVER_ITEMS.map((item) => (
                <div
                  key={`${copy}-${item.id}`}
                  className="w-[400px] min-w-[400px] shrink-0 max-[991px]:w-[350px] max-[991px]:min-w-[350px] max-[575px]:w-[240px] max-[575px]:min-w-[240px]"
                >
                  <img src={item.src} alt={item.alt} className="h-auto w-full object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
