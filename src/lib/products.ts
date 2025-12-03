export interface Product {
  id: string;
  name: {
    pl: string;
    [key: string]: string;
  };
  description: {
    pl: string;
    [key: string]: string;
  };
  price: number;
  category: 'beef' | 'lamb' | 'chicken' | 'sausages' | 'cheese' | 'sweets' | 'deli' | 'groceries';
  image: string;
  isHalal: boolean;
  inStock: boolean;
  featured?: boolean;
  unit?: string;
}

export const products: Product[] = [
  // Premium Beef
  {
    id: '1',
    name: { pl: 'Wołowina bez kości Premium', 'en-gb': 'Premium Boneless Beef' },
    description: { pl: 'Najwyższej jakości wołowina od lokalnych gospodarstw. Idealna do steków i pieczeni.', 'en-gb': 'Premium quality beef from local farms. Perfect for steaks and roasts.' },
    price: 52.00,
    category: 'beef',
    image: '/images/beef-boneless.jpg',
    isHalal: true,
    inStock: true,
    featured: true,
    unit: 'kg',
  },
  {
    id: '2',
    name: { pl: 'Stek Ribeye Wołowy', 'en-gb': 'Ribeye Beef Steak' },
    description: { pl: 'Marmurowy stek ribeye z delikatną strukturą i wyjątkowym smakiem.', 'en-gb': 'Marbled ribeye steak with tender texture and exceptional flavor.' },
    price: 68.00,
    category: 'beef',
    image: '/images/ribeye.jpg',
    isHalal: true,
    inStock: true,
    featured: true,
    unit: 'kg',
  },
  {
    id: '3',
    name: { pl: 'Wołowina mielona', 'en-gb': 'Ground Beef' },
    description: { pl: 'Świeżo mielona wołowina, idealna do burgerów i kotletów.', 'en-gb': 'Freshly ground beef, perfect for burgers and meatballs.' },
    price: 38.00,
    category: 'beef',
    image: '/images/ground-beef.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  
  // Premium Lamb
  {
    id: '4',
    name: { pl: 'Jagnięcina - Udziec', 'en-gb': 'Lamb Leg' },
    description: { pl: 'Delikatna jagnięcina, idealna do pieczenia i grillowania.', 'en-gb': 'Tender lamb leg, perfect for roasting and grilling.' },
    price: 72.00,
    category: 'lamb',
    image: '/images/lamb-leg.jpg',
    isHalal: true,
    inStock: true,
    featured: true,
    unit: 'kg',
  },
  {
    id: '5',
    name: { pl: 'Żeberka Jagnięce', 'en-gb': 'Lamb Ribs' },
    description: { pl: 'Soczyste żeberka jagnięce, idealne na grill.', 'en-gb': 'Juicy lamb ribs, ideal for grilling.' },
    price: 58.00,
    category: 'lamb',
    image: '/images/lamb-ribs.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  
  // Premium Poultry
  {
    id: '6',
    name: { pl: 'Kurczak Cały z Wolnego Wybiegu', 'en-gb': 'Free-Range Whole Chicken' },
    description: { pl: 'Świeży kurczak z wolnego wybiegu, naturalnie karmiony.', 'en-gb': 'Fresh free-range chicken, naturally fed.' },
    price: 22.00,
    category: 'chicken',
    image: '/images/chicken-whole.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  {
    id: '7',
    name: { pl: 'Piersi z Kurczaka', 'en-gb': 'Chicken Breast' },
    description: { pl: 'Filety z piersi kurczaka, bez kości i skóry.', 'en-gb': 'Chicken breast fillets, boneless and skinless.' },
    price: 28.00,
    category: 'chicken',
    image: '/images/chicken-breast.jpg',
    isHalal: true,
    inStock: true,
    featured: true,
    unit: 'kg',
  },
  {
    id: '8',
    name: { pl: 'Udka z Kurczaka', 'en-gb': 'Chicken Thighs' },
    description: { pl: 'Soczyste udka z kurczaka, idealne do pieczenia.', 'en-gb': 'Juicy chicken thighs, perfect for roasting.' },
    price: 18.00,
    category: 'chicken',
    image: '/images/chicken-thighs.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  
  // Halal Sausages & Deli
  {
    id: '9',
    name: { pl: 'Kiełbasa Sujuk', 'en-gb': 'Sujuk Sausage' },
    description: { pl: 'Tradycyjna pikantna kiełbasa wołowa z przyprawami.', 'en-gb': 'Traditional spicy beef sausage with spices.' },
    price: 42.00,
    category: 'sausages',
    image: '/images/sujuk.jpg',
    isHalal: true,
    inStock: true,
    featured: true,
    unit: 'kg',
  },
  {
    id: '10',
    name: { pl: 'Kiełbasa Halal Premium', 'en-gb': 'Premium Halal Sausage' },
    description: { pl: 'Wysokiej jakości kiełbasa halal, tradycyjna receptura.', 'en-gb': 'High-quality halal sausage, traditional recipe.' },
    price: 38.00,
    category: 'sausages',
    image: '/images/halal-sausage.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  {
    id: '11',
    name: { pl: 'Kabanosy Halal', 'en-gb': 'Halal Kabanos' },
    description: { pl: 'Chude, suszone kabanosy z mięsa halal.', 'en-gb': 'Lean, dried kabanos from halal meat.' },
    price: 45.00,
    category: 'sausages',
    image: '/images/kabanos.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  
  // Halal Deli Meats
  {
    id: '12',
    name: { pl: 'Szynka Halal', 'en-gb': 'Halal Ham' },
    description: { pl: 'Delikatna szynka z mięsa halal, doskonała na kanapki.', 'en-gb': 'Delicate halal meat ham, perfect for sandwiches.' },
    price: 35.00,
    category: 'deli',
    image: '/images/halal-ham.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  {
    id: '13',
    name: { pl: 'Salami Halal', 'en-gb': 'Halal Salami' },
    description: { pl: 'Aromatyczne salami halal z wołowiny.', 'en-gb': 'Aromatic halal beef salami.' },
    price: 48.00,
    category: 'deli',
    image: '/images/halal-salami.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  {
    id: '14',
    name: { pl: 'Mortadela Halal', 'en-gb': 'Halal Mortadella' },
    description: { pl: 'Klasyczna mortadela z mięsa halal.', 'en-gb': 'Classic mortadella from halal meat.' },
    price: 32.00,
    category: 'deli',
    image: '/images/halal-mortadella.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  
  // Halal Cheese
  {
    id: '15',
    name: { pl: 'Ser Żółty Halal', 'en-gb': 'Halal Yellow Cheese' },
    description: { pl: 'Pyszny ser żółty bez enzymu zwierzęcego, 100% halal.', 'en-gb': 'Delicious yellow cheese without animal rennet, 100% halal.' },
    price: 28.00,
    category: 'cheese',
    image: '/images/halal-cheese.jpg',
    isHalal: true,
    inStock: true,
    featured: true,
    unit: 'kg',
  },
  {
    id: '16',
    name: { pl: 'Ser Feta Halal', 'en-gb': 'Halal Feta Cheese' },
    description: { pl: 'Świeży ser feta, certyfikat halal.', 'en-gb': 'Fresh feta cheese, halal certified.' },
    price: 32.00,
    category: 'cheese',
    image: '/images/halal-feta.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  {
    id: '17',
    name: { pl: 'Ser Mozzarella Halal', 'en-gb': 'Halal Mozzarella' },
    description: { pl: 'Miękki ser mozzarella, idealny do pizzy i sałatek.', 'en-gb': 'Soft mozzarella cheese, perfect for pizza and salads.' },
    price: 26.00,
    category: 'cheese',
    image: '/images/halal-mozzarella.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  
  // Halal Sweets
  {
    id: '18',
    name: { pl: 'Żelki Halal', 'en-gb': 'Halal Gummy Candies' },
    description: { pl: 'Kolorowe żelki bez żelatyny wieprzowej, certyfikowane halal.', 'en-gb': 'Colorful gummies without pork gelatin, halal certified.' },
    price: 15.00,
    category: 'sweets',
    image: '/images/halal-gummies.jpg',
    isHalal: true,
    inStock: true,
    unit: 'opak.',
  },
  {
    id: '19',
    name: { pl: 'Czekolada Halal Premium', 'en-gb': 'Premium Halal Chocolate' },
    description: { pl: 'Ekskluzywna czekolada mleczna, certyfikat halal.', 'en-gb': 'Exclusive milk chocolate, halal certified.' },
    price: 18.00,
    category: 'sweets',
    image: '/images/halal-chocolate.jpg',
    isHalal: true,
    inStock: true,
    featured: true,
    unit: 'szt.',
  },
  {
    id: '20',
    name: { pl: 'Baklava Turecka', 'en-gb': 'Turkish Baklava' },
    description: { pl: 'Tradycyjna baklava z orzechami i miodem, 100% halal.', 'en-gb': 'Traditional baklava with nuts and honey, 100% halal.' },
    price: 35.00,
    category: 'sweets',
    image: '/images/baklava.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
  
  // Groceries
  {
    id: '21',
    name: { pl: 'Oliwa z Oliwek Extra Virgin', 'en-gb': 'Extra Virgin Olive Oil' },
    description: { pl: 'Najwyższej jakości oliwa z oliwek z Turcji.', 'en-gb': 'Highest quality olive oil from Turkey.' },
    price: 45.00,
    category: 'groceries',
    image: '/images/olive-oil.jpg',
    isHalal: true,
    inStock: true,
    unit: 'l',
  },
  {
    id: '22',
    name: { pl: 'Daktyle Medjool', 'en-gb': 'Medjool Dates' },
    description: { pl: 'Słodkie, soczyste daktyle premium z Izraela.', 'en-gb': 'Sweet, juicy premium dates from Israel.' },
    price: 28.00,
    category: 'groceries',
    image: '/images/dates.jpg',
    isHalal: true,
    inStock: true,
    unit: 'kg',
  },
];

export const categories = [
  { id: 'all', name: { pl: 'Wszystkie', 'en-gb': 'All' } },
  { id: 'beef', name: { pl: 'Wołowina', 'en-gb': 'Beef' } },
  { id: 'lamb', name: { pl: 'Jagnięcina', 'en-gb': 'Lamb' } },
  { id: 'chicken', name: { pl: 'Drób', 'en-gb': 'Poultry' } },
  { id: 'sausages', name: { pl: 'Kiełbasy', 'en-gb': 'Sausages' } },
  { id: 'deli', name: { pl: 'Wędliny', 'en-gb': 'Deli Meats' } },
  { id: 'cheese', name: { pl: 'Sery', 'en-gb': 'Cheese' } },
  { id: 'sweets', name: { pl: 'Słodycze', 'en-gb': 'Sweets' } },
  { id: 'groceries', name: { pl: 'Artykuły Spożywcze', 'en-gb': 'Groceries' } },
];
