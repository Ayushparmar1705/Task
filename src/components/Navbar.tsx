import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { RollingButton } from './RollingButton';
import { NAV_LINKS, PRODUCT_DROPDOWN } from '../data/greensproutData';
import {
  ABOUT_PAGE_PATH,
  BLOG_PAGE_PATH,
  CONTACT_PAGE_PATH,
  isAboutPagePath,
  isBlogPagePath,
} from '../routes';

interface NavbarProps {
  onOpenContact?: () => void;
  homePage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, homePage = true }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileProductsOpen(false);
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);
  const routeHref = (href: string) => {
    if (href === '/about/' || href === '/about' || href === '#about-us') return ABOUT_PAGE_PATH;
    if (href === '#blogs' && !homePage) return BLOG_PAGE_PATH;
    return homePage || !href.startsWith('#') ? href : `/${href}`;
  };

  return (
    <nav
      id="navbar"
      className="fixed inset-x-0 top-0 z-[100] flex min-h-[73px] items-start border-b border-white/60 bg-forest/50 px-6 backdrop-blur-[10px] transition-colors duration-300 max-[575px]:px-4"
    >
      <div className="relative flex h-[72px] w-full items-stretch border-l border-white/60">
        <div className="flex w-[66.42%] items-center justify-between border-r border-white/60 px-6 max-[991px]:w-full max-[991px]:border-r-0 max-[575px]:px-4">
          <a href={routeHref('#hero')} className="flex items-center no-underline">
            <Logo light />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hidden cursor-pointer items-center justify-center bg-transparent p-2 text-white max-[991px]:flex"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex w-[33.58%] min-w-[484px] items-center pl-2 max-[991px]:hidden">
          <ul className="m-0 flex w-full list-none items-center justify-between gap-4 p-0">
            {NAV_LINKS.map((link) => {
              const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
              const isActive =
                (link.label === 'Home' && homePage) ||
                (link.label === 'Our Story' && isAboutPagePath(pathname)) ||
                (link.label === 'Blog' && isBlogPagePath(pathname));

              if (link.hasDropdown) {
                return (
                  <li
                    key={link.label}
                    className="relative min-w-fit py-[10px]"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div
                      className={`flex h-6 cursor-pointer items-center gap-[10px] font-sans text-[15px] font-normal leading-6 tracking-[-.036px] transition-colors duration-300 ${dropdownOpen ? 'text-bright-yellow' : 'text-white'
                        }`}
                      aria-expanded={dropdownOpen}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`h-5 w-5 transition-transform duration-300 ease-out ${dropdownOpen ? 'rotate-180 text-bright-yellow' : 'rotate-0 text-white'
                          }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9C6 9 10.4189 15 12 15C13.5812 15 18 9 18 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div
                      className={`absolute left-1/2 top-full z-[100] w-[376px] -translate-x-1/2 pt-2 transition-all duration-300 ease-out ${dropdownOpen
                        ? 'pointer-events-auto opacity-100 translate-y-0'
                        : 'pointer-events-none opacity-0 -translate-y-2'
                        }`}
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          className="block text-[#f3f0eb]"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M6.3324 1C7.1022 -0.333332 9.0267 -0.333333 9.7965 1L15.8587 11.5C16.6285 12.8333 15.6662 14.5 14.1266 14.5H2.00228C0.462676 14.5 -0.499576 12.8333 0.270224 11.5L6.3324 1Z"
                            fill="currentColor"
                          />
                        </svg>

                        <div className="mt-[-6px] flex w-full flex-col gap-5 rounded-xl bg-[#f3f0eb] p-8 shadow-[0_16px_36px_rgba(0,0,0,0.15)]">
                          {PRODUCT_DROPDOWN.map((product) => (
                            <a
                              key={product.title}
                              href={routeHref(product.href)}
                              className="w-full border-b border-transparent pb-1 font-sans text-[24px] font-normal leading-9 tracking-[-1px] text-[#293920] no-underline transition-all duration-300 ease-out hover:border-olive hover:text-olive"
                            >
                              {product.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.label} className="min-w-fit px-[10px] py-[10px]">
                  <a
                    href={routeHref(link.href)}
                    className={`block font-sans text-[15px] font-normal leading-[13.2px] tracking-[-.036px] no-underline transition-colors duration-300 hover:text-bright-yellow ${isActive ? 'text-yellow' : 'text-white'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}

            <li className="min-w-fit">
              <RollingButton
                text="Contact us"
                onClick={onOpenContact}
                href={onOpenContact ? undefined : CONTACT_PAGE_PATH}
                variant="yellow"
                hoverAnimation={false}
                className="hover:bg-white"
              />
            </li>
          </ul>
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-[82%] hidden border-l border-white/60 max-[991px]:block max-[575px]:left-[80%]"
        />
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[72px] z-[99] max-h-[calc(100vh-72px)] overflow-y-auto border-t border-sage-border bg-olive px-4 py-5 shadow-[0_18px_40px_rgba(41,57,32,.25)]"
        >
          <div className="mx-auto flex w-full max-w-[704px] flex-col">
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="border-b border-white/15">
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen((open) => !open)}
                      className="flex w-full items-center justify-between py-4 text-left font-sans text-lg font-medium text-soft-sage"
                      aria-expanded={mobileProductsOpen}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`h-5 w-5 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M6 9C6 9 10.4189 15 12 15C13.5812 15 18 9 18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileProductsOpen && (
                      <div className="flex flex-col gap-1 pb-3 pl-4">
                        {PRODUCT_DROPDOWN.map((product) => (
                          <a
                            key={product.title}
                            href={routeHref(product.href)}
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-2 font-sans text-base text-white no-underline"
                          >
                            {product.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={routeHref(link.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-white/15 py-4 font-sans text-lg font-medium text-soft-sage no-underline"
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-5">
              <RollingButton
                text="Contact us"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact?.();
                }}
                href={onOpenContact ? undefined : CONTACT_PAGE_PATH}
                variant="yellow"
                hoverAnimation={false}
                className="hover:bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
