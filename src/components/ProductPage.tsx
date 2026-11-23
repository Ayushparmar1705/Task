import React, { useEffect, useRef, useState } from 'react';
import { CharacterReveal } from './CharacterReveal';
import { SlidingWords } from './SlidingWords';

interface ProductPageProps {
  slug: string;
}

const base = 'https://greensprout.kirki.io/wp-content/uploads/2025/11';

const products: Record<string, {
  title: string;
  tagline: string;
  banner: string;
  gallery: string[];
  video: string;
  marquee: string[];
  testimonials: Array<{ name: string; quote: string; image: string }>;
}> = {
  'natural-pantry-items': {
    title: 'Natural Pantry Items',
    tagline: 'Organic honey, jams, oils, and grains — staples for healthy living.',
    banner: `${base}/Product-banner-1.webp`,
    gallery: [1, 2, 3].map((n) => `${base}/Gallery-img-${n}.webp`),
    video: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/Product-1_honey.mp4',
    marquee: [1, 2, 3, 4, 6].map((n) => `${base}/product-marquee-img-${n}.webp`),
    testimonials: [
      { name: 'Marcus Lee', quote: 'Their kits are fantastic! I now have a thriving herb garden on my balcony.', image: `${base}/Testimonial-img-4.webp` },
      { name: 'Lina Carter', quote: 'The GreenSprout workshop inspired us with organic gardening. We took home seeds and compost to apply in our daily life.', image: `${base}/Testimonial-img-5.webp` },
      { name: 'Klara Scarlett', quote: "GreenSprout's organic honey tastes really good. Its sweet, floral flavor enhances everything from tea to toast!", image: `${base}/Testimonial-img-1.webp` },
    ],
  },
  'dairy-animal-products': {
    title: 'Dairy & Animal Products',
    tagline: 'Milk, butter, cheese, and eggs — made with care from healthy animals.',
    banner: `${base}/Product-banner-2.webp`,
    gallery: [4, 5, 6].map((n) => `${base}/Gallery-img-${n}.webp`),
    video: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/Product-2_dairy.mp4',
    marquee: [7, 8, 9, 10, 11, 12].map((n) => `${base}/product-marquee-img-${n}.webp`),
    testimonials: [
      { name: 'Klara Scarlett', quote: "GreenSprout's organic honey tastes really good. Its sweet, floral flavor enhances everything from tea to toast!", image: `${base}/Testimonial-img-1.webp` },
      { name: 'Sofia Patel', quote: "GreenSprout's dairy products are a treat! Their yogurt and cheeses add a wholesome taste to meals. Perfect for breakfast or snacks.", image: `${base}/Testimonial-img-2.webp` },
      { name: 'Lina Carter', quote: 'The GreenSprout workshop inspired us with organic gardening. We took home seeds and compost to apply in our garden.', image: `${base}/Testimonial-img-5.webp` },
    ],
  },
  'herbal-wellness-products': {
    title: 'Herbal & Wellness Products',
    tagline: 'Herbal teas, dried herbs, and natural extracts — crafted for wellness and a balanced lifestyle.',
    banner: `${base}/Product-banner-3.webp`,
    gallery: [7, 8, 9].map((n) => `${base}/Gallery-img-${n}.webp`),
    video: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/Product-3_herbal-tea.mp4',
    marquee: [13, 14, 15, 16, 17, 18].map((n) => `${base}/product-marquee-img-${n}.webp`),
    testimonials: [
      { name: 'Klara Scarlett', quote: "GreenSprout's organic honey tastes really good. Its sweet, floral flavor enhances everything from tea to toast!", image: `${base}/Testimonial-img-1.webp` },
      { name: 'Sofia Patel', quote: "GreenSprout's dairy products are a treat! Their yogurt and cheeses add a wholesome taste to meals. Perfect for breakfast or snacks.", image: `${base}/Testimonial-img-2.webp` },
      { name: 'Noah Kim', quote: "I enjoyed GreenSprout's herbal tea! The chamomile and mint blend was calming.", image: `${base}/Testimonial-img-3.webp` },
    ],
  },
  'seeds-farm-goods': {
    title: 'Seeds & Farm Goods',
    tagline: 'Organic seeds, compost, and gardening kits — perfect for home growers and eco-hobbyists.',
    banner: `${base}/Product-banner-4.webp`,
    gallery: [10, 11, 12].map((n) => `${base}/Gallery-img-${n}.webp`),
    video: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/Product-4_organic-seeds-1.mp4',
    marquee: ['19', '20', '21', '22-1', '23', '24'].map((n) => `${base}/product-marquee-img-${n}.webp`),
    testimonials: [
      { name: 'Sofia Patel', quote: "GreenSprout's dairy products are a treat! Their yogurt and cheeses add a wholesome taste to meals. Perfect for breakfast or snacks.", image: `${base}/Testimonial-img-2.webp` },
      { name: 'Noah Kim', quote: "I enjoyed GreenSprout's herbal tea! The chamomile and mint blend was calming.", image: `${base}/Testimonial-img-3.webp` },
      { name: 'Marcus Lee', quote: 'Their kits are fantastic! I now have a thriving herb garden on my balcony.', image: `${base}/Testimonial-img-4.webp` },
    ],
  },
  'farm-experiences-kits': {
    title: 'Farm Experiences & Kits',
    tagline: 'Farm tours, workshops, and DIY kits — learn, grow, and experience real organic living.',
    banner: `${base}/Product-banner-5.webp`,
    gallery: [13, 14, 15].map((n) => `${base}/Gallery-img-${n}.webp`),
    video: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/Product-5_workshop-1.mp4',
    marquee: [25, 26, 27, 28, 29, 30].map((n) => `${base}/product-marquee-img-${n}.webp`),
    testimonials: [
      { name: 'Noah Kim', quote: "I enjoyed GreenSprout's herbal tea! The chamomile and mint blend was calming.", image: `${base}/Testimonial-img-3.webp` },
      { name: 'Marcus Lee', quote: 'Their kits are fantastic! I now have a thriving herb garden on my balcony.', image: `${base}/Testimonial-img-4.webp` },
      { name: 'Lina Carter', quote: 'The GreenSprout workshop inspired us with organic gardening. We took home seeds and compost to apply in our garden.', image: `${base}/Testimonial-img-5.webp` },
    ],
  },
};

