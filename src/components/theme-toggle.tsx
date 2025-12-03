'use client';

import { useTheme } from '@/lib/theme-context';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle({ dict }: { dict: any }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2 border border-gray-300 dark:border-gray-700 rounded-lg p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-1 rounded ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
        aria-label={dict.common.theme.light}
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-1 rounded ${theme === 'system' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
        aria-label={dict.common.theme.system}
      >
        <Monitor size={16} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-1 rounded ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
        aria-label={dict.common.theme.dark}
      >
        <Moon size={16} />
      </button>
    </div>
  );
}
