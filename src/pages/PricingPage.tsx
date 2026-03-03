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
            whileHover={{ y: -10, scale: 1.01, boxShadow: "0 32px 90px -52px rgba(15,23,42,0.35)" }}
            className={`relative overflow-hidden rounded-[22px] border border-slate-200 ${pkg.bg} p-7 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.25)]`}
          >
            {pkg.featured && (
              <div className="absolute left-1/2 top-3 -translate-x-1/2">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold text-amber-700 shadow-[0_10px_30px_-20px_rgba(245,158,11,0.6)]">
                  <span className="h-2 w-2 rounded-full bg-amber-500" /> Meest gekozen
                </span>
              </div>
            )}

            <div className={`flex flex-col gap-1 ${pkg.featured ? "text-white" : "text-ink"}`}>
              <p className={`text-sm font-medium ${pkg.featured ? "text-slate-200" : "text-slate-600"}`}>{pkg.subtitle}</p>
              <h3 className="text-2xl font-semibold">{pkg.title}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                {pkg.note && <span className={`text-xs uppercase tracking-[0.22em] ${pkg.featured ? "text-slate-300" : "text-slate-500"}`}>{pkg.note}</span>}
                <p className={`text-3xl font-bold ${pkg.featured ? "text-white" : "text-ink"}`}>{pkg.price}</p>
              </div>
            </div>

            <ul className={`mt-4 space-y-2 text-sm ${pkg.featured ? "text-slate-200" : "text-slate-700"}`}>
              {pkg.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className={`mt-1 text-accent ${pkg.featured ? "text-amber-300" : "text-accent"}`}>{checkIcon}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`mt-6 w-full ${pkg.featured ? "bg-white text-ink hover:brightness-95" : ""}`}
            >
              {pkg.cta}
            </Button>
          </motion.article>
        ))}
      </motion.div>

      <p className="mt-10 text-center text-xs text-slate-500">
        Alle prijzen zijn exclusief BTW. Onderhoudscontracten beschikbaar vanaf €99/maand.
      </p>
    </section>
  </Layout>
);

export default PricingPage;
