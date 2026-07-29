"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { getWhatsAppLink, buildOrderMessage } from "@/lib/whatsapp";

export function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQuantity, totalCount } = useCart();

    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let raf: number;
        let timeout: ReturnType<typeof setTimeout>;

        if (isOpen) {
            setMounted(true);
            raf = requestAnimationFrame(() => setVisible(true));
        } else {
            setVisible(false);
            timeout = setTimeout(() => setMounted(false), 300);
        }

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(timeout);
        };
    }, [isOpen]);

    if (!mounted) return null;

    const message = buildOrderMessage(items);

    const subtotal = items.reduce((sum, i) => {
        const numeric = Number(i.price.replace(/[^\d]/g, ""));
        return numeric ? sum + numeric * i.quantity : sum;
    }, 0);
    const hasAskForPrice = items.some((i) => !/\d/.test(i.price));

    return (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
            <button
                aria-label="Close cart"
                onClick={closeCart}
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out ${visible ? "opacity-100" : "opacity-0"
                    }`}
            />

            <aside
                className={`relative w-full max-w-sm h-full bg-white flex flex-col transition-transform duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] ${visible ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="px-6 pt-6 pb-4">
                    <div className="flex items-start justify-between">
                        <h2 className="font-display text-xl font-semibold text-ink">Your Cart</h2>
                        <button
                            onClick={closeCart}
                            aria-label="Close cart"
                            className="w-9 h-9 -mt-1 -mr-1 flex items-center justify-center rounded-full hover:bg-cream text-ink-soft"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <span className="block w-9 h-[3px] bg-primary mt-2 rounded-full" />
                </div>

                <div className="flex-1 overflow-y-auto border-t border-line">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-ink-soft px-6">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M6 6h15l-1.5 9h-12z" />
                                <path d="M6 6 4.5 3H2" />
                                <circle cx="9" cy="20" r="1" />
                                <circle cx="18" cy="20" r="1" />
                            </svg>
                            <p className="text-sm max-w-[220px]">
                                Nothing here yet — tap &ldquo;Add to cart&rdquo; on any dish to start your order.
                            </p>
                        </div>
                    ) : (
                        <ul>
                            {items.map((item) => (
                                <li key={item.name} className="flex gap-4 px-6 py-5 border-b border-line last:border-none">
                                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-cream">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>

                                    <div className="flex-1 min-w-0 flex flex-col">
                                        <div className="flex items-start justify-between gap-3">
                                            <p className="text-sm font-semibold text-ink uppercase tracking-wide leading-snug">
                                                {item.name}
                                            </p>
                                            <p className="text-sm font-semibold text-ink whitespace-nowrap">{item.price}</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex items-center border border-line rounded-md h-8">
                                                <button
                                                    onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                                    className="w-8 h-full flex items-center justify-center text-ink-soft text-lg"
                                                    aria-label={`Decrease ${item.name}`}
                                                >
                                                    −
                                                </button>
                                                <span className="w-6 text-center text-sm text-ink">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                                    className="w-8 h-full flex items-center justify-center text-ink-soft text-lg"
                                                    aria-label={`Increase ${item.name}`}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => removeItem(item.name)}
                                                aria-label={`Remove ${item.name}`}
                                                className="w-8 h-8 flex items-center justify-center text-ink-soft hover:text-primary"
                                            >
                                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                                    <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="px-6 py-5 border-t border-line">
                        <div className="flex justify-between items-baseline">
                            <span className="font-semibold text-ink">
                                Subtotal — {totalCount} item{totalCount > 1 ? "s" : ""}
                            </span>
                            {subtotal > 0 && <span className="font-semibold text-ink">₦{subtotal.toLocaleString("en-NG")}</span>}
                        </div>
                        <p className="text-xs text-ink-soft mt-1">
                            {hasAskForPrice
                                ? "Some items need a price check — total confirmed on WhatsApp."
                                : "Confirm the final total on WhatsApp before payment."}
                        </p>

                        <a
                            href={getWhatsAppLink(message)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeCart}
                            className="mt-4 flex items-center justify-center gap-2 text-center py-3.5 rounded-full font-semibold text-white bg-ink hover:bg-ink/90 transition-colors"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 0 1 6 0v3H9Z" />
                            </svg>
                            Checkout on WhatsApp
                        </a>
                    </div>
                )}
            </aside>
        </div>
    );
}