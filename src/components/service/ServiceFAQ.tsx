import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = { q: string; a: string };
type Props = { items: FAQ[] };

const ServiceFAQ = ({ items }: Props) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">FAQ</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Veelgestelde vragen</h2>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-ink">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-ink text-lg"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="px-5 pb-4"
                    >
                      <p className="text-sm leading-relaxed text-slate-700">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;




