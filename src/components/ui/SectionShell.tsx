import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../animations/motion";

type Props = {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
};

const SectionShell = ({ id, title, eyebrow, description, children }: Props) => (
  <section id={id} className="px-4 py-16 sm:py-20 lg:py-24">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mx-auto max-w-6xl space-y-10"
    >
      <div className="space-y-3">
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        )}
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-semibold sm:text-4xl"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p variants={fadeUp} className="max-w-2xl text-base text-slate-600">
            {description}
          </motion.p>
        )}
      </div>
      <motion.div variants={stagger}>{children}</motion.div>
    </motion.div>
  </section>
);

export default SectionShell;
