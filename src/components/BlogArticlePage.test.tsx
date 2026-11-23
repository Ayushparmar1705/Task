// Runtime validation coverage for the article layout and comment form.
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { BlogArticlePage } from './BlogArticlePage';
import { BLOG_POSTS } from '../data/greensproutData';

describe('blog article page', () => {
  it('renders the article banner, lead image, and single-field comment form', () => {
    const markup = renderToStaticMarkup(<BlogArticlePage />);

    expect(markup).toContain('News &amp; Insight');
    expect(markup).toContain('Eco-Friendly Habits: Small Changes for a Greener Life');
    expect(markup).toContain('aspect-[3/2]');
    expect(markup).toContain('Share your thoughts here...');
    expect(markup.match(/<textarea\b/g)).toHaveLength(1);
    expect(markup).not.toContain('type="email"');
    expect(markup).toContain('Submit comment');
  });

  it('renders the zero-waste article title, content, and inline image', () => {
    const markup = renderToStaticMarkup(<BlogArticlePage post={BLOG_POSTS[1]} />);

    expect(markup).toContain('GreenSprout’s Guide to ZeroWaste Farming');
    expect(markup).toContain('Organic Farming');
    expect(markup).toContain('1. Healthy Soil Is the Start of Everything');
    expect(markup).toContain('blog-img-10-1024x684.webp');
  });

  it('renders the dairy article title, content, and inline image', () => {
    const markup = renderToStaticMarkup(<BlogArticlePage post={BLOG_POSTS[2]} />);

    expect(markup).toContain('The Journey of Farm-to-Table Dairy: Freshness to Your Home');
    expect(markup).toContain('Farm Life');
    expect(markup).toContain('1. Healthy Soil Is the Start of Everything');
    expect(markup).toContain('blog-img-1-1024x569.webp');
  });
});
