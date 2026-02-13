import { useState, useRef } from "react";
import { Layout } from "../components";

const slides = [
  "/porfolio_front.png",
  "/porfolio_aboutme.png",
  "/portfolio_projects.png",
];

const PortfolioPage = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const delta = dir === "next" ? track.clientWidth : -track.clientWidth;
    track.scrollBy({ left: delta, behavior: "smooth" });
    setIndex((current) =>
      dir === "next"
        ? current === slides.length - 1
          ? 0
          : current + 1
        : current === 0
          ? slides.length - 1
          : current - 1,
    );
  };

  const prev = () => scrollTo("prev");
  const next = () => scrollTo("next");

  return (
    <Layout>
      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl space-y-10">
          {/* Over mij intro boven portfolio */}
          <div className="rounded-3xl border border-soft bg-white p-8 shadow-soft sm:p-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-accent">
              Over mij
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Wie ik ben in het kort
            </h1>
            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr] items-start">
              <div className="space-y-3 text-base leading-relaxed text-slate-800">
                <p>
                  Ik werk als ontwikkelaar en ontwerper die houdt van snelle,
                  heldere websites. Strategie, UX en performance komen altijd
                  samen in mijn trajecten zodat een site niet alleen mooi is
                  maar ook converteert.
                </p>
                <p>
                  Meestal start ik met een korte technische scan en een
                  designrichting. Daarna bouw ik modulair, met oog voor
                  toegankelijkheid en SEO. Zo kunnen we makkelijk
                  doorontwikkelen als je bedrijf groeit.
                </p>
                <p>
                  Hieronder zie je een paar voorbeelden. Voor meer context of
                  cases neem ik je graag mee in een demo-call.
                </p>
              </div>
              <div className="rounded-2xl border border-soft bg-mist/70 p-5 text-sm text-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">Focus</span>
                  <span>Webdesign & development</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">Samenwerking</span>
                  <span>Remote / NL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">Project start</span>
                  <span>Binnen 2-3 weken</span>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio slider */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#d9d9d9] p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-3xl bg-white">
              <div
                ref={trackRef}
                className="flex h-[220px] sm:h-[340px] lg:h-[420px] snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar"
              >
                {slides.map((src, i) => (
                  <div
                    key={src + i}
                    className="relative min-w-full snap-center"
                  >
                    <img
                      src={src}
                      alt={`Portfolio beeld ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-4 py-3 text-2xl font-semibold text-ink shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] transition hover:bg-white sm:left-5"
              aria-label="Vorige afbeelding"
            >
              {"<"}
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-4 py-3 text-2xl font-semibold text-ink shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] transition hover:bg-white sm:right-5"
              aria-label="Volgende afbeelding"
            >
              {">"}
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Mijn portfolio
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-midnight px-4 py-1.5 text-xl font-medium text-white">
                  #Portfolio
                </span>
                <span className="rounded-full bg-midnight px-4 py-1.5 text-xl font-medium text-white">
                  #Webdesign
                </span>
                <span className="rounded-full bg-midnight px-4 py-1.5 text-xl font-medium text-white">
                  #Development
                </span>
              </div>
            </div>

            <div className="max-w-5xl space-y-5 text-lg leading-relaxed text-slate-800">
              <p>
                Een korte greep uit recent werk. Ik wissel tussen product-,
                service- en storytelling-pages en zorg dat de performance en
                toegankelijkheid op orde zijn.
              </p>
              <p>
                Per project werk ik met duidelijke milestones: ontwerp, build,
                QA en performance-check. We shippen in kleine iteraties zodat je
                snel kunt testen met echte gebruikers.
              </p>
              <p>
                Zin om voorbeelden te zien die passen bij jouw branche? Plan
                gerust een call, dan loop ik je er live doorheen.
              </p>
            </div>

            <a
              href="https://www.tjardoantonie.nl/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-medium text-white shadow-soft transition hover:brightness-95"
            >
              Bekijk portfolio
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
