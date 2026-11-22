import React, { useState } from 'react';
import { RollingButton } from './RollingButton';
import { ABOUT_TABS } from '../data/greensproutData';
import { SlidingWords } from './SlidingWords';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

const statementText =
  'We envision a future where innovation nourishes the earth and enhances sustainable agriculture. By integrating technology with traditional methods, we aim to support the environment.';

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const [activeTab, setActiveTab] = useState<string>('mission');

  return (
    <section id="about-us" className="bg-cream py-16 max-[991px]:py-12 max-[575px]:py-8">
      <div className="mx-auto w-full max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">
        <div className="flex flex-col gap-12 max-[575px]:gap-6">
          {/* Badge */}
          <div className="inline-block w-fit rounded-full border border-sage-border px-4 py-2 text-[16px] font-normal leading-5 text-olive max-[991px]:text-[14px]">
            About Us
          </div>

          {/* Headline with Staggered Word Sliding Animation */}
          <div className="max-w-[810px]">
            <h2
              aria-label={statementText}
              className="text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
            >
              <SlidingWords text={statementText} />
            </h2>
          </div>

          {/* Featured Image with Vegetable Stroke Vector Overlay */}
          <div className="relative overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,.08)]">
            <img
              src="https://greensprout.kirki.io/wp-content/uploads/2025/11/img-1.webp"
              alt="About Green Sprout"
              className="block h-auto max-h-[600px] w-full object-cover"
            />

            {/* Exact SVG Overlay from live site */}
            <img
              src="https://greensprout.kirki.io/wp-content/uploads/2025/11/vegtable-stroke.svg"
              alt="Vegetable stroke design"
              className="absolute right-5 bottom-10 pointer-events-none w-full max-w-[460px] rotate-[17.2deg] max-[991px]:hidden"
            />
          </div>

          {/* Right Column: Mission / Vision / Goal Tabs + Button */}
          <div className="ml-auto flex w-1/2 max-w-[50%] flex-col gap-12 max-[991px]:ml-0 max-[991px]:w-full max-[991px]:max-w-full max-[991px]:gap-8">
            {/* Accordion Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {ABOUT_TABS.map((tab) => {
                const isOpen = activeTab === tab.id;

                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(isOpen ? '' : tab.id)}
                    className="cursor-pointer select-none border-b border-[#d9d9d9] py-6 max-[991px]:py-4 max-[575px]:py-3"
                  >
                    <div className="flex items-start gap-6 max-[575px]:gap-3">
                      {/* Plus/Minus Toggle Circle */}
                      <div className={`relative flex h-9 w-9 min-w-9 items-center justify-center rounded-full transition-colors duration-400 ${isOpen ? 'bg-soft-sage' : 'bg-soft-sage/0'}`}>
                        {/* Horizontal Line */}
                        <div className="h-0.5 w-3 bg-olive" />
                        {/* Vertical Line that rotates 90deg -> 0deg */}
                        <div className={`absolute h-0.5 w-3 bg-olive transition-transform duration-400 ${isOpen ? 'rotate-0' : 'rotate-90'}`} />
                      </div>

                      {/* Title and Content */}
                      <div className="w-full">
                        <h3 className="text-[28px] font-medium leading-10 -tracking-[1px] text-forest max-[991px]:text-[24px] max-[991px]:leading-8 max-[575px]:text-[20px] max-[575px]:leading-7">
                          {tab.title}
                        </h3>

                        {/* Animated Height Container */}
                        <div className={`overflow-hidden transition-[max-height,opacity] duration-400 ${isOpen ? 'max-h-[240px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <p className="max-w-[600px] pt-3 text-[18px] leading-[26px] -tracking-[.4px] text-olive max-[575px]:text-[16px] max-[575px]:leading-[22px]">
                            {tab.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Rolling Button */}
            <div>
              <RollingButton
                text="Learn More About Us"
                href="/about/"
                onClick={onLearnMore}
                variant="yellow"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
