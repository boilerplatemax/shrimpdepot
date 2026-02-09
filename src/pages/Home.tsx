import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../utils/stripe';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <circle cx="200" cy="300" r="300" fill="currentColor" />
            <circle cx="700" cy="100" r="200" fill="currentColor" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 text-center">
          <p className="text-ocean-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Live Freshwater Shrimp
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Bloody Mary Shrimp,
            <br />
            <span className="text-ocean-300">Bred with Care.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ocean-200 max-w-2xl mx-auto">
            Vibrant, hardy, and ready for your tank. Hand-selected from our
            home&nbsp;colony — shipped to your door or available for local pickup.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="rounded-xl bg-white text-ocean-800 px-8 py-3 text-sm font-bold hover:bg-ocean-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ocean-800"
            >
              Shop Live Shrimp
            </Link>
            <Link
              to="/about"
              className="rounded-xl border border-ocean-400 px-8 py-3 text-sm font-semibold text-ocean-200 hover:bg-ocean-800 transition-colors focus:outline-none focus:ring-2 focus:ring-ocean-400"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Quick shop */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">Grab Your Shrimp</h2>
        <p className="text-gray-500 text-center mb-10">Two packs, simple pricing, no surprises.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Trust section */}
      <section className="bg-ocean-50 py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 sm:grid-cols-3 text-center">
          {[
            {
              title: 'Live Arrival Guarantee',
              text: 'We stand behind every shipment. DOA? We make it right — no hassle.',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
            },
            {
              title: 'Care Tips Included',
              text: 'Every order comes with a quick-start guide so your shrimp thrive from day one.',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              ),
            },
            {
              title: 'Pickup & Shipping',
              text: 'Local pickup in the area or insulated priority shipping across the US.',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a3 3 0 01-3-3V7.5a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v6.75m-3 0h6.75m0 0h.375a3 3 0 013 3v.75m-3-3.75V7.5a.75.75 0 01.75-.75h3.128a.75.75 0 01.624.334l2.872 4.307a.75.75 0 01.126.416v2.443a.75.75 0 01-.75.75H19.5m-6.75 0h6.75"
                />
              ),
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3">
              <svg
                className="w-10 h-10 text-ocean-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                {item.icon}
              </svg>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm max-w-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
