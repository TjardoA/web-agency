import { Layout, Button } from "../components";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motion";

type Step = {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  duration: string;
  gradient: string;
  icon: "chat" | "palette" | "code" | "rocket" | "chart";
};

const steps: Step[] = [
  {
    id: 1,
    title: "Kennismaking & Strategie",
    description:
      "We starten met een grondige analyse van jouw bedrijf, doelen en doelgroep. In dit gesprek bespreken we jouw wensen, budget en timeline.",
    bullets: [
      "Intakegesprek (gratis)",
      "Doelgroep & concurrentieanalyse",
      "Projectscope & requirements",
      "Offerte & planning"
    ],
    duration: "Doorlooptijd: 1 week",
    gradient: "from-[#3366ff] to-[#3a26d4]",
    icon: "chat"
  },
  {
    id: 2,
    title: "Ontwerp",
    description:
      "Op basis van de strategie creëren we een custom design dat perfect aansluit bij jouw merkidentiteit en de gebruiker centraal stelt.",
    bullets: [
      "Wireframes & structuur",
      "Visueel design concept",
      "Prototype & clickthrough",
      "Feedback & aanpassingen"
    ],
    duration: "Doorlooptijd: 2-3 weken",
    gradient: "from-[#a42fff] to-[#e6137b]",
    icon: "palette"
  },
  {
    id: 3,
    title: "Ontwikkeling",
    description:
      "Jouw design wordt omgezet in een volledig functionele website met clean code, optimale prestaties en alle gevraagde functionaliteiten.",
    bullets: [
      "Frontend development",
      "Backend & CMS setup",
      "Responsive optimalisatie",
      "Testing & debugging"
    ],
    duration: "Doorlooptijd: 3-6 weken",
    gradient: "from-[#05a66a] to-[#028d54]",
    icon: "code"
  },
  {
    id: 4,
    title: "Oplevering",
    description:
      "Voor de lancering testen we alles grondig. Je krijgt training over het CMS en we zorgen voor een soepele go-live.",
    bullets: [
      "Final testing (alle devices)",
      "Content migratie",
      "CMS training",
      "Live deployment"
    ],
    duration: "Doorlooptijd: 1 week",
    gradient: "from-[#ff6a00] to-[#e60012]",
    icon: "rocket"
  },
  {
    id: 5,
    title: "Optimalisatie",
    description:
      "Na de lancering monitoren we de prestaties en optimaliseren we continu op basis van data en gebruikersfeedback.",
    bullets: [
      "Performance monitoring",
      "Analytics setup & tracking",
      "A/B testing",
      "Maandelijkse rapportages"
    ],
    duration: "Doorlooptijd: Doorlopend",
    gradient: "from-[#0286c7] to-[#0458f5]",
    icon: "chart"
  }
];

const perks = [
  { title: "Dedicated Team", desc: "Je werkt direct met de makers. Geen tussenpersonen.", icon: "👥" },
  { title: "Duidelijke Planning", desc: "Transparante communicatie en realistische deadlines.", icon: "🗓️" },
  { title: "Documentatie", desc: "Handleidingen en instructies voor beheer.", icon: "📄" },
  { title: "Quality Assurance", desc: "Grondig testen op devices en browsers.", icon: "✅" },
  { title: "Continue Support", desc: "3 maanden support na oplevering.", icon: "💬" },
  { title: "Groeimogelijkheden", desc: "Schaalbare oplossingen die meebewegen.", icon: "📈" }
];

