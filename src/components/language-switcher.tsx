'use client';

import { usePathname, useRouter } from 'next/navigation';
import { languages, languageNames } from '@/i18n/settings';

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    // Replace the language segment in the path
    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPath = segments.join('/');
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="relative inline-flex items-center">
      <select
        value={currentLang}
        onChange={handleLanguageChange}
        className="appearance-none h-10 px-3 pr-9 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-900 dark:text-gray-100 leading-none shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 min-w-[9rem] cursor-pointer"
        aria-label="Select Language"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {languageNames[lang]}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.188l3.71-2.96a.75.75 0 111.04 1.08l-4.24 3.38a.75.75 0 01-.94 0l-4.24-3.38a.75.75 0 01-.02-1.06z" />
      </svg>
    </div>
  );
}
