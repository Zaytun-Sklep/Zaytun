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
    <select
      value={currentLang}
      onChange={handleLanguageChange}
      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer hover:border-emerald-500 transition-colors"
      aria-label="Select Language"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {languageNames[lang]}
        </option>
      ))}
    </select>
  );
}
