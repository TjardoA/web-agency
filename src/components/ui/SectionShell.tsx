import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
};

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

const SectionShell = ({ id, title, eyebrow, description, children }: Props) => (
  <section id={id} className="px-4 py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl space-y-10">
      <div className="space-y-3">
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        )}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="text-3xl font-semibold sm:text-4xl"
        >
          {title}
        </motion.h2>
        {description && (
          <p className="max-w-2xl text-base text-slate-600">{description}</p>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default SectionShell;
