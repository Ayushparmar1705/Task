import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { BlogPage } from './BlogPage';

describe('blog landing page', () => {
  it('renders the journal header, featured story, filters, and article cards', () => {
    const markup = renderToStaticMarkup(<BlogPage />);

    expect(markup).toContain('aria-label="News &amp; Insight"');
    expect(markup).toContain('Featured Blog');
    expect(markup).toContain('Eco-Friendly Habits: Small Changes for a Greener Life');
    expect(markup).toContain('GreenSprout’s Guide to ZeroWaste Farming');
    expect(markup).toContain('blog-img-7.webp');
    expect(markup).toContain('Organic Farming');
    expect(markup).toContain('aria-selected="true"');
  });

  it('links the farm-to-table dairy card to its local article page', () => {
    const markup = renderToStaticMarkup(<BlogPage />);

    expect(markup).toContain(
      'href="/the-journey-of-farm-to-table-dairy-freshness-to-your-home/"',
    );
    expect(markup).toContain('The Journey of Farm-to-Table Dairy: Freshness to Your Home');
  });
});
