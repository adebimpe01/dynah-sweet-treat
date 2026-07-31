import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="Home" className="px-4 md:px-6 pt-4 scroll-mt-20">
      <div className="relative w-full aspect-[3/5] sm:aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden max-w-7xl mx-auto">
        <Image
          src="/images/Asun.jpg"
          alt="Smoky jollof rice with chicken and plantain"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-14 max-w-xl">
          <h1
            className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight opacity-0 animate-fade-left"
            style={{ animationDelay: "0.1s" }}
          >
            Better food, <span className="text-primary italic">better meal.</span>
          </h1>
          <p
            className="mt-4 text-white/90 text-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Best smoky jollof vendor in FTD order on WhatsApp for pickup or delivery.
          </p>
          <p
            className="mt-3 text-white/75 text-sm md:text-base max-w-md opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            From everyday jollof and noodles to birthday and celebration food trays,
            every order is made fresh and packed with care no rush, no shortcuts.
          </p>
          <a 
            href={getWhatsAppLink("Hi Dynah Sweet Treats! I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-fit bg-primary text-white px-7 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors opacity-0 animate-fade-left"
            style={{ animationDelay: "0.55s" }}
          >
            Order on WhatsApp
          </a>
          <p
            className="mt-3 text-sm text-white/70 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            Same-day pickup available · Delivery across FTD
          </p>
        </div>
      </div>
    </section>
  );
}