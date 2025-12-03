'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';
import { useCart } from '@/lib/cart-context';

export function Header({ lang, dict }: { lang: string; dict: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-secondary-dark/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-600">ZAYTUN</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href={`/${lang}`} className="text-sm font-medium hover:text-primary-600 transition-colors">
            {dict.common.nav.home}
          </Link>
          <Link href={`/${lang}/products`} className="text-sm font-medium hover:text-primary-600 transition-colors">
            {dict.common.nav.products}
          </Link>
          <Link href={`/${lang}/contact`} className="text-sm font-medium hover:text-primary-600 transition-colors">
            {dict.common.nav.contact}
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle dict={dict} />
          <LanguageSwitcher currentLang={lang} />
          <Link href={`/${lang}/cart`} className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary-600 text-[10px] font-bold text-white flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-white dark:bg-secondary-dark">
          <nav className="flex flex-col space-y-4">
            <Link href={`/${lang}`} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium">
              {dict.common.nav.home}
            </Link>
            <Link href={`/${lang}/products`} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium">
              {dict.common.nav.products}
            </Link>
            <Link href={`/${lang}/contact`} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium">
              {dict.common.nav.contact}
            </Link>
            <Link href={`/${lang}/cart`} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium flex items-center">
              {dict.common.nav.cart}
              {itemCount > 0 && (
                <span className="ml-2 h-5 w-5 rounded-full bg-primary-600 text-xs font-bold text-white flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
          <div className="flex flex-col space-y-4 pt-4 border-t">
            <div className="flex justify-between items-center">
              <ThemeToggle dict={dict} />
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
