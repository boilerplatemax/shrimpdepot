const faqs = [
  {
    q: "What are Bloody Mary shrimp?",
    a: "Bloody Mary shrimp are a variety of Neocaridina davidi with deep, translucent red coloring throughout their entire body \u2014 not just the shell. They\u2019re hardy, easy to care for, and one of the most striking red shrimp available.",
  },
  {
    q: "What do they need to thrive?",
    a: "Keep them in stable, cycled freshwater \u2014 ideally 68\u201378\u00B0F, pH 6.5\u20137.5, TDS 150\u2013250. Feed a varied diet (shrimp pellets, blanched veggies, biofilm). Avoid copper-based medications. A sponge filter and some moss or plants go a long way.",
  },
  {
    q: "How do you ship shrimp?",
    a: "We ship via USPS Priority in insulated boxes with breather bags and heat/cold packs as needed. Local pickup is also available \u2014 just reach out through the contact page to arrange it.",
  },
  {
    q: "What\u2019s your live arrival guarantee?",
    a: "If any shrimp arrive dead on arrival (DOA), send us a clear photo of the unopened bag within 2 hours of delivery. We\u2019ll arrange a credit or reship for the affected shrimp. The guarantee requires someone to be home to receive the package on the delivery date.",
  },
  {
    q: "Do you offer refunds?",
    a: "All sales are final \u2014 no refunds or returns. We\u2019re a small hobbyist operation and can\u2019t absorb return shipping or re-acclimation. Our DOA policy covers transit losses. Once the shrimp are acclimated to your tank, they\u2019re in your care.",
  },
  {
    q: "How many should I buy to start a colony?",
    a: "We recommend at least 10 to start. A group of 10\u201320 gives you a solid gene pool and makes it much more likely you\u2019ll see breeding. Our 20-pack is the best value if you\u2019re serious about building a colony.",
  },
  {
    q: "Can they live with fish?",
    a: "Small, peaceful fish (like ember tetras or otocinclus) are generally fine. Avoid anything large enough to eat them \u2014 most shrimp keepers find the best results in shrimp-only or heavily planted tanks where shrimplets can hide.",
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
