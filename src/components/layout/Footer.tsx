const Footer = () => (
  <footer className="bg-midnight text-white">
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.18em] text-blue-200">Antonie studio</p>
          <h3 className="text-2xl font-semibold leading-snug">
            Samen een website die strak, snel en schaalbaar is?
          </h3>
          <p className="text-sm text-blue-100/90 max-w-xl">
            Ik ontwerp, bouw en optimaliseer digitale ervaringen. Van landing pages tot portalen en
            webshops, met performance en UX als basis.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-blue-100">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-4 py-2 font-semibold shadow-[0_12px_30px_-18px_rgba(37,99,235,0.6)] transition hover:brightness-105"
            >
              Plan een kennismaking
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 font-semibold text-white hover:bg-white/10"
            >
              Bekijk portfolio
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 text-sm text-slate-200">
          <div className="space-y-3">
            <p className="font-semibold text-white">Navigatie</p>
            <div className="space-y-2">
              <a className="block hover:text-blue-200" href="/">Home</a>
              <a className="block hover:text-blue-200" href="/portfolio">Portfolio</a>
              <a className="block hover:text-blue-200" href="/diensten">Diensten</a>
              <a className="block hover:text-blue-200" href="/#development">Development</a>
              <a className="block hover:text-blue-200" href="/contact">Contact</a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-white">Contact</p>
            <div className="space-y-2">
              <a className="block hover:text-blue-200" href="tel:+31612345678">
                +31 6 12 34 56 78
              </a>
              <p className="text-slate-300">Remote / NL</p>
              <a className="block hover:text-blue-200" href="mailto:contact@tjardoantonie.nl">
                contact@tjardoantonie.nl
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-white">Volgen</p>
            <div className="space-y-2">
              <a className="block hover:text-blue-200" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="block hover:text-blue-200" href="https://www.github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="block hover:text-blue-200" href="https://www.tjardoantonie.nl" target="_blank" rel="noreferrer">
                Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-top border-white/10 pt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-300">
        <span>© {new Date().getFullYear()} Antonie studio. Alle rechten voorbehouden.</span>
        <div className="flex flex-wrap gap-3">
          <a className="hover:text-blue-200" href="/contact">Privacy / afspraken</a>
          <a className="hover:text-blue-200" href="/contact">Support</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
