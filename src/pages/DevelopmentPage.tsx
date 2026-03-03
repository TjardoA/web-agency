import { Layout, Button } from "../components";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motion";

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

const card = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const cardLtr = {
  hidden: { opacity: 0, x: -28, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 }
  })
};

const DevelopmentPage = () => (
  <Layout>
    <section className="bg-midnight text-white px-4 py-14 sm:py-18">
      <motion.div initial="hidden" animate="show" variants={stagger} className="mx-auto max-w-6xl space-y-6">
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.22em] text-blue-200">Development</motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl font-semibold leading-tight sm:text-5xl">
          Frontend & integraties die snel en schaalbaar blijven
        </motion.h1>
        <motion.p variants={fadeUp} className="max-w-3xl text-base text-blue-100/90">
          Ik ontwerp en bouw React/TypeScript projecten met focus op performance, UX en solide koppelingen.
          Klaar voor groei en makkelijk te onderhouden.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 text-sm">
          <Button className="px-6 py-3">Plan een kennismaking</Button>
          <a
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 font-medium text-white hover:bg-white/10"
          >
            Bekijk cases
          </a>
        </motion.div>
      </motion.div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-mist">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Waarom dit werkt</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Kernprincipes</h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {usp.map((item, idx) => (
            <motion.article
              key={item.title}
              custom={idx}
              variants={cardLtr}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-soft bg-white p-5 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.35)]"
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="px-4 py-16 sm:py-20 bg-gradient-to-b from-white via-[#f8f9ff] to-white">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center space-y-2">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Proces</p>
          <h2 className="text-4xl font-semibold text-ink sm:text-5xl">Van idee tot optimalisatie</h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto">
            In vijf heldere stappen van kickoff tot optimalisatie. Hover voor details.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-5 md:grid-cols-5"
        >
          {process.map((item, idx) => (
            <motion.div
              key={item.step}
              variants={card}
              whileHover={{ y: -10, boxShadow: "0 32px 90px -60px rgba(15,23,42,0.35)" }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-50px_rgba(15,23,42,0.22)]"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <span>0{idx + 1}</span>
                <span className="text-ink">{item.step}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-mist">
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Integraties</p>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-ink sm:text-4xl">Koppelingen & automation</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-slate-700">
            Ik koppel je frontend aan CRM, payments, emailflows en analytics. Automations zorgen voor minder handwerk en betere data.
          </motion.p>
          <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {integrations.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="rounded-3xl border border-white/60 bg-white p-6 shadow-soft space-y-4"
        >
          <motion.h3 variants={fadeUp} className="text-xl font-semibold text-ink">Tech stack</motion.h3>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 text-sm text-slate-700">
            {["React", "TypeScript", "Tailwind", "Framer Motion", "Node/Express", "Headless CMS", "Stripe/Mollie", "Zapier/Make"].map((tech) => (
              <span key={tech} className="rounded-full bg-mist px-3 py-1 border border-slate-200">
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-sm text-slate-600">
            Focus op snelle UI, duidelijke state management en nette API-contracten. Hosting optioneel op Vercel/Netlify of eigen infra.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button className="px-5 py-2.5">Plan een technische call</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default DevelopmentPage;
