import { Layout, Button } from "../components";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motion";

const card = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

const ContactPage = () => (
  <Layout>
    <section className="bg-gradient-to-b from-[#fffaf5] to-[#eef3ff]   px-4 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl space-y-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="rounded-[26px] border border-slate-200  bg-white  p-10 shadow-[0_30px_80px_-32px_rgba(15,23,42,0.22)] sm:p-12 space-y-10"
        >
          <div className="space-y-3">
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-accent text-sm font-semibold tracking-[0.22em] uppercase">
              <span>*</span>
              <span>Contact</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl font-semibold text-ink  sm:text-4xl">
              Kom langs of plan een gesprek
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base text-slate-600  max-w-3xl">
              Bel, mail of vul het formulier in. Ik reageer binnen één werkdag.
            </motion.p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <motion.div variants={stagger} className="space-y-5" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <div className="space-y-3 text-slate-700 ">
                {["Bel of WhatsApp: +31 6 12 34 56 78", "E-mail: contact@tjardoantonie.nl", "Beschikbaar voor projecten: websites, webshops, koppelingen, performance."].map((text) => (
                  <motion.div key={text} variants={fadeUp} className="flex items-start gap-3">
                    <span className="mt-1 text-accent">•</span>
                    <p className="text-slate-700 ">
                      {text.includes(":") ? (
                        <>
                          {text.split(": ")[0]}: <strong className="text-ink ">{text.split(": ")[1]}</strong>
                        </>
                      ) : text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Button className="px-5 py-2.5">Mail direct</Button>
                <Button className="px-5 py-2.5">Bel / WhatsApp</Button>
              </motion.div>

              <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-3">
                <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200  bg-mist  p-6 text-sm text-slate-700 ">
                  Startdatum: binnen 2-3 weken mogelijk
                </motion.div>
                <motion.div variants={fadeUp} className="inline-flex w-auto rounded-2xl border border-slate-200  bg-mist  px-6 py-4 text-sm text-slate-700  max-w-sm">
                  Locatie: Remote / NL
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={card}
              className="rounded-3xl border border-slate-200  bg-white  p-8 shadow-soft space-y-7 sm:p-10"
            >
              <form className="grid gap-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium text-ink  space-y-1">
                    Naam<span className="text-rose-500">*</span>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Voor- en achternaam"
                      className="w-full h-[52px] rounded-xl border border-slate-200  bg-mist  px-4 text-sm text-ink  placeholder:text-slate-500  outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="text-sm font-medium text-ink  space-y-1">
                    E-mail<span className="text-rose-500">*</span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jij@example.com"
                      className="w-full h-[52px] rounded-xl border border-slate-200  bg-mist  px-4 text-sm text-ink  placeholder:text-slate-500  outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium text-ink  space-y-1">
                    Telefoon
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+31 6 ..."
                      className="w-full h-[52px] rounded-xl border border-slate-200  bg-mist  px-4 text-sm text-ink  placeholder:text-slate-500  outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="text-sm font-medium text-ink  space-y-1">
                    Onderwerp
                    <input
                      name="subject"
                      type="text"
                      placeholder="Project, vraag of verzoek"
                      className="w-full h-[52px] rounded-xl border border-slate-200  bg-mist  px-4 text-sm text-ink  placeholder:text-slate-500  outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                </div>

                <label className="text-sm font-medium text-ink  space-y-1">
                  Bericht<span className="text-rose-500">*</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Je vraag of bericht"
                    className="w-full rounded-xl border border-slate-200  bg-mist  px-4 py-4 text-sm text-ink  placeholder:text-slate-500  outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-6">
                  <Button type="submit" className="px-7 py-3">
                    Verstuur
                  </Button>
                  <span className="text-sm text-slate-700 ">Ik antwoord binnen één werkdag.</span>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid gap-10 sm:grid-cols-2"
        >
          {[{ title: "Bel of WhatsApp", value: "+31 6 12 34 56 78" }, { title: "Mail", value: "contact@tjardoantonie.nl" }].map((item) => (
            <motion.div
              key={item.title}
              variants={card}
              className="rounded-2xl border border-slate-200  bg-mist  p-10 shadow-soft"
            >
              <p className="text-sm font-semibold text-ink ">{item.title}</p>
              <p className="mt-1 text-base text-slate-700 ">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={card}
          className="rounded-[28px] border border-slate-200  bg-white  p-10 shadow-[0_30px_80px_-32px_rgba(15,23,42,0.22)] sm:p-12 space-y-8"
        >
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Beschikbaarheid</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink ">
              Ik houd plekken vrij voor nieuwe projecten
            </h2>
            <p className="text-base text-slate-600  max-w-3xl">
              Samen bepalen we de scope: design, development, koppelingen of optimalisatie. Daarna krijg je
              een duidelijke planning.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Startdatum", value: "Binnen 2-3 weken mogelijk" },
              { label: "Projecttype", value: "Website, webshop, koppeling, performance" },
              { label: "Locatie", value: "Remote / Nederland" }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200  bg-gradient-to-b from-white to-mist   px-5 py-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 ">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-ink ">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;





