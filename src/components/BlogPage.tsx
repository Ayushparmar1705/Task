import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BLOG_PAGE_CATEGORIES, BLOG_PAGE_POSTS, type BlogPagePost } from '../data/greensproutData';
import { CharacterReveal } from './CharacterReveal';

function getDateLabel(isoDate: string, style: 'long' | 'short'): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  if (style === 'short') {
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${month}-${day}-${date.getUTCFullYear()}`;
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

const CalendarIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M13.3346 1.66675V5.00008M6.66797 1.66675V5.00008"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8333 3.33337H9.16667C6.02397 3.33337 4.45262 3.33337 3.47631 4.30968C2.5 5.286 2.5 6.85734 2.5 10V11.6667C2.5 14.8094 2.5 16.3808 3.47631 17.357C4.45262 18.3334 6.02397 18.3334 9.16667 18.3334H10.8333C13.976 18.3334 15.5474 18.3334 16.5237 17.357C17.5 16.3808 17.5 14.8094 17.5 11.6667V10C17.5 6.85734 17.5 5.286 16.5237 4.30968C15.5474 3.33337 13.976 3.33337 10.8333 3.33337Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 8.33337H17.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99755 11.6667H10.0051M9.99755 15.0001H10.0051M13.3271 11.6667H13.3346M6.66797 11.6667H6.67544M6.66797 15.0001H6.67544"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function DateLabel({
  post,
  format,
  className = '',
}: {
  post: BlogPagePost;
  format: 'long' | 'short';
  className?: string;
}) {
  const isLong = format === 'long';

  return (
    <time
      dateTime={post.date}
      className={`inline-flex items-center gap-2 text-olive transition-colors duration-300 ${className} ${
        isLong
          ? 'text-[18px] font-normal leading-[26px] -tracking-[0.4px] max-[991px]:text-[16px] max-[991px]:leading-6 max-[575px]:text-[14px] max-[575px]:leading-5'
          : 'text-[18px] font-normal leading-[26px] -tracking-[0.4px] max-[991px]:text-[16px] max-[991px]:leading-6 max-[575px]:text-[14px] max-[575px]:leading-5'
      }`}
    >
      <CalendarIcon className="h-5 w-5" />
      {getDateLabel(post.date, format)}
    </time>
  );
}

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(BLOG_PAGE_CATEGORIES[0]);
  const prefersReducedMotion = useReducedMotion();
  const featuredPost = BLOG_PAGE_POSTS[0];
  const visiblePosts = useMemo(
    () =>
      activeCategory === BLOG_PAGE_CATEGORIES[0]
        ? BLOG_PAGE_POSTS.slice(1)
        : BLOG_PAGE_POSTS.filter((post) => post.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="w-full bg-cream font-sans">
      {/* SECTION 1: Featured Blog Section */}
      <section
        id="featured-blog-section"
        aria-label="Featured Blog"
        className="bg-cream pt-[172px] pb-[100px] max-[991px]:pt-[136px] max-[991px]:pb-12 max-[575px]:pt-[120px] max-[575px]:pb-8"
      >
        <div className="mx-auto flex w-full max-w-[1620px] flex-col items-center px-6 max-[991px]:px-8 max-[575px]:px-4">
          <div className="flex w-full flex-col items-center gap-16 max-[991px]:gap-12 max-[575px]:gap-8">
            {/* Header */}
            <div className="flex flex-col items-center gap-6 text-center">
              <span className="rounded-full border border-sage-border px-4 py-2 text-[16px] font-normal leading-5 text-olive max-[991px]:text-[14px] max-[991px]:leading-[1.14em]">
                Blogs Articles
              </span>
              <div className="flex max-w-[658px] flex-col items-center gap-3 max-[991px]:max-w-[446px] max-[575px]:max-w-[294px]">
                <h1
                  aria-label="News & Insight"
                  className="text-center text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px] max-[575px]:-tracking-[1.2px]"
                >
                  <CharacterReveal
                    text="News & Insight"
                    direction="horizontal"
                    duration={500}
                    easing="power1.out"
                  />
                </h1>
                <p className="text-center text-[24px] font-normal leading-9 -tracking-[1px] text-olive max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[991px]:-tracking-[0.4px] max-[575px]:text-[16px] max-[575px]:leading-[22px]">
                  Subscribe to learn about new product features, the latest in technology, solutions, and updates.
                </p>
              </div>
            </div>

            {/* Featured Blog Group */}
            <div className="flex w-full flex-col items-center gap-6 max-[991px]:gap-4">
              <h2 className="text-center text-[24px] font-normal leading-9 -tracking-[1px] text-forest max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[991px]:-tracking-[0.4px] max-[575px]:text-[16px] max-[575px]:leading-[22px]">
                Featured Blog
              </h2>

              {/* Featured Blog Card */}
              <article className="flex w-full gap-12 rounded-[32px] bg-soft-sage p-8 max-[991px]:gap-4 max-[991px]:rounded-2xl max-[991px]:p-4 max-[575px]:flex-col max-[575px]:gap-4">
                <div className="w-1/2 max-w-[50%] aspect-[798/484] overflow-hidden rounded-2xl max-[991px]:aspect-[328/284] max-[991px]:rounded-xl max-[575px]:w-full max-[575px]:max-w-none max-[575px]:aspect-[296/224] max-[575px]:max-h-[224px]">
                  <a
                    href={featuredPost.href}
                    aria-label={`Read article: ${featuredPost.title}`}
                    className="block h-full w-full overflow-hidden"
                  >
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </a>
                </div>

                <div className="flex w-1/2 max-w-[50%] flex-col justify-between gap-8 self-stretch max-[991px]:gap-6 max-[575px]:w-full max-[575px]:max-w-none max-[575px]:gap-4">
                  <div className="flex flex-col gap-8 max-[991px]:gap-6 max-[575px]:gap-4">
                    <div className="flex items-center justify-between gap-8 max-[991px]:gap-6 max-[575px]:flex-wrap max-[575px]:gap-3">
                      <DateLabel post={featuredPost} format="long" />
                      <span className="rounded-md bg-olive/10 p-2 text-[16px] font-normal leading-5 text-olive max-[991px]:p-[6px_8px] max-[991px]:text-[14px] max-[991px]:leading-4">
                        {featuredPost.category}
                      </span>
                    </div>
                    <a
                      href={featuredPost.href}
                      className="block max-w-[647px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest max-[575px]:max-w-[275px]"
                    >
                      <h2
                        aria-label={featuredPost.title}
                        className="text-[32px] font-medium leading-10 -tracking-[1px] text-forest max-[991px]:text-[28px] max-[991px]:leading-9 max-[575px]:text-[24px] max-[575px]:leading-8"
                      >
                        {featuredPost.title}
                      </h2>
                    </a>
                  </div>

                  <a
                    href={featuredPost.href}
                    className="group relative flex w-full items-center gap-[10px] py-2 text-[24px] font-normal leading-9 -tracking-[1px] text-forest no-underline transition-colors hover:text-forest max-[991px]:text-[18px] max-[991px]:leading-[26px] max-[991px]:-tracking-[0.4px] max-[575px]:text-[16px] max-[575px]:leading-[22px]"
                  >
                    <span>Read More</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M18.5 10H5"
                        stroke="#293920"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 15C14 15 20 11.3176 20 10C20 8.68233 14 5 14 5"
                        stroke="#293920"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] w-full bg-olive" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Category Tab Section */}
      <section
        id="category-tab"
        aria-label="Blog categories and articles"
        className="bg-cream pt-0 pb-16 max-[991px]:py-12 max-[575px]:py-8"
      >
        <div className="mx-auto flex w-full max-w-[1620px] flex-col items-center px-6 max-[991px]:px-8 max-[575px]:px-4">
          <div className="flex w-full flex-col items-center gap-16 max-[991px]:gap-12 max-[575px]:gap-8">
            {/* Category Tabs */}
            <div
              role="tablist"
              aria-label="Filter blog articles"
              className="flex w-full flex-wrap items-center justify-center gap-6 max-[991px]:max-w-[590px] max-[991px]:gap-3 max-[575px]:gap-2"
            >
              {BLOG_PAGE_CATEGORIES.map((category) => {
                const active = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="blog-article-grid"
                    onClick={() => setActiveCategory(category)}
                    className={`cursor-pointer p-[10px] text-[18px] font-light leading-[18px] -tracking-[0.4px] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest max-[575px]:text-[16px] ${
                      active
                        ? 'text-[#90a178]'
                        : 'text-olive hover:text-[#90a178]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Article Grid */}
            <div id="blog-article-grid" role="tabpanel" className="w-full">
              <AnimatePresence mode="popLayout" initial={false}>
                {visiblePosts.length > 0 ? (
                  <motion.div
                    key={activeCategory}
                    layout
                    className="grid grid-cols-3 gap-x-6 gap-y-16 max-[991px]:grid-cols-2 max-[991px]:gap-x-4 max-[991px]:gap-y-12 max-[639px]:grid-cols-1 max-[639px]:gap-y-8"
                  >
                    {visiblePosts.map((post, index) => (
                      <motion.article
                        key={post.id}
                        layout
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                        transition={{
                          duration: 0.35,
                          delay: prefersReducedMotion ? 0 : index * 0.04,
                          ease: 'easeOut',
                        }}
                        className="group flex flex-col overflow-hidden rounded-[24px] bg-[#d5d7c9] transition-colors duration-300 hover:bg-olive focus-within:bg-olive max-[991px]:rounded-[16px]"
                      >
                        <a
                          href={post.href}
                          aria-label={`Read article: ${post.title}`}
                          className="flex h-full flex-col text-left no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
                        >
                          <div className="h-[350px] max-h-[350px] w-full flex-shrink-0 overflow-hidden max-[991px]:h-[232px] max-[991px]:max-h-[232px] max-[575px]:h-[224px] max-[575px]:max-h-[224px]">
                            <img
                              src={post.image}
                              alt={post.imageAlt}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>

                          <div className="flex flex-1 flex-col justify-between gap-12 p-6 max-[991px]:gap-8 max-[991px]:p-4">
                            <div className="flex flex-col gap-6 max-[991px]:gap-4">
                              <div className="flex flex-wrap items-center justify-between gap-6 row-gap-3 max-[575px]:items-start">
                                <DateLabel
                                  post={post}
                                  format="short"
                                  className="group-hover:text-white/80 group-focus-visible:text-white/80"
                                />
                                <span className="rounded-md bg-[#c5c9b7] p-2 text-[16px] leading-5 text-olive transition-colors duration-300 group-hover:bg-soft-sage group-hover:text-olive">
                                  {post.category}
                                </span>
                              </div>
                              <h3
                                aria-label={post.title}
                                className="text-[28px] font-medium leading-10 -tracking-[1px] text-forest transition-colors duration-300 group-hover:text-white max-[991px]:text-[24px] max-[991px]:leading-[30px] max-[575px]:text-[20px] max-[575px]:leading-7"
                              >
                                {post.title}
                              </h3>
                            </div>

                            <span className="group/read-more relative flex w-fit items-center gap-[10px] py-2 font-[family-name:var(--premade_template_dpteta8s)] text-[24px] font-normal leading-9 -tracking-[1px] text-forest transition-colors duration-300 group-hover:text-yellow">
                              <span>Read More</span>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                              >
                                <path
                                  d="M18.5 10H5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14 15C14 15 20 11.3176 20 10C20 8.68233 14 5 14 5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span
                                aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[1px] w-full bg-yellow opacity-0 transition-opacity duration-300 group-hover/read-more:opacity-100 group-focus-visible:opacity-100"
                              />
                            </span>
                          </div>
                        </a>
                      </motion.article>
                    ))}
                  </motion.div>
                ) : (
                  <motion.p
                    key="no-articles"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-16 text-center text-[18px] leading-7 text-olive"
                  >
                    No articles found in this category.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
