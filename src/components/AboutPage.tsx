
import React, { useState } from 'react';
import {
  ABOUT_TABS,
  DISCOVER_ITEMS,
  PARTNER_LOGOS,
} from '../data/greensproutData';
import { SlidingWords } from './SlidingWords';

const storyText =
  'We envision a future where innovation nourishes the earth and enhances sustainable agriculture. By integrating technology with traditional methods.';

const journeyImages = [
  {
    src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/about-img-6.webp',
    alt: 'A farmer at work in the field',
    className:
      'absolute left-[10%] top-0 z-0 w-[50.7%] aspect-[372/252]',
  },
  {
    src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/about-img-5.webp',
    alt: 'Farmer driving a tractor across the farm',
    className:
      'absolute left-[43.3%] top-[25%] z-10 w-[56.7%] aspect-[417/283]',
  },
  {
    src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/about-img-3.webp',
    alt: 'Barn and livestock on the farm',
    className:
      'absolute left-0 top-[31.6%] z-20 w-[45%] aspect-[330/228]',
  },
  {
    src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/about-img-4.webp',
    alt: 'Community members tending the garden',
    className:
      'absolute left-[26.9%] top-[63.4%] z-30 w-[53%] aspect-[390/227]',
  },
];

const stats = [
  { value: '250+', label: 'Farmers supported' },
  { value: '500+', label: 'Organic crops' },
  { value: '13', label: 'Years of expertise' },
];

