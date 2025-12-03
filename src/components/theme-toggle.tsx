'use client';

import { useTheme } from '@/lib/theme-context';
import { useEffect, useState } from 'react';

export function ThemeToggle({ dict }: { dict: any }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Determine the system preference
  const systemTheme = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  // Get available options based on current theme
  const getOptions = () => {
    if (theme === 'system') {
      // If system, show system and the opposite of system preference
      return [
        { value: 'system', label: `⚙️ ${dict.common.theme.system}` },
        { value: systemTheme === 'dark' ? 'light' : 'dark', label: systemTheme === 'dark' ? `☀️ ${dict.common.theme.light}` : `🌙 ${dict.common.theme.dark}` }
      ];
    } else {
      // If light or dark, show current and system
      return [
        { value: theme, label: theme === 'light' ? `☀️ ${dict.common.theme.light}` : `🌙 ${dict.common.theme.dark}` },
        { value: 'system', label: `⚙️ ${dict.common.theme.system}` }
      ];
    }
  };

  const options = getOptions();

  return (
    <div className="relative inline-flex items-center">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
        className="appearance-none h-10 px-3 pr-9 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-900 dark:text-gray-100 leading-none shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 min-w-[9rem] cursor-pointer"
        aria-label="Select Theme"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
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
