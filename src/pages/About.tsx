export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold mb-6">About Shrimp Yard</h1>

      <div className="mb-8 rounded-2xl overflow-hidden">
        <img
          src="https://aquaticarts.com/cdn/shop/products/Crystal-Red-Shrimp-Small-12.jpg?v=1635964673&width=1080"
          alt="Crystal Red Shrimp"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
        <p>
          Shrimp Yard started the way most good hobbies do — with one tank, a handful of
          shrimp, and way too many late-night YouTube videos about water parameters.
        </p>
        <p>
          We specialize in <strong>Crystal Red Caridina shrimp</strong> — a striking,
          beautifully patterned variety with bold red and white banding that's endlessly
          fun to watch. Over time, we've selectively bred our colony for intense color,
          strong genetics, and overall health.
        </p>
        <p>
          This isn't a big commercial farm. It's a small home operation run with genuine
          care. Every shrimp is hand-selected from tanks we maintain ourselves.
          We believe in quality over quantity — smaller batches, healthier animals, happier
          customers.
        </p>
        <p>
          Whether you're starting your first colony or adding to an existing one, we want
          your shrimp to thrive in your tank. That's why every order includes a quick-start
          care guide.
        </p>
        <p className="text-ocean-700 font-medium">
          Thanks for supporting a small hobbyist breeder. We're glad you're here.
        </p>
      </div>
    </section>
  );
}
