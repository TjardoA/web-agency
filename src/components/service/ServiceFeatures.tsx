import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Feature = { title: string; desc: string; icon: string };

type Props = {
  features: Feature[];
};

const ServiceFeatures = ({ features }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20%" });
  const items =
    features && features.length
      ? features
      : [
          { title: "Custom design", desc: "Maatwerk layouts die bij jouw merk passen.", icon: "🎨" },
          { title: "Responsive", desc: "Pixel-perfect op mobiel, tablet en desktop.", icon: "📱" },
          { title: "Performance", desc: "Snel en licht, klaar voor conversie.", icon: "⚡" },
          { title: "SEO basics", desc: "Schone structuur, meta's en OG-images.", icon: "🔍" },
          { title: "CMS ready", desc: "Content en projecten zelf beheren.", icon: "🗂️" },
          { title: "Analytics", desc: "Events en dashboards voor groei.", icon: "📈" }
        ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-16 sm:py-20 bg-gradient-to-b from-[#f6f8ff] via-white to-[#eef2ff]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_82%_10%,rgba(14,165,233,0.08),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Wat krijg je</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Inclusief in elk project</h2>
          <p className="text-base text-slate-700">Alles wat nodig is om snel live te gaan en door te groeien.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-46px_rgba(15,23,42,0.4)]"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-midnight text-white text-lg">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
