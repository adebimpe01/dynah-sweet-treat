import Image from "next/image";

export function OurJourney() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="opacity-0 animate-fade-left" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-3xl font-semibold text-ink mb-6">Our Journey</h2>
          <div className="flex flex-col gap-4 text-ink-soft leading-relaxed">
            <p>
              Dynah Sweet Treats started as a small stall on Ifetedo Campus, UNIOSUN —
              cooking food the way it&rsquo;s made at home, not the way it&rsquo;s rushed out
              on a campus corner.
            </p>
            <p>
              What began as plates for hungry students between lectures grew into
              the name people ask for when they want smoky jollof done right,
              a tray for a birthday or celebration, or something warm between classes.
            </p>
            <p>
              The mission hasn&rsquo;t changed: every order is cooked fresh, to order
              no reheated leftovers, no shortcuts. Just food that tastes like
              someone actually made it for you.
            </p>
          </div>
        </div>

        <div
          className="relative aspect-[3/3] rounded-3xl overflow-hidden opacity-0 animate-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          <Image
            src="/images/food/Ewagoyin.jpg"
            alt="Chinese fried rice with chicken, freshly prepared"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}