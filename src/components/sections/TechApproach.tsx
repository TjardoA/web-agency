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
  >
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border border-soft bg-white p-5 shadow-soft">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
        </article>
      ))}
    </div>
  </SectionShell>
);

export default TechApproach;
