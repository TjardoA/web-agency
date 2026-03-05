import SectionShell from "../ui/SectionShell";

const items = [
  {
    title: "1. Audit & richting",
    description:
      "We starten met een technische scan van je huidige site en doelen. Daarna maken we een heldere roadmap met prioriteiten."
  },
  {
    title: "2. Bouwen & integreren",
    description:
      "Van website tot maatwerk feature: alles wordt performant gebouwd en slim gekoppeld met je bestaande tools."
  },
  {
    title: "3. Optimaliseren & opschalen",
    description:
      "Na livegang verbeteren we door op snelheid, gebruiksvriendelijkheid en conversie zodat je platform meegroeit."
  }
];

const services = [
  "Websites",
  "Webshops",
  "Koppelingen en integraties",
  "Technisch landschap consult",
  "Portals",
  "AI en automatisering"
];

const TechApproach = () => (
  <SectionShell
    id="development"
    eyebrow="Technology & Development"
    title="Duurzame groei begint met een sterk technisch fundament"
    description="Niet alleen losse techniek, maar een systeem dat logisch samenwerkt en schaalbaar blijft."
    spacing="tight"
  >
    <div className="rounded-3xl border border-soft bg-white p-6 sm:p-8 shadow-soft">
      <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-white px-3 py-1 text-xs font-semibold text-slate-700">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Technisch traject
          </div>
          <p className="text-base leading-relaxed text-slate-600 max-w-xl">
            Van eerste scan tot groei-opschaling: één strak proces, duidelijke prioriteiten en opleveringen die draaien.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {["90+ launches", "Core Web Vitals 90+", "Live in 6-8 weken"].map((stat) => (
              <div
                key={stat}
                className="rounded-2xl border border-soft bg-mist px-4 py-3 text-sm font-semibold text-ink"
              >
                {stat}
              </div>
            ))}
          </div>
          <div className="relative mt-3 flex flex-wrap gap-2">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-soft bg-white px-3 py-1 text-xs font-medium text-slate-600"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="relative pl-4 sm:pl-6">
          <span className="absolute left-1 top-5 hidden h-[85%] w-px bg-soft sm:block" />
          <div className="space-y-4">
            {items.map((item, idx) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-soft bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-ink/10 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-mist text-sm font-semibold text-ink">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
);

export default TechApproach;
