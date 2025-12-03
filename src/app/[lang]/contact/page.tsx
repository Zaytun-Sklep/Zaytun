import { getDictionary } from '@/i18n/get-dictionary';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default async function ContactPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">{dict.contact.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{dict.common.footer.address}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Popularna 50/U4<br />
                  02-473 Warszawa
                </p>
                <a 
                  href="https://maps.app.goo.gl/4vXdJLmeukP1MKey5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline text-sm mt-2 inline-block"
                >
                  {dict.contact.openInMaps}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{dict.common.footer.contact}</h3>
                <a href="tel:+48739478507" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                  +48 739 478 507
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{dict.common.footer.hours}</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>{dict.contact.hours.wed_sat}</li>
                  <li>{dict.contact.hours.sun}</li>
                  <li>{dict.contact.hours.mon_tue}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-[400px] lg:h-auto bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.47887654321!2d20.9388888!3d52.2000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719336666666667%3A0x1234567890abcdef!2sPopularna%2050%2FU4%2C%2002-473%20Warszawa!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zaytun Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
