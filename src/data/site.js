// ------------------------------------------------------------------
// Central content for Cleanly. Realistic placeholder business data.
// ------------------------------------------------------------------

export const company = {
  name: 'Cleanly',
  tagline: 'Laundry & Dry Cleaning',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  whatsappHref: 'https://wa.me/919876543210',
  email: 'support@cleanly.in',
  emailHref: 'mailto:support@cleanly.in',
  address: 'Sector 45, Gurgaon, Haryana 122003',
  hours: 'Mon – Sat, 8AM – 8PM',
  socials: [
    { label: 'Instagram', href: '#', icon: 'Instagram' },
    { label: 'Facebook', href: '#', icon: 'Facebook' },
    { label: 'WhatsApp', href: 'https://wa.me/919876543210', icon: 'MessageCircle' },
    { label: 'YouTube', href: '#', icon: 'Youtube' },
    { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
  ],
}

// Unsplash laundry / textile imagery (lightweight, realistic)
const img = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  heroBasket: img('1582735689369-4fe89db7114c', 1000),
  foldedStack: img('1517677208171-0bc6725a3e60', 1000),
  washing: img('1545173168-9f1947eebb7f', 700),
  dryClean: img('1489274495757-95c7c837b101', 700),
  ironing: img('1489274495757-95c7c837b101', 700),
  shoes: img('1595950653106-6c9ebd614d3a', 700),
  bedding: img('1522771739844-6a9f6d5f14af', 700),
  staff: img('1556905055-8f358a7a47b2', 900),
  worker: img('1489274495757-95c7c837b101', 900),
  van: img('1601599963565-b7ba29c8e2a9', 900),
  towels: img('1616627561950-9f746e330187', 900),
}

export const highlights = [
  { icon: 'Truck', title: 'Free Pickup & Delivery' },
  { icon: 'ShieldCheck', title: 'Premium Fabric Care' },
  { icon: 'Clock', title: 'Quick Turnaround' },
]

export const services = [
  {
    slug: 'washing-folding',
    icon: 'Shirt',
    title: 'Washing & Folding',
    short: 'Perfectly clean and neatly folded clothes.',
    desc: 'Everyday clothes washed with care and neatly folded, ready to wear.',
    price: '₹149',
    unit: '/ kg',
    image: img('1604335399105-a0c585fd81a1', 700),
    features: ['Gentle machine wash', 'Neat folding', 'Fabric-safe detergents', 'Same-day options'],
  },
  {
    slug: 'dry-cleaning',
    icon: 'Sparkles',
    title: 'Dry Cleaning',
    short: 'Gentle care for your premium fabrics.',
    desc: 'Gentle and effective cleaning for premium and delicate fabrics.',
    price: '₹299',
    unit: '/ kg',
    image: img('1489274495757-95c7c837b101', 700),
    features: ['Solvent-based clean', 'Delicate fabric care', 'Stain treatment', 'Pressed & packed'],
  },
  {
    slug: 'ironing',
    icon: 'Flame',
    title: 'Ironing Service',
    short: 'Crisp, wrinkle-free clothes.',
    desc: 'Crisp, wrinkle-free clothes pressed and ready to wear.',
    price: '₹199',
    unit: '/ kg',
    image: img('1620332372374-f108c53d2e03', 700),
    features: ['Steam pressing', 'Crease-free finish', 'Hung or folded', 'Careful handling'],
  },
  {
    slug: 'bedding-curtains',
    icon: 'BedDouble',
    title: 'Bedding & Curtains',
    short: 'Deep cleaning for a healthier home.',
    desc: 'Deep cleaning for bedsheets, blankets, quilts and curtains.',
    price: '₹199',
    unit: '/ kg',
    image: img('1522771739844-6a9f6d5f14af', 700),
    features: ['Large-load capacity', 'Dust & allergen removal', 'Fresh fragrance', 'Careful drying'],
  },
  {
    slug: 'saree-ethnic',
    icon: 'Gem',
    title: 'Saree & Ethnic Wear',
    short: 'Expert care for designer & ethnic outfits.',
    desc: 'Expert care for designer, wedding and delicate ethnic outfits.',
    price: '₹349',
    unit: '/ piece',
    image: img('1610030469983-98e550d6193c', 700),
    features: ['Hand-finished care', 'Embellishment safe', 'Roll packing', 'Colour protection'],
  },
  {
    slug: 'shoe-cleaning',
    icon: 'Footprints',
    title: 'Shoe Cleaning',
    short: 'Give your shoes a fresh new look.',
    desc: 'Professional cleaning for all types of footwear.',
    price: '₹299',
    unit: '/ pair',
    image: img('1595950653106-6c9ebd614d3a', 700),
    features: ['Deep clean & deodorise', 'Sole restoration', 'Leather conditioning', 'Laces refreshed'],
  },
  {
    slug: 'towel-linen',
    icon: 'Layers',
    title: 'Towel & Linen Care',
    short: 'Fresh, soft and hygienically clean.',
    desc: 'Fresh, soft and hygienically cleaned towels and linens.',
    price: '₹149',
    unit: '/ kg',
    image: img('1616627561950-9f746e330187', 700),
    features: ['Anti-bacterial wash', 'Softener finish', 'High-heat drying', 'Neatly folded'],
  },
  {
    slug: 'express-laundry',
    icon: 'Zap',
    title: 'Express Laundry',
    short: 'Quick cleaning for your busy days.',
    desc: 'Quick cleaning for your last-minute needs, delivered fast.',
    price: '₹349',
    unit: '/ kg',
    image: img('1604335399105-a0c585fd81a1', 700),
    features: ['Within 24 hours', 'Priority handling', 'Same quality care', 'Live updates'],
  },
]