const faqs = [
  {
    q: "Hoe lang duurt een gemiddeld project?",
    a: "Een landingspagina is vaak in 2-3 weken klaar. Een complete website duurt 6-10 weken afhankelijk van omvang en content."
  },
  {
    q: "Kan ik zelf aanpassingen doen na oplevering?",
    a: "Ja. Je krijgt een gebruiksvriendelijk CMS en we geven training zodat je zelf content kunt beheren."
  },
  {
    q: "Hoeveel revisies zijn inbegrepen?",
    a: "In de ontwerpfase zijn twee revisierondes inbegrepen. Extra revisies kunnen in overleg worden toegevoegd."
  },
  {
    q: "Krijg ik eigendom van de website?",
    a: "Ja. Na volledige betaling zijn code en content van jou."
  }
];

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const Icon = ({ name }: { name: Step["icon"] }) => {
  const common = "text-white/90";
  switch (name) {
    case "chat":
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M7 9h6M7 13h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M5 4h11a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9l-4 3V7a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "palette":
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M12 3a9 9 0 0 0 0 18 1.5 1.5 0 0 0 1.5-1.5c0-.828-.672-1.5-1.5-1.5h4a5 5 0 0 0 0-10h-1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M8 9h0M10.5 6.5h0M14 7h0M8.5 12.5h0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "code":
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className={common}>
          <path d="m9 8-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m15 8 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "rocket":
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M14 10c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M11.5 13.5 8 17c-.667.667-.5 2.5-.5 2.5s1.833.167 2.5-.5l3.5-3.5M15 10h3l3-5-5 3v3c0 2.761-2.239 5-5 5H8v-3c0-2.761 2.239-5 5-5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M5 17v-3.5M10 17V7M15 17v-5M20 17V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
};

const StepCard = ({ step }: { step: Step }) => (
  <div
    className={`relative w-full max-w-lg mx-auto rounded-[26px] bg-gradient-to-br ${step.gradient} shadow-[0_26px_80px_-50px_rgba(15,23,42,0.42)] px-7 py-12 text-white min-h-[260px]`}
  >
    <div className="absolute inset-5 rounded-[20px] bg-white/10 blur-lg" />
    <div className="relative flex h-full flex-col items-center justify-center gap-4 text-center">
      <div className="rounded-[16px] bg-white/18 p-3.5 backdrop-blur">
        <Icon name={step.icon} />
      </div>
      <p className="text-lg font-semibold text-white leading-tight">{step.title}</p>
    </div>
  </div>
);

const StepText = ({ step }: { step: Step }) => (
  <div className="space-y-5">
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white text-lg font-bold shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)]">
        {step.id}
      </span>
      <h2 className="text-3xl font-semibold text-ink">{step.title}</h2>
    </div>
    <p className="text-lg leading-relaxed text-slate-700">{step.description}</p>
    <ul className="space-y-2 text-base text-slate-700">
      {step.bullets.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-0.5 text-ink">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
      <span className="text-slate-700">🗓</span>
      <span>{step.duration}</span>
    </div>
  </div>
);

const StepRow = ({ step, reverse }: { step: Step; reverse?: boolean }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={stagger}
    className="grid items-stretch gap-18 lg:grid-cols-2 lg:gap-24"
  >
    {reverse ? (
      <>
        <motion.div variants={slideRight}>
          <StepCard step={step} />
        </motion.div>
        <motion.div variants={slideLeft}>
          <StepText step={step} />
        </motion.div>
      </>
    ) : (
      <>
        <motion.div variants={slideLeft}>
          <StepText step={step} />
        </motion.div>
        <motion.div variants={slideRight}>
          <StepCard step={step} />
        </motion.div>
      </>
    )}
  </motion.div>
);

const WerkwijzePage = () => (
  <Layout>
    <section className="bg-white px-4 pt-12 pb-10 sm:pt-16 sm:pb-14">
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mx-auto max-w-4xl text-center space-y-4"
      >
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-ink sm:text-5xl">
          Onze Werkwijze
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg text-slate-700">
          Een bewezen proces dat leidt tot succesvolle websites. Van eerste gesprek tot lancering en
          doorontwikkeling.
        </motion.p>
      </motion.div>
    </section>

    <section className="bg-white px-4 pb-16 sm:pb-20">
      <div className="relative mx-auto max-w-7xl">
        <span className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[2px] -translate-x-1/2 bg-slate-200 lg:block" />
        <div className="space-y-16">
          {steps.map((step, idx) => (
            <StepRow key={step.id} step={step} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>

    <section className="bg-mist px-4 py-14 sm:py-18">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-70px" }}
        variants={stagger}
        className="mx-auto max-w-6xl space-y-10"
      >
        <div className="space-y-3 text-center">
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.22em] text-accent">
            Transparantie
          </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-ink sm:text-4xl">
            Wat je van ons krijgt
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-slate-700 max-w-3xl mx-auto">
            Professionaliteit in elk project, van planning tot nazorg.
          </motion.p>
        </div>

        <motion.div variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <motion.div
              key={perk.title}
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-lg">
                  {perk.icon}
                </span>
                <h3 className="text-lg font-semibold text-ink">{perk.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{perk.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>

    <section className="px-4 py-14 sm:py-18 bg-white">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-70px" }}
        variants={stagger}
        className="mx-auto max-w-5xl space-y-8 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-ink sm:text-4xl">
          Veelgestelde vragen
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((item) => (
            <motion.div
              key={item.q}
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-soft"
            >
              <p className="text-lg font-semibold text-ink">{item.q}</p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="flex justify-center">
          <Button className="px-6 py-3">Bekijk alle vragen</Button>
        </motion.div>
      </motion.div>
    </section>
  </Layout>
);

export default WerkwijzePage;
