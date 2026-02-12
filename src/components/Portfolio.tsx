import { useState } from "react";
import { motion } from "framer-motion";
import SectionShell from "./SectionShell";
import { portfolioItems } from "../data";

type CardProps = {
  title: string;
  summary: string;
  images: string[];
};

const SwipeCard = ({ title, summary, images }: CardProps) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  return (
    <article className="overflow-hidden rounded-2xl border border-soft bg-white shadow-soft">
      <div className="relative overflow-hidden">
        <motion.img
          key={`${title}-${index}`}
          src={images[index]}
          alt={`${title} preview ${index + 1}`}
          className="h-56 w-full object-cover sm:h-64"
          initial={{ opacity: 0.35, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) next();
            if (info.offset.x > 60) prev();
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            className="pointer-events-auto rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink transition hover:bg-white"
            aria-label={`Vorige foto van ${title}`}
          >
            Vorige
          </button>
          <button
            type="button"
            onClick={next}
            className="pointer-events-auto rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink transition hover:bg-white"
            aria-label={`Volgende foto van ${title}`}
          >
            Volgende
          </button>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-slate-600">{summary}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-accent">
          Swipe links/rechts om te bladeren
        </p>
      </div>
    </article>
  );
};

const Portfolio = () => (
  <SectionShell
    id="portfolio"
    title="Portfolio"
    description="Een eerste blik op mijn werk. Open elk project en swipe door de beelden."
  >
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {portfolioItems.map((item) => (
        <SwipeCard
          key={item.title}
          title={item.title}
          summary={item.summary}
          images={item.images}
        />
      ))}
    </div>

    <div className="rounded-2xl border border-soft bg-white p-6 sm:p-8">
      <p className="max-w-3xl text-base text-slate-700">
        Dit is een selectie van mijn portfolio. Wil je meer over mij en mijn aanpak weten?
        Bekijk dan mijn persoonlijke site.
      </p>
      <a
        href="https://www.tjardoantonie.nl/"
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-soft transition hover:brightness-95"
      >
        Meer over mij
      </a>
    </div>
  </SectionShell>
);

export default Portfolio;
