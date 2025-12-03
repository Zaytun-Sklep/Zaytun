import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary-600 mb-4">ZAYTUN</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {dict.home.hero.subtitle}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{dict.common.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-600 shrink-0" />
                <span>{dict.contact.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-600 shrink-0" />
                <a href="tel:+48739478507" className="hover:text-primary-600">{dict.contact.phone}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{dict.common.footer.hours}</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>{dict.contact.hours.wed_sat}</li>
              <li>{dict.contact.hours.sun}</li>
              <li>{dict.contact.hours.mon_tue}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {dict.common.title}. {dict.common.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
