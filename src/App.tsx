import { lazy, Suspense, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnersSection } from './components/PartnersSection';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { ProductsSection } from './components/ProductsSection';
import { WorkProcessSection } from './components/WorkProcessSection';
import { VideoSection } from './components/VideoSection';
import { BlogsSection } from './components/BlogsSection';
import { DiscoverSection } from './components/DiscoverSection';
import { Footer } from './components/Footer';
import { BlogArticlePage } from './components/BlogArticlePage';
import { ProductPage } from './components/ProductPage';

import { BLOG_POSTS } from './data/greensproutData';
import {
  isAboutPagePath,
  isBlogPagePath,
  isContactPagePath,
  isDairyArticlePath,
  isEcoFriendlyArticlePath,
  isZeroWasteArticlePath,
  isProductPagePath,
} from './routes';

const AboutPage = lazy(() =>
  import('./components/AboutPage').then((module) => ({ default: module.AboutPage })),
);
const BlogPage = lazy(() =>
  import('./components/BlogPage').then((module) => ({ default: module.BlogPage })),
);
const ContactPage = lazy(() =>
  import('./components/ContactPage').then((module) => ({ default: module.ContactPage })),
);

function App() {
  const currentPath = window.location.pathname;
  const lenisRef = useRef<Lenis | null>(null);

  const isZeroWasteArticle = isZeroWasteArticlePath(currentPath);
  const isDairyArticle = isDairyArticlePath(currentPath);
  const isArticlePage =
    isEcoFriendlyArticlePath(currentPath) || isZeroWasteArticle || isDairyArticle;
  const isAboutPage = isAboutPagePath(currentPath);
  const isBlogPage = isBlogPagePath(currentPath);
  const isContactPage = isContactPagePath(currentPath);
  const isProductPage = isProductPagePath(currentPath);
  const isHomePage = !isArticlePage && !isAboutPage && !isBlogPage && !isContactPage && !isProductPage;

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.1,
      respectReducedMotion: false,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const hidePageScrollbar = isHomePage || isContactPage;
    if (hidePageScrollbar) root.classList.add('hide-page-scrollbar');
    else root.classList.remove('hide-page-scrollbar');

    return () => root.classList.remove('hide-page-scrollbar');
  }, [isHomePage, isContactPage]);

  const handleLearnMore = () => {
    const processElem = document.getElementById('work-process');
    if (processElem) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(processElem);
      } else {
        processElem.scrollIntoView({ behavior: 'auto' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Navbar with Dropdown, SVG logo, and rolling text Contact CTA */}
      <Navbar homePage={isHomePage} />

      {/* Main Sections */}
      <main className="flex-1">
        {isArticlePage ? (
          <BlogArticlePage
            post={isDairyArticle ? BLOG_POSTS[2] : isZeroWasteArticle ? BLOG_POSTS[1] : BLOG_POSTS[0]}
          />
        ) : isProductPage ? (
          <ProductPage slug={currentPath.replace(/^\/product\/|\/+$/g, '')} />
        ) : isAboutPage ? (
          <Suspense fallback={<div className="min-h-[65vh] bg-cream" aria-hidden="true" />}>
            <AboutPage />
          </Suspense>
        ) : isBlogPage ? (
          <Suspense fallback={<div className="min-h-[65vh] bg-cream" aria-hidden="true" />}>
            <BlogPage />
          </Suspense>
        ) : isContactPage ? (
          <Suspense fallback={<div className="min-h-[65vh] bg-cream" aria-hidden="true" />}>
            <ContactPage />
          </Suspense>
        ) : (
          <>
            {/* 2. Hero Section with dynamic 3-slide crossfade, progress indicator & quotes */}
            <Hero />

            {/* 3. Trusted Partners Infinite Marquee */}
            <PartnersSection />

            {/* 4. About Us with SVG stroke & interactive accordion tabs (Mission/Vision/Goal) */}
            <AboutSection onLearnMore={handleLearnMore} />

            {/* 5. Acknowledgement & Awards with Frame.svg */}
            <AwardsSection />

            {/* 6. Products Section with 400ms tilt-and-scale card hover & rotating slider arrows */}
            <ProductsSection />

            {/* 7. Work Process 4-step Timeline with yellow icon SVGs */}
            <WorkProcessSection />

            {/* 8. Sustainable Agriculture Video / Ambient Banner */}
            <VideoSection />

            {/* 9. Farming Insights Blogs Section with animated read links */}
            <BlogsSection />

            {/* 10. Next Evolution of Organic Farming Produce Showcase */}
            <DiscoverSection />
          </>
        )}
      </main>

      {/* 11. Footer with Top Callout & Rolling Button */}
      <Footer homePage={isHomePage} />
    </div>
  );
}

export default App;
