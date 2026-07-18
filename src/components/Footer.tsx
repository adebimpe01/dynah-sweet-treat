import { getWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 pb-24 md:pb-10 text-center">
      <p className="font-display text-lg font-semibold text-ink">
        Dynah <span className="text-primary">Sweet Treats</span>
      </p>
      <p className="text-ink-soft text-sm mt-2">
        Ifetedo Campus, UNIOSUN · Thu – Mon, 9am – 5pm
      </p>

      <div className="mt-4 flex justify-center gap-4 text-sm">
        <a 
        
          href={getWhatsAppLink("Hi Dynah Sweet Treats!")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold"
        >
          WhatsApp
        </a>
         <a 
          href="https://www.tiktok.com/@dynahsweettreats09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold"
        >
          TikTok
        </a>
      </div>

      <p className="text-ink-soft text-xs mt-6">
        © {new Date().getFullYear()} Dynah Sweet Treats. All rights reserved.
      </p>
    </footer>
  );
}