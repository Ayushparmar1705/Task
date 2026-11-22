import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AboutSection } from './AboutSection';

describe('About / Our Story Navigation', () => {
  it('routes Our Story in Navbar to /about/', () => {
    const navbar = renderToStaticMarkup(<Navbar homePage />);
    expect(navbar).toContain('href="/about/"');
    expect(navbar).toContain('Our Story');
  });

  it('routes About in Footer to /about/', () => {
    const footer = renderToStaticMarkup(<Footer homePage />);
    expect(footer).toContain('href="/about/"');
  });

  it('routes Learn More About Us button to /about/', () => {
    const aboutSection = renderToStaticMarkup(<AboutSection />);
    expect(aboutSection).toContain('href="/about/"');
  });
});
