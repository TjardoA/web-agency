import { testimonials } from "../../data";
import SectionShell from "../ui/SectionShell";
import { motion } from "framer-motion";
import { stagger } from "../../animations/motion";

const card = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

const Testimonials = () => (
  <SectionShell
    id="reviews"
    title="Reviews"
    description="Samenwerken betekent heldere communicatie, strakke planning en resultaatgerichte oplevering."
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
          className="rounded-2xl border border-soft bg-white p-6 shadow-soft/40"
        >
          <p className="text-sm text-slate-700 leading-relaxed">“{t.quote}”</p>
          <div className="mt-5">
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </SectionShell>
);

export default Testimonials;
