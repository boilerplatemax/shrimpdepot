import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-ocean-200 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-bold text-white text-lg mb-2">Shrimp Yard</h3>
          <p className="text-sm text-ocean-300">
            Hobbyist-bred Crystal Red shrimp. Healthy lines, vibrant color.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">Text: 416-704-7634</p>
          <p className="text-sm mt-1 text-ocean-400">Local pickup &mdash; Brampton (Clark &amp; Bramalea)</p>
        </div>
      </div>
      <div className="border-t border-ocean-800 text-center py-4 text-xs text-ocean-400">
        &copy; {new Date().getFullYear()} Shrimp Yard. All rights reserved.
      </div>
    </footer>
  );
}
