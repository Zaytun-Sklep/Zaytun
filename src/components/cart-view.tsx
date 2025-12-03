'use client';

import { useCart } from '@/lib/cart-context';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { useState } from 'react';

export function CartView({ dict, lang }: { dict: any; lang: string }) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

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

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert(dict.cart.successMessage);
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-32 space-y-6">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center">
          <ShoppingBag className="h-16 w-16 text-gray-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300">{dict.cart.empty}</h2>
          <p className="text-gray-500 dark:text-gray-400">Start adding some premium halal products!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="group flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
          >
            {/* Product Image */}
            <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <span className="text-4xl">{getCategoryEmoji(item.category)}</span>
            </div>

            {/* Product Details */}
            <div className="flex-grow space-y-2">
              <div>
                <h3 className="font-bold text-xl mb-1">
                  {item.name[lang as keyof typeof item.name] || item.name['en-gb']}
                </h3>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-emerald-600" />
                  <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {item.price.toFixed(2)} zł
                  </span>
                  {item.unit && (
                    <span className="text-sm text-gray-500">/ {item.unit}</span>
                  )}
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                ✓ Halal Certified
              </span>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-xl p-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-bold text-lg">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeItem(item.id)}
              className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all hover:scale-110"
              aria-label={dict.cart.remove}
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-6 sticky top-24">
          <div className="flex items-center gap-3 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Order Summary</h3>
          </div>

          {/* Summary Details */}
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Items ({items.length})</span>
              <span className="font-semibold">{items.reduce((acc, item) => acc + item.quantity, 0)} products</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="font-semibold">{total.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Delivery</span>
              <span className="font-semibold text-emerald-600">Free</span>
            </div>
          </div>

          {/* Total */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">{dict.cart.total}</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {total.toFixed(2)} zł
              </span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group"
            >
              {isCheckingOut ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {dict.cart.processing}
                </span>
              ) : (
                <>
                  {dict.cart.checkout}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                ✓
              </div>
              <span>100% Halal Certified</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                🚚
              </div>
              <span>Free Delivery in Warsaw</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
