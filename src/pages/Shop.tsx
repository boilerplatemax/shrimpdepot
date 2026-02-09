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
          Thank you for your order! Text us at 416-704-7634 or email ashapovalov@hotmail.com to arrange your pickup time.
        </div>
      )}
      {canceled && (
        <div className="mb-8 rounded-xl bg-yellow-50 border border-yellow-200 p-4 text-yellow-800 text-sm text-center">
          Checkout was canceled. No worries — your shrimp will be here when you're ready.
        </div>
      )}

      <h1 className="text-3xl font-extrabold text-center mb-2">Shop Live Shrimp</h1>
      <p className="text-gray-500 text-center mb-10">
        Crystal Red Caridina &mdash; vibrant reds, stunning patterns.
      </p>

      {/* Pickup Instructions */}
      <div className="mb-10 rounded-2xl bg-ocean-50 border-2 border-ocean-200 p-6 text-center">
        <h2 className="text-xl font-bold text-ocean-900 mb-3">How to Get Your Shrimp</h2>
        <p className="text-gray-700 mb-3">
          We're based out of <span className="font-semibold">Brampton, near Clark &amp; Bramalea</span>.
          All orders are <span className="font-semibold">local pickup only</span>.
        </p>
        <p className="text-gray-700 mb-3">
          <span className="font-semibold">Cash accepted!</span> No need to pay online &mdash; you can pay cash when you pick up.
        </p>
        <p className="text-gray-700 mb-4">
          To arrange a pickup time and get the exact location, contact us:
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="sms:4167047634"
            className="inline-flex items-center gap-2 rounded-xl bg-ocean-600 text-white px-5 py-2.5 text-sm font-bold hover:bg-ocean-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
            </svg>
            Text: 416-704-7634
          </a>
          <a
            href="mailto:ashapovalov@hotmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-ocean-600 text-white px-5 py-2.5 text-sm font-bold hover:bg-ocean-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            ashapovalov@hotmail.com
          </a>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-12 rounded-2xl overflow-hidden">
        <img
          src="https://cdn11.bigcommerce.com/s-nzocnvfw4r/images/stencil/500x659/products/406/1459/1Crystal-Red-Shrimp-Caridina-cantonensis-Crystal-Red-1000__24877.1731440283.jpg?c=1"
          alt="Crystal Red Shrimp close-up"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="mt-10 rounded-xl bg-gray-50 border border-gray-200 p-5 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-800 mb-1">Hobbyist Seller Policy</h3>
        <p>
          Shrimp Yard is a hobby operation. All sales are final — no refunds or returns.
          We stand behind the quality of our shrimp. If there's any issue with your order,
          reach out and we'll work out a resolution. See the{' '}
          <a href="/faq" className="text-ocean-600 underline">
            FAQ
          </a>{' '}
          for details.
        </p>
      </div>
    </section>
  );
}
