import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { BLOG_POSTS, type BlogPost } from '../data/greensproutData';
import { CharacterReveal } from './CharacterReveal';

interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

interface ArticleImage {
  src: string;
  alt: string;
  afterSection: number;
}

interface ArticleContent {
  coverAlt: string;
  introduction: string;
  sections: ArticleSection[];
  inlineImage: ArticleImage;
}

const ARTICLE_CONTENT: Record<string, ArticleContent> = {
  'blog-1': {
    coverAlt: 'Two people tending to plants indoors',
    introduction:
      'Small everyday choices can make a home kinder to the environment. A few practical habits can reduce waste, support healthy soil and pollinators, and make growing food more rewarding—without needing a large garden or a complicated routine.',
    sections: [
      {
        heading: '1. Build healthy soil from the ground up',
        paragraphs: [
          'Fruit and vegetable trimmings, coffee grounds, and dry leaves can become useful compost instead of going into the rubbish bin. Even a small container on a balcony can collect scraps until they are ready for a community compost pile or a garden bed.',
          'Finished compost adds organic matter to soil, helping it hold moisture and creating a better environment for the organisms that keep a garden thriving.',
        ],
      },
      {
        heading: '2. Make space for a wider mix of plants',
        paragraphs: [
          'Mixing herbs, flowers, and vegetables brings more variety into a growing space. Different plants attract helpful insects, make use of the space in different ways, and can make a garden more adaptable through changing seasons.',
        ],
      },
      {
        heading: '3. Use nature-friendly ways to manage pests',
        paragraphs: [
          'Healthy growing conditions are a good first step in preventing common garden problems. Check plants regularly, water near the soil, and remove damaged leaves before an issue spreads. A range of flowers and native plants can also provide food and shelter for beneficial insects.',
        ],
      },
      {
        heading: '4. Organic growing can work for everyone',
        paragraphs: [
          'A windowsill herb pot, a few reusable shopping bags, or separating food scraps are all worthwhile places to begin. Choose one change that fits your routine, let it become familiar, and build from there. Small actions are easier to sustain when they work for everyday life.',
        ],
      },
    ],
    inlineImage: {
      src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-4-1024x684.webp',
      alt: 'Cookies and milk arranged on a table',
      afterSection: 1,
    },
  },
  'blog-2': {
    coverAlt: 'Hands working compost into a garden bed',
    introduction:
      'Zero-waste farming keeps resources moving through the growing cycle. Crop residues can become compost, captured water can support new growth, and useful materials can be returned to the soil instead of discarded. These connected practices reduce waste while building healthier, more resilient farms.',
    sections: [
      {
        heading: '1. Healthy Soil Is the Start of Everything',
        paragraphs: [
          'Healthy soil is the foundation of a closed-loop farm. Composting crop residues and food scraps returns nutrients to the land, improves soil structure, and helps retain moisture through changing weather.',
          'Turning organic leftovers into a growing resource reduces waste and supports the soil life that helps crops thrive.',
        ],
      },
      {
        heading: '2. Diversity Matters—In Crops and Techniques',
        paragraphs: [
          'Growing a wider mix of crops supports biodiversity and makes the farm ecosystem more resilient. Crop rotation, companion planting, and native flowering plants can improve soil health, attract pollinators, and help interrupt pest cycles.',
        ],
      },
      {
        heading: '3. Natural Pest Control Is Possible—and Powerful',
        paragraphs: [
          'Preventive, nature-friendly practices reduce the need for synthetic pesticides. Healthy soil, regular plant checks, habitat for beneficial insects, and physical barriers can help manage pests while protecting pollinators.',
        ],
      },
      {
        heading: '4. Organic Farming Is for Everyone',
        paragraphs: [
          'Zero-waste habits can scale to every growing space. Composting, careful water use, and thoughtful reuse of materials are practical ways to close the loop at home, in a community garden, or on a working farm.',
        ],
      },
    ],
    inlineImage: {
      src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-10-1024x684.webp',
      alt: 'People working with fresh produce on a farm',
      afterSection: 1,
    },
  },
  'blog-3': {
    coverAlt: 'Cookies and milk arranged on a table',
    introduction:
      'Fresh dairy begins long before it reaches the kitchen. Healthy animals, careful milking, prompt chilling, and thoughtful delivery all help protect quality from the farm to the table.',
    sections: [
      {
        heading: '1. Healthy Herds and Pastures Come First',
        paragraphs: [
          'Good dairy starts with daily care. Clean shelter, balanced feed, access to fresh water, and room to move support the wellbeing of the herd and the quality of the milk.',
          'Well-managed pasture and attentive animal care also help farms build a steady, responsible routine through the seasons.',
        ],
      },
      {
        heading: '2. Careful Milking Protects Freshness',
        paragraphs: [
          'Clean equipment and consistent handling matter at every milking. Farmers check the milk and move it quickly into chilled storage to help maintain its freshness before collection.',
          'Keeping each step orderly and traceable makes it easier to care for the product from the farm onward.',
        ],
      },
      {
        heading: '3. A Cool Journey from Farm to Home',
        paragraphs: [
          'After collection, dairy products are kept cold during processing, packing, and transport. A reliable cold chain helps preserve their quality while they travel from the farm to local homes and shops.',
        ],
      },
      {
        heading: '4. Fresh Dairy Is Best Shared Around the Table',
        paragraphs: [
          'Milk, butter, and other dairy staples bring the work of the farm into everyday meals. Choosing fresh products and storing them correctly helps families enjoy them at their best and value the care behind every delivery.',
        ],
      },
    ],
    inlineImage: {
      src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-1-1024x569.webp',
      alt: 'Participants working with plants at an outdoor workshop',
      afterSection: 1,
    },
  },
};

