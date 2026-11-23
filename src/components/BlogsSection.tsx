import React from 'react';
import { BLOG_POSTS } from '../data/greensproutData';
import { BLOG_PAGE_PATH } from '../routes';
import { CharacterReveal } from './CharacterReveal';
import { RollingButton } from './RollingButton';

export const BlogsSection: React.FC = () => {
  return (
    <section id="blogs" className="bg-cream py-[100px] max-[991px]:py-16">
      <div className="flex flex-col items-center gap-16 max-[991px]:gap-12 max-[575px]:gap-8">
        <div className="mx-auto w-full max-w-[1620px] px-6 max-[991px]:px-8 max-[575px]:px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-block w-fit rounded-full border border-sage-border px-4 py-2 text-[16px] font-normal leading-5 text-olive max-[991px]:text-[14px]">
              Blogs
            </div>
            <h2
              aria-label="Discover our farming insights"
              className="mx-auto w-full max-w-[783px] text-center text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px]"
            >
              <CharacterReveal
                text="Discover our farming insights"
                duration={400}
                direction="horizontal"
                easing="power1.out"
              />
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-col">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group w-full border-t border-sage-border transition-colors duration-300 ease-out hover:bg-olive"
            >
              <a
                href={post.link}
                aria-label={`Read article: ${post.title}`}
                className="group/link mx-auto block w-full max-w-[1620px] px-6 py-8 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest max-[991px]:px-8 max-[575px]:px-4"
              >
                <div className="flex w-full items-start gap-12 max-[991px]:gap-6">
                  <time
                    dateTime="2025-11-14"
                    className="w-[22%] shrink-0 text-[18px] leading-[26px] -tracking-[0.4px] text-olive transition-colors group-hover:text-white/80 max-[991px]:hidden"
                  >
                    {post.date}
                  </time>

                  <div className="flex min-w-0 flex-1 items-center gap-12 max-[991px]:gap-6">
                    <div className="block h-[290px] w-[420px] shrink-0 overflow-hidden rounded-3xl max-[991px]:h-[224px] max-[991px]:w-[36%] max-[575px]:h-[180px] max-[575px]:w-[40%]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full min-w-full min-h-full max-w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-start self-stretch">
                      <span className="w-fit rounded-md bg-soft-sage px-[10px] py-2 text-[20px] leading-[26px] text-olive max-[991px]:py-1 max-[991px]:text-[14px] max-[991px]:leading-5">
                        {post.category}
                      </span>

                      <div className="mt-8 flex items-start gap-4 max-[575px]:mt-6 max-[575px]:gap-2">
                        <time
                          dateTime="2025-11-14"
                          className="shrink-0 text-[14px] text-olive transition-colors group-hover:text-white/80 min-[992px]:hidden max-[575px]:text-[12px]"
                        >
                          {post.date}
                        </time>
                        <h3 aria-label={post.title} className="min-w-0 max-w-[568px] text-[32px] leading-10 font-medium -tracking-[1px]   -colors duration-300 group-hover:text-white max-[991px]:text-[24px] max-[991px]:leading-8 max-[575px]:text-[18px] max-[575px]:leading-6">
                          {post.title}
                        </h3>
                      </div>

                      <span className="group/read-more relative mt-auto inline-flex w-fit items-center gap-[10px] pt-6 text-[24px] font-normal leading-9 -tracking-[0.6px] text-forest transition-colors duration-300 group-hover:text-yellow group-focus-visible/link:text-yellow max-[991px]:text-[18px] max-[991px]:leading-[26px]">
                        <span>Read More</span>
                        <svg className="h-[18px] w-[18px] transition-transform duration-300 group-hover/read-more:translate-x-1 group-focus-visible/link:translate-x-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M4 12h16m-6-6 6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 h-px w-full bg-yellow opacity-0 transition-opacity duration-300 group-hover/read-more:opacity-100 group-focus-visible/link:opacity-100"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <RollingButton
          text="Explore More Blogs"
          href={BLOG_PAGE_PATH}
          variant="yellow"
        />
      </div>
    </section>
  );
};
