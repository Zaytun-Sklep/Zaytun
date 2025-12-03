import Link from 'next/link';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Sparkles } from 'lucide-react';

export function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 border-t border-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  ZAYTUN
                </span>
                <span className="text-sm text-emerald-400">Premium Halal Products</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              {dict.home.hero.subtitle}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mr-3" />
              {dict.common.footer.contact}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                  {dict.contact.address}
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="tel:+48739478507" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {dict.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mr-3" />
              {dict.common.footer.hours}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{dict.contact.hours.wed_sat}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{dict.contact.hours.sun}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{dict.contact.hours.mon_tue}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} {dict.common.title}. {dict.common.footer.rights}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
