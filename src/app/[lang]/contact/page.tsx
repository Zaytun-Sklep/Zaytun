import { getDictionary } from '@/i18n/get-dictionary';
import { MapPin, Phone, Clock, Mail, MessageSquare, Navigation } from 'lucide-react';

export default async function ContactPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{dict.contact.title}</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Visit us in Warsaw or get in touch for any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">
                      {dict.common.footer.address}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                      Popularna 50/U4<br />
                      02-473 Warszawa, Poland
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/4vXdJLmeukP1MKey5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors group/link"
                    >
                      <Navigation className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      {dict.contact.openInMaps}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">
                      {dict.common.footer.contact}
                    </h3>
                    <a 
                      href="tel:+48739478507" 
                      className="text-2xl font-semibold text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      +48 739 478 507
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      Available during opening hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white">
                      {dict.common.footer.hours}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Wednesday – Saturday</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">9:00 – 20:00</span>
                      </li>
                      <li className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Sunday</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">9:00 – 19:00</span>
                      </li>
                      <li className="flex items-center justify-between py-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Monday – Tuesday</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">9:00 – 20:00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="sticky top-24 h-[600px] lg:h-[700px] bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.47887654321!2d20.9388888!3d52.2000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719336666666667%3A0x1234567890abcdef!2sPopularna%2050%2FU4%2C%2002-473%20Warszawa!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zaytun Location"
                  className="grayscale-0 hover:grayscale-0 transition-all"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-emerald-600" />
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Feel free to call us or visit our store. Our friendly staff is always ready to help you find the perfect halal products.
            </p>
            <a
              href="tel:+48739478507"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
