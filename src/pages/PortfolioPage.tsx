import { useState, useRef } from "react";
import { Layout, Button } from "../components";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motion";
import { portfolioItems } from "../data";

const slides = ["/porfolio_front.png", "/porfolio_aboutme.png", "/portfolio_projects.png"];

const AnimatedParagraph = ({ text }: { text: string }) => (
  <p className="text-base leading-relaxed text-slate-800">{text}</p>
);

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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mx-auto max-w-6xl space-y-10"
        >
          <motion.div variants={cardShell} className="rounded-3xl border border-soft bg-white p-8 shadow-soft sm:p-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-accent">Over mij</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Wie ik ben in het kort</h1>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
              <div className="space-y-3">
                <AnimatedParagraph text="Ik werk als ontwikkelaar en ontwerper die houdt van snelle, heldere websites. Strategie, UX en performance komen altijd samen in mijn trajecten zodat een site niet alleen mooi is maar ook converteert." />
                <AnimatedParagraph text="Meestal start ik met een korte technische scan en een designrichting. Daarna bouw ik modulair, met oog voor toegankelijkheid en SEO. Zo kunnen we makkelijk doorontwikkelen als je bedrijf groeit." />
                <AnimatedParagraph text="Hieronder zie je een paar voorbeelden. Voor meer context of cases neem ik je graag mee in een demo-call." />
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button className="px-6 py-3">Plan een kennismaking</Button>
                </div>
              </div>
              <motion.div
                variants={fadeUp}
                className="relative h-full w-full rounded-2xl border border-soft bg-gradient-to-br from-mist to-white p-4 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.25)] flex flex-col justify-start lg:-mt-6"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                  <img
                    src="/profile.jpg"
                    alt="Jouw foto"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/profile-placeholder.png";
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={cardShell}
            className="relative overflow-hidden rounded-[2rem] bg-[#d9d9d9]  p-4 sm:p-6"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white ">
              <div
                ref={trackRef}
                className="flex h-[220px] sm:h-[340px] lg:h-[420px] snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar"
              >
                {slides.map((src, i) => (
                  <motion.div
                    key={src + i}
                    className="relative min-w-full snap-center"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <motion.img
                      src={src}
                      alt={`Portfolio beeld ${i + 1}`}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85   px-4 py-3 text-2xl font-semibold text-ink shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] transition hover:bg-white  sm:left-5"
              aria-label="Vorige afbeelding"
            >
              {"<"}
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85   px-4 py-3 text-2xl font-semibold text-ink shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] transition hover:bg-white  sm:right-5"
              aria-label="Volgende afbeelding"
            >
              {">"}
            </button>
          </motion.div>

          <motion.div variants={cardShell} className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Mijn portfolio</h2>
              <div className="flex flex-wrap gap-3">
                {["Portfolio", "Webdesign", "Development"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-midnight px-4 py-1.5 text-xl font-medium text-white"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="max-w-5xl space-y-5 text-lg leading-relaxed text-slate-800">
              <p>
                Mijn portfolio is opgebouwd uit projecten die laten zien hoe ik verhaal, UX en performance samenbreng. Elke case heeft
                een heldere verhaallijn, sterke typografie, micro-animaties met framer-motion en meetbare verbeteringen (snelheid,
                conversie of engagement).
              </p>
              <p>
                De opbouw is modulair: hero, proof, aanbod, cases, CTA’s en FAQ/flow-secties die we kunnen herschikken of dupliceren voor
                varianten. Voor B2B leg ik nadruk op trust & structuur, voor e‑commerce op checkoutflow en snelheid, voor makers op beeld
                en storytelling.
              </p>
              <p>
                Wil je zien hoe dat eruitziet of wat het oplevert? Meer interesse? Kijk mijn portfolio.
              </p>
            </div>

            <a
              href="https://www.tjardoantonie.nl/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-midnight px-6 py-3 text-base font-medium text-white shadow-soft transition hover:brightness-95"
            >
              Mijn portfolio
            </a>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

const cardShell = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

export default PortfolioPage;





