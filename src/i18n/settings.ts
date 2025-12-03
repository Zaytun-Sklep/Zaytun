export const fallbackLng = 'pl';
export const languages = [
  'pl', 'en-gb', 'uk', 'ru', 'tr', 'az', 'tk', 'uz', 'kk', 'ky', 'ka', 'fa', 'ar'
];

export const languageNames: Record<string, string> = {
  pl: 'Polski',
  'en-gb': 'English (UK)',
  uk: 'Українська',
  ru: 'Русский',
  tr: 'Türkçe',
  az: 'Azərbaycan',
  tk: 'Türkmen',
  uz: 'Oʻzbek',
  kk: 'Қазақ',
  ky: 'Кыргызча',
  ka: 'ქართული',
  fa: 'فارسی',
  ar: 'العربية',
};

export const dir = (lang: string) => {
  return ['ar', 'fa'].includes(lang) ? 'rtl' : 'ltr';
};
