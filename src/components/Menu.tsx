"use client";

import { useMemo, useState } from "react";
import { menuItems } from "@/data/menu";
import { MenuCard } from "./MenuCard";

export function Menu() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return menuItems;
    return menuItems.filter((item) => item.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="menu" className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center gap-6 mb-8">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Explore our menu
          </h2>
          <p className="mt-2 text-ink-soft max-w-md mx-auto">
            Freshly made trays, plates, and sides tap any item to add it to your order.
          </p>
        </div>

        <div className="w-full max-w-sm">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full border border-primary/40 rounded-lg px-4 py-2.5 text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-soft text-sm">No dishes match &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <MenuCard key={item.name} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
      )}
    </section>
  );
}