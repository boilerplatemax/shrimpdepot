const faqs = [
  {
    q: "What are Crystal Red shrimp?",
    a: "Crystal Red Shrimp (CRS) are a selectively bred variety of Caridina cantonensis known for their striking red and white banding. They're one of the most popular and beautiful freshwater shrimp in the hobby.",
  },
  {
    q: "What do they need to thrive?",
    a: "Keep them in stable, cycled freshwater — ideally 68–74°F, pH 6.0–6.8, TDS 100–200. They prefer slightly acidic, soft water. Feed a varied diet (shrimp pellets, blanched veggies, biofilm). Avoid copper-based medications. A sponge filter and some moss or plants go a long way.",
  },
  {
    q: "How do I pick up my order?",
    a: "We're based out of Brampton, near Clark & Bramalea. Text us at 416-704-7634 or email ashapovalov@hotmail.com to arrange a pickup time and get the exact location. You can pay online or pay cash in person — no need to pay ahead of time if you prefer cash.",
  },
  {
    q: "Do you offer refunds?",
    a: "All sales are final — no refunds or returns. We're a small hobbyist operation. We stand behind the quality of every shrimp we sell, so if there's an issue with your order, reach out and we'll work something out.",
  },
  {
    q: "How many should I buy to start a colony?",
    a: "We recommend at least 10 to start. A group of 10–20 gives you a solid gene pool and makes it much more likely you'll see breeding. Our 20-pack is the best value if you're serious about building a colony.",
  },
  {
    q: "Can they live with fish?",
    a: "Small, peaceful fish (like ember tetras or otocinclus) are generally fine. Avoid anything large enough to eat them — most shrimp keepers find the best results in shrimp-only or heavily planted tanks where shrimplets can hide.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold mb-8">Frequently Asked Questions</h1>

      <dl className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
            <dt className="font-semibold text-lg text-gray-900 mb-1">{f.q}</dt>
            <dd className="text-gray-600 text-sm leading-relaxed">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
