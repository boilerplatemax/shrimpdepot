import { useState, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  _hp: string; // honeypot
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '', _hp: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (form._hp) return; // honeypot triggered

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in all fields.');
      setStatus('error');
      return;
    }

    if (form.message.length > 2000) {
      setErrorMsg('Message is too long (max 2000 characters).');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '', _hp: '' });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  }

  return (
    <section className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-extrabold mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-8">
        Questions about an order, shrimp care, or local pickup? Drop us a line.
      </p>

      {status === 'success' ? (
        <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-green-800 text-center">
          <p className="font-semibold">Message sent!</p>
          <p className="text-sm mt-1">We'll get back to you as soon as we can.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot — hidden from real users */}
          <input
            type="text"
            name="_hp"
            value={form._hp}
            onChange={(e) => setForm({ ...form, _hp: e.target.value })}
            className="absolute -left-[9999px]"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={200}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              maxLength={2000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition-colors resize-y"
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-coral-600">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full cursor-pointer rounded-xl bg-ocean-600 px-4 py-3 text-sm font-semibold text-white hover:bg-ocean-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:ring-offset-2 transition-colors"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </section>
  );
}
