export const HOME_PAGE_PATH = '/';
export const ABOUT_PAGE_PATH = '/about/';
export const BLOG_PAGE_PATH = '/blog';
export const CONTACT_PAGE_PATH = '/contact/';
export const TERMS_PAGE_PATH = '/terms-conditions/';
export const ECO_FRIENDLY_ARTICLE_PATH = '/eco-friendly-habits-small-changes-for-a-greener-life/';
export const ZERO_WASTE_ARTICLE_PATH = '/greensprouts-guide-to-zerowaste-farming/';
export const DAIRY_ARTICLE_PATH = '/the-journey-of-farm-to-table-dairy-freshness-to-your-home/';
export const FIRST_ORGANIC_GARDEN_ARTICLE_PATH = '/starting-your-first-organic-garden-a-beginners-guide/';
export const ORGANIC_FARMING_WORKSHOPS_ARTICLE_PATH = '/top-5-lessons-learned-from-our-organic-farming-workshops/';
export const NATURAL_PANTRY_PRODUCT_PATH = '/product/natural-pantry-items/';
export const DAIRY_PRODUCT_PATH = '/product/dairy-animal-products/';
export const HERBAL_PRODUCT_PATH = '/product/herbal-wellness-products/';
export const SEEDS_PRODUCT_PATH = '/product/seeds-farm-goods/';
export const EXPERIENCES_PRODUCT_PATH = '/product/farm-experiences-kits/';

export function isAboutPagePath(pathname: string): boolean {
  const aboutPath = ABOUT_PAGE_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === aboutPath;
}

export function isBlogPagePath(pathname: string): boolean {
  const blogPath = BLOG_PAGE_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === blogPath;
}

export function isContactPagePath(pathname: string): boolean {
  const contactPath = CONTACT_PAGE_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === contactPath;
}

export function isTermsPagePath(pathname: string): boolean {
  const termsPath = TERMS_PAGE_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === termsPath;
}

export function isEcoFriendlyArticlePath(pathname: string): boolean {
  const articlePath = ECO_FRIENDLY_ARTICLE_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === articlePath;
}

export function isZeroWasteArticlePath(pathname: string): boolean {
  const articlePath = ZERO_WASTE_ARTICLE_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === articlePath;
}

export function isDairyArticlePath(pathname: string): boolean {
  const articlePath = DAIRY_ARTICLE_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === articlePath;
}

export function isFirstOrganicGardenArticlePath(pathname: string): boolean {
  const articlePath = FIRST_ORGANIC_GARDEN_ARTICLE_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === articlePath;
}

export function isOrganicFarmingWorkshopsArticlePath(pathname: string): boolean {
  const articlePath = ORGANIC_FARMING_WORKSHOPS_ARTICLE_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === articlePath;
}

export function isNaturalPantryProductPath(pathname: string): boolean {
  const productPath = NATURAL_PANTRY_PRODUCT_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === productPath;
}

export function isDairyProductPath(pathname: string): boolean {
  const productPath = DAIRY_PRODUCT_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === productPath;
}

export function isHerbalProductPath(pathname: string): boolean {
  const productPath = HERBAL_PRODUCT_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === productPath;
}

export function isSeedsProductPath(pathname: string): boolean {
  const productPath = SEEDS_PRODUCT_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === productPath;
}

export function isExperiencesProductPath(pathname: string): boolean {
  const productPath = EXPERIENCES_PRODUCT_PATH.replace(/\/+$/, '');
  return pathname.replace(/\/+$/, '') === productPath;
}

export function isProductPagePath(pathname: string): boolean {
  return (
    isNaturalPantryProductPath(pathname) ||
    isDairyProductPath(pathname) ||
    isHerbalProductPath(pathname) ||
    isSeedsProductPath(pathname) ||
    isExperiencesProductPath(pathname)
  );
}
