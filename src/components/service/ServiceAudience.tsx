import { motion } from "framer-motion";

type Props = {
  bullets: string[];
  imageSrc: string;
};

const ServiceAudience = ({ bullets, imageSrc }: Props) => (
  <section className="bg-mist px-6 py-16 sm:py-20">
    <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-4"
      >
        <p className="text-sm uppercase tracking-[0.22em] text-accent">Voor wie</p>
        <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Ideaal voor makers & teams</h2>
        <ul className="space-y-3 text-base text-slate-700">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 text-accent">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-48px_rgba(15,23,42,0.28)]"
      >
        <img src={imageSrc} alt="Illustratie van doelgroepen" className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent" />
      </motion.div>
    </div>
  </section>
);

export default ServiceAudience;




