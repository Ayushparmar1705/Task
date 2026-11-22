// Runtime validation coverage for direct article navigation.
import { describe, expect, it } from 'vitest';
import {
  ABOUT_PAGE_PATH,
  BLOG_PAGE_PATH,
  CONTACT_PAGE_PATH,
  DAIRY_ARTICLE_PATH,
  ECO_FRIENDLY_ARTICLE_PATH,
  ZERO_WASTE_ARTICLE_PATH,
  NATURAL_PANTRY_PRODUCT_PATH,
  DAIRY_PRODUCT_PATH,
  isAboutPagePath,
  isBlogPagePath,
  isContactPagePath,
  isDairyArticlePath,
  isEcoFriendlyArticlePath,
  isZeroWasteArticlePath,
  isNaturalPantryProductPath,
  isDairyProductPath,
  isProductPagePath,
} from './routes';

describe('blog page route', () => {
  it('matches the blog destination with or without a trailing slash', () => {
    expect(isBlogPagePath(BLOG_PAGE_PATH)).toBe(true);
    expect(isBlogPagePath(BLOG_PAGE_PATH.slice(0, -1))).toBe(true);
  });

  it('keeps the home page and article route out of the blog page', () => {
    expect(isBlogPagePath('/')).toBe(false);
    expect(isBlogPagePath(ECO_FRIENDLY_ARTICLE_PATH)).toBe(false);
  });
});

describe('contact page route', () => {
  it('matches the contact destination with or without a trailing slash', () => {
    expect(isContactPagePath(CONTACT_PAGE_PATH)).toBe(true);
    expect(isContactPagePath(CONTACT_PAGE_PATH.slice(0, -1))).toBe(true);
  });

  it('keeps the home page and unrelated routes out of the contact page', () => {
    expect(isContactPagePath('/')).toBe(false);
    expect(isContactPagePath(BLOG_PAGE_PATH)).toBe(false);
  });
});

describe('eco-friendly article route', () => {
  it('matches the card destination with or without a trailing slash', () => {
    expect(isEcoFriendlyArticlePath(ECO_FRIENDLY_ARTICLE_PATH)).toBe(true);
    expect(isEcoFriendlyArticlePath(ECO_FRIENDLY_ARTICLE_PATH.slice(0, -1))).toBe(true);
  });

  it('keeps the home page and unrelated paths out of the article route', () => {
    expect(isEcoFriendlyArticlePath('/')).toBe(false);
    expect(isEcoFriendlyArticlePath('/another-article/')).toBe(false);
  });
});

describe('zero-waste article route', () => {
  it('matches the home card destination with or without a trailing slash', () => {
    expect(isZeroWasteArticlePath(ZERO_WASTE_ARTICLE_PATH)).toBe(true);
    expect(isZeroWasteArticlePath(ZERO_WASTE_ARTICLE_PATH.slice(0, -1))).toBe(true);
  });

  it('keeps the home page and unrelated paths out of the article route', () => {
    expect(isZeroWasteArticlePath('/')).toBe(false);
    expect(isZeroWasteArticlePath(ECO_FRIENDLY_ARTICLE_PATH)).toBe(false);
  });
});

describe('dairy article route', () => {
  it('matches the home card destination with or without a trailing slash', () => {
    expect(isDairyArticlePath(DAIRY_ARTICLE_PATH)).toBe(true);
    expect(isDairyArticlePath(DAIRY_ARTICLE_PATH.slice(0, -1))).toBe(true);
  });

  it('keeps the home page and unrelated paths out of the article route', () => {
    expect(isDairyArticlePath('/')).toBe(false);
    expect(isDairyArticlePath(ZERO_WASTE_ARTICLE_PATH)).toBe(false);
  });
});

describe('about page route', () => {
  it('matches the about destination with or without a trailing slash', () => {
    expect(isAboutPagePath(ABOUT_PAGE_PATH)).toBe(true);
    expect(isAboutPagePath(ABOUT_PAGE_PATH.slice(0, -1))).toBe(true);
  });

  it('keeps the home page and article route out of the about page', () => {
    expect(isAboutPagePath('/')).toBe(false);
    expect(isAboutPagePath(ECO_FRIENDLY_ARTICLE_PATH)).toBe(false);
  });
});

describe('product page routes', () => {
  it('matches natural pantry and dairy product destinations', () => {
    expect(isNaturalPantryProductPath(NATURAL_PANTRY_PRODUCT_PATH)).toBe(true);
    expect(isNaturalPantryProductPath(NATURAL_PANTRY_PRODUCT_PATH.slice(0, -1))).toBe(true);
    expect(isDairyProductPath(DAIRY_PRODUCT_PATH)).toBe(true);
  });

  it('recognizes product routes but excludes unrelated pages', () => {
    expect(isProductPagePath(NATURAL_PANTRY_PRODUCT_PATH)).toBe(true);
    expect(isProductPagePath(DAIRY_PRODUCT_PATH)).toBe(true);
    expect(isProductPagePath('/')).toBe(false);
    expect(isProductPagePath('/blog/')).toBe(false);
  });
});
