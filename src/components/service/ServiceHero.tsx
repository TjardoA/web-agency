import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  accent?: string;
};

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
  }
};

const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

const ServiceHero = ({ title, description, ctaPrimary, ctaSecondary, accent = "from-indigo-500 to-blue-500" }: Props) => (
  <section className="relative overflow-hidden bg-midnight text-white">
    <div className="absolute inset-0 opacity-70">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" />
    </div>
    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <motion.div initial="hidden" animate="show" variants={container} className="space-y-6 max-w-3xl">
        <motion.p variants={item} className="text-sm uppercase tracking-[0.22em] text-blue-100">
          Portfolio Websites
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p variants={item} className="text-lg text-blue-100/90 max-w-2xl">
          {description}
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-wrap gap-3 text-sm"
        >
          <a
            href={ctaPrimary.href}
            className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-midnight shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            {ctaPrimary.label}
          </a>
          <a
            href={ctaSecondary.href}
            className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            {ctaSecondary.label}
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ServiceHero;




