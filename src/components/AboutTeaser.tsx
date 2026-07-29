import Image from "next/image";
import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="bg-cream px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
          <Image
            src="/images/food/food-tray-1.jpg"
            alt="Fried plantain and smoky jollof rice"
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />

          <div
            className="absolute -inset-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow pointer-events-none mix-blend-multiply"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(0,0,0,0.55), transparent 25%, transparent 50%, rgba(0,0,0,0.55) 75%, transparent 100%)",
            }}
          />
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
            Home-style cooking, made fresh on campus.
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed max-w-md">
            Dynah Sweet Treats started as a small stall on Ifetedo Campus, UNIOSUN,
            and has grown into the go-to spot for students who want a proper,
            well-seasoned meal between classes.
          </p>

          <Link
            href="/about"
            className="group/btn relative mt-7 inline-block w-44 h-12 rounded-full overflow-hidden font-semibold"
          >
            <span className="absolute inset-0 flex items-center justify-center bg-primary text-white transition-transform duration-300 ease-out group-hover/btn:-translate-y-full">
              About us
            </span>
            <span className="absolute inset-0 flex items-center justify-center bg-primary-dark text-white transition-transform duration-300 ease-out translate-y-full group-hover/btn:translate-y-0">
              About us
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}