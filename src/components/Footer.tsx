import React from 'react';
import { Logo } from './Logo';
import { RollingButton } from './RollingButton';
import { PRODUCT_DROPDOWN } from '../data/greensproutData';
import { ABOUT_PAGE_PATH, BLOG_PAGE_PATH, CONTACT_PAGE_PATH } from '../routes';

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
      className="relative isolate overflow-hidden bg-forest bg-[url('https://greensprout.kirki.io/wp-content/uploads/2025/11/footer-img.webp')] bg-cover bg-center font-sans text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-forest/30 to-forest/90" />
      <div className="relative z-10 mx-auto w-full max-w-[1570px] border-x border-white/20">
        <div className="flex flex-col items-center gap-8 border-b border-white/20 px-6 py-[246px] text-center max-[991px]:px-8 max-[991px]:py-[150px] max-[575px]:px-4 max-[575px]:pt-[86px] max-[575px]:pb-[100px]">
          <div className="flex max-w-[983px] flex-col items-center gap-8 max-[991px]:max-w-[414px] max-[575px]:max-w-[300px]">
            <h2 aria-label="Let’s grow healthier together" className="text-[86px] font-medium leading-[86px] -tracking-[4px] text-forest max-[991px]:text-[56px] max-[991px]:leading-[60px] max-[575px]:text-[36px] max-[575px]:leading-10">
              Let’s grow healthier together
            </h2>
            <p className="max-w-[500px] text-[20px] font-normal leading-7 -tracking-[.4px] text-forest max-[991px]:text-[16px] max-[991px]:leading-6">
              We envision a future where innovation nourishes the earth and enhances sustainable agriculture.
            </p>
          </div>
          <RollingButton
            text="Contact Us"
            href={CONTACT_PAGE_PATH}
            variant="yellow"
          />
        </div>

        <div className="grid grid-cols-[200px_214px_minmax(0,1fr)_492px] gap-12 border-b border-white/20 px-6 py-16 max-[1199px]:grid-cols-2 max-[1199px]:gap-8 max-[1199px]:px-8 max-[575px]:grid-cols-1 max-[575px]:px-4">
          <div className="flex flex-col gap-4">
            <h3 aria-label="Quick Links" className="text-[18px] font-medium leading-[18px] -tracking-[.3px] text-bright-yellow">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <a className="text-white/85 transition-colors hover:text-bright-yellow" href={routeHref('#hero')}>Home</a>
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

          <div className="flex flex-col gap-4">
            <h3 aria-label="Products" className="text-[18px] font-medium leading-[18px] -tracking-[.3px] text-bright-yellow">Products</h3>
            <nav className="flex flex-col gap-3">
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

          <div className="flex flex-col gap-4">
            <h3 aria-label="Others" className="text-[18px] font-medium leading-[18px] -tracking-[.3px] text-bright-yellow">Others</h3>
            <a className="text-soft-sage transition-colors hover:text-bright-yellow" href={routeHref('#about-us')}>
              Terms of Service
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="sr-only">Stay in touch</h3>
            <form className="flex w-[492px] max-w-full gap-1" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 rounded-full border border-bright-yellow/80 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/70 focus:border-bright-yellow"
              />
              <button
                type="submit"
                className="inline-flex min-w-[150px] items-center justify-between gap-2 rounded-full bg-bright-yellow px-5 py-3 font-medium text-forest transition-colors hover:bg-yellow"
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

        <div className="flex flex-col items-center gap-8 px-6 py-10 text-center max-[991px]:px-8 max-[575px]:px-4">
          <div className="flex h-[170px] items-center justify-center max-[1199px]:h-[130px]">
            <Logo light className="origin-center scale-[5.1] max-[1199px]:scale-[2.1] max-[575px]:scale-[1.8]" />
          </div>
          <p className="text-[16px] text-white/75">©GreenSprout 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
