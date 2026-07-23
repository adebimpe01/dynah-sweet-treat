import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
    return (
        <section className="grid md:grid-cols-2 gap-8 items-center px-6 py-12 md:py-20 max-w-6xl mx-auto">
            <div>
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink-soft leading-tight">
                    Better food, <span className="text-primary italic">better meal.</span>
                </h1>
                <p className="mt-4 text-ink-soft text-lg">
                    Best smoky jollof vendor in FTD — order on WhatsApp for pickup or delivery.
                </p>
                <p className="mt-3 text-ink-soft">
                    From everyday jollof and noodles to birthday and celebration food trays,
                    every order is made fresh and packed with care — no rush, no shortcuts.
                </p>
                <a
                    href={getWhatsAppLink("Hi Dynah Sweet Treats! I'd like to place an order.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold"
                >
                    Order on WhatsApp
                </a>
                <p className="mt-3 text-sm text-ink-soft">
                    Same-day pickup available · Delivery across FTD
                </p>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                    src="/images/hero.jpg"
                    alt="Smoky jollof rice with chicken and plantain"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section >
    );
}