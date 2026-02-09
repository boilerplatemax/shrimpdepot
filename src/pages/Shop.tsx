import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../utils/stripe';

export default function Shop() {
  const [params] = useSearchParams();
  const success = params.get('success');
  const canceled = params.get('canceled');

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      {success && (
        <div className="mb-8 rounded-xl bg-green-50 border border-green-200 p-4 text-green-800 text-sm text-center">
          Thank you for your order! We'll be in touch with shipping details soon.
        </div>
      )}
      {canceled && (
        <div className="mb-8 rounded-xl bg-yellow-50 border border-yellow-200 p-4 text-yellow-800 text-sm text-center">
          Checkout was canceled. No worries — your shrimp will be here when you're ready.
        </div>
      )}

      <h1 className="text-3xl font-extrabold text-center mb-2">Shop Live Shrimp</h1>
      <p className="text-gray-500 text-center mb-10">
        Bloody Mary Neocaridina &mdash; vibrant reds, easy to keep.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-gray-50 border border-gray-200 p-5 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-800 mb-1">Hobbyist Seller Policy</h3>
        <p>
          Shrimp Depot is a hobby operation. All sales are final — no refunds or returns.
          We do offer a live arrival guarantee: if shrimp arrive DOA, send us a photo within
          2 hours of delivery and we'll work out a resolution. See the{' '}
          <a href="/faq" className="text-ocean-600 underline">
            FAQ
          </a>{' '}
          for details.
        </p>
      </div>
    </section>
  );
}
