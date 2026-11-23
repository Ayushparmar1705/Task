import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';
import { RollingButton } from './RollingButton';
import { NAV_LINKS, PRODUCT_DROPDOWN } from '../data/greensproutData';
import {
  ABOUT_PAGE_PATH,
  BLOG_PAGE_PATH,
  CONTACT_PAGE_PATH,
  HOME_PAGE_PATH,
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
  const skipDropdownFocusRef = useRef(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setMobileProductsOpen(false);
      }
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
      className="fixed inset-x-0 top-0 z-[100] flex min-h-[73px] items-start border-b border-white/60 bg-forest/50 px-6 backdrop-blur-[10px] transition-colors duration-300 max-[991px]:px-8 max-[575px]:px-4 max-[481px]:min-h-[57px]"
    >
      <div className={`relative flex h-[72px] w-full items-stretch border-l border-white/60 max-[481px]:h-[56px] ${mobileMenuOpen ? 'max-[575px]:invisible' : ''}`}>
        <div className="flex w-[66.42%] items-center justify-between border-r border-white/60 px-6 max-[991px]:w-auto max-[991px]:flex-1 max-[991px]:border-r-0 max-[991px]:px-8 max-[575px]:px-4">
          <a href={HOME_PAGE_PATH} className="flex items-center no-underline">
            <Logo
              light
              className="max-[481px]:-translate-y-px max-[481px]:[&_svg]:h-[23px] max-[481px]:[&_svg]:w-[151px] max-[481px]:[&_svg]:max-w-none"
            />
          </a>
        </div>

        <div className="hidden h-full w-[128px] shrink-0 items-center justify-end border-l border-white/60 max-[991px]:flex max-[481px]:w-[65px]">
          <button
            type="button"
            onClick={() => (mobileMenuOpen ? closeMobileMenu() : setMobileMenuOpen(true))}
            className="flex cursor-pointer items-center justify-center bg-transparent p-0 text-white max-[481px]:-translate-y-[3px]"
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

        <div className="flex w-[33.58%] min-w-[484px] items-center border-l border-white/60 pl-2 max-[991px]:hidden">
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
                    onFocus={() => {
                      if (skipDropdownFocusRef.current) {
                        skipDropdownFocusRef.current = false;
                        return;
                      }
                      setDropdownOpen(true);
                    }}
                    onMouseLeave={(event) => {
                      if (!event.currentTarget.contains(document.activeElement)) {
                        setDropdownOpen(false);
                      }
                    }}
                    onBlur={(event) => {
                      const nextFocused = event.relatedTarget;
                      if (!(nextFocused instanceof Node) || !event.currentTarget.contains(nextFocused)) {
                        setDropdownOpen(false);
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Escape') {
                        setDropdownOpen(false);
                        const trigger = event.currentTarget.querySelector('button');
                        if (trigger && document.activeElement !== trigger) {
                          skipDropdownFocusRef.current = true;
                          trigger.focus();
                        }
                      }
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(true)}
                      className={`flex h-6 cursor-pointer items-center gap-1 font-sans text-[14.4px] font-normal leading-[21.6px] tracking-[-.036px] transition-colors duration-300 ${dropdownOpen ? 'text-bright-yellow' : 'text-white'
                        } border-0 bg-transparent p-0`}
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                      aria-controls="desktop-products-menu"
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`h-6 w-6 transition-transform duration-300 ease-out ${dropdownOpen ? 'rotate-180 text-bright-yellow' : 'rotate-0 text-white'
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
                    </button>

                    <div
                      id="desktop-products-menu"
                      className={`absolute left-1/2 top-full z-[100] w-[376px] -translate-x-1/2 pt-2 transition-all duration-300 ease-out ${dropdownOpen
                        ? 'pointer-events-auto opacity-100 -translate-y-[10px]'
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
                    className={`block font-sans text-[14.4px] font-normal leading-[12.672px] tracking-[-.036px] no-underline transition-colors duration-300 hover:text-bright-yellow ${isActive ? 'text-yellow' : 'text-white'
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

      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[72px] z-[99] max-h-[calc(100vh-72px)] overflow-y-auto border-t border-sage-border bg-olive px-4 py-5 shadow-[0_18px_40px_rgba(41,57,32,.25)] max-[575px]:inset-0 max-[575px]:z-[101] max-[575px]:h-screen max-[575px]:max-h-none max-[575px]:w-screen max-[575px]:overflow-hidden max-[575px]:border-0 max-[575px]:bg-[#52633e] max-[575px]:px-0 max-[575px]:py-0 max-[575px]:shadow-none"
        >
          <div className="mx-auto flex w-full max-w-[704px] flex-col max-[575px]:mx-0 max-[575px]:ml-[6px] max-[575px]:h-full max-[575px]:w-[calc(100vw-23px)] max-[575px]:max-w-none max-[575px]:items-stretch max-[575px]:gap-[6px] max-[575px]:border-x max-[575px]:border-sage-border max-[575px]:bg-[#52633e] max-[575px]:pt-[54px]">
            {NAV_LINKS.map((link) => {
              const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
              const isActive =
                (link.label === 'Home' && homePage) ||
                (link.label === 'Our Story' && isAboutPagePath(pathname)) ||
                (link.label === 'Blog' && isBlogPagePath(pathname));

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="border-b border-white/15 max-[575px]:mb-[10px] max-[575px]:translate-x-[10px] max-[575px]:border-0 max-[575px]:bg-transparent">
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen((open) => !open)}
                      className="flex w-full items-center justify-between py-4 text-left font-sans text-lg font-medium text-soft-sage max-[575px]:justify-center max-[575px]:gap-1 max-[575px]:py-[10px] max-[575px]:pl-0 max-[575px]:text-center max-[575px]:text-[30px] max-[575px]:leading-[39px]"
                      aria-expanded={mobileProductsOpen}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`h-5 w-5 transition-transform duration-200 max-[575px]:h-6 max-[575px]:w-6 max-[575px]:text-white ${mobileProductsOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M6 9C6 9 10.4189 15 12 15C13.5812 15 18 9 18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileProductsOpen && (
                      <div className="flex flex-col gap-1 pb-3 pl-4 max-[575px]:relative max-[575px]:left-1/2 max-[575px]:mt-[7px] max-[575px]:mb-0 max-[575px]:w-[min(294px,calc(100vw-48px))] max-[575px]:-translate-x-1/2 max-[575px]:rounded-2xl max-[575px]:border max-[575px]:border-[#4b5b39] max-[575px]:bg-[#52633e] max-[575px]:px-[29px] max-[575px]:py-[22px] max-[575px]:pl-[29px] max-[575px]:shadow-[0_3px_8px_rgba(0,0,0,0.08)]">
                        {PRODUCT_DROPDOWN.map((product) => (
                          <a
                            key={product.title}
                            href={routeHref(product.href)}
                            onClick={closeMobileMenu}
                            className="py-2 font-sans text-base text-white no-underline max-[575px]:text-left max-[575px]:text-[19.5px] max-[575px]:leading-[29px] max-[575px]:-tracking-[.3px] max-[375px]:text-[18px] max-[361px]:text-[17px] max-[340px]:text-[16px] max-[575px]:text-soft-sage max-[575px]:focus-visible:outline-2 max-[575px]:focus-visible:outline-offset-2 max-[575px]:focus-visible:outline-bright-yellow"
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
                  onClick={closeMobileMenu}
                  className={`border-b border-white/15 py-4 font-sans text-lg font-medium no-underline max-[575px]:translate-x-[10px] max-[575px]:border-0 max-[575px]:bg-transparent max-[575px]:py-[10px] max-[575px]:pl-0 max-[575px]:text-center max-[575px]:text-[30px] max-[575px]:leading-[39px] ${isActive ? 'text-yellow' : 'text-soft-sage'}`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-5 max-[575px]:mt-auto max-[575px]:flex max-[575px]:w-full max-[575px]:justify-center max-[575px]:border-t max-[575px]:border-white/15 max-[575px]:px-0 max-[575px]:pt-[30px] max-[575px]:pb-[50px]">
              <RollingButton
                text="Contact us"
                onClick={() => {
                  closeMobileMenu();
                  onOpenContact?.();
                }}
                href={onOpenContact ? undefined : CONTACT_PAGE_PATH}
                variant="yellow"
                hoverAnimation={false}
                className="hover:bg-white max-[575px]:translate-x-[10px] max-[575px]:px-[22px] max-[575px]:py-[17.5px] max-[575px]:text-[20px] max-[575px]:leading-5"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
