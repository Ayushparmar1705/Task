import React, { useEffect, useRef, useState } from 'react';
import { WORK_PROCESS_STEPS } from '../data/greensproutData';
import { CharacterReveal } from './CharacterReveal';

export const WorkProcessSection: React.FC = () => {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    const container = stepsContainerRef.current;
    if (!container) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisitedSteps(new Set(WORK_PROCESS_STEPS.map((step) => step.stepNumber)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const newlyVisited = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => Number(entry.target.getAttribute('data-step-number')))
          .filter((stepNumber) => Number.isInteger(stepNumber) && stepNumber > 0);

        if (newlyVisited.length > 0) {
          setVisitedSteps((current) => new Set([...current, ...newlyVisited]));
          entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry) => observer.unobserve(entry.target));
        }
      },
      { threshold: 0.2 },
    );

    container
      .querySelectorAll<HTMLElement>('[data-step-number]')
      .forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work-process" className="bg-cream py-[100px] max-[767px]:py-16">
      <div className="mx-auto w-full max-w-[1620px] px-6 max-[767px]:px-4">
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-block w-fit rounded-full border border-sage-border px-4 py-2 text-[16px] leading-5 text-olive max-[767px]:text-[14px] max-[767px]:leading-[1.14em]">
              How we work
            </div>
            <h2
              aria-label="See Our Work Process"
              className="font-sans text-center text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[767px]:text-[36px] max-[767px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
            >
              <CharacterReveal
                text="See Our Work Process"
                direction="horizontal"
                easing="power1.out"
              />
            </h2>
          </div>

          <div ref={stepsContainerRef} className="flex w-full flex-col">
            {WORK_PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;
              const isLastStep = idx === WORK_PROCESS_STEPS.length - 1;
              const isVisited = visitedSteps.has(step.stepNumber);
              const imageColumnClass = [
                isEven ? 'flex w-1/2 justify-end pl-10' : 'w-1/2 pr-6',
                isEven && !isLastStep ? 'pb-[200px]' : '',
                'max-[767px]:w-full max-[767px]:p-0 max-[767px]:pb-0',
              ]
                .filter(Boolean)
                .join(' ');
              const contentColumnClass = [
                'flex w-1/2',
                isEven ? 'pr-6' : 'justify-end pl-10',
                !isEven && !isLastStep ? 'pb-[200px]' : '',
                'max-[767px]:w-full max-[767px]:p-0 max-[767px]:pb-0',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <article
                  key={step.stepNumber}
                  data-step-number={step.stepNumber}
                  className={[
                    'relative flex w-full justify-between transition-opacity delay-[450ms] duration-500 ease-[cubic-bezier(0,0,0.58,1)] motion-reduce:transition-none',
                    isEven ? 'flex-row-reverse' : 'flex-row',
                    isVisited ? 'opacity-100' : 'opacity-30',
                    isLastStep ? '' : 'max-[767px]:pb-12',
                    'max-[767px]:flex-col-reverse max-[767px]:gap-4 max-[767px]:pl-8',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className={imageColumnClass}>
                    <div className="w-full max-w-[524px] overflow-hidden rounded-2xl max-[991px]:aspect-[280/290] max-[767px]:max-w-[280px] max-[575px]:max-w-none max-[575px]:aspect-[296/224]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="block h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute top-0 left-1/2 flex h-full w-4 flex-col items-center max-[767px]:left-0">
                    <div className="z-10 h-[15.5px] w-4 shrink-0 rounded-full bg-olive" />
                    <div className="w-px flex-1 bg-olive" />
                  </div>

                  <div className={contentColumnClass}>
                    <div className="flex w-full max-w-[524px] flex-col gap-6 max-[767px]:max-w-[292px] max-[767px]:gap-4 max-[575px]:max-w-none">
                      {idx === 0 && (
                        <svg className="mb-0 h-[60px] w-[60px] shrink-0 max-[767px]:mb-2 max-[767px]:h-12 max-[767px]:w-12 max-[575px]:mb-0" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                          <rect width="60" height="60" rx="12" fill="#F0D013" />
                          <path
                            d="M18.334 27.9999H20.6673M39.334 27.9999H41.6673M19.5007 37.3449L19.5123 37.3321M23.0007 32.6782L23.0123 32.6654M26.5007 37.3449L26.5123 37.3321M33.5007 37.3449L33.5123 37.3321M37.0007 32.6782L37.0123 32.6654M40.5007 37.3449L40.5123 37.3321M30.4627 17.9619L34.084 21.5832C34.8917 22.3908 35.4418 23.4199 35.6646 24.5401C35.8875 25.6604 35.7732 26.8216 35.3361 27.8768C34.899 28.9321 34.1588 29.8341 33.2091 30.4687C32.2594 31.1033 31.1429 31.442 30.0007 31.442C28.8584 31.442 27.7419 31.1033 26.7922 30.4687C25.8425 29.8341 25.1023 28.9321 24.6652 27.8768C24.2281 26.8216 24.1138 25.6604 24.3367 24.5401C24.5595 23.4199 25.1096 22.3908 25.9173 21.5832L29.5387 17.9619C29.5993 17.9012 29.6713 17.8531 29.7506 17.8202C29.8299 17.7874 29.9148 17.7705 30.0007 17.7705C30.0865 17.7705 30.1714 17.7874 30.2507 17.8202C30.33 17.8531 30.402 17.9012 30.4627 17.9619Z"
                            stroke="black"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg className="mb-0 h-[60px] w-[60px] shrink-0 max-[767px]:mb-2 max-[767px]:h-12 max-[767px]:w-12 max-[575px]:mb-0" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                          <rect width="60" height="60" rx="12" fill="#F0D013" />
                          <path
                            d="M22.9993 25.6667C22.3805 25.6667 21.787 25.9125 21.3494 26.3501C20.9118 26.7877 20.666 27.3812 20.666 28V36.1667C20.666 36.7855 20.9118 37.379 21.3494 37.8166C21.787 38.2542 22.3805 38.5 22.9993 38.5H27.666C28.2849 38.5 28.8783 38.2542 29.3159 37.8166C29.7535 37.379 29.9993 36.7855 29.9993 36.1667V28C29.9993 27.3812 29.7535 26.7877 29.3159 26.3501C28.8783 25.9125 28.2849 25.6667 27.666 25.6667M22.9993 25.6667H27.666M22.9993 25.6667V21C22.9993 20.6906 23.1223 20.3938 23.3411 20.175C23.5599 19.9562 23.8566 19.8333 24.166 19.8333H26.4993C26.8088 19.8333 27.1055 19.9562 27.3243 20.175C27.5431 20.3938 27.666 20.6906 27.666 21V25.6667M33.4993 22.1667H33.511M36.9993 24.5H37.011M36.9993 19.8333H37.011M40.4993 17.5H40.511M40.4993 22.1667H40.511M40.4993 26.8333H40.511M27.666 22.1667H28.8327"
                            stroke="#5A6D3F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg className="mb-0 h-[60px] w-[60px] shrink-0 max-[767px]:mb-2 max-[767px]:h-12 max-[767px]:w-12 max-[575px]:mb-0" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                          <rect width="60" height="60" rx="12" fill="#F0D013" />
                          <path
                            d="M33.6137 32.5723V41.4885C33.5979 41.8212 33.4509 42.1341 33.2049 42.3588C32.959 42.5834 32.634 42.7015 32.3012 42.6873H31.9863C31.6535 42.7015 31.3285 42.5834 31.0826 42.3588C30.8366 42.1341 30.6896 41.8212 30.6738 41.4885V32.6248L30.7175 32.581L33.6137 32.5723ZM30.7 32.5723L30.6562 32.616V32.5723H30.7Z"
                            stroke="#5A6D3F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M33.6136 34.8652H30.6561M37.7086 25.7696C37.7113 27.2348 37.3358 28.676 36.6184 29.9537C35.9011 31.2313 34.8661 32.3022 33.6136 33.0627V32.5814H30.6998C31.3402 31.9436 31.8469 31.1844 32.1902 30.3482C32.5336 29.5121 32.7066 28.6159 32.6992 27.7121C32.6992 24.0677 29.9517 21.1146 26.5742 21.1146C23.7523 21.1146 21.3855 23.1621 20.668 25.9533V25.7783C20.668 23.5157 21.5668 21.3457 23.1667 19.7458C24.7666 18.1459 26.9366 17.2471 29.1992 17.2471C31.4618 17.2471 33.6318 18.1459 35.2317 19.7458C36.8316 21.3457 37.7305 23.5157 37.7305 25.7783L37.7086 25.7696Z"
                            stroke="#5A6D3F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {idx === 3 && (
                        <svg className="mb-0 h-[60px] w-[60px] shrink-0 max-[767px]:mb-2 max-[767px]:h-12 max-[767px]:w-12 max-[575px]:mb-0" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                          <rect width="60" height="60" rx="12" fill="#F0D013" />
                          <path
                            d="M30 39.6665C29.0454 39.6665 28.1336 39.2813 26.3098 38.5109C21.7699 36.5932 19.5 35.6343 19.5 34.0214C19.5 33.5697 19.5 25.7418 19.5 22.1665M30 39.6665C30.9546 39.6665 31.8664 39.2813 33.6903 38.5109C38.2301 36.5932 40.5 35.6343 40.5 34.0214V22.1665M30 39.6665V27.2471"
                            stroke="#5A6D3F"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M25.7136 25.3068L22.3055 23.6577C20.4352 22.7526 19.5 22.3001 19.5 21.5835C19.5 20.8669 20.4352 20.4144 22.3055 19.5093L25.7136 17.8602C27.8169 16.8424 28.8687 16.3335 30 16.3335C31.1313 16.3335 32.1831 16.8424 34.2864 17.8602L37.6945 19.5093C39.5648 20.4144 40.5 20.8669 40.5 21.5835C40.5 22.3001 39.5648 22.7526 37.6945 23.6577L34.2864 25.3068C32.1831 26.3246 31.1313 26.8335 30 26.8335C28.8687 26.8335 27.8169 26.3246 25.7136 25.3068Z"
                            stroke="#5A6D3F"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M23 28L25.3333 29.1667M35.8327 18.6665L24.166 24.4998"
                            stroke="#5A6D3F"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}

                      <h3 aria-label={step.title} className="font-sans text-[32px] font-medium leading-10 -tracking-[1px] text-olive max-[767px]:text-[28px] max-[767px]:leading-9 max-[575px]:text-[24px] max-[575px]:leading-8">
                        {step.title.replace('. ', '.\u00a0')}
                      </h3>

                      <p className="font-sans text-[24px] font-normal leading-9 -tracking-[1px] text-[#464646] max-[767px]:text-[18px] max-[767px]:leading-[26px] max-[575px]:text-[16px] max-[575px]:leading-[22px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
