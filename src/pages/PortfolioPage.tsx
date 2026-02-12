import { useState } from "react";
import Layout from "../components/Layout";

const slides = [
  "https://picsum.photos/id/26/1600/900",
  "https://picsum.photos/id/96/1600/900",
  "https://picsum.photos/id/119/1600/900"
];

const PortfolioPage = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <Layout>
      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#d9d9d9] p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#e4b56f]">
              <img
                src={slides[index]}
                alt={`Portfolio beeld ${index + 1}`}
                className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl bg-white/40 px-4 py-3 text-2xl font-semibold text-white transition hover:bg-white/55 sm:left-5"
              aria-label="Vorige afbeelding"
            >
              {"<"}
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/95 px-4 py-3 text-2xl font-semibold text-white transition hover:bg-black/85 sm:right-5"
              aria-label="Volgende afbeelding"
            >
              {">"}
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Mijn portfolio
              </h1>
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
                Op deze pagina zie je een selectie van mijn portfolio. Bovenaan kun je door
                de foto's swipen met de pijlen om verschillende projecten en styles te bekijken.
              </p>
              <p>
                Ik vind het belangrijk dat elk project clean aanvoelt, snel laadt en echt past
                bij het merk of de persoon waarvoor ik het maak. Daarom combineer ik design en
                development vanaf het begin in een duidelijke aanpak.
              </p>
              <p>
                Wil je meer over mij weten of meer werk bekijken? Klik dan op de knop hieronder
                en ga naar mijn persoonlijke website.
              </p>
            </div>

            <a
              href="https://www.tjardoantonie.nl/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-medium text-white shadow-soft transition hover:brightness-95"
            >
              Meer over mij
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
