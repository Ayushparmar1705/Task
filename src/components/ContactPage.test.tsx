import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ContactPage } from './ContactPage';

describe('contact page', () => {
  it('renders the animated introduction, contact form, and farm location', () => {
    const markup = renderToStaticMarkup(<ContactPage />);

    expect(markup).toContain(
      'aria-label="If you want to connect with us, feel free to reach out! We&#x27;re eager to hear your thoughts and ideas."',
    );
    expect(markup).toContain('data-word');
    expect(markup).toContain('aria-label="Contact form"');
    expect(markup).toContain('placeholder="Full Name"');
    expect(markup).toContain('placeholder="Email Address"');
    expect(markup).toContain('placeholder="Write your concern"');
    expect(markup).toContain('href="tel:+13474387215"');
    expect(markup).toContain('href="mailto:mail@example.com"');
    expect(markup).toContain('Visit us in our farm');
    expect(markup).toContain('Open Google Map');
    expect(markup).toContain('maps.app.goo.gl/wayKmHgbz1sHamUt6');
  });
});
