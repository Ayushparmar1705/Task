// Runtime validation coverage for the standalone About page.
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { AboutPage } from './AboutPage';

describe('about page', () => {
  it('renders the story, statistics, journey, partners, and farm showcase', () => {
    const markup = renderToStaticMarkup(<AboutPage />);

    expect(markup).toContain('aria-label="We envision a future where innovation nourishes the earth and enhances sustainable agriculture. By integrating technology with traditional methods."');
    expect(markup).toContain('data-word');
    expect(markup).toContain('Our Story');
    expect(markup).toContain('250+');
    expect(markup).toContain('500+');
    expect(markup).toContain('Trusted by top agro-companies');
    expect(markup).toContain('Since 2012');
    expect(markup).toContain('Explore Our Farm And Organically Produced Products');
    expect(markup).toContain('<video');
    expect(markup).toContain('about-img-1.webp');
    expect(markup).toContain('about-img-2.webp');
    expect(markup).toContain('M703.5 0.5H0.5V201V492H418.5V867.5');
  });

  it('renders accessible controls for the accordion tabs', () => {
    const markup = renderToStaticMarkup(<AboutPage />);

    expect(markup).toContain('aria-expanded="true"');
    expect(markup).toContain('aria-controls="about-tab-vision"');
    expect(markup).toContain('Mission');
    expect(markup).toContain('Vision');
    expect(markup).toContain('Goal');
  });

  it('wraps each story headline word in an individual animation span', () => {
    const markup = renderToStaticMarkup(<AboutPage />);
    const heading = markup.match(/<h1\b[^>]*aria-label="([^"]+)"[^>]*>([\s\S]*?)<\/h1>/);

    if (!heading) {
      throw new Error('The story headline was not rendered accessibly.');
    }

    expect(heading[0]).toContain('max-w-[837px]');
    expect(heading[2].match(/data-word=/g)).toHaveLength(heading[1].split(/\s+/).length);
  });
});
