import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { AboutSection } from './AboutSection';

describe('AboutSection on Home Page', () => {
  it('renders the headline with accessible aria-label and sliding animation spans', () => {
    const markup = renderToStaticMarkup(<AboutSection />);

    expect(markup).toContain(
      'aria-label="We envision a future where innovation nourishes the earth and enhances sustainable agriculture. By integrating technology with traditional methods, we aim to support the environment."',
    );
    expect(markup).toContain('data-word');
    expect(markup).toContain('About Us');
  });

  it('wraps each word in an individual sliding animation span', () => {
    const markup = renderToStaticMarkup(<AboutSection />);
    const headingMatch = markup.match(/<h2\b[^>]*aria-label="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/);

    if (!headingMatch) {
      throw new Error('Headline was not rendered with aria-label.');
    }

    const wordsCount = headingMatch[1].split(/\s+/).length;
    const dataWordOccurrences = headingMatch[2].match(/data-word=/g);

    expect(dataWordOccurrences).toHaveLength(wordsCount);
  });
});
