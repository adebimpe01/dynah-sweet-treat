export function MissionVision() {
  return (
    <section className="px-6 py-30 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-14">
        <div
          className="bg-primary/5 rounded-3xl p-10 md:p-14 opacity-0 animate-fade-left"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <circle cx="12" cy="12" r="3" />
              <path d="M4 12c1.5-3 4.5-5 8-5s6.5 2 8 5c-1.5 3-4.5 5-8 5s-6.5-2-8-5Z" opacity="0.5" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-semibold text-ink mb-4">Our Mission</h3>
          <p className="text-ink-soft leading-relaxed text-lg">
            To serve fresh, well-seasoned Nigerian food that tastes like home —
            made to order, every time, for every student on campus.
          </p>
        </div>

        <div
          className="bg-primary/5 rounded-3xl p-10 md:p-14 opacity-0 animate-fade-left"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-semibold text-ink mb-4">Our Vision</h3>
          <p className="text-ink-soft leading-relaxed text-lg">
            To be the first name every student on Ifetedo Campus thinks of
            when they want a proper meal between classes.
          </p>
        </div>
      </div>
    </section>
  );
}