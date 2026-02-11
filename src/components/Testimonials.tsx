import { testimonials } from "../data";
import SectionShell from "./SectionShell";
import { motion } from "framer-motion";

const Testimonials = () => (
  <SectionShell
    id="reviews"
    title="Reviews"
    description="Samenwerken betekent heldere communicatie, strakke planning en resultaatgerichte oplevering."
  >
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((t) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-soft bg-white p-6 shadow-soft/40"
        >
          <p className="text-sm text-slate-700 leading-relaxed">“{t.quote}”</p>
          <div className="mt-5">
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-slate-500">
              {t.role} · {t.company}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionShell>
);

export default Testimonials;