export const whyChoose = [
  { icon: 'Truck', title: 'Doorstep Pickup & Delivery' },
  { icon: 'Wallet', title: 'Affordable Pricing' },
  { icon: 'Sparkles', title: 'Professional Cleaning' },
  { icon: 'Clock', title: 'Quick Turnaround' },
  { icon: 'ShieldCheck', title: 'Fabric Care Experts' },
  { icon: 'Leaf', title: 'Hygienic & Safe Cleaning' },
]

export const steps = [
  {
    n: 1,
    icon: 'CalendarClock',
    title: 'Schedule a Pickup',
    desc: 'Book online or call us to schedule a convenient pickup time at your doorstep.',
  },
  {
    n: 2,
    icon: 'WashingMachine',
    title: 'We Clean Your Clothes',
    desc: 'Our experts carefully clean, wash, dry and iron your clothes using premium products.',
  },
  {
    n: 3,
    icon: 'Truck',
    title: 'Get Fresh Clothes Delivered',
    desc: 'Sit back and relax while we deliver your fresh, clean clothes to your doorstep.',
  },
]

export const processSteps = [
  { n: 1, icon: 'ShoppingBag', title: 'Pickup', desc: 'We collect your laundry from your doorstep.' },
  { n: 2, icon: 'Search', title: 'Inspection', desc: 'We check fabric type, stains and care instructions.' },
  { n: 3, icon: 'WashingMachine', title: 'Cleaning', desc: 'Washed using premium detergents and advanced methods.' },
  { n: 4, icon: 'Flame', title: 'Drying & Ironing', desc: 'Dried and ironed for a fresh, wrinkle-free finish.' },
  { n: 5, icon: 'ShieldCheck', title: 'Quality Check', desc: 'Every item is checked for cleanliness and finishing.' },
  { n: 6, icon: 'Truck', title: 'Delivery', desc: 'We deliver your fresh laundry on time to your doorstep.' },
]

export const plans = [
  {
    name: 'Basic',
    subtitle: 'Everyday Essentials',
    price: '₹149',
    unit: '/ kg',
    popular: false,
    features: ['Washing & Folding', 'Basic Stain Removal', 'Standard Detergent', 'Pickup & Delivery', '2–3 Days Turnaround'],
  },
  {
    name: 'Standard',
    subtitle: 'Perfect for Regular Care',
    price: '₹299',
    unit: '/ kg',
    popular: true,
    features: ['Washing, Folding & Ironing', 'Advanced Stain Removal', 'Premium Detergent & Fabric Care', 'Pickup & Delivery', '2–3 Days Turnaround'],
  },
  {
    name: 'Premium',
    subtitle: 'Special Care for Your Wardrobe',
    price: '₹499',
    unit: '/ kg',
    popular: false,
    features: ['Dry Cleaning / Special Care', 'Fabric Protection', 'Steam Ironing', 'Premium Fragrance', 'Express Turnaround (24–48 Hrs)'],
  },
]

