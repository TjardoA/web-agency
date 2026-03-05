import { motion } from "framer-motion";
import { stagger } from "../../animations/motion";
import { testimonials } from "../../data";
import SectionShell from "../ui/SectionShell";

const card = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

const Stars = () => (
  <div className="flex gap-1 text-amber-400">
    {Array.from({ length: 5 }).map((_, idx) => (
      <svg
        key={idx}
        viewBox="0 0 20 20"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M10 1.5 12.39 7l5.11.38-3.9 3.36 1.18 5.04L10 13.9l-4.78 1.88L6.4 10.7l-3.9-3.33L7.62 7 10 1.5Z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => (
  <SectionShell
    id="reviews"
    title="Wat Onze Klanten Zeggen"
    description="Resultaten waar we trots op zijn"
    align="center"
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
      className="grid gap-6 lg:grid-cols-3"
    >
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          variants={card}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="rounded-2xl border border-soft bg-white p-7 shadow-soft/40"
        >
          <Stars />
          <p className="mt-4 text-base leading-relaxed text-slate-800">“{t.quote}”</p>
          <div className="mt-6 flex items-center gap-3">
            <div
              className="h-11 w-11 rounded-full border border-soft bg-slate-100"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-ink">{t.name}</p>
              <p className="text-xs text-slate-500">
                {t.role}, {t.company}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </SectionShell>
);

export default Testimonials;
