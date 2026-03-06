import { Layout, Button } from "../components";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motion";

const packages = [
  {
    title: "Starter",
    subtitle: "Perfect voor kleine bedrijven en startups",
    price: "€2.500",
    note: "vanaf",
    featured: false,
    bg: "bg-white",
    text: "text-ink",
    accent: "from-sky-500 to-indigo-500",
    cta: "Kies dit pakket",
    items: [
      "Tot 5 pagina's",
      "Responsieve design",
      "Contact-formulier",
      "Basis SEO",
      "1 maand gratis support",
      "Hosting setup hulp"
    ]
  },
  {
    title: "Professional",
    subtitle: "De meest gekozen optie voor groeiende bedrijven",
    price: "€5.500",
    note: "vanaf",
    featured: true,
    bg: "bg-midnight text-white",
    text: "text-white",
    accent: "from-amber-400 to-orange-500",
    cta: "Kies dit pakket",
    items: [
      "Tot 15 pagina's",
      "Custom design",
      "CMS integratie",
      "Geavanceerde SEO",
      "API koppeling",
      "3 maanden gratis support",
      "Performance & analytics setup"
    ]
  },
  {
    title: "Enterprise",
    subtitle: "Volledig maatwerk voor complexe projecten",
    price: "Op maat",
    note: "",
    featured: false,
    bg: "bg-white",
    text: "text-ink",
    accent: "from-emerald-500 to-teal-500",
    cta: "Neem contact op",
    items: [
      "Onbeperkt aantal pagina's",
      "Premium custom design",
      "Geavanceerde functionaliteit",
      "API integraties",
      "Dedicated projectmanager",
      "In-house training & support",
      "Priority SLA & onderhoud"
    ]
  }
];

const included = [
  "Kick-off + scope workshop (1,5 uur)",
  "Responsive design + ontwikkelomgeving",
  "Technische basis-SEO (schema, meta, sitemap)",
  "Analytics + events (GA4) setup",
  "Performance-checklist (LCP, CLS, TBT)",
  "Contentmigratie tot 10 pagina's"
];

const addons = [
  {
    title: "E-commerce Webshop",
    desc: "Volledige webshop met betaalintegraties en voorraad beheer",
    price: "vanaf €3.995"
  },
  {
    title: "Content Copywriting",
    desc: "Professionele SEO teksten voor je website",
    price: "€495 per pagina"
  },
  {
    title: "Logo & Branding",
    desc: "Logo ontwerp en merkidentiteit",
    price: "vanaf €1.495"
  },
  {
    title: "Fotografie",
    desc: "Professionele product- of bedrijfsfotografie",
    price: "vanaf €795"
  },
  {
    title: "Video Productie",
    desc: "Promotievideo's voor je website",
    price: "vanaf €1.995"
  },
  {
    title: "Maandelijks Onderhoud",
    desc: "Updates, backups en support",
    price: "vanaf €195/maand"
  }
];

const checkIcon = (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M7.7 13.3 4.4 10l1.2-1.2 2.1 2.1 6.7-6.7L15.6 5 7.7 13.3z" />
  </svg>
);

