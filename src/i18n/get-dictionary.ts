import type { Locale } from './settings';

const dictionaries = {
  pl: () => import('./locales/pl.json').then((module) => module.default),
  'en-gb': () => import('./locales/en-gb.json').then((module) => module.default),
  uk: () => import('./locales/uk.json').then((module) => module.default),
  ru: () => import('./locales/ru.json').then((module) => module.default),
  tr: () => import('./locales/tr.json').then((module) => module.default),
  az: () => import('./locales/az.json').then((module) => module.default),
  tk: () => import('./locales/tk.json').then((module) => module.default),
  uz: () => import('./locales/uz.json').then((module) => module.default),
  kk: () => import('./locales/kk.json').then((module) => module.default),
  ky: () => import('./locales/ky.json').then((module) => module.default),
  ka: () => import('./locales/ka.json').then((module) => module.default),
  fa: () => import('./locales/fa.json').then((module) => module.default),
  ar: () => import('./locales/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (dictionaries[locale as keyof typeof dictionaries]) {
    return dictionaries[locale as keyof typeof dictionaries]();
  }
  return dictionaries['pl']();
};
