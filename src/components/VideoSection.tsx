import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section id="video-section" className="relative flex w-full items-center justify-center overflow-hidden bg-forest">
      <div className="relative flex aspect-[1920/756] w-full items-center justify-center overflow-hidden max-[991px]:aspect-[768/630] max-[575px]:aspect-[360/528]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://greensprout.kirki.io/wp-content/uploads/2025/11/hero-img-1.webp"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://greensprout.kirki.io/wp-content/uploads/2025/11/Home-video-1-1.mp4#t=0,0"
            type="video/mp4"
          />
        </video>

        {/* Live site gradient overlay: linear-gradient(90deg, #000 0%, rgba(0,0,0,0) 100%) with opacity 0.2 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-20" />
      </div>

      <div className="absolute inset-0 z-[3] mx-auto flex w-full max-w-[1620px] items-center px-6 max-[991px]:px-8 max-[575px]:px-4">
        <div className="flex w-full items-end gap-12 max-[991px]:flex-col max-[991px]:items-start max-[991px]:gap-8 max-[575px]:gap-6">
          <div className="w-fit min-w-fit shrink-0">
            <p className="font-sans text-[24px] font-light leading-[36px] tracking-[-1px] text-white max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[991px]:tracking-[-0.4px] max-[575px]:text-[16px] max-[575px]:leading-[22px]">
              Sustainable Agriculture
            </p>
          </div>

          <div className="w-auto max-w-[842px] min-w-0 max-[991px]:max-w-[437px] max-[575px]:max-w-none">
            <h2
              aria-label="We're growing a greener tomorrow, rooted in innovation and nurtured by nature."
              className="font-sans text-[clamp(40px,4.48vw,86px)] font-medium leading-[1] tracking-[-4px] text-white max-[991px]:text-[56px] max-[991px]:tracking-[-3px] max-[575px]:text-[40px] max-[575px]:tracking-[-2px]"
            >
              We're growing a greener tomorrow, rooted in innovation and nurtured by nature.
            </h2>
          </div>

          <div className="min-w-[240px]">
            <p className="font-sans text-[24px] font-normal leading-[36px] tracking-[-1px] text-white max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[991px]:tracking-[-0.4px] max-[575px]:text-[16px] max-[575px]:leading-[22px]">
              Discover how our farm-to-table practices bring nature's bounty to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
