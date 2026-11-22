// All copy and asset paths mirror the original GreenSprout template.
const img = (n) => `/images/${n}`
const vid = (n) => `/videos/${n}`

export const vision = 'We envision a future where innovation nourishes the earth and enhances sustainable agriculture.'

export const heroSlides = [
  { image: img('hero-img-1.webp'), text: 'Sustainable, organic, and farm-grown, bringing nature’s best straight to you.' },
  { image: img('hero-img-2.webp'), text: 'Supporting healthy soil, happy farmers, and a greener tomorrow, one crop at a time.' },
  { image: img('hero-img-3.webp'), text: 'We believe real food starts with real farming, pure soil, happy plants, and mindful care.' },
]

export const logos = [5, 4, 7, 9, 6, 2].map((n) => img(`Logo-${n}.png`))
export const exploreImages = [2, 3, 4, 5, 6, 7].map((n) => img(`img-${n}.webp`))

export const pillars = [
  { title: 'Mission', text: 'To inspire and educate our community by sharing the values and practices of sustainable organic farming, empowering individuals to live healthier and more  eco-friendly lives.' },
  { title: 'Vision', text: 'To be a leading source of knowledge and inspiration for organic agriculture, fostering a healthier planet and a connected community through hands-on experiences, quality products, and shared learning.eco-friendly lives.' },
  { title: 'Goal', text: 'To provide accessible resources, workshops, and products that make organic living practical, enjoyable, and impactful—for every home, family, and future generation.' },
]

export const processSteps = [
  { title: '1. Soil Prep & Composting', text: 'We begin by testing and preparing the soil using organic compost, green manure, and crop residue. This step ensures the soil stays healthy and fertile without synthetic inputs.', image: img('work-process-img-1.webp'), icon: 'process1' },
  { title: '2. Natural Cultivation', text: 'Crops are grown using organic seeds, bio-fertilizers, and natural pest control methods like neem spray or companion planting — keeping the ecosystem balanced.', image: img('work-process-img-2.webp'), icon: 'process2' },
  { title: '3. Harvesting & Sorting', text: 'Once crops mature, they’re hand-harvested carefully to avoid damage. Fresh produce is then sorted and cleaned naturally — no wax or preservatives.', image: img('work-process-img-3.webp'), icon: 'process3' },
  { title: '4. Packaging & Direct Delivery', text: 'Products are packed in eco-friendly materials and delivered directly to local markets or customers — ensuring freshness and transparency from farm to table.', image: img('work-process-img-4.webp'), icon: 'process4' },
]

const testimonialPool = {
  klara: { name: 'Klara Scarlett', quote: "GreenSprout's organic honey tastes really good. Its sweet, floral flavor enhances everything from tea to toast!", image: img('Testimonial-img-1.webp') },
  sofia: { name: 'Sofia Patel', quote: "GreenSprout's dairy products are a treat! Their yogurt and cheeses add a wholesome taste to meals. Perfect for breakfast or snacks.", image: img('Testimonial-img-2.webp') },
  noah: { name: 'Noah Kim', quote: "I enjoyed GreenSprout's herbal tea! The chamomile and mint blend was calming.", image: img('Testimonial-img-3.webp') },
  marcus: { name: 'Marcus Lee', quote: 'Their kits are fantastic! I now have a thriving herb garden on my balcony.', image: img('Testimonial-img-4.webp') },
  lina: { name: 'Lina Carter', quote: 'The GreenSprout workshop inspired us with organic gardening. We took home seeds and compost to apply in our garden.', image: img('Testimonial-img-5.webp') },
}
const t = (...keys) => keys.map((k) => testimonialPool[k])

export const productSteps = [
  { title: 'Grown the Natural Way', text: 'Our ingredients come from pesticide-free farms where everything grows naturally — just sunshine, soil, and care.' },
  { title: 'Handpicked with Care', text: 'Fruits, seeds, and flowers are carefully harvested at their freshest to lock in full flavor and nutrients.' },
  { title: 'Purely Processed', text: 'We use gentle, traditional methods, no additives or chemicals — to preserve the natural taste.' },
  { title: 'Packed for You', text: 'Each jar and bottle is freshly sealed with love, ready to bring organic purity straight to your pantry.' },
]

