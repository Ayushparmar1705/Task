import React from 'react';
import { Logo } from './Logo';
import { RollingButton } from './RollingButton';
import { PRODUCT_DROPDOWN } from '../data/greensproutData';
import { ABOUT_PAGE_PATH, BLOG_PAGE_PATH, CONTACT_PAGE_PATH, HOME_PAGE_PATH, TERMS_PAGE_PATH } from '../routes';

interface FooterProps {
  homePage?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ homePage = true }) => {
  const routeHref = (href: string) => {
    if (href === '#about-us' || href === '/about/' || href === '/about') return ABOUT_PAGE_PATH;
    if (href === '#blogs') return BLOG_PAGE_PATH;
    return homePage || !href.startsWith('#') ? href : `/${href}`;
  };

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden bg-[url('https://greensprout.kirki.io/wp-content/uploads/2025/11/footer-img.webp')] bg-cover bg-[position:50%_50%] font-sans text-white"
    >
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1552px] border-x border-[#f3f0eb] max-[1199px]:w-[calc(100%-64px)] max-[575px]:w-[calc(100%-32px)]">
        <div className="relative flex flex-col items-center gap-8 px-6 py-[246px] text-center max-[991px]:px-8 max-[991px]:py-[150px] max-[575px]:px-4 max-[575px]:pt-[86px] max-[575px]:pb-[100px]">
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#f3f0eb]" />
          <div className="flex max-w-[983px] flex-col items-center gap-6 max-[991px]:max-w-[414px] max-[991px]:gap-4 max-[575px]:max-w-[300px]">
            <h2 aria-label="Let’s grow healthier together" className="text-[86px] font-medium leading-[86px] -tracking-[4px] text-forest max-[991px]:text-[56px] max-[991px]:leading-[60px] max-[991px]:-tracking-[3px] max-[575px]:text-[40px] max-[575px]:leading-[44px] max-[575px]:-tracking-[2px]">
              Let’s grow healthier together
            </h2>
            <p className="max-w-[474px] text-[18px] font-normal leading-[26px] -tracking-[.4px] text-forest max-[991px]:text-[16px] max-[991px]:leading-6 max-[991px]:tracking-normal max-[575px]:text-[14px] max-[575px]:leading-5">
              We envision a future where innovation nourishes the earth and enhances sustainable agriculture.
            </p>
          </div>
          <RollingButton
            text="Contact Us"
            href={CONTACT_PAGE_PATH}
            variant="yellow"
            hoverAnimation={false}
            className="!bg-bright-yellow"
          />
        </div>

        <div className="mb-[140px] grid grid-cols-[184px_197px_minmax(0,1fr)_462px] gap-12 px-6 pt-16 max-[1199px]:mb-[155px] max-[1199px]:grid-cols-3 max-[1199px]:gap-x-6 max-[1199px]:gap-y-12 max-[1199px]:px-8 max-[767px]:grid-cols-2 max-[767px]:gap-x-6 max-[575px]:mb-[86px] max-[575px]:grid-cols-2 max-[575px]:gap-x-0 max-[575px]:gap-y-12 max-[575px]:px-4 max-[575px]:pt-12">
          <div className="flex flex-col gap-6">
            <h3 aria-label="Quick Links" className="text-[18px] font-medium leading-[18px] -tracking-[.3px] text-yellow">Quick Links</h3>
            <nav className="flex flex-col gap-5">
              <a className="text-[#eef0eb] transition-colors hover:text-bright-yellow" href={HOME_PAGE_PATH}>Home</a>
              <a className="text-[#eef0eb] transition-colors hover:text-bright-yellow" href={routeHref('#about-us')}>About</a>
              <a className="text-[#eef0eb] transition-colors hover:text-bright-yellow" href={routeHref('#blogs')}>Blog</a>
              <a
                className="text-[#eef0eb] transition-colors hover:text-bright-yellow"
                href={CONTACT_PAGE_PATH}
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-6 max-[575px]:col-span-2 max-[575px]:row-start-2">
            <h3 aria-label="Products" className="text-[18px] font-medium leading-[18px] -tracking-[.3px] text-yellow">Products</h3>
            <nav className="flex flex-col gap-5">
              {PRODUCT_DROPDOWN.map((product) => (
                <a
                  key={product.title}
                  className="text-[#eef0eb] transition-colors hover:text-bright-yellow"
                  href={routeHref(product.href)}
                >
                  {product.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6 max-[575px]:col-start-2 max-[575px]:row-start-1">
            <h3 aria-label="Others" className="text-[18px] font-medium leading-[18px] -tracking-[.3px] text-yellow">Others</h3>
            <a className="text-[14px] leading-4 text-[#eef0eb] transition-colors hover:text-bright-yellow max-[575px]:text-base max-[575px]:leading-6" href={TERMS_PAGE_PATH}>
              Terms of Service
            </a>
          </div>

          <div className="flex w-full max-w-[462px] flex-col gap-4 max-[1199px]:col-span-3 max-[1199px]:ml-auto max-[767px]:col-span-2 max-[575px]:col-span-2">
            <h3 className="sr-only">Stay in touch</h3>
            <form className="flex w-full items-center max-[575px]:flex-col max-[575px]:items-stretch max-[575px]:gap-1.5" onSubmit={(event) => event.preventDefault()}>
              <div className="flex h-[46px] min-w-0 flex-1 items-center pr-[0.8px] max-[575px]:h-[42px]">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="ml-[0.8px] h-[44.4px] min-w-0 w-full flex-1 overflow-hidden rounded-[50px] border-[0.5px] border-solid border-[color:var(--premade_template_dpuu8y8d,#f0d013)] bg-transparent px-4 py-[13px] font-sans text-[16px] leading-5 -tracking-[.4px] text-[color:var(--k-u17hxf3i,#fff)] outline-none placeholder:text-white/80 focus:border-yellow max-[575px]:h-10 max-[575px]:py-[10px] max-[575px]:tracking-normal"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-[46px] w-[145px] min-w-[145px] items-center justify-between gap-[10px] rounded-full bg-yellow px-[19.6px] py-0 font-[family-name:system-ui] text-[14px] font-medium leading-6 tracking-[-.28px] text-black transition-colors hover:bg-bright-yellow max-[575px]:h-[42px] max-[575px]:w-full max-[575px]:px-5 max-[575px]:text-[16px]"
              >
                <span className="shrink-0 font-sans text-[18px] font-medium leading-[18px] -tracking-[.3px] max-[575px]:text-[16px] max-[575px]:leading-[18px]">
                  Subscribe
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px] shrink-0">
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mx-6 flex w-[calc(100%-48px)] flex-col items-center gap-6 px-[148px] pb-6 text-center max-[1199px]:mx-0 max-[1199px]:w-full max-[1199px]:gap-4 max-[1199px]:px-6 max-[575px]:gap-2 max-[575px]:px-4 max-[575px]:pb-4">
          <div className="flex h-[166px] w-full items-center justify-center max-[1199px]:h-[74px] max-[575px]:h-[48px]">
            <Logo
              light
              className="w-full justify-center max-[575px]:-translate-y-[3px]"
              svgClassName="h-auto w-full max-w-none max-[1199px]:h-[68.5px] max-[1199px]:w-auto max-[575px]:h-[42.6px]"
            />
          </div>
          <p className="hover:text-[#bec89a] text-[16px] leading-5 text-white/75 max-[1199px]:text-[14px] max-[1199px]:leading-4">©GreenSprout 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
