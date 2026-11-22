import {
  DAIRY_ARTICLE_PATH,
  ECO_FRIENDLY_ARTICLE_PATH,
  FIRST_GARDEN_ARTICLE_PATH,
  WORKSHOPS_ARTICLE_PATH,
  ZERO_WASTE_ARTICLE_PATH,
} from '../routes';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface WorkProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
}

export interface BlogPagePost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface TabItem {
  id: string;
  title: string;
  content: string;
}

export interface HeroSlide {
  id: number;
  badgeNumber: string;
  tag: string;
  quote: string;
  image: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Story', href: '/about/' },
  { label: 'Our Products', href: '#products', hasDropdown: true },
  { label: 'Blog', href: '#blogs' },
];

export const PRODUCT_DROPDOWN = [
  { title: 'Natural Pantry Items', href: '/product/natural-pantry-items/' },
  { title: 'Dairy & Animal Products', href: '/product/dairy-animal-products/' },
  { title: 'Herbal & Wellness Products', href: '/product/herbal-wellness-products/' },
  { title: 'Seeds & Farm Goods', href: '/product/seeds-farm-goods/' },
  { title: 'Farm Experiences & Kits', href: '/product/farm-experiences-kits/' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badgeNumber: '1',
    tag: 'Organic Farming',
    quote: 'Sustainable, organic, and farm-grown, bringing nature’s best straight to you.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/hero-img-1.webp',
  },
  {
    id: 2,
    badgeNumber: '2',
    tag: 'Healthy Living',
    quote: 'Supporting healthy soil, happy farmers, and a greener tomorrow, one crop at a time.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/hero-img-2.webp',
  },
  {
    id: 3,
    badgeNumber: '3',
    tag: 'Pure Harvest',
    quote: 'We believe real food starts with real farming, pure soil, happy plants, and mindful care.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/hero-img-3.webp',
  },
];

export const PARTNER_LOGOS = [
  { name: 'Logo 5', src: 'https://greensprout.kirki.io/wp-content/uploads/2025/10/Logo-5.png' },
  { name: 'Logo 4', src: 'https://greensprout.kirki.io/wp-content/uploads/2025/10/Logo-4.png' },
  { name: 'Logo 7', src: 'https://greensprout.kirki.io/wp-content/uploads/2025/10/Logo-7.png' },
  { name: 'Logo 9', src: 'https://greensprout.kirki.io/wp-content/uploads/2025/10/Logo-9.png' },
  { name: 'Logo 6', src: 'https://greensprout.kirki.io/wp-content/uploads/2025/10/Logo-6.png' },
  { name: 'Logo 2', src: 'https://greensprout.kirki.io/wp-content/uploads/2025/10/Logo-2.png' },
];

export const ABOUT_TABS: TabItem[] = [
  {
    id: 'mission',
    title: 'Mission',
    content:
      'To inspire and educate our community by sharing the values and practices of sustainable organic farming, empowering individuals to live healthier and more eco-friendly lives.',
  },
  {
    id: 'vision',
    title: 'Vision',
    content:
      'To be a leading source of knowledge and inspiration for organic agriculture, fostering a healthier planet and a connected community through hands-on experiences, quality products, and shared learning.eco-friendly lives.',
  },
  {
    id: 'goal',
    title: 'Goal',
    content:
      'To provide accessible resources, workshops, and products that make organic living practical, enjoyable, and impactful—for every home, family, and future generation.',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    title: 'Natural Pantry Items',
    description: 'Organic honey, jams, oils, and grains — staples for healthy living.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/product-img-1-1.webp',
  },
  {
    id: 'prod-2',
    title: 'Dairy & Animal Products',
    description: 'Milk, butter, cheese, and eggs — made with care from healthy animals.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/product-img-2-1.webp',
  },
  {
    id: 'prod-3',
    title: 'Herbal & Wellness Products',
    description: 'Herbal teas, dried herbs, and natural extracts — crafted for wellness and a balanced lifestyle.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/product-img-3-1.webp',
  },
  {
    id: 'prod-4',
    title: 'Seeds & Farm Goods',
    description: 'Organic seeds, compost, and gardening kits — perfect for home growers and eco-hobbyists.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/product-img-4-1.webp',
  },
  {
    id: 'prod-5',
    title: 'Farm Experiences & Kits',
    description: 'Farm tours, workshops, and DIY kits — learn, grow, and experience real organic living.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/product-img-5-1.webp',
  },
];

