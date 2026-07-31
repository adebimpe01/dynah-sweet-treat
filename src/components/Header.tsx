"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useCart } from "@/lib/cart-context";

export function Header() {
    const [open, setOpen] = useState(false);
    const { totalCount, openCart } = useCart();

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-line">
            <div className="flex items-center justify-between px-6 py-5">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Dynah Sweet Treats logo" width={40} height={40} className="rounded-full" />
                    <span className="font-display text-xl font-semibold text-ink">
                        Dynah <span className="text-primary">Sweet Treats</span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-ink-soft">
                    <a href="/#Home" className="hover:text-primary">Home</a>
                    <a href="/#menu" className="hover:text-primary">Menu</a>
                    <a href="/about" className="hover:text-primary">About us</a>
                    <a href="/contact" className="hover:text-primary">Contact</a>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={openCart}
                        aria-label={`Open cart${totalCount > 0 ? `, ${totalCount} item${totalCount > 1 ? "s" : ""}` : ""}`}
                        className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream text-ink"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 6h15l-1.5 9h-12z" />
                            <path d="M6 6 4.5 3H2" />
                            <circle cx="9" cy="20" r="1" />
                            <circle cx="18" cy="20" r="1" />
                        </svg>
                        {totalCount > 0 && (
                            <span className="absolute top-0.5 right-0.5 bg-primary text-white text-[10px] leading-none min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                                {totalCount}
                            </span>
                        )}
                    </button>

                    <a
                        href={getWhatsAppLink("Hi Dynah Sweet Treats! I'd like to place an order.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:inline-block bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm"
                    >
                        Order Now
                    </a>

                    <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="lg:hidden p-2">
                        {open ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 6h18M3 12h18M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {open && (
                <nav className="lg:hidden flex flex-col px-6 pb-4 gap-3 text-sm font-medium text-ink-soft">
                    <a href="/#Home" onClick={() => setOpen(false)} className="py-2">Home</a>
                    <a href="/#menu" onClick={() => setOpen(false)} className="py-2">Menu</a>
                    <a href="/about" onClick={() => setOpen(false)} className="py-2">About</a>
                    <a href="/contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
                    <a
                        href={getWhatsAppLink("Hi Dynah Sweet Treats! I'd like to place an order.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white text-center py-3 rounded-full font-semibold"
                    >
                        Order Now
                    </a>
                </nav>
            )}
        </header>
    );
}