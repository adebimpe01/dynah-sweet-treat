"use client";

import { useMemo, useState } from "react";
import { menuItems } from "@/data/menu";
import { MenuCard } from "./MenuCard";

const CATEGORIES = ["All", "Food", "Drinks", "Food Tray"] as const;

export function Menu() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesQuery = !q || item.name.toLowerCase().includes(q);
      const matchesCategory =
        category === "All" || item.category?.toLowerCase() === category.toLowerCase();
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <section id="menu" className="px-6 py-24 md:py-30 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Explore our menu
          </h2>
          <p className="mt-2 text-ink-soft max-w-md">
            Freshly made trays, plates, and sides tap any item to add it to your order.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full lg:w-auto lg:items-end">
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  category === cat
                    ? "bg-primary text-white border-primary"
                    : "border-primary/40 text-ink-soft hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full lg:w-64 border border-primary/40 rounded-lg px-4 py-2.5 text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-soft text-sm">
          No dishes match {query ? `“${query}”` : "this filter"}.
        </p>
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