const processSteps = [
  { title: 'Grown the Natural Way', text: 'Our ingredients come from pesticide-free farms where everything grows naturally — just sunshine, soil, and care.' },
  { title: 'Handpicked with Care', text: 'Fruits, seeds, and flowers are carefully harvested at their freshest to lock in full flavor and nutrients.' },
  { title: 'Purely Processed', text: 'We use gentle, traditional methods, no additives or chemicals — to preserve the natural taste.' },
  { title: 'Packed for You', text: 'Each jar and bottle is freshly sealed with love, ready to bring organic purity straight to your pantry.' },
];

export const ProductPage: React.FC<ProductPageProps> = ({ slug }) => {
  const product = products[slug];
  const videoRef = useRef<HTMLVideoElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

  if (!product) return null;

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setVideoPlaying(true);
    } else {
      video.pause();
      setVideoPlaying(false);
    }
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    const slider = testimonialRef.current;
    if (!slider) return;
    slider.scrollBy({
      left: direction === 'right'
        ? slider.clientWidth
        : -slider.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <article className="bg-cream text-forest">
      <header className="relative h-[616px] overflow-hidden max-[991px]:h-[800px]">
        <img src={product.banner} alt="" className="absolute inset-0 h-[616px] w-full object-cover max-[991px]:h-[800px]" />
        <div className="relative z-10 mx-auto h-[616px] max-w-[1620px] px-6 max-[991px]:h-[800px] max-[991px]:px-8 max-[575px]:px-4">
          <div className="flex h-full items-stretch border-l border-white/60">
            <div className="flex w-[66.42%] max-w-[66.42%] items-end max-[991px]:max-w-none">
              <div className="flex min-h-[260px] w-full items-center border-t border-white/60 bg-black/20 p-8 max-[991px]:hidden">
                <h1 className="font-sans text-[56px] leading-[64px] font-light -tracking-[3px] text-white">
                  {product.tagline}
                </h1>
              </div>
            </div>
            <div className="flex w-[33.58%] min-w-[484px] items-end justify-end border-l border-white/60 pb-[66px] max-[991px]:hidden">
              <p className="whitespace-nowrap font-sans text-[24px] leading-[36px] font-normal -tracking-[1px] text-white">
                {product.title}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 hidden max-[991px]:block max-[991px]:border-t max-[991px]:border-white/60">
          <div className="mx-auto flex min-h-[260px] max-w-[1620px] pl-8 pr-0 max-[575px]:min-h-[209px] max-[575px]:pl-4">
            <div className="flex w-[77.6%] items-end border-r border-white/60 px-8 pb-[52px] max-[575px]:w-[76%] max-[575px]:px-4 max-[575px]:pb-6">
              <h1 className="w-full max-w-none font-sans text-[44px] leading-[52px] font-light -tracking-[2px] text-white max-[575px]:text-[34px] max-[575px]:leading-[40px]">
                {product.tagline}
              </h1>
            </div>
            <div className="flex w-[22.4%] min-w-0 items-end overflow-hidden pl-[9px] pb-[66px] max-[575px]:w-[24%]">
              <p className="max-w-full overflow-hidden whitespace-nowrap font-sans text-[18px] leading-[26px] font-normal -tracking-[0.4px] text-white max-[575px]:text-[16px] max-[575px]:leading-[22px]">
                {product.title}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-cream py-[100px] max-[991px]:py-16 max-[575px]:py-12">
        <div className="mx-auto max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">
          <div className="flex gap-14 max-[991px]:flex-col max-[991px]:gap-8">
            <div className="flex w-1/2 flex-col gap-4 max-[991px]:w-full">
              <img src={product.gallery[0]} alt={`${product.title} gallery 1`} className="aspect-[822/414] w-full rounded-2xl object-cover" />
              <div className="grid grid-cols-2 gap-4">
                {product.gallery.slice(1).map((image, index) => (
                  <img key={image} src={image} alt={`${product.title} gallery ${index + 2}`} className="aspect-[403/292] w-full rounded-2xl object-cover max-[575px]:aspect-[158/148]" />
                ))}
              </div>
            </div>
            <div className="flex w-1/2 flex-col justify-between max-[991px]:w-full">
              <div className="flex flex-col gap-12 max-[991px]:gap-6">
                <span className="w-fit rounded-full border border-sage-border px-4 py-2 text-[16px] leading-5 text-olive">Product Details</span>
                <h2 className="max-w-[725px] text-[44px] leading-[56px] font-normal -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px] max-[575px]:-tracking-[1.2px]">
                  We make every pantry item from our own organic farm
                </h2>
              </div>
              <p className="max-w-[650px] text-[24px] leading-9 -tracking-[1px] text-[#5e5e5e] max-[991px]:mt-6 max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[991px]:-tracking-[.4px] max-[575px]:text-[16px] max-[575px]:leading-[22px]">
                From pure honey to homemade jams and infused oils, everything is crafted in small batches using fresh, natural ingredients — just the way we make it at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-is-made-section" className="relative overflow-hidden bg-cream py-[64px] max-[991px]:py-12 max-[575px]:py-12">
        <div className="mx-auto flex max-w-[1620px] gap-6 px-6 max-[991px]:flex-col max-[991px]:gap-20 max-[991px]:px-8 max-[575px]:gap-8 max-[575px]:px-4">
          <div className="flex h-fit w-[497px] min-w-[497px] flex-col max-[991px]:w-full max-[991px]:min-w-0">
            <div className="flex flex-col gap-6">
              <span className="w-fit rounded-full border border-sage-border px-4 py-2 text-[16px] leading-5 text-olive">How it&apos;s made</span>
              <div className="flex flex-col gap-3">
                <h2
                  aria-label="Sustainable Steps: How We Cultivate Organically"
                  className="text-[44px] leading-[56px] -tracking-[2px] max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
                >
                  <CharacterReveal
                    text="Sustainable Steps: How We Cultivate Organically"
                    direction="horizontal"
                    duration={500}
                    easing="power2.inOut"
                  />
                </h2>
                <p className="w-[422px] max-w-full self-start text-left text-[18px] leading-[26px] -tracking-[.4px] text-[#5a6d3f] max-[575px]:text-[14px] max-[575px]:leading-5">
                  GreenSprout began as a humble family venture and has blossomed into a flourishing organic farm
                </p>
              </div>
            </div>
            <div className="relative mt-[50px] w-[490px] max-w-none max-[991px]:mt-8 max-[991px]:w-[312px] max-[575px]:absolute max-[575px]:right-0 max-[575px]:top-[-12%] max-[575px]:w-[180px]">
              <img
                src={`${base}/vegitables.svg`}
                alt="Vegetables"
                className="aspect-[490/436] w-full object-contain pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-[10px] pt-12 max-[991px]:pt-0">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={`flex w-full items-end gap-1 max-[575px]:justify-center max-[575px]:px-0 ${index === 1
                  ? 'justify-end pr-[20%] max-[991px]:pr-[12.5%] max-[575px]:pr-0'
                  : index === 2
                    ? 'justify-end pr-[40%] max-[991px]:pr-[25%] max-[575px]:pr-0'
                    : index === 3
                      ? 'justify-start pl-0 max-[575px]:justify-center'
                      : 'justify-end'
                  }`}
              >
                {index < 3 && (
                  <svg
                    className="mb-0 h-[76px] w-[50px] shrink-0 text-[#90A178] max-[575px]:hidden"
                    viewBox="0 0 91 52"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M88.7786 0.587576C89.8685 0.767334 90.6062 1.79655 90.4265 2.8864C90.2467 3.97624 89.2175 4.71401 88.1276 4.53425L88.4531 2.56091L88.7786 0.587576ZM11.2487 51.3031C10.2693 51.8139 9.06129 51.434 8.55055 50.4546L0.227499 34.4944C-0.283243 33.515 0.0966767 32.307 1.07607 31.7963C2.05546 31.2855 3.26346 31.6654 3.7742 32.6448L11.1725 46.8316L25.3593 39.4334C26.3387 38.9226 27.5467 39.3026 28.0574 40.282C28.5682 41.2613 28.1882 42.4693 27.2088 42.9801L11.2487 51.3031ZM41.8313 11.4439L42.8045 13.1912L41.8313 11.4439ZM88.4531 2.56091C88.1276 4.53425 88.1282 4.53434 88.1287 4.53442C88.1287 4.53443 88.1291 4.53449 88.1292 4.53451C88.1294 4.53453 88.1292 4.5345 88.1286 4.53441C88.1275 4.53423 88.125 4.53382 88.121 4.53319C88.1131 4.53193 88.0996 4.5298 88.0805 4.52686C88.0423 4.52098 87.9818 4.5119 87.8999 4.50024C87.7361 4.47693 87.4864 4.4433 87.1567 4.40435C86.4973 4.32643 85.5187 4.22728 84.2681 4.14666C81.7658 3.98535 78.1816 3.89866 73.8923 4.20254C65.304 4.81101 53.9555 6.98036 42.8045 13.1912L41.8313 11.4439L40.8581 9.69666C52.6639 3.12116 64.6263 0.849001 73.6096 0.212544C78.1062 -0.10603 81.8731 -0.0160357 84.5254 0.154949C85.8521 0.240478 86.9017 0.346383 87.6261 0.431983C87.9884 0.474789 88.2695 0.512537 88.4636 0.540153C88.5606 0.553962 88.6358 0.56524 88.6886 0.573355C88.715 0.577412 88.7357 0.580678 88.7508 0.583075C88.7583 0.584273 88.7644 0.585254 88.769 0.586007C88.7713 0.586384 88.7733 0.586704 88.7749 0.586966C88.7757 0.587096 88.7766 0.587249 88.777 0.587315C88.7779 0.587452 88.7786 0.587576 88.4531 2.56091ZM41.8313 11.4439L42.8045 13.1912C31.3505 19.5708 23.6965 28.8041 18.8951 36.4916C16.4978 40.33 14.8236 43.7642 13.7516 46.2306C13.216 47.463 12.8316 48.4517 12.5833 49.1257C12.4591 49.4626 12.369 49.7207 12.3111 49.8911C12.2821 49.9762 12.2611 50.0395 12.248 50.0796C12.2414 50.0997 12.2368 50.114 12.2341 50.1224C12.2328 50.1266 12.2319 50.1294 12.2315 50.1306C12.2313 50.1312 12.2312 50.1315 12.2313 50.1313C12.2313 50.1313 12.2314 50.1309 12.2314 50.1309C12.2316 50.1304 12.2318 50.1298 10.3239 49.5298C8.41603 48.9297 8.41627 48.929 8.41654 48.9281C8.41667 48.9277 8.41697 48.9268 8.41723 48.9259C8.41775 48.9243 8.41839 48.9223 8.41916 48.9199C8.42068 48.9151 8.4227 48.9087 8.4252 48.9009C8.43021 48.8853 8.43719 48.8637 8.44616 48.8363C8.46411 48.7814 8.49003 48.7032 8.52419 48.6028C8.5925 48.402 8.69376 48.1123 8.82997 47.7426C9.10233 47.0035 9.51472 45.944 10.0831 44.6361C11.2193 42.0219 12.9826 38.4073 15.5025 34.3727C20.5356 26.3141 28.6353 16.5045 40.8581 9.69666L41.8313 11.4439Z"
                      fill="#90A178"
                    />
                  </svg>
                )}

                <div
                  className={`flex h-fit ${index === 1 ? 'w-[56.25%]' : index === 2 ? 'w-[75%]' : 'w-[45%]'} max-w-[452px] shrink-0 flex-col items-center gap-6 rounded-3xl bg-soft-sage px-6 py-12 text-center max-[991px]:w-[452px] max-[991px]:max-w-full max-[991px]:shrink max-[575px]:w-full max-[575px]:max-w-[336px] max-[575px]:gap-4 max-[575px]:rounded-2xl max-[575px]:px-6 max-[575px]:py-8`}
                >
                  <span className="rounded-full border border-olive px-4 py-[6px] text-[18px] leading-[18px] font-medium text-olive">
                    Step {index + 1}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[28px] leading-[40px] font-medium -tracking-[1px] text-olive max-[575px]:text-[22px] max-[575px]:leading-7">
                      {step.title}
                    </h3>
                    <p className="text-[24px] leading-[36px] font-light -tracking-[1px] text-[#5e5e5e] max-[575px]:text-[16px] max-[575px]:leading-[22px] max-[575px]:-tracking-[0.4px]">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream pb-[64px] pt-[100px] max-[991px]:py-12">
        <div className="mx-auto flex max-w-[1620px] flex-col items-center px-6 max-[991px]:px-8 max-[575px]:px-4">
          <div className="mb-16 flex max-w-[652px] flex-col items-center gap-6 text-center max-[991px]:mb-8">
            <span className="rounded-full border border-sage-border px-4 py-2 text-[16px] leading-5 text-olive">Behind the scene</span>
            <h2
              aria-label="Witness the Pure Process Behind Our Golden Honey"
              className="text-[44px] leading-[56px] -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
            >
              <CharacterReveal
                text="Witness the Pure Process Behind Our Golden Honey"
                direction="horizontal"
                duration={500}
                easing="power2.inOut"
              />
            </h2>
          </div>
          <button
            type="button"
            onClick={toggleVideo}
            className="relative block aspect-[1620/756] w-full cursor-pointer overflow-hidden rounded-3xl border-0 bg-black p-0 max-[991px]:aspect-[704/466] max-[575px]:aspect-[328/240] max-[575px]:rounded-2xl"
            aria-label={videoPlaying ? 'Pause video' : 'Play video'}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={product.video}
              poster={product.gallery[0]}
              muted
              loop
              playsInline
              onEnded={() => setVideoPlaying(false)}
            />
            {!videoPlaying && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-bright-yellow text-forest max-[575px]:h-14 max-[575px]:w-14">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M10 7L21 14L10 21V7Z" fill="currentColor" />
                  </svg>
                </span>
              </span>
            )}
          </button>
        </div>
      </section>

      <section className="overflow-hidden bg-cream py-16 max-[991px]:py-12">
        <div className="mx-auto flex max-w-[1620px] flex-col items-center gap-20 px-6 max-[991px]:gap-12 max-[991px]:px-8 max-[575px]:gap-8 max-[575px]:px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2
              aria-label="Explore our fresh goods"
              className="text-[44px] leading-[56px] font-normal -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
            >
              <CharacterReveal
                text="Explore our fresh goods"
                direction="horizontal"
                duration={500}
                easing="power2.inOut"
              />
            </h2>
            <p className="max-w-[650px] text-[18px] leading-[26px] -tracking-[.4px] text-[#5e5e5e] max-[575px]:text-[14px] max-[575px]:leading-5">
              Explore our collection of organic pantry essentials, made fresh from our own farm.
            </p>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex w-max gap-6 animate-[kirkiMarquee_25s_linear_infinite] max-[991px]:gap-6">
              {[...product.marquee, ...product.marquee].map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt=""
                  className="h-auto aspect-[1048/952] w-[400px] shrink-0 rounded-[20px] object-cover max-[991px]:w-[350px] max-[991px]:rounded-2xl max-[575px]:w-[240px] max-[575px]:rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 max-[991px]:py-12 max-[575px]:py-12">
        <div className="mx-auto max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">
          <div className="mb-16 flex flex-col items-center gap-6 text-center max-[991px]:mb-12 max-[575px]:mb-8">
            <span className="rounded-full border border-sage-border px-4 py-2 text-[16px] leading-5 text-olive">Testimonials</span>
            <h2
              aria-label="What People Say About Us"
              className="text-[44px] leading-[56px] font-normal -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
            >
              <CharacterReveal
                text="What People Say About Us"
                direction="horizontal"
                duration={500}
                easing="power2.inOut"
              />
            </h2>
          </div>
          <div className="relative h-[835px] max-[991px]:h-[1126px] max-[575px]:h-auto max-[575px]:pb-20">
            <div
              ref={testimonialRef}
              className="h-[731px] overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[991px]:h-[1022px] max-[575px]:h-auto"
            >
              <div className="flex h-full w-max gap-6">
                {[...product.testimonials, ...product.testimonials].map((testimonial, index) => (
                  <figure
                    key={`${testimonial.name}-${index}`}
                    className="flex h-full w-[calc(100vw-48px)] max-w-[1572px] shrink-0 gap-6 max-[991px]:h-auto max-[991px]:w-[704px] max-[991px]:flex-col max-[991px]:gap-4 max-[575px]:w-[calc(100vw-32px)]"
                  >
                    <div className="h-full max-h-[731px] w-[661px] shrink-0 overflow-hidden rounded-3xl max-[991px]:h-[412px] max-[991px]:max-h-none max-[991px]:w-full max-[991px]:max-w-none max-[575px]:h-[224px]">
                      <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex h-full flex-1 flex-col justify-between rounded-3xl bg-soft-sage px-16 py-20 max-[991px]:h-[594px] max-[991px]:w-full max-[991px]:px-12 max-[991px]:py-12 max-[575px]:h-[360px] max-[575px]:rounded-2xl max-[575px]:px-4 max-[575px]:py-6">
                      <svg className="h-[76px] w-[76px] text-olive max-[575px]:h-14 max-[575px]:w-14" viewBox="0 0 76 76" fill="none" aria-hidden="true">
                        <path d="M11.6882 19.925C16.1311 15.1085 22.8539 12.667 31.6667 12.667H34.8334V21.5938L32.2874 22.1037C27.9491 22.9713 24.9312 24.6782 23.3162 27.183C22.4733 28.5323 21.9953 30.0774 21.9292 31.667H31.6667C32.5066 31.667 33.312 32.0006 33.9059 32.5945C34.4998 33.1884 34.8334 33.9938 34.8334 34.8337V57.0003C34.8334 60.4932 31.9929 63.3337 28.5001 63.3337H9.50005C8.6602 63.3337 7.85475 63 7.26088 62.4062C6.66702 61.8123 6.33339 61.0068 6.33339 60.167V44.3337L6.34289 35.0902C6.31439 34.7387 5.71272 26.4103 11.6882 19.925ZM63.3334 63.3337H44.3334C43.4935 63.3337 42.6881 63 42.0942 62.4062C41.5004 61.8123 41.1667 61.0068 41.1667 60.167V44.3337L41.1762 35.0902C41.1477 34.7387 40.5461 26.4103 46.5216 19.925C50.9644 15.1085 57.6872 12.667 66.5001 12.667H69.6667V21.5938L67.1207 22.1037C62.7824 22.9713 59.7646 24.6782 58.1496 27.183C57.3066 28.5323 56.8287 30.0774 56.7626 31.667H66.5001C67.3399 31.667 68.1454 32.0006 68.7392 32.5945C69.3331 33.1884 69.6667 33.9938 69.6667 34.8337V57.0003C69.6667 60.4932 66.8262 63.3337 63.3334 63.3337Z" fill="currentColor" />
                      </svg>
                      <div className="flex flex-col gap-8 max-[575px]:gap-5">
                        <blockquote className="text-[44px] leading-[56px] -tracking-[2px] text-olive max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[24px] max-[575px]:leading-[32px]">
                          {testimonial.quote}
                        </blockquote>
                        <figcaption className="text-[18px] leading-[26px] -tracking-[.4px] text-olive max-[575px]:text-[16px]">
                          {testimonial.name}
                        </figcaption>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 flex gap-4 max-[575px]:gap-3">
              <button
                type="button"
                onClick={() => scrollTestimonials('left')}
                aria-label="Previous testimonials"
                className="mr-2 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-olive bg-transparent text-forest max-[575px]:mr-0 max-[575px]:h-14 max-[575px]:w-14"
              >
                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" aria-hidden="true">
                  <path d="M8.25 15.25L1.25 8.25M1.25 8.25L8.25 1.25M1.25 8.25H22.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials('right')}
                aria-label="Next testimonials"
                className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-olive bg-transparent text-forest max-[575px]:h-14 max-[575px]:w-14"
              >
                <svg width="25" height="17" viewBox="0 0 25 17" fill="none" aria-hidden="true">
                  <path d="M1.15 8.46H23.22" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
                  <path d="M15.99 1.15L23.81 8.46L15.99 15.76" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
