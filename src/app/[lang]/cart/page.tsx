import { getDictionary } from '@/i18n/get-dictionary';
import { CartView } from '@/components/cart-view';

export default async function CartPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{dict.cart.title}</h1>
      <CartView dict={dict} lang={lang} />
    </div>
  );
}
