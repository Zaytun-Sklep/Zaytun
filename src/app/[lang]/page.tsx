import { getDictionary } from '@/i18n/get-dictionary';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, Clock } from 'lucide-react';

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
            {dict.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto animate-fade-in-up delay-100">
            {dict.home.hero.subtitle}
          </p>
          <div className="pt-8 animate-fade-in-up delay-200">
            <Link
              href={`/${lang}/products`}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform hover:scale-105"
            >
              {dict.home.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">{dict.home.features.quality}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {dict.home.features.qualityDesc}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">{dict.home.features.halal}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {dict.home.features.halalDesc}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">{dict.home.features.fresh}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {dict.home.features.freshDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
