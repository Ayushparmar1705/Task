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
    if (href === '#blogs' && !homePage) return BLOG_PAGE_PATH;
    return homePage || !href.startsWith('#') ? href : `/${href}`;
  };

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden bg-[url('https://greensprout.kirki.io/wp-content/uploads/2025/11/footer-img.webp')] bg-cover bg-[position:50%_100%] font-sans text-white"
    >
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1552px] border-x border-white/20 max-[1199px]:w-[calc(100%-64px)] max-[575px]:w-[calc(100%-32px)]">
        <div className="relative flex flex-col items-center gap-8 px-6 py-[240px] text-center max-[991px]:px-8 max-[991px]:py-[150px] max-[575px]:px-4 max-[575px]:pt-[86px] max-[575px]:pb-[100px]">
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-white/40" />
          <div className="flex max-w-[983px] flex-col items-center gap-8 max-[991px]:max-w-[414px] max-[991px]:gap-4 max-[575px]:max-w-[300px]">
            <h2 aria-label="Let’s grow healthier together" className="text-[86px] font-medium leading-[86px] -tracking-[4px] text-forest max-[991px]:text-[56px] max-[991px]:leading-[60px] max-[575px]:text-[40px] max-[575px]:leading-[44px]">
              Let’s grow healthier together
            </h2>
            <p className="max-w-[500px] text-[20px] font-normal leading-7 text-forest max-[991px]:text-[16px] max-[991px]:leading-6 max-[575px]:text-[14px] max-[575px]:leading-5">
              We envision a future where innovation nourishes the earth and enhances sustainable agriculture.
            </p>
          </div>
          <RollingButton
            text="Contact Us"
            href={CONTACT_PAGE_PATH}
            variant="yellow"
            hoverAnimation={false}
          />
        </div>

        <div className="mb-[140px] grid grid-cols-[184px_197px_minmax(0,1fr)_462px] gap-12 px-6 pt-16 max-[1199px]:mb-[155px] max-[1199px]:grid-cols-3 max-[1199px]:gap-x-6 max-[1199px]:gap-y-12 max-[1199px]:px-8 max-[767px]:grid-cols-2 max-[767px]:gap-x-6 max-[575px]:mb-[86px] max-[575px]:grid-cols-2 max-[575px]:gap-x-0 max-[575px]:gap-y-12 max-[575px]:px-4 max-[575px]:pt-12">
          <div className="flex flex-col gap-6">
            <h3 aria-label="Quick Links" className="text-[16px] font-medium leading-[18px] -tracking-[.3px] text-bright-yellow">Quick Links</h3>
            <nav className="flex flex-col gap-5">
              <a className="text-white/85 transition-colors hover:text-bright-yellow" href={HOME_PAGE_PATH}>Home</a>
              <a className="text-white/85 transition-colors hover:text-bright-yellow" href={routeHref('#about-us')}>About</a>
              <a className="text-white/85 transition-colors hover:text-bright-yellow" href={routeHref('#blogs')}>Blog</a>
              <a
                className="text-white/85 transition-colors hover:text-bright-yellow"
                href={CONTACT_PAGE_PATH}
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-6 max-[575px]:col-span-2 max-[575px]:row-start-2">
            <h3 aria-label="Products" className="text-[16px] font-medium leading-[18px] -tracking-[.3px] text-bright-yellow">Products</h3>
            <nav className="flex flex-col gap-5">
              {PRODUCT_DROPDOWN.map((product) => (
                <a
                  key={product.title}
                  className="text-white/85 transition-colors hover:text-bright-yellow"
                  href={routeHref(product.href)}
                >
                  {product.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6 max-[575px]:col-start-2 max-[575px]:row-start-1">
            <h3 aria-label="Others" className="text-[16px] font-medium leading-[18px] -tracking-[.3px] text-bright-yellow">Others</h3>
            <a className="text-[14px] leading-4 text-white/85 transition-colors hover:text-bright-yellow max-[575px]:text-base max-[575px]:leading-6" href={TERMS_PAGE_PATH}>
              Terms of Service
            </a>
          </div>

          <div className="flex flex-col gap-4 max-[1199px]:col-span-3 max-[1199px]:ml-auto max-[1199px]:w-full max-[1199px]:max-w-[462px] max-[767px]:col-span-2 max-[575px]:col-span-2">
            <h3 className="sr-only">Stay in touch</h3>
            <form className="flex w-full items-center max-[575px]:flex-col max-[575px]:items-stretch max-[575px]:gap-1.5" onSubmit={(event) => event.preventDefault()}>
              <div className="flex h-[46px] min-w-0 flex-1 items-center rounded-full border border-yellow bg-transparent focus-within:border-yellow max-[575px]:h-[42px]">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="h-[44px] min-w-0 w-full flex-1 bg-transparent px-4 py-[11px] text-[16px] leading-5 text-white outline-none placeholder:text-white/80 max-[575px]:h-10"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-[46px] min-w-[145px] items-center justify-between gap-2 rounded-full bg-yellow px-5 py-0 font-[family-name:system-ui] text-[14px] font-medium leading-6 tracking-[-.28px] text-black transition-colors hover:bg-bright-yellow max-[575px]:h-[42px] max-[575px]:w-full"
              >
                Subscribe
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

        <div className="flex flex-col items-center gap-6 px-6 pb-6 text-center max-[1199px]:gap-4 max-[1199px]:pb-6 max-[575px]:gap-2 max-[575px]:px-4 max-[575px]:pb-4">
          <div className="flex h-[166px] items-center justify-center max-[1199px]:h-[74px] max-[575px]:h-[48px]">
            <Logo light className="origin-center scale-[5.01] max-[1199px]:scale-[2.14] max-[575px]:-translate-y-[3px] max-[575px]:scale-[1.33]" />
          </div>
          <p className="text-[16px] leading-5 text-white/75 max-[1199px]:text-[14px] max-[1199px]:leading-4">©GreenSprout 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
