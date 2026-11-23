import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { TermsConditionsPage } from './TermsConditionsPage';

describe('terms and conditions page', () => {
  it('renders the complete terms copy with all ten sections', () => {
    const markup = renderToStaticMarkup(<TermsConditionsPage />);

    expect(markup).toContain('aria-label="Terms &amp; Conditions"');
    expect(markup.match(/data-character=""/g)).toHaveLength(16);
    expect(markup).toContain('Effective Date: August 24th, 2025');
    expect(markup.match(/<h2\b/g)).toHaveLength(1);
    expect(markup.match(/<h3\b/g)).toHaveLength(9);
    expect(markup.match(/<li\b/g)).toHaveLength(11);
    expect(markup).toContain('info.greensprout@gmail.com');
  });
});
