import { motion } from "framer-motion";

type Props = {
  title: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const ServiceCTA = ({ title, primary, secondary }: Props) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-midnight to-indigo-900 px-6 py-16 sm:py-20 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_35%)]" />
    <div className="relative mx-auto max-w-5xl text-center space-y-6">
      <motion.h3
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-3xl font-semibold sm:text-4xl"
      >
        {title}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap justify-center gap-3 text-sm"
      >
        <a
          href={primary.href}
          className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-midnight shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
        >
          {primary.label}
        </a>
        {secondary && (
          <a
            href={secondary.href}
            className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            {secondary.label}
          </a>
        )}
      </motion.div>
    </div>
  </section>
);

export default ServiceCTA;