interface BlogArticlePageProps {
  post?: BlogPost;
}

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ post = BLOG_POSTS[0] }) => {
  const [commentMessage, setCommentMessage] = useState('');
  const content = ARTICLE_CONTENT[post.id];

  if (!content) {
    throw new Error(`Missing article content for "${post.id}".`);
  }

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCommentMessage('Comment submissions are unavailable in this local preview.');
  };

  return (
    <>
      <section
        aria-labelledby="article-banner-title"
        className="relative h-[422px] overflow-hidden px-6 max-[991px]:px-8 max-[575px]:px-4"
      >
        <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="relative mx-auto h-full max-w-[1620px] border-l border-white/60">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[66.42%] border-l border-white/60 max-[991px]:left-[82%] max-[575px]:left-[80%]"
          />
          <div className="absolute bottom-0 left-0 flex w-[66.42%] items-center border-y border-white/60 bg-black/20 px-8 py-9 max-[991px]:w-[82%] max-[991px]:py-12 max-[575px]:w-[80%] max-[575px]:px-4 max-[575px]:py-6">
            <h1
              id="article-banner-title"
              aria-label="News & Insight"
              className="text-[56px] font-light leading-[64px] -tracking-[3px] text-white max-[991px]:text-[44px] max-[991px]:leading-[52px] max-[991px]:-tracking-[2px] max-[575px]:text-[34px] max-[575px]:leading-10"
            >
              <CharacterReveal text="News & Insight" />
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 pl-6 pr-[39px] pt-[100px] max-[991px]:pl-8 max-[991px]:pr-[47px] max-[991px]:pt-[60px] max-[575px]:pl-4 max-[575px]:pr-[31px]">
        <article className="mx-auto w-full max-w-[900px]">
          <header>
            <span className="inline-flex rounded-lg bg-soft-sage px-2 py-2 text-[16px] leading-5 text-olive max-[991px]:text-[14px] max-[991px]:leading-4">
              {post.category}
            </span>
            <h2 aria-label={post.title} className="mt-4 max-w-[680px] text-[32px] font-medium leading-10 text-forest max-[991px]:max-w-[571px] max-[991px]:text-[28px] max-[991px]:leading-9 max-[575px]:max-w-full max-[575px]:text-[24px] max-[575px]:leading-8">
              <CharacterReveal text={post.title} />
            </h2>
            <div className="mt-4 flex items-center gap-2 text-[18px] leading-[26px] text-olive max-[991px]:text-[16px] max-[991px]:leading-6 max-[575px]:text-[14px] max-[575px]:leading-5">
              <CalendarDays className="h-5 w-5 shrink-0 max-[575px]:h-4 max-[575px]:w-4" aria-hidden="true" />
              <time dateTime="2025-11-14">{post.date}</time>
            </div>
          </header>

          <figure className="mt-8 max-h-[500px] w-full overflow-hidden rounded-3xl">
            <img
              src={post.image}
              alt={content.coverAlt}
              className="aspect-[3/2] w-full object-cover object-top"
            />
          </figure>

          <div className="mt-8 w-full text-[18px] leading-[26px] text-[#5e5e5e] max-[991px]:text-[16px] max-[991px]:leading-6">
            <p>{content.introduction}</p>

            {content.sections.map((section, index) => (
              <React.Fragment key={section.heading}>
                <section className="mt-6">
                  <h3 aria-label={section.heading} className="text-[28px] font-medium leading-10 text-forest max-[991px]:text-[24px] max-[991px]:leading-[31px]">
                    <CharacterReveal text={section.heading} />
                  </h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4">
                      {paragraph}
                    </p>
                  ))}
                </section>

                {content.inlineImage.afterSection === index && (
                  <figure className="my-6">
                    <img
                      src={content.inlineImage.src}
                      alt={content.inlineImage.alt}
                      className="w-full rounded-3xl object-cover"
                      loading="lazy"
                    />
                  </figure>
                )}
              </React.Fragment>
            ))}
          </div>

          <section
            aria-labelledby="comment-heading"
            className="mt-8 w-full border-t border-sage-border pt-4"
          >
            <h3 id="comment-heading" aria-label="Post a comment" className="text-[18px] font-normal leading-[26px] text-forest">
              <CharacterReveal text="Post a comment" />
            </h3>
            <form onSubmit={handleCommentSubmit} className="mt-4 flex flex-col items-start gap-3">
              <label htmlFor="article-comment" className="sr-only">
                Comment
              </label>
              <textarea
                id="article-comment"
                required
                rows={3}
                className="h-[86px] min-h-[86px] w-full resize-y rounded-lg border border-sage-border bg-transparent px-6 py-5 text-[16px] leading-6 text-forest outline-none placeholder:text-olive/70 focus:border-olive"
                placeholder="Share your thoughts here..."
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-bright-yellow py-1 pl-4 pr-1 text-[15px] font-medium text-forest transition-colors hover:bg-yellow"
              >
                Submit comment
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-olive text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {commentMessage && (
                <p role="status" className="text-[15px] leading-6 text-olive">
                  {commentMessage}
                </p>
              )}
            </form>
          </section>
        </article>
      </section>
    </>
  );
};
