export type BlogCategory = 'Mosquitoes' | 'Outdoor Pests' | 'Home Protection';

export interface BlogIndexArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishDate: string;
  datePublished: string;
  readTime: string;
}

export const blogIndexArticles: BlogIndexArticle[] = [
  {
    slug: 'why-our-pest-control-service-takes-56-minutes',
    title: 'Why Our Average Pest Control Service Takes More Than 56 Minutes',
    excerpt: 'See how six exterior passes, garage service, and optional interior treatment make our average visit about 211% longer than an 18-minute benchmark.',
    category: 'Home Protection',
    publishDate: 'November 7, 2026',
    datePublished: '2026-11-07',
    readTime: '8 min read',
  },
  {
    slug: 'pest-free-backyard-party-charlotte-nc',
    title: 'How to Prepare a Pest-Free Yard for Summer Entertaining',
    excerpt: 'Use this one-week Charlotte backyard checklist to reduce mosquitoes, ants, ticks, and wasps before a cookout or outdoor party.',
    category: 'Outdoor Pests',
    publishDate: 'November 6, 2026',
    datePublished: '2026-11-06',
    readTime: '6 min read',
  },
  {
    slug: 'mosquitoes-after-summer-rain-charlotte-nc',
    title: 'Why Mosquitoes Surge After Summer Rain in Charlotte',
    excerpt: 'Learn why Charlotte mosquitoes increase after summer storms, how quickly they develop, and what to check in your yard within 48 hours.',
    category: 'Mosquitoes',
    publishDate: 'November 4, 2026',
    datePublished: '2026-11-04',
    readTime: '6 min read',
  },
  {
    slug: 'does-rain-wash-away-pest-control-treatment',
    title: 'Does Rain Wash Away Pest Control Treatment?',
    excerpt: 'Learn how drying time, application area, granules, and heavy storms affect an exterior pest control treatment.',
    category: 'Home Protection',
    publishDate: 'November 2, 2026',
    datePublished: '2026-11-02',
    readTime: '6 min read',
  },
  {
    slug: 'fire-ants-after-lawn-aeration-nc',
    title: 'Fire Ants After Lawn Aeration: What NC Homeowners Should Know',
    excerpt: 'Why fire ant mounds appear after lawn aeration and how to coordinate safe pest treatment with your lawn-care schedule.',
    category: 'Outdoor Pests',
    publishDate: 'October 31, 2026',
    datePublished: '2026-10-31',
    readTime: '6 min read',
  },
  {
    slug: 'summer-mosquito-control-lake-norman-nc',
    title: 'Summer Mosquito Control Around Lake Norman: A Homeowner Guide',
    excerpt: 'A practical weekly yard checklist, source-control tips, and professional treatment guidance for Lake Norman homeowners.',
    category: 'Mosquitoes',
    publishDate: 'October 29, 2026',
    datePublished: '2026-10-29',
    readTime: '6 min read',
  },
  {
    slug: 'fall-rodent-prevention-charlotte-nc',
    title: 'Fall Rodent Prevention Checklist for Charlotte Homeowners',
    excerpt: 'A step-by-step guide to sealing your Charlotte-area home before mice and rats move indoors for winter.',
    category: 'Home Protection',
    publishDate: 'September 2025',
    datePublished: '2025-09-01',
    readTime: '6 min read',
  },
  {
    slug: 'mosquito-season-charlotte-nc',
    title: 'Mosquito Season in Charlotte, NC: What You Need to Know',
    excerpt: 'Learn Charlotte mosquito season dates, common breeding sites, and how to protect your family during peak activity.',
    category: 'Mosquitoes',
    publishDate: 'June 2025',
    datePublished: '2025-06-01',
    readTime: '4 min read',
  },
  {
    slug: 'tick-protection-charlotte-nc',
    title: 'Tick Protection Guide for Charlotte & Lake Norman Homeowners',
    excerpt: 'Identify common local tick species and learn how to protect your yard, pets, and family throughout the year.',
    category: 'Outdoor Pests',
    publishDate: 'May 2025',
    datePublished: '2025-05-01',
    readTime: '5 min read',
  },
  {
    slug: 'cockroaches-in-clean-homes-charlotte-nc',
    title: 'Why Clean Homes Get Cockroaches (And How to Stop Them)',
    excerpt: 'Even spotless Charlotte homes get cockroaches. Discover how they enter and which prevention steps actually work.',
    category: 'Home Protection',
    publishDate: 'April 2025',
    datePublished: '2025-04-01',
    readTime: '5 min read',
  },
  {
    slug: 'spring-ants-charlotte-nc',
    title: 'Why Ants Invade Charlotte Homes Every Spring',
    excerpt: 'Learn why local ant invasions peak in spring, why some DIY sprays fail, and how to stop a colony from spreading.',
    category: 'Home Protection',
    publishDate: 'March 2025',
    datePublished: '2025-03-01',
    readTime: '5 min read',
  },
  {
    slug: 'diy-vs-professional-pest-control-nc',
    title: 'DIY vs. Professional Pest Control in NC: An Honest Comparison',
    excerpt: 'Compare the real costs, time, effectiveness, and best use cases for DIY and professional pest control.',
    category: 'Home Protection',
    publishDate: 'February 2025',
    datePublished: '2025-02-01',
    readTime: '6 min read',
  },
];