const PricingPage = () => (
  <Layout>
    <section className="bg-gradient-to-b from-[#f7f8fb] via-white to-white px-4 py-16 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mx-auto max-w-5xl space-y-4 text-center"
      >
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Pricing
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl font-semibold text-ink sm:text-5xl">
          Transparante prijzen
        </motion.h1>
        <motion.p variants={fadeUp} className="text-base text-slate-600">
          Kies het pakket dat bij jouw ambities past. Alle pakketten zijn volledig aanpasbaar.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="mx-auto mt-10 grid gap-6 lg:grid-cols-3 max-w-6xl"
      >
        {packages.map((pkg, i) => (
          <motion.article
            key={pkg.title}
            custom={i}
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.005,
              boxShadow: "0 34px 120px -60px rgba(15,23,42,0.45)",
            }}
            className={`relative flex h-full flex-col gap-5 rounded-[26px] border p-8 ${
              pkg.featured
                ? "bg-[#0d1433] text-white border-transparent shadow-[0_40px_140px_-70px_rgba(12,19,46,0.8)]"
                : "bg-white text-ink border-slate-200 shadow-[0_26px_90px_-60px_rgba(15,23,42,0.3)]"
            }`}
          >
            {pkg.featured && (
              <div className="absolute left-1/2 -top-6 -translate-x-1/2">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0b1230] px-4 py-1 text-xs font-semibold text-white shadow-[0_18px_38px_-22px_rgba(15,23,42,0.55)] ring-2 ring-white">
                  <span className="text-amber-400">?</span> Meest gekozen
                </span>
              </div>
            )}

            <div className={`flex flex-col gap-2 ${pkg.featured ? "text-white" : "text-ink"}`}>
              <p className={`text-sm font-medium ${pkg.featured ? "text-slate-300" : "text-slate-600"}`}>{pkg.subtitle}</p>
              <h3 className="text-3xl font-semibold">{pkg.title}</h3>
              <div className="flex items-baseline gap-2 pt-1">
                {pkg.note && (
                  <span className={`text-xs uppercase tracking-[0.28em] ${pkg.featured ? "text-slate-400" : "text-slate-500"}`}>
                    {pkg.note}
                  </span>
                )}
                <p className={`text-5xl font-bold leading-tight ${pkg.featured ? "text-white" : "text-ink"}`}>
                  {pkg.price}
                </p>
                {!pkg.featured && <span className="text-sm text-slate-500">eenmalig</span>}
                {pkg.featured && <span className="text-sm text-slate-300">eenmalig</span>}
              </div>
            </div>

            <ul className={`space-y-3 text-sm ${pkg.featured ? "text-slate-200" : "text-slate-700"}`}>
              {pkg.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className={`mt-1 text-accent ${pkg.featured ? "text-amber-300" : "text-accent"}`}>{checkIcon}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                className={`w-full text-sm font-semibold ${
                  pkg.featured
                    ? "bg-white text-[#0d1433] hover:brightness-95"
                    : "bg-transparent text-[#0d1433] border border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                {pkg.featured ? "Meest gekozen" : pkg.cta}
              </Button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <p className="mt-10 text-center text-xs text-slate-500">
        Alle prijzen zijn exclusief BTW. Onderhoudscontracten beschikbaar vanaf €99/maand.
      </p>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-white">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-4">
          <h2 className="text-3xl font-semibold text-ink text-center">Extra Opties</h2>
          <p className="text-base text-slate-600 text-center">Breid je pakket uit met deze diensten</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((addon) => (
              <div
                key={addon.title}
                className="flex h-full flex-col justify-between gap-3 rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.35)]"
              >
                <div>
                  <p className="text-lg font-semibold text-ink">{addon.title}</p>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{addon.desc}</p>
                </div>
                <span className="text-xl font-semibold text-ink whitespace-nowrap">{addon.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.25)]">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-midnight text-white text-sm font-semibold">
              ?
            </span>
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold text-ink">Altijd inbegrepen</h2>
              <p className="text-sm text-slate-600">Basis die ieder project direct goed neerzet.</p>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-xl bg-mist px-3 py-2">
                <span className="mt-1 text-accent">{checkIcon}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>

    <section className="bg-mist px-4 py-14 sm:py-18">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="mx-auto max-w-5xl space-y-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-ink">
          Vragen over prijzen?
        </motion.h2>
        <motion.div variants={fadeUp} className="space-y-4 text-left">
          {[
            {
              q: "Zijn er extra kosten?",
              a: "Nee, de genoemde prijzen zijn all-in. Alleen hosting na het eerste jaar (ca. €10-20/maand) en eventuele extra opties zijn apart.",
            },
            {
              q: "Kan ik in termijnen betalen?",
              a: "Ja, betaling in 2-3 termijnen kan zonder extra kosten.",
            },
            {
              q: "Wat als ik meer pagina's nodig heb?",
              a: "Extra pagina's kunnen toegevoegd worden voor €295 per pagina.",
            },
            {
              q: "Krijg ik eigendom van de website?",
              a: "Ja, na volledige betaling ben jij 100% eigenaar van de website en alle code.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left shadow-[0_16px_50px_-46px_rgba(15,23,42,0.4)]"
            >
              <p className="text-base font-semibold text-ink">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700">{item.a}</p>
            </div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} className="pt-2">
          <Button className="px-6">Bekijk alle vragen</Button>
        </motion.div>
      </motion.div>
    </section>
  </Layout>
);

export default PricingPage;




