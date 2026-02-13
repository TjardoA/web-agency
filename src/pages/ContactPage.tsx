import { Layout, Button } from "../components";

const ContactPage = () => (
  <Layout>
    <section className="bg-gradient-to-b from-[#fffaf5] to-[#eef3ff] dark:from-[#0a0f20] dark:to-[#0b132e] px-4 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header + form combined */}
        <div className="rounded-[26px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] p-10 shadow-[0_30px_80px_-32px_rgba(15,23,42,0.22)] sm:p-12 space-y-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-[0.22em] uppercase">
              <span>*</span>
              <span>Contact</span>
            </div>
            <h1 className="text-3xl font-semibold text-ink dark:text-slate-50 sm:text-4xl">
              Kom langs of plan een gesprek
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl">
              Bel, mail of vul het formulier in. Ik reageer binnen één werkdag.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div className="space-y-5">
              <div className="space-y-3 text-slate-700 dark:text-slate-200">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-accent">•</span>
                  <p className="text-slate-700 dark:text-slate-200">
                    Bel of WhatsApp: <strong className="text-ink dark:text-white">+31 6 12 34 56 78</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-accent">•</span>
                  <p className="text-slate-700 dark:text-slate-200">
                    E-mail: <strong className="text-ink dark:text-white">contact@tjardoantonie.nl</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-accent">•</span>
                  <p className="text-slate-700 dark:text-slate-200">
                    Beschikbaar voor projecten: websites, webshops, koppelingen, performance.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="px-5 py-2.5">Mail direct</Button>
                <Button className="px-5 py-2.5">
                  Bel / WhatsApp
                </Button>
              </div>

              <div className="space-y-3">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-mist dark:bg-[#111a30] p-6 text-sm text-slate-700 dark:text-slate-200">
                Startdatum: binnen 2-3 weken mogelijk
              </div>
              <div className="inline-flex w-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-mist dark:bg-[#111a30] px-6 py-4 text-sm text-slate-700 dark:text-slate-200 max-w-sm"> Locatie: Remote / NL </div>
            </div>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] p-8 shadow-soft space-y-7 sm:p-10">
              <form className="grid gap-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium text-ink dark:text-slate-100 space-y-1">
                    Naam<span className="text-rose-500">*</span>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Voor- en achternaam"
                      className="w-full h-[52px] rounded-xl border border-slate-200 dark:border-slate-700 bg-mist dark:bg-[#0d1428] px-4 text-sm text-ink dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="text-sm font-medium text-ink dark:text-slate-100 space-y-1">
                    E-mail<span className="text-rose-500">*</span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jij@example.com"
                      className="w-full h-[52px] rounded-xl border border-slate-200 dark:border-slate-700 bg-mist dark:bg-[#0d1428] px-4 text-sm text-ink dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium text-ink dark:text-slate-100 space-y-1">
                    Telefoon
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+31 6 ..."
                      className="w-full h-[52px] rounded-xl border border-slate-200 dark:border-slate-700 bg-mist dark:bg-[#0d1428] px-4 text-sm text-ink dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="text-sm font-medium text-ink dark:text-slate-100 space-y-1">
                    Onderwerp
                    <input
                      name="subject"
                      type="text"
                      placeholder="Project, vraag of verzoek"
                      className="w-full h-[52px] rounded-xl border border-slate-200 dark:border-slate-700 bg-mist dark:bg-[#0d1428] px-4 text-sm text-ink dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                </div>

                <label className="text-sm font-medium text-ink dark:text-slate-100 space-y-1">
                  Bericht<span className="text-rose-500">*</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Je vraag of bericht"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-mist dark:bg-[#0d1428] px-4 py-4 text-sm text-ink dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-6">
                  <Button type="submit" className="px-7 py-3">
                    Verstuur
                  </Button>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Ik antwoord binnen één werkdag.</span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-mist dark:bg-[#111a30] p-10 shadow-soft">
            <p className="text-sm font-semibold text-ink dark:text-slate-100">Bel of WhatsApp</p>
            <p className="mt-1 text-base text-slate-700 dark:text-slate-200">+31 6 12 34 56 78</p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-mist dark:bg-[#111a30] p-10 shadow-soft">
            <p className="text-sm font-semibold text-ink dark:text-slate-100">Mail</p>
            <p className="mt-1 text-base text-slate-700 dark:text-slate-200">contact@tjardoantonie.nl</p>
          </div>
        </div>

        {/* Availability */}
        <div className="rounded-[28px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] p-10 shadow-[0_30px_80px_-32px_rgba(15,23,42,0.22)] sm:p-12 space-y-8">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Beschikbaarheid</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink dark:text-slate-50">
              Ik houd plekken vrij voor nieuwe projecten
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl">
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
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-b from-white to-mist dark:from-[#121a30] dark:to-[#0d152b] px-5 py-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-ink dark:text-slate-100">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;








