'use client';

import { useCart } from '@/lib/cart-context';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export function CartView({ dict, lang }: { dict: any; lang: string }) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

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
      <div className="text-center py-24 space-y-4">
        <div className="text-6xl">🛒</div>
        <h2 className="text-2xl font-bold">{dict.cart.empty}</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-2xl">🥩</span>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg">
                {item.name[lang as keyof typeof item.name] || item.name['en-gb']}
              </h3>
              <p className="text-primary-600 font-bold">
                {item.price.toFixed(2)} zł
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
              aria-label={dict.cart.remove}
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-6 sticky top-24">
          <h3 className="text-xl font-bold">{dict.cart.title}</h3>
          <div className="flex justify-between items-center text-lg font-bold">
            <span>{dict.cart.total}</span>
            <span className="text-primary-600">{total.toFixed(2)} zł</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCheckingOut ? dict.cart.processing : dict.cart.checkout}
          </button>
        </div>
      </div>
    </div>
  );
}
