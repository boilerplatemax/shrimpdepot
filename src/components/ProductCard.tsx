import { redirectToCheckout, type Product } from '../utils/stripe';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={`relative rounded-2xl border p-6 flex flex-col gap-4 transition-shadow hover:shadow-lg ${
        product.popular
          ? 'border-ocean-400 ring-2 ring-ocean-200'
          : 'border-gray-200'
      }`}
    >
      {product.popular && (
        <span className="absolute -top-3 left-4 bg-ocean-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Best Value
        </span>
      )}

      <h3 className="text-xl font-bold">{product.name}</h3>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-ocean-700">${product.price}</span>
        <span className="text-sm text-gray-500">
          ${product.perShrimp.toFixed(2)}/shrimp
        </span>
      </div>

      <p className="text-gray-600 text-sm flex-1">{product.description}</p>

      <button
        onClick={() => redirectToCheckout(product.priceId)}
        className="w-full cursor-pointer rounded-xl bg-ocean-600 px-4 py-3 text-sm font-semibold text-white hover:bg-ocean-700 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:ring-offset-2 transition-colors"
      >
        Buy {product.count} Shrimp &mdash; ${product.price}
      </button>
    </div>
  );
}
