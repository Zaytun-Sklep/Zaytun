import { languages, dir } from '@/i18n/settings';
import { getDictionary } from '@/i18n/get-dictionary';
import { Providers } from '@/components/providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CookieConsent } from '@/components/cookie-consent';

// Ensure static params are generated only for valid languages
export async function generateStaticParams() {
  const languages = [
    'en-gb','pl','tr','ar','fa','ru','az','ka','kk','ky','tk','uk','uz'
  ]
  return languages.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div dir={dir(lang)} className="min-h-screen flex flex-col">
      <Providers>
        <Header lang={lang} dict={dict} />
        <main className="flex-grow">{children}</main>
        <Footer dict={dict} />
        <CookieConsent />
      </Providers>
    </div>
  );
}