export const serviceWisePricing = [
  { title: 'Washing & Folding', price: '₹149', unit: '/ kg' },
  { title: 'Dry Cleaning', price: '₹299', unit: '/ kg' },
  { title: 'Ironing Service', price: '₹199', unit: '/ kg' },
  { title: 'Bedding & Curtains', price: '₹199', unit: '/ kg' },
  { title: 'Shoe Cleaning', price: '₹299', unit: '/ pair' },
  { title: 'Express Laundry', price: '₹349', unit: '/ pair' },
]

export const addOns = [
  { icon: 'Sparkles', title: 'Stain Removal', price: '+ ₹50 / kg' },
  { icon: 'Flame', title: 'Steam Ironing', price: '+ ₹50 / kg' },
  { icon: 'Gem', title: 'Premium Fragrance', price: '+ ₹30 / kg' },
  { icon: 'Footprints', title: 'Shoe Cleaning', price: '+ ₹199 / pair' },
  { icon: 'Layers', title: 'Curtain Cleaning', price: '+ ₹99 / kg' },
  { icon: 'BedDouble', title: 'Bedsheet Cleaning', price: '+ ₹99 / kg' },
]

export const compareRows = [
  { feature: 'Washing & Folding', basic: true, standard: true, premium: true },
  { feature: 'Ironing', basic: false, standard: true, premium: true },
  { feature: 'Dry Cleaning', basic: false, standard: false, premium: true },
  { feature: 'Stain Removal', basic: 'Basic', standard: 'Advanced', premium: 'Special Care' },
  { feature: 'Detergent', basic: 'Standard', standard: 'Premium', premium: 'Premium + Fabric Protection' },
  { feature: 'Pickup & Delivery', basic: true, standard: true, premium: true },
  { feature: 'Turnaround Time', basic: '2–3 Days', standard: '2–3 Days', premium: '24–48 Hours' },
  { feature: 'Fragrance', basic: false, standard: false, premium: true },
]

export const stats = [
  { value: '5,000+', label: 'Happy Customers' },
  { value: '3+', label: 'Years of Experience' },
  { value: '15+', label: 'Trained Professionals' },
  { value: '10+', label: 'Areas Covered' },
]

export const testimonials = [
  {
    name: 'Priya Sharma',
    city: 'Gurgaon',
    rating: 5,
    text: 'Excellent service! My clothes are always fresh and neatly folded. Pickup and delivery is super convenient.',
    avatar: img('1494790108377-be9c29b29330', 200),
  },
  {
    name: 'Rohit Mehta',
    city: 'Delhi',
    rating: 5,
    text: 'Very professional and reliable. Great quality cleaning and affordable prices. Highly recommended!',
    avatar: img('1500648767791-00dcc994a43e', 200),
  },
  {
    name: 'Ananya Verma',
    city: 'Noida',
    rating: 5,
    text: 'My curtains and bedding look brand new! Cleanly has made laundry so easy for me.',
    avatar: img('1438761681033-6461ffad8d80', 200),
  },
  {
    name: 'Karan Singh',
    city: 'Gurgaon',
    rating: 5,
    text: 'The express service saved me before a big trip. Clothes came back spotless in under 24 hours.',
    avatar: img('1507003211169-0a1dd7228f2d', 200),
  },
  {
    name: 'Meera Nair',
    city: 'Delhi',
    rating: 4,
    text: 'Love how they handle my sarees with such care. Trustworthy and consistent every single time.',
    avatar: img('1544005313-94ddf0286df2', 200),
  },
  {
    name: 'Arjun Kapoor',
    city: 'Noida',
    rating: 5,
    text: 'Friendly staff, on-time delivery and genuinely fresh results. This is how laundry should be.',
    avatar: img('1633332755192-727a05c4013d', 200),
  },
]

