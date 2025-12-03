'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X, Sparkles } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';
import { useCart } from '@/lib/cart-context';

export function Header({ lang, dict }: { lang: string; dict: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const isRTL = ['ar', 'fa'].includes(lang);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-secondary-dark/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
          <Link href={`/${lang}`} className={`flex items-center gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 transition-all group-hover:scale-110">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ZAYTUN
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Premium Halal</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
          <Link 
            href={`/${lang}`} 
            className="text-sm font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group"
          >
            {dict.common.nav.home}
            <span className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all`} />
          </Link>
          <Link 
            href={`/${lang}/products`} 
            className="text-sm font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group"
          >
            {dict.common.nav.products}
            <span className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all`} />
          </Link>
          <Link 
            href={`/${lang}/contact`} 
            className="text-sm font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group"
          >
            {dict.common.nav.contact}
            <span className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all`} />
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
          <ThemeToggle dict={dict} />
          <LanguageSwitcher currentLang={lang} />
          <Link 
            href={`/${lang}/cart`} 
            className="relative p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all group"
          >
            <ShoppingCart className="h-5 w-5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            {itemCount > 0 && (
              <span className={`absolute -top-1 ${isRTL ? '-left-1' : '-right-1'} h-5 w-5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-[11px] font-bold text-white flex items-center justify-center shadow-lg animate-pulse`}>
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-6 space-y-6 bg-white dark:bg-secondary-dark animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            <Link 
              href={`/${lang}`} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-base font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
            >
              {dict.common.nav.home}
            </Link>
            <Link 
              href={`/${lang}/products`} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-base font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
            >
              {dict.common.nav.products}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-base font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
            >
              {dict.common.nav.contact}
            </Link>
            <Link 
              href={`/${lang}/cart`} 
              onClick={() => setIsMenuOpen(false)} 
                className={`text-base font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center py-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
            >
              {dict.common.nav.cart}
              {itemCount > 0 && (
                  <span className={`${isRTL ? 'mr-2' : 'ml-2'} h-6 w-6 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-xs font-bold text-white flex items-center justify-center`}>
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <ThemeToggle dict={dict} />
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      )}
    </header>
  );
}