const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i)

export const products = [
  {
    slug: 'natural-pantry-items', title: 'Natural Pantry Items',
    tagline: 'Organic honey, jams, oils, and grains — staples for healthy living.',
    card: img('product-img-1-1.webp'), banner: img('Product-banner-1.webp'),
    gallery: range(1, 3).map((n) => img(`Gallery-img-${n}.webp`)),
    video: vid('Product-1_honey.mp4'),
    marquee: [1, 2, 3, 4, 6].map((n) => img(`product-marquee-img-${n}.webp`)),
    testimonials: t('marcus', 'lina', 'klara'),
  },
  {
    slug: 'dairy-animal-products', title: 'Dairy & Animal Products',
    tagline: 'Milk, butter, cheese, and eggs — made with care from healthy animals.',
    card: img('product-img-2-1.webp'), banner: img('Product-banner-2.webp'),
    gallery: range(4, 6).map((n) => img(`Gallery-img-${n}.webp`)),
    video: vid('Product-2_dairy.mp4'),
    marquee: range(7, 12).map((n) => img(`product-marquee-img-${n}.webp`)),
    testimonials: t('sofia', 'lina', 'klara'),
  },
  {
    slug: 'herbal-wellness-products', title: 'Herbal & Wellness Products',
    tagline: 'Herbal teas, dried herbs, and natural extracts — crafted for wellness and a balanced lifestyle.',
    card: img('product-img-3-1.webp'), banner: img('Product-banner-3.webp'),
    gallery: range(7, 9).map((n) => img(`Gallery-img-${n}.webp`)),
    video: vid('Product-3_herbal-tea.mp4'),
    marquee: range(13, 18).map((n) => img(`product-marquee-img-${n}.webp`)),
    testimonials: t('sofia', 'noah', 'klara'),
  },
  {
    slug: 'seeds-farm-goods', title: 'Seeds & Farm Goods',
    tagline: 'Organic seeds, compost, and gardening kits — perfect for home growers and eco-hobbyists.',
    card: img('product-img-4-1.webp'), banner: img('Product-banner-4.webp'),
    gallery: range(10, 12).map((n) => img(`Gallery-img-${n}.webp`)),
    video: vid('Product-4_organic-seeds-1.mp4'),
    marquee: ['19', '20', '21', '22-1', '23', '24'].map((n) => img(`product-marquee-img-${n}.webp`)),
    testimonials: t('noah', 'marcus', 'sofia'),
  },
  {
    slug: 'farm-experiences-kits', title: 'Farm Experiences & Kits',
    tagline: 'Farm tours, workshops, and DIY kits — learn, grow, and experience real organic living.',
    card: img('product-img-5-1.webp'), banner: img('Product-banner-5.webp'),
    gallery: range(13, 15).map((n) => img(`Gallery-img-${n}.webp`)),
    video: vid('Product-5_workshop-1.mp4'),
    marquee: range(25, 30).map((n) => img(`product-marquee-img-${n}.webp`)),
    testimonials: t('marcus', 'lina', 'noah'),
  },
]

export const categories = ['All', 'Organic Farming', 'Farm Life', 'Herbal Wellness', 'Sustainable Living', 'Gardening Tips']

