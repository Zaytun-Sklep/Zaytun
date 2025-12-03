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
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer hover:border-emerald-500 transition-colors"
      aria-label="Select Theme"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
