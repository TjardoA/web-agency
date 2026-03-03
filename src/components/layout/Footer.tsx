import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

const wordVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }
  })
};

const AnimatedWords = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.span className={`inline-flex flex-wrap gap-1 ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          custom={i}
          variants={wordVariants}
          className="inline-block will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Footer = () => (
  <footer className="bg-midnight text-white">
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-10 lg:grid-cols-[1.2fr_1fr]"
      >
        <motion.div variants={slideIn} className="space-y-4">
          <p className="text-sm uppercase tracking-[0.18em] text-blue-200">Antonie studio</p>
          <h3 className="text-2xl font-semibold leading-snug">
            <AnimatedWords text="Samen een website die strak, snel en schaalbaar is?" />
          </h3>
          <p className="text-sm text-blue-100/90 max-w-xl">
            <AnimatedWords text="Ik ontwerp, bouw en optimaliseer digitale ervaringen. Van landing pages tot portalen en webshops, met performance en UX als basis." />
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
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-3 text-sm text-slate-200">
          <motion.div variants={slideIn} className="space-y-3">
            <p className="font-semibold text-white">
              <AnimatedWords text="Navigatie" />
            </p>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Diensten", href: "/diensten" },
                { label: "Tarieven", href: "/tarieven" },
                { label: "Development", href: "/#development" },
                { label: "Contact", href: "/contact" }
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  variants={wordVariants}
                  custom={i}
                  className="block hover:text-blue-200"
                  href={item.href}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div variants={slideIn} className="space-y-3">
            <p className="font-semibold text-white">
              <AnimatedWords text="Volgen" />
            </p>
            <div className="space-y-2">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com" },
                { label: "GitHub", href: "https://www.github.com" },
                { label: "Website", href: "https://www.tjardoantonie.nl" }
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  variants={wordVariants}
                  custom={i}
                  className="block hover:text-blue-200"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div variants={slideIn} className="space-y-3">
            <p className="font-semibold text-white">
              <AnimatedWords text="Contact" />
            </p>
            <div className="space-y-2">
              {[
                { label: "+31 6 12 34 56 78", href: "tel:+31612345678" },
                { label: "Remote / NL", href: null },
                { label: "contact@tjardoantonie.nl", href: "mailto:contact@tjardoantonie.nl" }
              ].map((item, i) =>
                item.href ? (
                  <motion.a
                    key={item.label}
                    variants={wordVariants}
                    custom={i}
                    className="block hover:text-blue-200"
                    href={item.href}
                  >
                    {item.label}
                  </motion.a>
                ) : (
                  <motion.p key={item.label} variants={wordVariants} custom={i} className="text-slate-300">
                    {item.label}
                  </motion.p>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

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
