import { services } from "../../data";
import { motion } from "framer-motion";
import { stagger } from "../../animations/motion";

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

const icons = [
  { label: "🛠️", gradient: "from-sky-500 to-indigo-500" },
  { label: "🎨", gradient: "from-fuchsia-500 to-orange-400" },
  { label: "⚙️", gradient: "from-teal-500 to-emerald-500" },
  { label: "🤖", gradient: "from-purple-500 to-blue-500" }
];

const Services = () => (
  <section id="services" className="px-4 py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl space-y-10">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.22em] text-accent">Onze diensten</p>
        <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Een greep uit mijn services</h2>
        <p className="text-base text-slate-600">
          Compact overzicht met kleine visuals per dienst - licht en modern.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            variants={card}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 240, damping: 18 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-[0_28px_60px_-32px_rgba(15,23,42,0.28)]"
          >
            <div className="pointer-events-none absolute -right-12 -top-14 h-28 w-28 rounded-full bg-accent/15 blur-2xl" />
            <div className="flex items-start gap-4">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
                  icons[idx % icons.length].gradient
                } text-lg shadow-[0_14px_30px_-18px_rgba(37,99,235,0.8)]`}
                aria-hidden
              >
                {icons[idx % icons.length].label}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