export const WORK_PROCESS_STEPS: WorkProcessStep[] = [
  {
    stepNumber: 1,
    title: '1. Soil Prep & Composting',
    description:
      'We begin by testing and preparing the soil using organic compost, green manure, and crop residue. This step ensures the soil stays healthy and fertile without synthetic inputs.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/work-process-img-1.webp',
  },
  {
    stepNumber: 2,
    title: '2. Natural Cultivation',
    description:
      'Crops are grown using organic seeds, bio-fertilizers, and natural pest control methods like neem spray or companion planting — keeping the ecosystem balanced.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/work-process-img-2.webp',
  },
  {
    stepNumber: 3,
    title: '3. Harvesting & Sorting',
    description:
      'Once crops mature, they’re hand-harvested carefully to avoid damage. Fresh produce is then sorted and cleaned naturally — no wax or preservatives.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/work-process-img-3.webp',
  },
  {
    stepNumber: 4,
    title: '4. Packaging & Direct Delivery',
    description:
      'Products are packed in eco-friendly materials and delivered directly to local markets or customers — ensuring freshness and transparency from farm to table.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/work-process-img-4.webp',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Eco-Friendly Habits: Small Changes for a Greener Life',
    category: 'Gardening Tips',
    date: 'November 14, 2025',
    excerpt: 'Discover easy, everyday micro-habits that drastically lower kitchen waste, support biological biodiversity, and bring the spirit of nature into your home.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-7.webp',
    link: ECO_FRIENDLY_ARTICLE_PATH,
  },
  {
    id: 'blog-2',
    title: 'GreenSprout’s Guide to ZeroWaste Farming',
    category: 'Organic Farming',
    date: 'November 14, 2025',
    excerpt: 'How closed-loop agriculture transforms biomass trimmings, gray water, and compostable plant fibers into regenerative energy and thriving topsoil.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-56.webp',
    link: ZERO_WASTE_ARTICLE_PATH,
  },
  {
    id: 'blog-3',
    title: 'The Journey of Farm-to-Table Dairy: Freshness to Your Home',
    category: 'Farm Life',
    date: 'November 14, 2025',
    excerpt: 'Explore how gentle pasture-rotation, antibiotic-free herds, and solar-powered cold chains make our butter and artisan milk unmatched in purity.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-4.webp',
    link: DAIRY_ARTICLE_PATH,
  },
  {
    id: 'blog-4',
    title: 'Starting Your First Organic Garden: A Beginner’s Guide',
    category: 'Sustainable Living',
    date: 'November 14, 2025',
    excerpt: 'Organic farming isn’t just a way to grow food—it’s a way to reconnect with the earth, ourselves, and each other. At GreenSprout, our workshops are designed to inspire, educate, and empower everyone.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-3.webp',
    link: FIRST_GARDEN_ARTICLE_PATH,
  },
  {
    id: 'blog-5',
    title: 'Top 5 Lessons Learned from Our Organic Farming Workshops',
    category: 'Herbal Wellness',
    date: 'November 13, 2025',
    excerpt: 'Organic farming isn’t just a way to grow food—it’s a way to reconnect with the earth, ourselves, and each other. At GreenSprout, our workshops are designed to inspire, educate, and empower everyone.',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-1.webp',
    link: WORKSHOPS_ARTICLE_PATH,
  },
];

export const BLOG_PAGE_CATEGORIES = [
  'All',
  'Organic Farming',
  'Farm Life',
  'Herbal Wellness',
  'Sustainable Living',
  'Gardening Tips',
];

export const BLOG_PAGE_POSTS: BlogPagePost[] = [
  {
    id: 'eco-friendly-habits',
    title: 'Eco-Friendly Habits: Small Changes for a Greener Life',
    category: 'Gardening Tips',
    date: '2025-11-14',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-7.webp',
    imageAlt: 'Two people tending to plants indoors',
    href: ECO_FRIENDLY_ARTICLE_PATH,
  },
  {
    id: 'zero-waste-farming',
    title: 'GreenSprout’s Guide to ZeroWaste Farming',
    category: 'Organic Farming',
    date: '2025-11-14',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-56.webp',
    imageAlt: 'Hands working compost into a garden bed',
    href: ZERO_WASTE_ARTICLE_PATH,
  },
  {
    id: 'farm-to-table-dairy',
    title: 'The Journey of Farm-to-Table Dairy: Freshness to Your Home',
    category: 'Farm Life',
    date: '2025-11-14',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-4.webp',
    imageAlt: 'Cookies and milk arranged on a table',
    href: DAIRY_ARTICLE_PATH,
  },
  {
    id: 'first-organic-garden',
    title: 'Starting Your First Organic Garden: A Beginner’s Guide',
    category: 'Sustainable Living',
    date: '2025-11-14',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-3.webp',
    imageAlt: 'A gardener tending to young seedlings',
    href: FIRST_GARDEN_ARTICLE_PATH,
  },
  {
    id: 'organic-farming-workshops',
    title: 'Top 5 Lessons Learned from Our Organic Farming Workshops',
    category: 'Herbal Wellness',
    date: '2025-11-13',
    image: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/blog-img-1.webp',
    imageAlt: 'Participants working with plants at an outdoor workshop',
    href: WORKSHOPS_ARTICLE_PATH,
  },
];

export const DISCOVER_ITEMS = [
  { id: 1, src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/img-2.svg', alt: 'Organic Produce 1' },
  { id: 2, src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/img-3.svg', alt: 'Organic Produce 2' },
  { id: 3, src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/img-4.svg', alt: 'Organic Produce 3' },
  { id: 4, src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/img-5.svg', alt: 'Organic Produce 4' },
  { id: 5, src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/img-6.svg', alt: 'Organic Produce 5' },
  { id: 6, src: 'https://greensprout.kirki.io/wp-content/uploads/2025/11/img-7.svg', alt: 'Organic Produce 6' },
];
