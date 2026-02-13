import { Layout, Button } from "../components";
import { services } from "../data";

const ServicesPage = () => (
  <Layout>
    <section className="bg-gradient-to-b from-midnight to-midnightSoft text-white px-4 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl space-y-6">
        <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Diensten</p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          Wat ik voor je bouw en optimaliseer
        </h1>
        <p className="max-w-3xl text-base text-blue-100/90">
          Van snelle marketing-sites tot koppelingen en portalen. Altijd met performance, security
          en onderhoudbaarheid als basis.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button className="px-6 py-3">Plan een kennismaking</Button>
          <a
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Bekijk portfolio
          </a>
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-mist">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Aanpak</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Diensten in detail</h2>
          <p className="max-w-3xl text-base text-slate-700">
            Kies wat je nodig hebt of combineer meerdere onderdelen. Ik help je de juiste prioriteiten te
            zetten en zorg voor een strakke oplevering.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.4)] transition hover:-translate-y-1 hover:border-midnight/30 hover:shadow-[0_22px_60px_-34px_rgba(2,8,51,0.55)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#5b8cff] text-sm font-semibold text-white">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{service.description}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100">
                Meer weten
                <span className="ml-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-white">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Samenwerking</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Hoe een project samen loopt</h2>
          <p className="max-w-3xl text-base text-slate-700">
            Geen lange trajecten zonder zicht op resultaat. We werken gefaseerd en toetsen snel.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            { title: "Kick-off", desc: "Scope, doelen en succes-metrics vastleggen.", icon: "🎯" },
            { title: "Concept", desc: "Wireframes + content flow, direct deelbaar.", icon: "✏️" },
            { title: "Build & koppel", desc: "Snel itereren met componenten en integraties.", icon: "⚙️" },
            { title: "Launch & boost", desc: "Performance, SEO check en monitoring.", icon: "🚀" }
          ].map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-mist p-5 shadow-[0_18px_48px_-32px_rgba(15,23,42,0.35)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg">
                  {step.icon}
                </span>
                <span className="text-sm font-semibold text-accent">0{i + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-mist">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Waarom samen</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Slimme keuzes, minder gedoe</h2>
          <ul className="space-y-3 text-base text-slate-700">
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>Technisch en visueel uit één hand: minder overdrachtsverlies.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>Performance-first: Core Web Vitals, caching en beeldoptimalisatie standaard.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>Heldere planning: korte sprints met oplevermomenten per blok.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>Flexibele koppelingen: CMS, formulieren, automation en rapportages.</span>
            </li>
          </ul>
          <Button className="mt-4 px-6 py-3">Plan een kennismaking</Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Website + merk", desc: "Design system, typography en component library." },
            { title: "Portals & dashboards", desc: "Gekoppelde views voor klanten of teams." },
            { title: "Automatisering", desc: "Flows voor leads, mails en data-sync." },
            { title: "Optimalisatie", desc: "A/B testen, snelheid, UX verbeteringen." }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-white">
      <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Starter",
            price: "€1.9k - 3k",
            points: ["1-pager of mini-site", "Basis SEO & analytics", "Launch in 2-3 weken"]
          },
          {
            title: "Growth",
            price: "€3k - 6k",
            points: ["Meerdere templates", "Integraties (CRM/formulieren)", "Iteraties & optimalisatie"]
          },
          {
            title: "Custom",
            price: "Op aanvraag",
            points: ["Maatwerk flows/portals", "Koppelingen & automation", "Langere roadmap"]
          }
        ].map((pkg) => (
          <div
            key={pkg.title}
            className="rounded-2xl border border-slate-200 bg-mist p-6 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.35)]"
          >
            <h3 className="text-xl font-semibold text-ink">{pkg.title}</h3>
            <p className="mt-2 text-lg font-semibold text-accent">{pkg.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {pkg.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
