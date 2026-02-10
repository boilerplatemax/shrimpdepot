import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder'
);

interface ProductDef {
  id: string;
  name: string;
  price: number;
  perShrimp: number;
  count: number;
  description: string;
  priceId: string;
  paymentLink: string;
  popular?: boolean;
  image: string;
}

export const PRODUCTS: ProductDef[] = [
  {
    id: '10-pack',
    name: 'Crystal Red 10-Pack',
    price: 40,
    perShrimp: 4.0,
    count: 10,
    description:
      'Perfect starter colony. 10 hand-selected Crystal Red shrimp — vibrant reds, healthy and active.',
    priceId: import.meta.env.VITE_STRIPE_PRICE_10 || 'price_placeholder_10',
    paymentLink: 'https://buy.stripe.com/4gM4gz8rk7Jl2Pb0Ey7Vm00',
    image: 'https://aquaticarts.com/cdn/shop/products/Crystal-Red-Shrimp-Small-1.jpg?v=1635964674&width=1080',
  },
  {
    id: '20-pack',
    name: 'Crystal Red 20-Pack',
    price: 70,
    perShrimp: 3.5,
    count: 20,
    description:
      'Best value for a thriving colony. 20 Crystal Red shrimp with a mix of males and females for breeding.',
    priceId: import.meta.env.VITE_STRIPE_PRICE_20 || 'price_placeholder_20',
    paymentLink: 'https://buy.stripe.com/7sY3cv22W0gTcpLaf87Vm01',
    popular: true,
    image: 'https://aquaticarts.com/cdn/shop/products/Crystal-Red-Shrimp-Small-6.jpg?v=1635964675&width=1080',
  },
];

export type Product = ProductDef;

export async function redirectToCheckout(priceId: string) {
  const stripe = await stripePromise;
  if (!stripe) {
    alert('Stripe failed to load. Please try again.');
    return;
  }

  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    successUrl: `${window.location.origin}/shop?success=true`,
    cancelUrl: `${window.location.origin}/shop?canceled=true`,
  });

  if (error) {
    alert(error.message);
  }
}
