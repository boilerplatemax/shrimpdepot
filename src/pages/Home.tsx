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
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-ocean-300 text-sm font-semibold uppercase tracking-widest mb-4">
                Live Freshwater Shrimp
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Crystal Red Shrimp,
                <br />
                <span className="text-ocean-300">Bred with Care.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-ocean-200 max-w-2xl">
                Vibrant, stunning, and ready for your tank. Hand-selected from our
                home&nbsp;colony — available for local pickup.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="rounded-xl bg-ocean-500 text-white px-8 py-3 text-sm font-bold hover:bg-ocean-600 transition-colors focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:ring-offset-2 focus:ring-offset-ocean-900"
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
            <div className="hidden sm:block">
              <img
                src="https://cdn11.bigcommerce.com/s-z6dz2p/images/stencil/1280x1280/products/2181/10415/crystal-red-shrimp__96053.1709950732.jpg?c=2"
                alt="Crystal Red Shrimp"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
              />
            </div>
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

      {/* Gallery strip */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <img src="https://www.shrimp.cz/fotky70036/fotos/_vyr_29_vyr_29Crystal-Red--Caridina-cf--cantonensis--1.jpg" alt="Crystal Red Shrimp close-up" className="rounded-xl w-full h-40 object-cover" />
            <img src="https://www.shrimp.cz/fotky70036/fotos/_vyrp11_29_vyrp11_29Crystal-Red--Caridina-cf--cantonensis--2.jpg" alt="Crystal Red Shrimp on moss" className="rounded-xl w-full h-40 object-cover" />
            <img src="https://www.shrimp.cz/fotky70036/fotos/_vyrp12_29_vyrp12_29Crystal-Red--Caridina-cf--cantonensis--3.jpg" alt="Crystal Red Shrimp pair" className="rounded-xl w-full h-40 object-cover" />
            <img src="https://cdn11.bigcommerce.com/s-z6dz2p/images/stencil/1280x1280/products/2181/10414/IMG_9837_2048x2048__84680.1709950732.jpg?c=2" alt="Crystal Red Shrimp colony" className="rounded-xl w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="bg-ocean-50 py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 sm:grid-cols-3 text-center">
          {[
            {
              title: 'Hobbyist-Bred Quality',
              text: 'Every shrimp is hand-selected from our home colony for vibrant color and strong genetics.',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              ),
            },
            {
              title: 'Beginner Friendly',
              text: 'Crystal Red Shrimp are stunning and rewarding to keep. Care tips included with every order.',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              ),
            },
            {
              title: 'Local Pickup',
              text: 'Based in Brampton (Clark & Bramalea). Text 416-704-7634 or email ashapovalov@hotmail.com to arrange pickup. Cash accepted!',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
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
