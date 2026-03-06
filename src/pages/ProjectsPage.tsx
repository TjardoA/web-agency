import { Layout, Button } from "../components";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motion";

type Project = {
  title: string;
  sector: string;
  summary: string;
  impact: string;
  stack: string[];
  metrics?: string[];
  image: string;
};

const featured: Project = {
  title: "GrowthSuite",
  sector: "B2B SaaS",
  summary:
    "Nieuwe marketing- en onboarding-ervaring voor een AI-gedreven analyticsplatform. Van wireframes tot build en CRO-experiments.",
  impact: "↑ 34% trial → paid, LCP 1.8s, CRO experimenten in 6 weken live",
  stack: ["React", "TypeScript", "Tailwind", "Framer Motion", "Headless CMS"],
  metrics: ["+34% activatie", "90+ Pagespeed desktop", "6 wkn van kickoff tot live"],
  image:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
};

const projects: Project[] = [
  {
    title: "Mercato",
    sector: "E-commerce",
    summary: "Headless shop met storytelling PDP, snelle search en one-click checkout.",
    impact: "+22% conversie, LCP < 2.2s",
    stack: ["Next.js", "Stripe", "Algolia", "Vercel"],
    metrics: ["< 2.2s LCP", "+22% CR", "A/B tested"],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Helix Capital",
    sector: "Fintech",
    summary: "Trust-driven landing + dashboard visuals, SOC2 content en resource center.",
    impact: "+15% trial starts, +28% time on page",
    stack: ["React", "Charts", "MDX docs"],
    metrics: ["+15% trials", "Docs in 2 wkn", "Design system"],
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "CampusLab",
    sector: "Educatie",
    summary: "Lessenportal met accounts, progressie, en analytics events.",
    impact: "98% Core Web Vitals, <120ms TTFB",
    stack: ["Next.js", "Supabase", "Analytics"],
    metrics: ["98% CWV", "SSG + ISR", "GA4 events"],
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Civic Impact",
    sector: "Non-profit",
    summary: "Campagne- en donatieflow met verhalen, video en CRM-koppeling.",
    impact: "+28% donaties in 3 maanden",
    stack: ["Jamstack", "Forms", "Headless CMS"],
    metrics: ["+28% donaties", "Automations", "AA toegankelijk"],
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Relay Ops",
    sector: "Consulting",
    summary: "Lead-gen site met gated content en Calendly flow, opgezet in 10 dagen.",
    impact: "2x demo-aanvragen, 38 leads/mo",
    stack: ["Vite", "Forms", "Automation", "CMS"],
    metrics: ["2x demos", "10 dagen build", "MQL→SQL flow"],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.article
    variants={fadeUp}
    className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_26px_70px_-52px_rgba(15,23,42,0.35)]"
  >
    <div className="relative h-52 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/40" />
      <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
        {project.sector}
      </div>
    </div>
    <div className="space-y-3 px-5 py-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-700">{project.summary}</p>
        </div>
      </div>
      <p className="text-sm font-semibold text-midnight">{project.impact}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[13px] font-semibold text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.metrics && (
        <div className="flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="rounded-full bg-mist px-3 py-1 text-[12px] font-semibold text-slate-700"
            >
              {m}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.article>
);

const ProjectsPage = () => (
  <Layout>
    <section className="bg-gradient-to-b from-[#f6f8fb] via-white to-white px-4 py-16 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mx-auto max-w-5xl space-y-6 text-center"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
        >
          Cases & resultaten
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-semibold text-ink sm:text-5xl"
        >
          Cases die design, performance en resultaat verbinden
        </motion.h1>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
          {/* CTA's verwijderd op verzoek */}
        </motion.div>
      </motion.div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-white">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_34px_120px_-70px_rgba(15,23,42,0.45)]"
        >
          <div className="relative h-[320px] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1230]/85 via-[#0d1c45]/70 to-[#122f62]/65" />
            <div className="absolute inset-0 flex flex-col justify-between p-7 text-white">
              <div className="space-y-2">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                  Featured case
                </span>
                <h3 className="text-3xl font-semibold">{featured.title}</h3>
                <p className="text-sm text-blue-100/85 max-w-2xl">{featured.summary}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-blue-50">{featured.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {featured.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white/15 px-3 py-1 text-[13px] font-semibold text-blue-50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 border-t border-slate-200 bg-white px-6 py-5 sm:grid-cols-3">
            {featured.metrics?.map((m) => (
              <div
                key={m}
                className="rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-sm font-semibold text-slate-800"
              >
                {m}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="flex flex-col justify-center gap-4 rounded-[20px] border border-slate-200 bg-mist px-6 py-6 shadow-[0_28px_90px_-70px_rgba(15,23,42,0.4)]"
        >
          <h3 className="text-2xl font-semibold text-ink">Samenwerken in sprints</h3>
          <p className="text-base text-slate-700">
            We werken in korte sprints met een duidelijk doel per iteratie: live
            gaan binnen 4–8 weken met meetbare verbeteringen.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">•</span> Kick-off, scope en KPI's
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">•</span> UX, UI, content en build parallel
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">•</span> Performance budget + QA
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">•</span> Launch, meten, optimaliseren
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button>Plan een gesprek</Button>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-ink transition hover:border-midnight/40"
            >
              Boek een demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="bg-mist px-4 py-14 sm:py-18">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="mx-auto max-w-6xl space-y-6"
      >
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Meer cases</p>
          <h2 className="text-3xl font-semibold text-ink">Selectie recente projecten</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  </Layout>
);

export default ProjectsPage;




