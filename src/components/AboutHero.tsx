import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function AboutHero() {
  return (
    <section className="relative px-6 py-16 md:py-24 max-w-6xl mx-auto overflow-hidden min-h-screen flex items-center">

      <div
        className="hidden lg:block absolute top-12 left-2 w-60 h-60 rounded-full overflow-hidden drop-shadow-lg opacity-0 animate-drop-top-left"
        style={{ animationDelay: "0.1s" }}
      >
        <Image
          src="/images/ingredients/green-peas.jpg"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="hidden lg:block absolute top-12 right-4 w-60 h-60 rounded-full overflow-hidden drop-shadow-lg opacity-0 animate-drop-top-right"
        style={{ animationDelay: "0.25s" }}
      >
        <Image
          src="/images/ingredients/red-pepper.jpg"
          alt=""
          aria-hidden="true"
          width={220}
          height={220}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="hidden lg:block absolute bottom-24 left-30 w-50 h-50 rounded-full overflow-hidden drop-shadow-lg opacity-0 animate-drop-bottom-left"
        style={{ animationDelay: "0.4s" }}
      >
        <Image
          src="/images/ingredients/carrot.jpg"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="hidden lg:block absolute bottom-24 right-40 w-50 h-50 rounded-full overflow-hidden drop-shadow-lg opacity-0 animate-drop-bottom-right"
        style={{ animationDelay: "0.55s" }}
      >
        <Image
          src="/images/ingredients/cabbage.jpg"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1
          className="font-display text-3xl md:text-5xl font-semibold text-ink leading-tight opacity-0 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Every Plate Feels Like Home
        </h1>
        <p
          className="mt-5 text-ink-soft text-lg opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Dynah Sweet Treats is about more than food it&rsquo;s bold Nigerian
          flavor, made fresh, served with care, right on Ifetedo Campus.
        </p>
        <a
          href={getWhatsAppLink("Hi Dynah Sweet Treats! I'd like to place an order.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors opacity-0 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          Order Now
        </a>
      </div>
    </section>
  );
}