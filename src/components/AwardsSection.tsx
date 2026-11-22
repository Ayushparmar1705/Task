import React from 'react';
import { CharacterReveal } from './CharacterReveal';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="border-y border-[#d9d9d9] bg-cream">
      <div className="mx-auto w-full max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">
        <div className="flex min-h-[386px] max-[991px]:flex-col">
          <div className="flex w-[34%] max-w-[34%] flex-col gap-12 py-12 pr-2.5 max-[991px]:w-full max-[991px]:max-w-full max-[991px]:gap-6 max-[991px]:py-6 max-[991px]:pr-0">
            <div className="inline-block w-fit rounded-full border border-sage-border px-4 py-2 text-[16px] font-normal leading-5 text-olive max-[991px]:text-[14px] max-[991px]:leading-[1.14em]">
              Acknowledgement
            </div>
            <div className="flex max-w-[413px] flex-col gap-3 max-[991px]:max-w-[470px]">
              <h2
                aria-label="Awards & Recognition"
                className="text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
              >
                <CharacterReveal
                  text="Awards & Recognition"
                  direction="horizontal"
                  easing="power1.out"
                />
              </h2>
              <p className="text-[24px] font-normal leading-9 -tracking-[1px] text-[#464646] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[991px]:-tracking-[0.4px] max-[575px]:text-[16px] max-[575px]:leading-[22px]">
                We envision a future where innovation enhances sustainable agriculture and supports the environment.
              </p>
            </div>
          </div>
          <div className="grid w-[66%] max-w-[66%] grid-cols-3 border-x border-[#d9d9d9] max-[991px]:w-full max-[991px]:max-w-full max-[991px]:border-t max-[575px]:grid-cols-1">
            {[1, 2, 3].map((num, i) => (
              <div
                key={num}
                className={`flex min-h-[386px] items-center justify-center px-8 py-0 max-[991px]:min-h-0 max-[991px]:py-12 max-[575px]:py-6 ${
                  i === 1 ? 'border-x border-[#d9d9d9] max-[575px]:border-y max-[575px]:border-x-0' : ''
                } max-[575px]:px-5`}
              >
                <div className="flex w-full max-w-[200px] flex-col items-center gap-2 text-center">
                  <img
                    src="https://greensprout.kirki.io/wp-content/uploads/2025/11/Frame.svg"
                    alt="Award Badge"
                    className="h-auto w-full max-w-[171px] object-cover"
                  />
                  <p className="w-full text-[16px] font-normal leading-5 text-olive max-[991px]:w-[153px] max-[991px]:text-[14px] max-[991px]:leading-4">
                    GreenTech Innovation Award 2024
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
