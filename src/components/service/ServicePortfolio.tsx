import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Item = { title: string; desc: string; image: string };

type Props = {
  items: Item[];
};

const ServicePortfolio = ({ items }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20%" });
  const list =
    items && items.length
      ? items
      : [
          { title: "Placeholder Case 01", desc: "Demo case – vervang met je eigen project.", image: "https://picsum.photos/id/160/1200/800" },
          { title: "Placeholder Case 02", desc: "Demo case – vervang met je eigen project.", image: "https://picsum.photos/id/180/1200/800" },
          { title: "Placeholder Case 03", desc: "Demo case – vervang met je eigen project.", image: "https://picsum.photos/id/193/1200/800" },
          { title: "Placeholder Case 04", desc: "Demo case – vervang met je eigen project.", image: "https://picsum.photos/id/201/1200/800" },
          { title: "Placeholder Case 05", desc: "Demo case – vervang met je eigen project.", image: "https://picsum.photos/id/211/1200/800" },
          { title: "Placeholder Case 06", desc: "Demo case – vervang met je eigen project.", image: "https://picsum.photos/id/225/1200/800" }
        ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-16 sm:py-20 bg-gradient-to-b from-[#f7f9ff] via-white to-[#eef2ff]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.08),transparent_38%),radial-gradient(circle_at_90%_10%,rgba(14,165,233,0.08),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Cases</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Voorbeelden & stijl</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, idx) => (
            <motion.div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-[0_24px_70px_-44px_rgba(15,23,42,0.4)]"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolio;
