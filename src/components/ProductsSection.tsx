import React, { useRef } from 'react';
import { PRODUCTS } from '../data/greensproutData';
import { CharacterReveal } from './CharacterReveal';

export const ProductsSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const productPaths = [
    '/product/natural-pantry-items/',
    '/product/dairy-animal-products/',
    '/product/herbal-wellness-products/',
    '/product/seeds-farm-goods/',
    '/product/farm-experiences-kits/',
  ];

  const scrollProducts = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    const firstCard = slider?.firstElementChild;
    if (!slider || !firstCard) return;

    slider.scrollBy({
      left: (direction === 'right' ? 1 : -1) * (firstCard.getBoundingClientRect().width + 16),
      behavior: 'smooth',
    });
  };

  return (
    <section id="products" className="overflow-hidden bg-soft-sage py-16 max-[991px]:pt-12 max-[991px]:pb-8">
      <div className="mx-auto w-full max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">
        <div className="flex flex-col items-center gap-16 max-[991px]:gap-12 max-[575px]:gap-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex w-fit rounded-full border border-sage-border px-4 py-2 text-[16px] font-normal leading-5 text-olive max-[991px]:text-[14px]">
              Our products
            </div>
            <h2
              aria-label="Our product is grown naturally, with sustainable, organic principles"
              className="mx-auto w-full max-w-[783px] text-center text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
            >
              <CharacterReveal
                text="Our product is grown naturally, with sustainable, organic principles"
                direction="horizontal"
                duration={500}
                easing="power1.out"
              />
            </h2>
          </div>

          <div className="relative h-[840px] w-full max-[991px]:h-[760px] max-[575px]:h-[560px]">
            <div
              ref={sliderRef}
              className="flex w-full gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {PRODUCTS.map((product, index) => (
                <article
                  key={product.id}
                  className="w-[500px] min-w-[500px] shrink-0 max-[575px]:w-[calc(100vw-32px)] max-[575px]:min-w-[calc(100vw-32px)]"
                >
                  <div className="group relative h-[600px] overflow-hidden rounded-[24px] max-[991px]:h-[550px] max-[991px]:rounded-[20px] max-[575px]:h-[368px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                    <div className="absolute right-10 bottom-10 left-10 z-10 flex items-center justify-between gap-6 max-[991px]:right-8 max-[991px]:bottom-9 max-[991px]:left-8 max-[575px]:right-4 max-[575px]:bottom-4 max-[575px]:left-4">
                      <h3
                        aria-label={product.title}
                        className="text-[32px] font-medium leading-10 -tracking-[1px] text-[#F0D013] max-[991px]:text-[28px] max-[991px]:leading-9 max-[575px]:text-[24px] max-[575px]:leading-8"
                      >
                        {product.title}
                      </h3>
                      <a
                        href={productPaths[index]}
                        aria-label={`View ${product.title}`}
                        className="flex h-[44px] w-[44px] min-w-[44px] items-center justify-center"
                      >
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                          <rect width="44" height="44" rx="22" fill="#FDE251" />
                          <path d="M28.5 22H15" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M24 27C24 27 30 23.3176 30 22C30 20.6823 24 17 24 17"
                            stroke="#181818"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="p-4 text-[24px] font-normal leading-9 -tracking-[1px] text-[#464646] max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[575px]:p-3 max-[575px]:text-[16px] max-[575px]:leading-[22px]">
                    {product.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="absolute right-0 bottom-0 flex gap-4 max-[991px]:gap-3">
              <button
                type="button"
                onClick={() => scrollProducts('left')}
                aria-label="Previous products"
                className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-olive text-yellow transition-transform duration-300 hover:rotate-45 max-[991px]:h-[48px] max-[991px]:w-[48px]"
              >
                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" aria-hidden="true">
                  <path d="M8.25 15.25L1.25 8.25M1.25 8.25L8.25 1.25M1.25 8.25H22.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollProducts('right')}
                aria-label="Next products"
                className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-olive text-yellow transition-transform duration-300 hover:-rotate-45 max-[991px]:h-[48px] max-[991px]:w-[48px]"
              >
                <svg width="25" height="17" viewBox="0 0 25 17" fill="none" aria-hidden="true">
                  <path d="M1.15 8.46H23.22" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
                  <path d="M15.99 1.15L23.81 8.46L15.99 15.76" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
