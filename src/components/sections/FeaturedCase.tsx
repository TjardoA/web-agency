import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../animations/motion";
import Button from "../ui/Button";

const stats = [
  { value: "3–4 weken", label: "doorlooptijd" },
  { value: "90+", label: "pagespeed" },
  { value: "meer aanvragen", label: "duidelijke call-to-action" }
];

const FeaturedCase = () => (
  <section className="px-4 py-14 sm:py-20 bg-white">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mx-auto flex flex-col gap-10 lg:grid lg:max-w-6xl lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
    >
      <motion.div variants={fadeUp} className="overflow-hidden rounded-[26px] bg-slate-900 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
          alt="Starter website resultaat"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="space-y-5">
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
          Featured case
        </span>
        <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
          Een snelle en duidelijke website voor je bedrijf
        </h2>
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex gap-2">
            <span className="text-accent mt-0.5">•</span>
            <div>
              <p className="font-semibold text-ink">Probleem</p>
              <p className="text-slate-700">
                Veel eerste websites laden traag, zijn onduidelijk of zorgen niet voor nieuwe klanten.
              </p>
            </div>
          </li>
          <li className="flex gap-2">
            <span className="text-accent mt-0.5">•</span>
            <div>
              <p className="font-semibold text-ink">Oplossing</p>
              <p className="text-slate-700">
                Ik bouw een snelle en overzichtelijke one-page website die duidelijk laat zien wat je bedrijf doet, met basis-SEO en een contactformulier.
              </p>
            </div>
          </li>
          <li className="flex gap-2">
            <span className="text-accent mt-0.5">•</span>
            <div>
              <p className="font-semibold text-ink">Resultaat</p>
              <p className="text-slate-700">
                Binnen enkele weken live met een professionele website die vertrouwen geeft en meer aanvragen oplevert.
              </p>
            </div>
          </li>
        </ul>

        <div className="grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-[0_16px_50px_-42px_rgba(15,23,42,0.4)]"
            >
              <p className="text-2xl font-semibold text-ink">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Button className="px-6">Bekijk meer cases</Button>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default FeaturedCase;
