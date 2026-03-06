import { Layout } from "../components";
import ServiceHero from "../components/service/ServiceHero";
import ServiceFeatures from "../components/service/ServiceFeatures";
import ServiceAudience from "../components/service/ServiceAudience";
import ServicePortfolio from "../components/service/ServicePortfolio";
import ServiceProcess from "../components/service/ServiceProcess";
import ServiceTestimonials from "../components/service/ServiceTestimonials";
import ServiceFAQ from "../components/service/ServiceFAQ";
import ServiceCTA from "../components/service/ServiceCTA";
import { portfolioItems } from "../data";

const features = [
  { title: "Campagnegericht", desc: "Hero, proof, aanbod en CTA's scherp op conversie.", icon: "🎯" },
  { title: "Speed first", desc: "Snelle laadtijden, optimalisatie voor Core Web Vitals.", icon: "⚡" },
  { title: "Experiment ready", desc: "A/B test hooks, snelle varianten en event tracking.", icon: "🧪" },
  { title: "Responsive", desc: "Mobile-first ontwerp voor maximale klikbereidheid.", icon: "📱" },
  { title: "SEO basics", desc: "Netjes gestructureerd, meta's en OG voor delen.", icon: "🔍" },
  { title: "CMS/variants", desc: "Landings dupliceren en aanpassen per campagne.", icon: "🗂️" }
];

const audience = [
  "Performance marketeers die snel willen testen",
  "Teams met meerdere campagnes/adsets",
  "Startups die één duidelijke conversie willen",
  "B2B/B2C campagnes met leadforms of checkout"
];

const processSteps = [
  { title: "Kick-off & messaging", desc: "Doel, aanbod en bezwaren scherpstellen.", icon: "🧭" },
  { title: "Design & copy", desc: "Layout, microcopy en states voor trust & CTA's.", icon: "✏️" },
  { title: "Build & tracking", desc: "React/TS build, events, pixels en formulieren.", icon: "🛠️" },
  { title: "Launch & optimise", desc: "QA, speed checks, A/B varianten en rapportage.", icon: "🚀" }
];

const testimonials = [
  { quote: "Onze CPA ging direct omlaag na de nieuwe landing. Variants klonen is nu minutenwerk.", name: "Mila van Leeuwen", role: "Performance Marketeer" },
  { quote: "Snelle iteraties en events netjes ingericht. We zien precies wat werkt.", name: "Tom Willems", role: "Growth Lead" }
];

const faqItems = [
  { q: "Hoe snel kan een landing live?", a: "Vaak binnen 1–2 weken voor eerste versie; varianten daarna in dagen." },
  { q: "Werkt dit met onze ad-accounts?", a: "Ja, we zetten pixels en events voor Meta/Google/LinkedIn netjes op." },
  { q: "Kunnen we zelf varianten maken?", a: "Ja, via het CMS kun je blokken dupliceren en teksten/beelden aanpassen." }
];

const mappedPortfolio = portfolioItems.slice(0, 6).map((p) => ({
  title: p.title,
  desc: p.summary,
  image: p.images[0]
}));

const LandingPagesPage = () => (
  <Layout>
    <ServiceHero
      title="Landing pages die klikken in leads omzetten"
      description="Campagnegerichte landings met snelle laadtijden, scherpe messaging en ingebouwde tracking voor A/B tests."
      ctaPrimary={{ label: "Start a Project", href: "/contact" }}
      ctaSecondary={{ label: "View Examples", href: "/portfolio" }}
      accent="from-indigo-600 via-blue-500 to-cyan-500"
    />
    <ServiceFeatures features={features} />
    <ServiceAudience bullets={audience} imageSrc="/portfolio_projects.png" />
    <ServicePortfolio items={mappedPortfolio} />
    <ServiceProcess steps={processSteps} />
    <ServiceTestimonials testimonials={testimonials} />
    <ServiceFAQ items={faqItems} />
    <ServiceCTA
      title="Ready to build your website?"
      primary={{ label: "Start Project", href: "/contact" }}
    />
  </Layout>
);

export default LandingPagesPage;




