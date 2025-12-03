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
  category: 'beef' | 'lamb' | 'chicken' | 'sausages' | 'other';
  image: string;
  isHalal: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: { pl: 'Wołowina bez kości', 'en-gb': 'Boneless Beef' },
    description: { pl: 'Świeża wołowina najwyższej jakości.', 'en-gb': 'Premium quality fresh beef.' },
    price: 45.00,
    category: 'beef',
    image: '/images/beef-boneless.jpg',
    isHalal: true,
    inStock: true,
  },
  {
    id: '2',
    name: { pl: 'Jagnięcina (udziec)', 'en-gb': 'Lamb Leg' },
    description: { pl: 'Delikatna jagnięcina, idealna do pieczenia.', 'en-gb': 'Tender lamb, perfect for roasting.' },
    price: 65.00,
    category: 'lamb',
    image: '/images/lamb-leg.jpg',
    isHalal: true,
    inStock: true,
  },
  {
    id: '3',
    name: { pl: 'Kurczak cały', 'en-gb': 'Whole Chicken' },
    description: { pl: 'Świeży kurczak z wolnego wybiegu.', 'en-gb': 'Fresh free-range chicken.' },
    price: 18.00,
    category: 'chicken',
    image: '/images/chicken-whole.jpg',
    isHalal: true,
    inStock: true,
  },
  {
    id: '4',
    name: { pl: 'Kiełbasa Sujuk', 'en-gb': 'Sujuk Sausage' },
    description: { pl: 'Tradycyjna pikantna kiełbasa wołowa.', 'en-gb': 'Traditional spicy beef sausage.' },
    price: 35.00,
    category: 'sausages',
    image: '/images/sujuk.jpg',
    isHalal: true,
    inStock: true,
  },
];

export const categories = [
  { id: 'all', name: { pl: 'Wszystkie', 'en-gb': 'All' } },
  { id: 'beef', name: { pl: 'Wołowina', 'en-gb': 'Beef' } },
  { id: 'lamb', name: { pl: 'Jagnięcina', 'en-gb': 'Lamb' } },
  { id: 'chicken', name: { pl: 'Drób', 'en-gb': 'Poultry' } },
  { id: 'sausages', name: { pl: 'Wędliny', 'en-gb': 'Sausages' } },
];
