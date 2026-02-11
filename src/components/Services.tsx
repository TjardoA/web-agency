import { services } from "../data";
import SectionShell from "./SectionShell";
import { motion } from "framer-motion";

const Services = () => (
  <SectionShell
    id="services"
    title="Diensten"
    description="Een compacte set diensten die jouw merk online laat winnen."
  >
    <div className="section-grid">
      {services.map((service, idx) => (
        <motion.div
          key={service.title}
          whileHover={{
            y: -6,
            boxShadow: "0 18px 45px -25px rgba(15,23,42,0.35)"
          }}
          className="rounded-2xl border border-soft bg-white p-6 flex flex-col gap-3"
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
          <div className="h-10 w-10 rounded-full bg-mist flex items-center justify-center text-sm font-semibold text-accent">
            0{idx + 1}
          </div>
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p className="text-sm text-slate-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </SectionShell>
);

export default Services;