export const faqCategories = [
  {
    category: 'Booking & Pickup',
    items: [
      { q: 'How does pickup and delivery work?', a: 'Simply schedule a pickup online or by phone. Our team collects your laundry at your chosen time slot and delivers it fresh and clean back to your doorstep.' },
      { q: 'How do I schedule a pickup?', a: 'You can book through our website, the “Book a Pickup” button, or by calling our support line. Choose a date and time that suits you.' },
      { q: 'Can I schedule a recurring pickup?', a: 'Yes. We offer weekly and fortnightly recurring pickups so you never have to think about laundry again.' },
      { q: 'What if I’m not available at the pickup time?', a: 'No problem — you can reschedule easily from your confirmation message, or leave your bag with a trusted person or concierge.' },
    ],
  },
  {
    category: 'Services & Care',
    items: [
      { q: 'What is the turnaround time?', a: 'Standard turnaround is 2–3 days. Express laundry is delivered within 24 hours where available.' },
      { q: 'How do you handle delicate fabrics?', a: 'Delicate and premium fabrics are inspected individually and cleaned using gentle, fabric-appropriate methods by our specialists.' },
      { q: 'Do you offer express laundry services?', a: 'Yes, our Express Laundry service returns your clothes within 24 hours for last-minute needs.' },
      { q: 'How are my clothes cleaned?', a: 'Clothes are sorted, pre-treated for stains, washed with premium detergents, dried, ironed and quality-checked before delivery.' },
    ],
  },
  {
    category: 'Pricing & Payments',
    items: [
      { q: 'How is the pricing calculated?', a: 'Most services are priced per kilogram, while specialised items like shoes and sarees are priced per piece. See our Pricing page for full details.' },
      { q: 'What payment methods do you accept?', a: 'We accept UPI, cards, wallets and cash on delivery where applicable.' },
      { q: 'Are there any hidden charges?', a: 'None. Pickup and delivery are free, and all prices are transparent and listed upfront.' },
      { q: 'Do you offer discounts for bulk orders?', a: 'Yes, we offer special pricing for bulk and corporate orders. Get in touch for a custom quote.' },
    ],
  },
]

export const offers = [
  {
    icon: 'Percent',
    title: '20% Off Your First Order',
    desc: 'New to Cleanly? Enjoy a flat 20% discount on your very first pickup.',
    code: 'CLEAN20',
    tag: 'New Customers',
    accent: 'brand',
  },
  {
    icon: 'Users',
    title: 'Family Package',
    desc: 'Save more on large weekly loads with our family laundry bundle.',
    code: 'FAMILY15',
    tag: 'Best Value',
    accent: 'ink',
  },
  {
    icon: 'Gift',
    title: 'Referral Rewards',
    desc: 'Refer a friend and you both get ₹100 credit on your next order.',
    code: 'REFER100',
    tag: 'Refer & Earn',
    accent: 'brand',
  },
  {
    icon: 'GraduationCap',
    title: 'Student Discount',
    desc: 'Show a valid student ID and get 10% off every order, all year round.',
    code: 'STUDENT10',
    tag: 'Students',
    accent: 'ink',
  },
  {
    icon: 'Snowflake',
    title: 'Seasonal Special',
    desc: 'Winter wardrobe refresh — 25% off blankets, quilts and heavy wear.',
    code: 'WINTER25',
    tag: 'Limited Time',
    accent: 'brand',
  },
  {
    icon: 'Repeat',
    title: 'Subscription Saver',
    desc: 'Subscribe to weekly pickups and save 15% on every single order.',
    code: 'WEEKLY15',
    tag: 'Subscribe',
    accent: 'ink',
  },
]

export const serviceLocations = [
  { area: 'Sector 45, Gurgaon', type: 'Head Office' },
  { area: 'Sector 52, Gurgaon', type: 'Pickup & Drop Point' },
  { area: 'DLF Phase 1, Gurgaon', type: 'Service Center' },
  { area: 'Golf Course Road', type: 'Service Center' },
  { area: 'Sector 56, Gurgaon', type: 'Pickup & Drop Point' },
  { area: 'Sohna Road', type: 'Pickup & Drop Point' },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

// Footer "Quick Links" — kept intentionally minimal.
export const footerQuickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const footerServices = [
  { label: 'Washing & Folding', to: '/services' },
  { label: 'Dry Cleaning', to: '/services' },
  { label: 'Ironing Service', to: '/services' },
  { label: 'Bedding & Curtains', to: '/services' },
  { label: 'Shoe Cleaning', to: '/services' },
  { label: 'Express Laundry', to: '/services' },
]