export const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const repeatedPartners = [
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="about-us"
        className="overflow-hidden bg-cream px-[clamp(24px,1.83vw,35px)] pb-16 pt-[172px] max-[991px]:px-8 max-[991px]:pb-10 max-[991px]:pt-[120px] max-[575px]:px-4 max-[575px]:pb-8 max-[575px]:pt-[120px]"
      >
        <div className="mx-auto w-full max-w-[1920px]">

          <div className="w-full">
          {/* SECTION LABEL */}
          <p className="kirki-badge">Our Story</p>

          {/* MAIN HEADING */}
          <h1
            aria-label={storyText}
            className="mt-12 max-w-[837px] text-[44px] leading-[56px] -tracking-[2px] text-forest max-[991px]:mt-10 max-[991px]:text-[clamp(32px,4.8vw,48px)] max-[991px]:leading-[1.2] max-[575px]:mt-8"
          >
            <SlidingWords text={storyText} animateOnView respectReducedMotion={false} />
          </h1>

          {/* STATISTICS + ACCORDION */}
          <div className="mt-12 grid grid-cols-2 items-end gap-16 max-[991px]:mt-12 max-[991px]:grid-cols-1 max-[991px]:gap-10 max-[575px]:mt-8">

            {/* LEFT: STATISTICS CARD */}
            <div className="grid w-full grid-cols-3 grid-rows-[minmax(75px,1fr)] gap-y-4 overflow-hidden rounded-[24px] bg-[#dce7b6] max-[991px]:order-2 max-[991px]:min-h-[142px] max-[991px]:rounded-[18px] max-[575px]:min-h-[158px] max-[575px]:rounded-[18px]">

              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex min-h-[158px] flex-col items-center justify-center px-6 py-8 text-center max-[991px]:min-h-[142px] max-[575px]:min-h-[158px] max-[575px]:px-4 max-[575px]:py-6 ${index !== 2
                    ? 'border-r border-[#cbd9a3]'
                    : ''
                    }`}
                >
                  <p className="text-[44px] font-normal leading-[56px] tracking-[-2px] text-forest max-[575px]:text-[32px] max-[575px]:leading-none">
                    {stat.value}
                  </p>

                  <p className="mt-3 text-[18px] leading-[26px] -tracking-[.4px] text-olive max-[575px]:mt-3 max-[575px]:px-1 max-[575px]:text-[12px] max-[575px]:leading-4">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

            {/* RIGHT: MISSION / VISION / GOAL */}
            <div className="order-2 flex w-full flex-col max-[991px]:order-1">

              {ABOUT_TABS.map((tab) => {
                const isOpen = activeTab === tab.id;

                return (
                  <div
                    key={tab.id}
                    className="border-b border-[#d9d9d9] py-6 first:pt-0"
                  >

                    {/* ACCORDION BUTTON */}
                    <button
                      type="button"
                      className="flex w-full items-start gap-6 text-left max-[575px]:gap-5"
                      aria-expanded={isOpen}
                      aria-controls={`about-tab-${tab.id}`}
                      onClick={() =>
                        setActiveTab(isOpen ? '' : tab.id)
                      }
                    >

                      {/* PLUS / MINUS */}
                      <span
                        className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 max-[991px]:h-8 max-[991px]:w-8 ${isOpen
                          ? 'bg-[#dce7b6]'
                          : 'bg-transparent'
                          }`}
                        aria-hidden="true"
                      >
                        <span className="h-[2px] w-[12px] bg-olive" />

                        <span
                          className={`absolute h-[2px] w-[12px] bg-olive transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'
                            }`}
                        />
                      </span>

                      {/* TITLE */}
                      <span className="text-[28px] font-medium leading-10 tracking-[-1px] text-forest max-[575px]:text-[25px] max-[575px]:leading-[1.2]">
                        {tab.title}
                      </span>

                    </button>

                    {/* ACCORDION DESCRIPTION */}
                    <div
                      id={`about-tab-${tab.id}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                        }`}
                      aria-hidden={!isOpen}
                    >
                      <div className="overflow-hidden pl-[60px]">
                        <p className="pt-3 text-[18px] leading-[26px] -tracking-[.4px] text-olive max-[575px]:text-[16px] max-[575px]:leading-6">
                          {tab.content}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

          </div>


          {/* ABOUT VIDEO */}
          <div className="mt-16 w-full aspect-[1620/756] overflow-hidden rounded-2xl max-[991px]:mt-12 max-[991px]:aspect-[704/466] max-[575px]:mt-10 max-[575px]:aspect-[328/240]">
            <video
              className="h-full w-full object-cover"
              src="https://greensprout.kirki.io/wp-content/uploads/2025/11/About-page.mp4#t=0,0"
              poster="https://greensprout.kirki.io/wp-content/uploads/2025/11/about-img-1.webp"
              autoPlay
              muted
              loop
              playsInline
              aria-label="GreenSprout farmers tending to their crops"
            />
          </div>

          {/* ABOUT TWO-IMAGE COLLAGE WITH BACKGROUND GRID WIREFRAME */}
          <div className="relative mt-8 flex w-full aspect-[1620/891] justify-between gap-16 max-[991px]:mt-6 max-[991px]:aspect-auto max-[991px]:flex-col-reverse max-[991px]:gap-14 max-[575px]:gap-9 max-[575px]:overflow-hidden">
            {/* Left Image: Fresh vegetables basket in bottom left */}
            <div className="relative z-[1] flex w-[46%] flex-col gap-[10px] justify-end max-[991px]:w-[53.55%] max-[575px]:w-[70.12%]">
              <div className="relative z-[1] w-full aspect-[743/560] overflow-hidden rounded-2xl max-[991px]:aspect-[377/266] max-[575px]:aspect-[230/148] max-[575px]:rounded-xl">
                <img
                  src="https://greensprout.kirki.io/wp-content/uploads/2025/11/about-img-1.webp"
                  alt="Fresh vegetables growing on the farm"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Image: Farmer loading truck at top right */}
            <div className="relative z-[1] self-start w-[33%] max-[991px]:ml-auto max-[991px]:w-[48.3%] max-[575px]:w-[44%]">
              <div className="relative z-[1] w-full aspect-[523/642] overflow-hidden rounded-2xl max-[991px]:aspect-[340/380] max-[575px]:aspect-[144/162] max-[575px]:rounded-xl">
                <img
                  src="https://greensprout.kirki.io/wp-content/uploads/2025/11/about-img-2.webp"
                  alt="Farmer tending to a field"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Background SVG Grid Wireframe */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center max-[991px]:hidden"
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute -bottom-16 mx-auto aspect-[703/867] w-[43.4%] max-w-[703px]">
                  <svg
                    viewBox="0 0 704 868"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    <path
                      d="M703.5 0.5H0.5V201V492H418.5V867.5"
                      stroke="#D4D6C9"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section
        id="partners-section"
        className="overflow-hidden bg-soft-sage py-12 max-[991px]:py-8 max-[575px]:py-6"
      >
        <div className="mx-auto w-full max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">

          <p className="mb-8 text-center text-[24px] leading-9 -tracking-[1px] text-[#5e5e5e]">
            Trusted by top agro-companies
          </p>

          <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-xl py-6">

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 bg-gradient-to-r from-soft-sage to-transparent" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/4 bg-gradient-to-l from-soft-sage to-transparent" />

            <div className="kirki-marquee-track items-center gap-16">
              {repeatedPartners.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex shrink-0 items-center justify-center"
                >
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

      {/* OUR JOURNEY SECTION */}
      <section
        id="about-journey"
        className="relative overflow-hidden bg-cream pb-16 max-[991px]:pb-16 max-[991px]:pt-16 max-[575px]:pb-12 max-[575px]:pt-12"
      >
        <img
          src="https://greensprout.kirki.io/wp-content/uploads/2025/11/veggies-stroke.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-0 w-[297px] max-[991px]:hidden"
        />

        <div className="relative mx-auto flex w-full max-w-[1620px] items-center gap-6 px-6 max-[991px]:flex-col max-[991px]:gap-12 max-[991px]:px-8 max-[575px]:px-4">
          <div className="flex w-1/2 flex-col items-center text-center max-[991px]:w-full">
            <p className="kirki-badge">Our Journey</p>
            <h2
              className="mt-6 max-w-[499px] text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[991px]:mt-4 max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
            >
              We envision a future where innovation nourishes
            </h2>
            <p className="mt-4 max-w-[615px] text-[24px] font-normal leading-9 -tracking-[1px] text-[#5e5e5e] max-[991px]:text-[18px] max-[991px]:leading-7 max-[991px]:-tracking-[0.4px] max-[575px]:text-[16px] max-[575px]:leading-6">
              GreenSprout began as a humble family venture and has blossomed into a flourishing organic farm,
              showcasing a deep-rooted commitment to healthier food, thriving soil, and a stronger community.
            </p>
          </div>

          <div className="flex w-1/2 flex-col pt-[90px] max-[991px]:w-full max-[991px]:items-center max-[991px]:pt-0">
            <h3
              aria-label="Since 2012"
              className="text-left text-[86px] font-medium leading-[1em] -tracking-[4px] text-[#5a6d3f]/20 max-[991px]:text-center max-[991px]:text-[56px] max-[991px]:leading-[60px] max-[991px]:-tracking-[3px] max-[575px]:text-[40px] max-[575px]:leading-[44px] max-[575px]:-tracking-[2px]"
            >
              Since 2012
            </h3>

            {/* JOURNEY IMAGE COLLAGE */}
            <div className="relative mt-[50px] aspect-[735/620] w-full max-w-[735px] max-[991px]:mt-8 max-[991px]:aspect-[682/527]">
              {journeyImages.map((image) => (
                <div
                  key={image.src}
                  className={`overflow-hidden rounded-2xl max-[575px]:rounded-xl ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER SECTION */}
      <section
        id="discover-section"
        className="overflow-hidden border-t border-[#d9d9d9] bg-cream pb-0 pt-[100px] max-[991px]:pt-16 max-[575px]:pt-12"
      >
        <div className="mx-auto w-full max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">

          <div className="mx-auto flex max-w-[783px] flex-col items-center gap-4 text-center">

            <h2
              aria-label="Explore Our Farm And Organically Produced Products"
              className="w-full max-w-[636px] text-[44px] leading-[56px] -tracking-[1.5px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[44px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
            >
              <SlidingWords
                text="Explore Our Farm And Organically Produced Products"
                animateOnView
                respectReducedMotion={false}
              />
            </h2>

            <p className="w-full max-w-[458px] text-[18px] leading-[26px] -tracking-[.4px] text-olive max-[575px]:text-[16px] max-[575px]:leading-6">
              We envision a future where innovation nourishes the earth and enhances sustainable agriculture.
            </p>

          </div>
        </div>

        {/* DISCOVER IMAGE MARQUEE */}
        <div className="mt-[67px] w-full overflow-hidden max-[991px]:mt-12 max-[575px]:mt-8">

          <div className="flex w-max animate-[kirkiMarquee_25s_linear_infinite] hover:[animation-play-state:paused]">

            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 gap-4 pr-4"
              >
                {DISCOVER_ITEMS.map((item) => (
                  <div
                    key={`${copy}-${item.id}`}
                    className="h-[363px] w-[400px] shrink-0 overflow-hidden rounded-2xl max-[991px]:h-[318px] max-[991px]:w-[350px] max-[574px]:h-[218px] max-[574px]:w-[240px]"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>

      </section>
    </>
  );
};
