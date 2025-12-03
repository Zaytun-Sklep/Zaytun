'use client';

import { useState } from 'react';
import { Product, categories } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { Search, Filter, Plus } from 'lucide-react';

export function ProductList({ products, dict, lang }: { products: Product[]; dict: any; lang: string }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const { addItem } = useCart();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name[lang as keyof typeof product.name]?.toLowerCase().includes(search.toLowerCase()) ||
                          product.name['en-gb']?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder={dict.products.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary-500 outline-none"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Filter className="h-5 w-5 text-gray-400 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                category === cat.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {cat.name[lang as keyof typeof cat.name] || cat.name['en-gb']}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
              {/* Placeholder for image if not available */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-4xl">🥩</span>
              </div>
              {product.isHalal && (
                <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {dict.home.features.halal}
                </span>
              )}
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors">
                  {product.name[lang as keyof typeof product.name] || product.name['en-gb']}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {product.description[lang as keyof typeof product.description] || product.description['en-gb']}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-xl font-bold text-primary-600">
                  {product.price.toFixed(2)} zł
                </span>
                <button
                  onClick={() => addItem(product)}
                  className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                  aria-label={dict.products.addToCart}
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
