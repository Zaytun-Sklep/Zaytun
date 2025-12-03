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
    router.push(segments.join('/'));
  };

  return (
    <select
      value={currentLang}
      onChange={handleLanguageChange}
      className="bg-transparent border border-gray-300 dark:border-gray-700 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
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
