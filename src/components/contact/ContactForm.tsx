"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { services } from "@/data/services";

interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  message: string;
  website: string; // honeypot — must stay empty
}

const initial: FormData = {
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  service: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (form.website) return; // honeypot triggered — silently drop

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-brand-500 mb-4" />
        <h3
          className="text-xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Message Sent!
        </h3>
        <p className="text-gray-400 text-sm">
          Thanks, {form.name.split(" ")[0]}! We&apos;ll be in touch shortly to confirm your appointment.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initial); }}
          className="mt-6 text-brand-400 text-sm hover:text-brand-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-dark-muted border border-dark-border rounded-sm px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* honeypot: hidden from real users, bots fill it in */}
      <input
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
      />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-gray-400 mb-2 tracking-wide uppercase">
            Name *
          </label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-2 tracking-wide uppercase">
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-gray-400 mb-2 tracking-wide uppercase">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-2 tracking-wide uppercase">
            Vehicle
          </label>
          <input
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            placeholder="2022 Porsche 911"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-2 tracking-wide uppercase">
          Service Interested In
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>Select a service...</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-2 tracking-wide uppercase">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your vehicle and what you're looking for..."
          className={inputClass}
        />
      </div>

      {error && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-sm px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-4 rounded-sm hover:bg-brand-700 transition-colors tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
        {!loading && <Send size={16} />}
      </button>
    </form>
  );
}
