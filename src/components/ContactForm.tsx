"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("idle");
      setSubmitted(true);
    } catch {
      setStatus("error");
    }
  }

  const whatsappText = `Hi Dynah Sweet Treats! My name is ${name || "___"}.\n\n${message || "___"}`;

  return (
    <section className="px-6 py-16 max-w-xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl font-semibold text-ink mb-3">
          Get in Touch
        </h1>
        <p className="text-ink-soft">
          Questions about an order, a custom cake, or bulk pricing? Fill out the form and we'll get back to you within a few hours.
        </p>
      </div>

      {submitted ? (
        <div className="bg-cream rounded-2xl p-8 text-center">
          <p className="font-semibold text-ink mb-2">Thanks, {name || "friend"}!</p>
          <p className="text-ink-soft mb-6">
            We've received your message and will get back to you soon. Want a faster reply? Tap below to also send it on WhatsApp.
          </p>
          <a
            href={getWhatsAppLink(whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold"
          >
            Send on WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-line rounded-lg px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-line rounded-lg px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-line rounded-lg px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Tell us what you need..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary text-white py-3 rounded-full font-semibold mt-2 disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Continue"}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-600 text-center">
              Something went wrong. Please try again or message us directly.
            </p>
          )}
        </form>
      )}

      <div className="mt-10 pt-8 border-t border-line text-center text-sm text-ink-soft">
        Prefer email or a call?
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 mt-3">
          <a href="mailto:hello@dynahsweettreats.com" className="hover:text-primary">
            modinatbello02@gmail.com
          </a>
          <a href="tel:+2348074349520" className="hover:text-primary">
            +234 807 4349 520
          </a>
        </div>
      </div>
    </section>
  );
}