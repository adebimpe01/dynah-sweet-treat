"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { getWhatsAppLink } from "@/lib/whatsapp";

type MenuCardProps = {
  name: string;
  price: string;
  image: string;
};

export function MenuCard({ name, price, image }: MenuCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-ink">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(min-width: 768px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient scrim so text stays legible over any photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />

      {/* Title, top-left */}
      <div className="absolute top-0 left-0 right-0 p-4">
        <h3 className="font-display font-extrabold text-white text-xl leading-[1.05] uppercase tracking-tight drop-shadow-sm">
          {name}
        </h3>
      </div>

      {/* Price badge, bottom-left */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-primary text-white font-bold text-lg px-4 py-2 rounded-md shadow-md">
          <span className="text-xs align-top mr-0.5">₦</span>
          {price.replace(/^₦/, "")}
        </div>
      </div>

      {/* Add to cart, bottom-right */}
      <button
        onClick={() => addItem({ name, price, image })}
        aria-label={`Add ${name} to cart`}
        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-md hover:bg-white/90 active:scale-95 transition-all"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </button>

      <a
        href={getWhatsAppLink(`Hi! I'd like to order: ${name} (${price})`)}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-x-4 bottom-16 text-center text-xs text-white/90 underline opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
      >
        Order just this on WhatsApp
      </a>
    </div>
  );
}