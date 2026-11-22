// Runtime validation coverage for the full-card article link.
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { BlogsSection } from './BlogsSection';

describe('blog article card navigation', () => {
  it('makes the first card a single local link around its image and text', () => {
    const markup = renderToStaticMarkup(<BlogsSection />);
    const firstCard = markup.match(/<article\b[\s\S]*?<\/article>/)?.[0];

    if (!firstCard) {
      throw new Error('The first blog card was not rendered.');
    }

    expect(firstCard).toContain('href="/eco-friendly-habits-small-changes-for-a-greener-life/"');
    expect(firstCard).toContain('Eco-Friendly Habits: Small Changes for a Greener Life');
    expect(firstCard).toContain('<img');
    expect(firstCard.match(/<a\b/g)).toHaveLength(1);
  });

  it('links the zero-waste farming card to its local article page', () => {
    const markup = renderToStaticMarkup(<BlogsSection />);

    expect(markup).toContain('href="/greensprouts-guide-to-zerowaste-farming/"');
    expect(markup).toContain('GreenSprout’s Guide to ZeroWaste Farming');
  });

  it('links the farm-to-table dairy card to its local article page', () => {
    const markup = renderToStaticMarkup(<BlogsSection />);

    expect(markup).toContain(
      'href="/the-journey-of-farm-to-table-dairy-freshness-to-your-home/"',
    );
    expect(markup).toContain('The Journey of Farm-to-Table Dairy: Freshness to Your Home');
  });
});
