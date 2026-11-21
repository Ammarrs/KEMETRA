// All copy and image paths for the KEMETRA home page (taken from the Figma "Desktop / Home" design).

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Explore Map', href: '#map' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Stories', href: '#stories' },
];

// Era tags: style classes for the pill badge + the accent colour used for links.
export const ERAS = {
  pharaonic: { label: 'Pharaonic', badge: 'bg-ink text-gold', accent: 'text-gold' },
  coptic: { label: 'Coptic', badge: 'bg-terracotta text-papyrus', accent: 'text-terracotta' },
  islamic: { label: 'Islamic', badge: 'bg-teal text-papyrus', accent: 'text-teal' },
};

export const QUICK_LINKS = [
  { icon: 'pin', label: 'Explore by place', href: '#map' },
  { icon: 'hourglass', label: 'Travel through time', href: '#timeline' },
  { icon: 'headphones', label: 'Listen more closely', href: '#stories' },
];

export const FEATURED_STORIES = [
  {
    id: 'giza',
    era: 'pharaonic',
    title: 'Giza: a horizon in stone',
    excerpt:
      'Look beyond the familiar silhouette to the landscape, craft and memory of the plateau.',
    image: '/images/giza-story.jpg',
    alt: 'The pyramids of Giza rising above the desert',
  },
  {
    id: 'hanging-church',
    era: 'coptic',
    title: 'A sanctuary above the city',
    excerpt:
      'Enter the Hanging Church, where carved wood, light and devotion shape a quiet world.',
    image: '/images/hanging-church-story.jpg',
    alt: 'Interior of the Hanging Church with carved wood and hanging lamps',
  },
  {
    id: 'sultan-hassan',
    era: 'islamic',
    title: 'The art of the courtyard',
    excerpt:
      'Read the architecture of Sultan Hassan through its vast arches and intimate details.',
    image: '/images/sultan-hassan-story.jpg',
    alt: 'The courtyard of the Sultan Hassan Mosque-Madrasa',
  },
];

export const HERITAGE_LENSES = [
  {
    id: 'pharaonic',
    era: 'pharaonic',
    title: 'Monuments of imagination',
    description:
      'Temples, tombs and landscapes shaped by ancient ways of seeing the world.',
    image: '/images/abu-simbel-heritage.jpg',
    alt: 'The colossal facade of Abu Simbel',
  },
  {
    id: 'coptic',
    era: 'coptic',
    title: 'A heritage of devotion',
    description:
      'Churches, icons and enduring traditions woven into the fabric of Egypt.',
    image: '/images/hanging-church-heritage.jpg',
    alt: 'A Coptic church nave with columns and iconostasis',
  },
  {
    id: 'islamic',
    era: 'islamic',
    title: 'Geometry, light & life',
    description:
      'Mosques, historic streets and the artistry of a city in conversation with its past.',
    image: '/images/sultan-hassan-heritage.jpg',
    alt: 'A historic Cairo courtyard with a central ablution fountain',
  },
];

export const PLACES = [
  {
    id: 'philae',
    region: 'Agilkia Island · Aswan',
    name: 'Philae Temple',
    era: 'pharaonic',
    image: '/images/philae-temple.jpg',
    alt: 'Philae Temple reflected in the Nile',
  },
  {
    id: 'hanging-church',
    region: 'Old Cairo · Cairo',
    name: 'The Hanging Church',
    era: 'coptic',
    image: '/images/hanging-church-place.jpg',
    alt: 'The nave of the Hanging Church',
  },
  {
    id: 'sultan-hassan',
    region: 'Historic Cairo · Cairo',
    name: 'Sultan Hassan',
    era: 'islamic',
    image: '/images/sultan-hassan-place.jpg',
    alt: 'The vast courtyard of Sultan Hassan',
  },
];

export const TIMELINE = [
  { id: 'old-kingdom', title: 'Old Kingdom', subtitle: 'The pyramid landscape' },
  { id: 'new-kingdom', title: 'New Kingdom', subtitle: 'Temples along the Nile' },
  { id: 'coptic-egypt', title: 'Coptic Egypt', subtitle: 'Faith, art and community' },
  { id: 'islamic-egypt', title: 'Islamic Egypt', subtitle: 'The city as a living archive' },
];
