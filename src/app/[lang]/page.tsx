import { getDictionary } from '@/i18n/get-dictionary';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, Clock, Sparkles, Heart, Truck } from 'lucide-react';
import { products, categories } from '@/lib/products';

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);

  return (
    <div className="space-y-0">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[540px] md:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="relative z-20 container mx-auto px-4 text-center space-y-8 py-20">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
              ✨ {dict.home.features.halal}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-emerald-50 to-white bg-clip-text text-transparent">
              {dict.home.hero.title}
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-emerald-50 max-w-3xl mx-auto animate-fade-in-up delay-100 font-light leading-relaxed px-4">
            {dict.home.hero.subtitle}
          </p>
          
          <div className="pt-6 md:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up delay-200 px-4">
            <Link
              href={`/${lang}/products`}
              className="group inline-flex items-center px-8 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              {dict.home.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
            >
              {dict.common.nav.contact}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-emerald-500/50 transition-all group-hover:scale-110 group-hover:rotate-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{dict.home.features.quality}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {dict.home.features.qualityDesc}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-green-500/50 transition-all group-hover:scale-110 group-hover:rotate-6">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{dict.home.features.halal}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {dict.home.features.halalDesc}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-teal-500/50 transition-all group-hover:scale-110 group-hover:rotate-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{dict.home.features.fresh}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {dict.home.features.freshDesc}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-purple-500/50 transition-all group-hover:scale-110 group-hover:rotate-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{dict.home.features.variety}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {dict.home.features.varietyDesc}
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-orange-500/50 transition-all group-hover:scale-110 group-hover:rotate-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{dict.home.features.trust}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {dict.home.features.trustDesc}
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/50 transition-all group-hover:scale-110 group-hover:rotate-6">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{dict.home.features.delivery}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {dict.home.features.deliveryDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-14 md:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {dict.home?.categories?.title ?? 'Categories'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {dict.home?.categories?.subtitle ?? 'Browse our premium selections'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2 md:px-0">
            {categories.filter(cat => cat.id !== 'all').map((category) => (
              <Link
                key={category.id}
                href={`/${lang}/products?category=${category.id}`}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/30 dark:hover:to-teal-900/30 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-600"
              >
                <div className="text-center space-y-3">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {category.id === 'beef' && '🥩'}
                    {category.id === 'lamb' && '🍖'}
                    {category.id === 'chicken' && '🍗'}
                    {category.id === 'sausages' && '🌭'}
                    {category.id === 'deli' && '🥓'}
                    {category.id === 'cheese' && '🧀'}
                    {category.id === 'sweets' && '🍬'}
                    {category.id === 'groceries' && '🛒'}
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {category.name[lang as keyof typeof category.name] || category.name['en-gb']}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {dict.home?.featured?.title ?? 'Featured Products'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {dict.home?.featured?.subtitle ?? 'Handpicked halal favorites'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/${lang}/products`}
                className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.category === 'beef' && '🥩'}
                    {product.category === 'lamb' && '🍖'}
                    {product.category === 'chicken' && '🍗'}
                    {product.category === 'sausages' && '🌭'}
                    {product.category === 'cheese' && '🧀'}
                    {product.category === 'sweets' && '🍬'}
                  </div>
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    ✓ Halal
                  </span>
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                      {product.name[lang as keyof typeof product.name] || product.name['en-gb']}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {product.description[lang as keyof typeof product.description] || product.description['en-gb']}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        {product.price.toFixed(2)} zł
                      </span>
                      {product.unit && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                          / {product.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${lang}/products`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {dict.products.title}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {dict.home.about.title}
            </h2>
            <p className="text-xl md:text-2xl text-emerald-50 font-light">
              {dict.home.about.subtitle}
            </p>
            <p className="text-lg text-emerald-100 leading-relaxed max-w-3xl mx-auto">
              {dict.home.about.description}
            </p>
            <div className="pt-8">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105 shadow-xl"
              >
                {dict.contact.title}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
