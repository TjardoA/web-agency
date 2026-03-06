import { Layout, Button } from "../components";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motion";

const card = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
const cardLtr = {
  hidden: { opacity: 0, x: -26, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 }
  })
};

const ServicesPage = () => (
  <Layout>
    <section className="bg-gradient-to-b from-midnight to-midnightSoft text-white px-4 py-14 sm:py-18">
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mx-auto max-w-6xl space-y-6"
      >
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.22em] text-blue-200">
          Diensten
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-semibold leading-tight sm:text-5xl"
        >
          Wat ik voor je bouw en optimaliseer
        </motion.h1>
        <motion.p variants={fadeUp} className="max-w-3xl text-base text-blue-100/90">
          Van snelle marketing-sites tot koppelingen en portalen. Altijd met performance, security
          en onderhoudbaarheid als basis.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <Button className="px-6 py-3">Plan een kennismaking</Button>
          <a
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Bekijk portfolio
          </a>
        </motion.div>
      </motion.div>
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

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              variants={card}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.4)] transition hover:border-midnight/30 hover:shadow-[0_22px_60px_-34px_rgba(2,8,51,0.55)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#5b8cff] text-sm font-semibold text-white">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{service.description}</p>
              <a
                href={service.path}
                className="mt-4 inline-flex items-center text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100"
              >
                Meer weten
                <span className="ml-1">?</span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl space-y-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="space-y-3 text-center"
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.22em] text-accent">
            Samenwerking
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-ink sm:text-5xl">
            Hoe een project samen loopt
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-base text-slate-700">
            Geen lange trajecten zonder zicht op resultaat. We werken gefaseerd en toetsen snel.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-accent via-indigo-500 to-fuchsia-500"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {[
            { title: "Kick-off", desc: "Scope, doelen en succes-metrics vastleggen.", icon: "??", gradient: "from-rose-400 to-orange-300" },
            { title: "Concept", desc: "Wireframes + content flow, direct deelbaar.", icon: "??", gradient: "from-orange-400 to-amber-300" },
            { title: "Build & koppel", desc: "Snel itereren met componenten en integraties.", icon: "??", gradient: "from-indigo-400 to-blue-300" },
            { title: "Launch & boost", desc: "Performance, SEO check en monitoring.", icon: "??", gradient: "from-fuchsia-500 to-purple-400" }
          ].map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              variants={cardLtr}
              whileHover={{ y: -12, rotate: -0.6, boxShadow: "0 26px 60px -36px rgba(15,23,42,0.35)" }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 sm:p-7 shadow-[0_30px_80px_-48px_rgba(15,23,42,0.28)]"
            >
              <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-accent/10 to-indigo-400/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-xl text-white shadow-[0_14px_34px_-18px_rgba(59,130,246,0.45)]`}
                >
                  {step.icon}
                </motion.span>
                <span className="text-sm font-semibold text-accent tracking-wide">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-700">{step.desc}</p>
              <motion.div
                className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-accent to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-mist">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Waarom samen</p>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-ink sm:text-4xl">
            Slimme keuzes, minder gedoe
          </motion.h2>
          <motion.ul variants={stagger} className="space-y-3 text-base text-slate-700">
            {["Technisch en visueel uit één hand: minder overdrachtsverlies.", "Performance-first: Core Web Vitals, caching en beeldoptimalisatie standaard.", "Heldere planning: korte sprints met oplevermomenten per blok.", "Flexibele koppelingen: CMS, formulieren, automation en rapportages."].map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp}>
            <Button className="mt-4 px-6 py-3">Plan een kennismaking</Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2"
        >
          {[
            { title: "Website + merk", desc: "Design system, typography en component library." },
            { title: "Portals & dashboards", desc: "Gekoppelde views voor klanten of teams." },
            { title: "Automatisering", desc: "Flows voor leads, mails en data-sync." },
            { title: "Optimalisatie", desc: "A/B testen, snelheid, UX verbeteringen." }
          ].map((item) => (
            <motion.div key={item.title} variants={card} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  </Layout>
);

export default ServicesPage;




