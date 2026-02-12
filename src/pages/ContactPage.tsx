import Layout from "../components/Layout";
import Button from "../components/Button";

const ContactPage = () => (
  <Layout>
    <section className="bg-gradient-to-b from-[#fffaf5] to-[#eef3ff] px-4 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header + form combined */}
        <div className="rounded-[26px] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_-32px_rgba(15,23,42,0.22)] sm:p-12 space-y-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-[0.22em] uppercase">
              <span>*</span>
              <span>Contact</span>
            </div>
            <h1 className="text-3xl font-semibold text-ink sm:text-4xl">Kom langs of plan een gesprek</h1>
            <p className="text-base text-slate-600 max-w-3xl">
              Bel, mail of vul het formulier in. Ik reageer binnen één werkdag.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div className="space-y-5">
              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-accent">•</span>
                  <p>
                    Bel of WhatsApp: <strong className="text-ink">+31 6 12 34 56 78</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-accent">•</span>
                  <p>
                    E-mail: <strong className="text-ink">contact@tjardoantonie.nl</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-accent">•</span>
                  <p>Beschikbaar voor projecten: websites, webshops, koppelingen, performance.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="px-5 py-2.5">Mail direct</Button>
                <Button className="px-5 py-2.5 bg-white text-ink !text-ink border border-slate-300 shadow-none hover:bg-slate-50">
                  Bel / WhatsApp
                </Button>
              </div>

              <div className="space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-mist p-6 text-sm text-slate-700">
                Startdatum: binnen 2-3 weken mogelijk
              </div>
              <div className="inline-flex w-auto rounded-2xl border border-slate-200 bg-mist px-6 py-4 text-sm text-slate-700 max-w-sm"> Locatie: Remote / NL </div>
            </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft space-y-7 sm:p-10">
              <form className="grid gap-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium text-ink space-y-1">
                    Naam<span className="text-rose-500">*</span>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Voor- en achternaam"
                      className="w-full h-[52px] rounded-xl border border-slate-200 bg-mist px-4 text-sm text-ink placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="text-sm font-medium text-ink space-y-1">
                    E-mail<span className="text-rose-500">*</span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jij@example.com"
                      className="w-full h-[52px] rounded-xl border border-slate-200 bg-mist px-4 text-sm text-ink placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium text-ink space-y-1">
                    Telefoon
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+31 6 ..."
                      className="w-full h-[52px] rounded-xl border border-slate-200 bg-mist px-4 text-sm text-ink placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="text-sm font-medium text-ink space-y-1">
                    Onderwerp
                    <input
                      name="subject"
                      type="text"
                      placeholder="Project, vraag of verzoek"
                      className="w-full h-[52px] rounded-xl border border-slate-200 bg-mist px-4 text-sm text-ink placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                </div>

                <label className="text-sm font-medium text-ink space-y-1">
                  Bericht<span className="text-rose-500">*</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Je vraag of bericht"
                    className="w-full rounded-xl border border-slate-200 bg-mist px-4 py-4 text-sm text-ink placeholder:text-slate-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-6">
                  <Button type="submit" className="px-7 py-3">
                    Verstuur
                  </Button>
                  <span className="text-sm text-slate-700">Ik antwoord binnen één werkdag.</span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-mist p-10 shadow-soft">
            <p className="text-sm font-semibold text-ink">Bel of WhatsApp</p>
            <p className="mt-1 text-base text-slate-700">+31 6 12 34 56 78</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-mist p-10 shadow-soft">
            <p className="text-sm font-semibold text-ink">Mail</p>
            <p className="mt-1 text-base text-slate-700">contact@tjardoantonie.nl</p>
          </div>
        </div>

        {/* Availability */}
        <div className="rounded-3xl border border-slate-200 bg-white p-11 shadow-soft space-y-7 sm:p-14">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.18em] text-accent">Beschikbaarheid</p>
            <h2 className="text-2xl font-semibold text-ink">Ik houd plekken vrij voor nieuwe projecten</h2>
            <p className="text-base text-slate-600">
              Samen bepalen we de scope: design, development, koppelingen of optimalisatie. Daarna krijg je
              een duidelijke planning.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-mist px-5 py-4">
              <span className="text-sm font-medium text-ink">Startdatum</span>
              <span className="text-sm text-slate-700">Binnen 2-3 weken mogelijk</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-mist px-5 py-4">
              <span className="text-sm font-medium text-ink">Projecttype</span>
              <span className="text-sm text-slate-700">Website, webshop, koppeling, performance</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-mist px-5 py-4">
              <span className="text-sm font-medium text-ink">Locatie</span>
              <span className="text-sm text-slate-700">Remote / Nederland</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;





