import { Layout, Button } from "../components";

const usp = [
  { title: "Performance-first", desc: "Core Web Vitals, caching, beeldoptimalisatie en toegankelijkheid standaard." },
  { title: "Modulaire code", desc: "Herbruikbare componenten en duidelijke structuur zodat je snel kunt uitbreiden." },
  { title: "Veilig & stabiel", desc: "Form input sanitization, API-auth, backups en monitoring." },
  { title: "Heldere sprints", desc: "Roadmap in blokken, snelle iteraties met meetbare opleveringen." }
];

const process = [
  { step: "Kick-off", desc: "Scope, doelen en succes-metrics vastleggen." },
  { step: "Concept & architectuur", desc: "Wireframes, contentflow en technische keuzes." },
  { step: "Build & koppelen", desc: "Front-end, CMS/API koppelingen, formulieren, payments." },
  { step: "Test & launch", desc: "QA, performance-checks en accessibility fixes." },
  { step: "Optimaliseren", desc: "Meten, A/B-testen en itereren op conversie en snelheid." }
];

const integrations = [
  "Headless CMS (Sanity/Contentful)",
  "Forms → CRM/Sheets",
  "Payments (Stripe/Mollie)",
  "Email flows (Brevo/Mailerlite)",
  "Automations (Zapier/Make)",
  "Analytics & dashboards"
];

const DevelopmentPage = () => (
  <Layout>
    <section className="bg-midnight text-white px-4 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl space-y-6">
        <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Development</p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          Frontend & integraties die snel en schaalbaar blijven
        </h1>
        <p className="max-w-3xl text-base text-blue-100/90">
          Ik ontwerp en bouw React/TypeScript projecten met focus op performance, UX en solide koppelingen.
          Klaar voor groei en makkelijk te onderhouden.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Button className="px-6 py-3">Plan een kennismaking</Button>
          <a
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 font-medium text-white hover:bg-white/10"
          >
            Bekijk cases
          </a>
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-mist">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Waarom dit werkt</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Kernprincipes</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usp.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-soft bg-white p-5 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.35)]"
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-white">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Proces</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Van idee tot optimalisatie</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {process.map((item, idx) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-mist p-4 text-sm text-slate-700 shadow-[0_14px_36px_-28px_rgba(15,23,42,0.35)]"
            >
              <div className="flex items-center gap-2 text-accent font-semibold">
                <span className="text-xs tracking-[0.18em]">0{idx + 1}</span>
                <span className="text-ink">{item.step}</span>
              </div>
              <p className="mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-mist">
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Integraties</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Koppelingen & automation</h2>
          <p className="text-base text-slate-700">
            Ik koppel je frontend aan CRM, payments, emailflows en analytics. Automations zorgen voor minder handwerk en betere data.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {integrations.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-soft space-y-4">
          <h3 className="text-xl font-semibold text-ink">Tech stack</h3>
          <div className="flex flex-wrap gap-2 text-sm text-slate-700">
            {["React", "TypeScript", "Tailwind", "Framer Motion", "Node/Express", "Headless CMS", "Stripe/Mollie", "Zapier/Make"].map((tech) => (
              <span key={tech} className="rounded-full bg-mist px-3 py-1 border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-600">
            Focus op snelle UI, duidelijke state management en nette API-contracten. Hosting optioneel op Vercel/Netlify of eigen infra.
          </p>
          <Button className="px-5 py-2.5">Plan een technische call</Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default DevelopmentPage;
