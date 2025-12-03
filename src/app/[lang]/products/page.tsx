import { getDictionary } from '@/i18n/get-dictionary';
import { products } from '@/lib/products';
import { ProductList } from '@/components/product-list';

export default async function ProductsPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{dict.products.title}</h1>
      <ProductList products={products} dict={dict} lang={lang} />
    </div>
  );
}
