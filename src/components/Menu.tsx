import { menuItems } from "@/data/menu";
import { MenuCard } from "./MenuCard";

export function Menu() {
  return (
    <section id="menu" className="px-6 py-12 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl font-semibold text-ink">
          What&rsquo;s cooking today
        </h2>
        <p className="mt-3 text-ink-soft max-w-xl mx-auto">
          Freshly made trays, plates, and sides — tap any item to order straight
          to WhatsApp. Prices vary by size, just ask and we&rsquo;ll sort you out.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuCard
            key={item.name}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}