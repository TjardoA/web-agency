import SectionShell from "./SectionShell";

const stackItems = [
  {
    title: "React",
    description: "Moderne interfaces en schaalbare componenten",
    icon: "</>",
    iconClass: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "TypeScript",
    description: "Type-safe development voor stabiele projecten",
    icon: "<>",
    iconClass: "from-blue-500 to-cyan-400"
  },
  {
    title: "Tailwind CSS",
    description: "Snelle UI-opbouw met consistente styling",
    icon: "UI",
    iconClass: "from-cyan-500 to-emerald-400"
  },
  {
    title: "Framer Motion",
    description: "Strakke animaties die de UX versterken",
    icon: "Fx",
    iconClass: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Node.js",
    description: "Back-end logic en performancegerichte APIs",
    icon: "API",
    iconClass: "from-emerald-500 to-lime-500"
  },
  {
    title: "Headless CMS",
    description: "Flexibel contentbeheer voor groeiende sites",
    icon: "CMS",
    iconClass: "from-orange-500 to-amber-500"
  },
  {
    title: "REST APIs",
    description: "Betrouwbare koppelingen tussen systemen",
    icon: "REST",
    iconClass: "from-sky-500 to-indigo-500"
  },
  {
    title: "SEO basis",
    description: "Technische structuur voor betere vindbaarheid",
    icon: "SEO",
    iconClass: "from-rose-500 to-orange-500"
  },
  {
    title: "Analytics",
    description: "Data-inzicht voor betere keuzes en iteraties",
    icon: "D",
    iconClass: "from-indigo-500 to-blue-500"
  },
  {
    title: "Cloud hosting",
    description: "Snelle, veilige en schaalbare deployment",
    icon: "CLD",
    iconClass: "from-teal-500 to-cyan-500"
  }
];

const TechStack = () => (
  <SectionShell
    id="stack"
    eyebrow="Tools & Stack"
    title="Technologie waar ik mee werk"
    description="Dezelfde tools als op mijn portfolio, nu in een heldere grid. Hover voor kleuraccent zoals op mijn site."
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stackItems.map((item) => (
        <article
          key={item.title}
          className="group rounded-3xl border border-soft bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-midnight/40 hover:shadow-[0_20px_60px_-30px_rgba(2,8,51,0.45)] hover:bg-gradient-to-b hover:from-white hover:to-mist"
        >
          <div
            className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.iconClass} text-sm font-bold tracking-wide text-white shadow-soft transition duration-300 group-hover:scale-105`}
          >
            {item.icon}
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-ink transition group-hover:text-midnight">
            {item.title}
          </h3>
          <p className="mt-2 text-lg text-slate-600">{item.description}</p>
        </article>
      ))}
    </div>
  </SectionShell>
);

export default TechStack;
