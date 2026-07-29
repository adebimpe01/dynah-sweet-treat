export function About() {
  return (
    <section id="about" className="bg-cream px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-primary/5 rounded-3xl p-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M12 22s7-7.58 7-12.5S16.42 2 12 2 5 4.86 5 9.5 12 22 12 22Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </div>
            <p className="font-display text-lg font-semibold text-ink mb-1">Location</p>
            <p className="text-ink-soft">Ifetedo Campus, UNIOSUN</p>
          </div>

          <div className="bg-primary/5 rounded-3xl p-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
            </div>
            <p className="font-display text-lg font-semibold text-ink mb-1">Hours</p>
            <p className="text-ink-soft">Thu – Mon, 9am – 5pm</p>
          </div>

          <div className="bg-primary/5 rounded-3xl p-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M3 12h9l-2-4M12 12l2 4H3" />
                <circle cx="6" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
                <path d="M12 12h4l3 4h-2" />
              </svg>
            </div>
            <p className="font-display text-lg font-semibold text-ink mb-1">Pickup &amp; Delivery</p>
            <p className="text-ink-soft">Both available on campus</p>
          </div>
        </div>
      </div>
    </section>
  );
}