export const posts = [
  { slug: 'eco-friendly-habits-small-changes-for-a-greener-life', title: 'Eco-Friendly Habits: Small Changes for a Greener Life', category: 'Gardening Tips', date: 'November 14, 2025', short: '11-14-2025', image: img('blog-img-7.webp'), inline: img('blog-img-4.webp'), featured: true },
  { slug: 'greensprouts-guide-to-zerowaste-farming', title: 'GreenSprout’s Guide to ZeroWaste Farming', category: 'Organic Farming', date: 'November 14, 2025', short: '11-14-2025', image: img('blog-img-56.webp'), inline: img('blog-img-10.webp') },
  { slug: 'the-journey-of-farm-to-table-dairy-freshness-to-your-home', title: 'The Journey of Farm-to-Table Dairy: Freshness to Your Home', category: 'Farm Life', date: 'November 14, 2025', short: '11-14-2025', image: img('blog-img-4.webp'), inline: img('blog-img-1.webp') },
  { slug: 'starting-your-first-organic-garden-a-beginners-guide', title: 'Starting Your First Organic Garden: A Beginner’s Guide', category: 'Sustainable Living', date: 'November 14, 2025', short: '11-14-2025', image: img('blog-img-3.webp'), inline: img('blog-img-9.webp') },
  { slug: 'top-5-lessons-learned-from-our-organic-farming-workshops', title: 'Top 5 Lessons Learned from Our Organic Farming Workshops', category: 'Herbal Wellness', date: 'November 13, 2025', short: '11-13-2025', image: img('blog-img-1.webp'), inline: img('blog-img-2.webp') },
]

// Shared article body (identical across all posts on the original site)
export const postBody = [
  { type: 'p', text: 'Organic farming isn’t just a way to grow food—it’s a way to reconnect with the earth, ourselves, and each other. At GreenSprout, our workshops are designed to inspire, educate, and empower everyone, from complete beginners to budding green thumbs. Here are the top five lessons our participants have taken home from their time on the farm:' },
  { type: 'h2', text: '1. Healthy Soil Is the Start of Everything' },
  { type: 'p', text: 'The foundation of organic farming is living, nutrient-rich soil. Throughout our workshops, participants learn how composting, mulching, and using natural fertilizers promote healthy soil life. We explore how earthworms, beneficial microbes, and organic matter transform “dirt” into a thriving ecosystem that feeds crops—and ultimately, us.' },
  { type: 'p', text: 'By adopting sober binges, individuals can rediscover their sense of self and their environment, nurturing a feeling of presence and purpose. It’s about selecting experiences that enrich the mind and spirit, rather than dulling them.' },
  { type: 'h2', text: '2. Diversity Matters—In Crops and Techniques' },
  { type: 'p', text: 'Monoculture is out; diversity is in. Our attendees discover the value of planting a variety of crops together, which helps prevent pests, strengthens plant health, and encourages a balanced environment. Intercropping, crop rotation, and companion planting are just a few of the techniques we practice together.' },
  { type: 'img' },
  { type: 'h2', text: '3. Natural Pest Control Is Possible—and Powerful' },
  { type: 'p', text: 'Who needs chemicals when nature provides solutions? We demonstrate ways to manage pests without synthetic pesticides—using beneficial insects, homemade sprays, and physical barriers like nets and mulches. Participants leave amazed at how simple changes can protect plants while nurturing pollinators and helpful wildlife.' },
  { type: 'h2', text: '4. Organic Farming Is for Everyone' },
  { type: 'p', text: 'One key takeaway: you don’t need acres of land to get started. Our workshops show participants how to use home gardens, balconies, or even windowsills to grow organic herbs and vegetables. Practical demonstrations and our gardening kits empower everyone to begin their organic journey, no matter their space or experience level.' },
]

export const contact = {
  phone: '(347) 438-7215',
  email: 'mail@example.com',
  address: '199 Oakway Lane, Woodland Hills, CA 91303',
  hours: 'Everyday from 9:00am to 11:00pm',
  map: 'https://maps.app.goo.gl/wayKmHgbz1sHamUt6',
}

export const images = {
  homeAbout: img('img-1.webp'),
  lineArt: img('vegtable-stroke.webp'),
  awardFrame: img('Frame.svg'),
  homeVideo: vid('Home-video-1-1.mp4'),
  aboutVideo: vid('About-page.mp4'),
  about: [1, 2, 3, 4, 5, 6].map((n) => img(`about-img-${n}.webp`)),
  contact1: img('contact-page-img-1.webp'),
  contact2: img('contact-page-img-2.webp'),
  map: img('map.webp'),
  footer: img('footer-img.webp'),
}
