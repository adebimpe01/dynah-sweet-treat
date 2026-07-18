export function About() {
  return (
    <section id="about" className="bg-cream px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl font-semibold text-ink mb-4">
          Home-style cooking, right on campus.
        </h2>
        <p className="text-ink-soft text-lg max-w-2xl mx-auto">
          Dynah Sweet Treats started as a small stall on Ifetedo Campus, UNIOSUN,
          and has grown into the go-to spot for students who want a proper,
          well-seasoned meal between classes.
        </p>
        <p className="text-ink-soft mt-4 max-w-2xl mx-auto">
          Every tray is cooked fresh to order — no reheated leftovers, no
          guesswork. Whether it&rsquo;s a quick plate before a lecture or a food
          tray for a birthday, graduation, or campus event, we treat every
          order like it&rsquo;s going to family.
        </p>
        <p className="text-ink-soft mt-4 max-w-2xl mx-auto">
          Need something to wash it down? We&rsquo;ve also got cold drinks —
          fresh juices, smoothies, and yoghurt drinks, all chilled and ready
          to grab alongside your order.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="font-display text-xl font-semibold text-primary">Location</p>
            <p className="text-ink-soft mt-1">Ifetedo Campus, UNIOSUN</p>
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-primary">Hours</p>
            <p className="text-ink-soft mt-1">Thu – Mon, 9am – 5pm</p>
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-primary">Pickup &amp; Delivery</p>
            <p className="text-ink-soft mt-1">Both available on campus</p>
          </div>
        </div>
      </div>
    </section>
  );
}