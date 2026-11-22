import React from 'react';
import { PARTNER_LOGOS } from '../data/greensproutData';

export const PartnersSection: React.FC = () => {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section id="partners-section" className="bg-cream pt-[76px] pb-12 max-[991px]:pt-16 max-[991px]:pb-12 max-[575px]:py-12">
      <div className="mx-auto w-full max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">
        <p className="mb-8 text-center text-[24px] font-normal leading-9 -tracking-[1px] text-[#5e5e5e] max-[991px]:mb-6">
          Trusted by top agro-companies
        </p>
        <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-xl py-6 max-[575px]:py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[30%] bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[30%] bg-gradient-to-l from-cream to-transparent" />
          <div className="kirki-marquee-track items-center gap-16">
            {logos.map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className="flex shrink-0 items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 max-h-12 w-auto object-contain opacity-85 grayscale-[15%] contrast-[90%] transition-all duration-300 hover:scale-[1.06] hover:opacity-100 hover:grayscale-0 hover:contrast-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
