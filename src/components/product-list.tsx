'use client';

import { useState } from 'react';
import { Product, categories } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { Search, Filter, Plus, Star } from 'lucide-react';

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

  const getCategoryEmoji = (cat: string) => {
    const emojiMap: Record<string, string> = {
      beef: '🥩',
      lamb: '🍖',
      chicken: '🍗',
      sausages: '🌭',
      deli: '🥓',
      cheese: '🧀',
      sweets: '🍬',
      groceries: '🛒',
    };
    return emojiMap[cat] || '🏪';
  };

  return (
    <div className="space-y-8">
      {/* Enhanced Filters */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={dict.products.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-base"
            />
          </div>
          
          {/* Category Filters */}
          <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            <Filter className="h-5 w-5 text-gray-400 shrink-0 hidden lg:block" />
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all transform hover:scale-105 ${
                    category === cat.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {cat.id !== 'all' && <span className="mr-1.5">{getCategoryEmoji(cat.id)}</span>}
                  {cat.name[lang as keyof typeof cat.name] || cat.name['en-gb']}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </div>
      </div>

      {/* Product Grid - Premium Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
          >
            {/* Product Image */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {getCategoryEmoji(product.category)}
              </div>
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isHalal && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                    ✓ Halal
                  </span>
                )}
                {product.featured && (
                  <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </span>
                )}
              </div>

              {!product.inStock && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                    {dict.products.outOfStock}
                  </span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 flex-1">
                    {product.name[lang as keyof typeof product.name] || product.name['en-gb']}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {product.description[lang as keyof typeof product.description] || product.description['en-gb']}
                </p>
              </div>

              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {product.price.toFixed(2)} zł
                  </span>
                  {product.unit && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      per {product.unit}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => addItem(product)}
                  disabled={!product.inStock}
                  className={`p-3 rounded-xl transition-all ${
                    product.inStock
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 hover:scale-110 shadow-lg hover:shadow-emerald-500/30'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                  aria-label={dict.products.addToCart}
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">No products found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
