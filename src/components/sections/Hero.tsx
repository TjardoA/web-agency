import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero = () => (
  <section id="home" className="px-4 pt-16 pb-14 sm:pt-20 sm:pb-18 lg:pt-24 lg:pb-20 bg-white">
    <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.24em] text-accent"
        >
          Webdevelopment op niveau
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-4xl font-semibold leading-tight sm:text-5xl"
        >
          Ik bouw professionele, snelle websites die conversie verhogen.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-xl text-base text-slate-600"
        >
          Voor bedrijven en ondernemers die een moderne uitstraling, solide performance
          en duidelijke resultaten willen.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Plan een gesprek
          </Button>
          <span className="text-sm text-slate-600">
            Vrijblijvend en binnen 24 uur reactie.
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="relative rounded-3xl bg-gradient-to-br from-mist to-white border border-soft p-8 shadow-soft"
      >
        <div className="h-56 sm:h-64 rounded-2xl bg-ink/90 text-white flex flex-col justify-between p-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Stack</p>
            <p className="text-sm text-blue-100">
              React · TypeScript · Tailwind · Framer Motion
            </p>
          </div>
          <p className="text-lg font-semibold leading-tight">
            Pixel-perfect builds, snelle laadtijden en schaalbare codebases die klaar zijn voor
            groei.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
