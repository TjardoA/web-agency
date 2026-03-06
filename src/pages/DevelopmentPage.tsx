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
  { title: "Performance-first", desc: "Core Web Vitals, caching, beeldoptimalisatie en accessibility standaard.", icon: "⚡" },
  { title: "Modulair", desc: "Componenten en design tokens voor snelle uitbreidingen.", icon: "🧩" },
  { title: "Veilig & stabiel", desc: "Input sanitization, auth, monitoring en backups.", icon: "🛡️" },
  { title: "CMS + integraties", desc: "Headless CMS en koppelingen met CRM, forms, payments.", icon: "🔗" },
  { title: "SEO basics", desc: "Schone structuur, meta's, schema en snelle laadtijden.", icon: "🔍" },
  { title: "Analytics", desc: "Events voor funnels, conversions en dashboards.", icon: "📈" }
];

const audience = [
  "Teams die schaalbare frontends nodig hebben",
  "B2B diensten die leads willen converteren",
  "SaaS/product bedrijven met marketing- én productpages",
  "Organisaties die robuuste integraties nodig hebben"
];

const processSteps = [
  { title: "Discovery", desc: "Doelen, KPI's, technische randvoorwaarden en content inventariseren.", icon: "🔎" },
  { title: "Architectuur & design", desc: "IA, componentbibliotheek, states en flows in Figma.", icon: "📐" },
  { title: "Development", desc: "React/TS build, koppelingen, forms, payments, auth.", icon: "🛠️" },
  { title: "Launch & iteratie", desc: "QA, performance, SEO checks, monitoring en handover.", icon: "🚀" }
];

const testimonials = [
  { quote: "Site laadt supersnel en is makkelijk uit te breiden. Support was top.", name: "Lisa van den Berg", role: "CEO, TechStart" },
  { quote: "Integraties en performance in één traject. Conversie steeg meteen.", name: "Mark Jansen", role: "Founder, GrowthCo" }
];

const faqItems = [
  { q: "Hoe lang duurt een project?", a: "Gemiddeld 4–8 weken afhankelijk van scope, aantal pagina's en integraties." },
  { q: "Werk je met ons bestaande CMS?", a: "Ja, of we zetten een licht headless CMS op. We kiezen wat past bij jullie team." },
  { q: "Kunnen we later uitbreiden?", a: "Ja, door de modulaire opzet kun je eenvoudig nieuwe secties en pagina's toevoegen." }
];

const mappedPortfolio = portfolioItems.slice(0, 6).map((p) => ({
  title: p.title,
  desc: p.summary,
  image: p.images[0]
}));

const DevelopmentPage = () => (
  <Layout>
    <ServiceHero
      title="Frontend & integraties die snel en schaalbaar blijven"
      description="React/TypeScript builds met performance, UX en solide koppelingen. Klaar voor groei en makkelijk te onderhouden."
      ctaPrimary={{ label: "Start a Project", href: "/contact" }}
      ctaSecondary={{ label: "View Examples", href: "/portfolio" }}
      accent="from-blue-700 via-indigo-600 to-purple-600"
    />
    <ServiceFeatures features={features} />
    <ServiceAudience bullets={audience} imageSrc="/porfolio_front.png" />
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

export default DevelopmentPage;




