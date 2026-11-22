import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

describe('contact navigation', () => {
  it('routes the navbar and footer contact actions to the contact page', () => {
    const navbar = renderToStaticMarkup(<Navbar homePage />);
    const footer = renderToStaticMarkup(<Footer homePage />);

    expect(navbar).toContain('href="/contact/"');
    expect(footer).toContain('href="/contact/"');
  });
});
