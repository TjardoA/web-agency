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
  { title: "Snel & stabiel", desc: "Geoptimaliseerd voor load time en checkout drop-off.", icon: "⚡" },
  { title: "Conversieflows", desc: "Upsells, bundels, trust elementen en heldere shipping info.", icon: "🛒" },
  { title: "Integraties", desc: "Voorraad, fulfilment, CRM en marketing tools gekoppeld.", icon: "🔗" },
  { title: "Beheerbaar", desc: "CMS voor producten, promo's, categorieën en blog.", icon: "🗂️" },
  { title: "Analytics", desc: "Events voor cart, checkout en funnels, klaar voor ads.", icon: "📈" },
  { title: "Scalable stack", desc: "Shopify/Headless met ruimte voor growth en automatisering.", icon: "🧱" }
];

const audience = [
  "E-commerce teams die sneller willen schalen",
  "Merken die betere checkout/conversie willen",
  "Shops met behoefte aan koppelingen (ERP/fulfilment)",
  "D2C brand owners die campagnes snel willen draaien"
];

const processSteps = [
  { title: "Analyse & stack keuze", desc: "Catalogus, logistiek, betaalsystemen en koppelingen bepalen.", icon: "🧭" },
  { title: "UX & checkout flow", desc: "Productdetail, cart en checkout flow ontwerpen en valideren.", icon: "🛍️" },
  { title: "Build & integraties", desc: "Theme/headless build, payments, shipping, voorraad en automations.", icon: "🛠️" },
  { title: "QA & launch", desc: "Cross-device tests, performance tuning, events/pixels en livegang.", icon: "🚀" }
];

const testimonials = [
  { quote: "Checkout drop-off omlaag, AOV omhoog. En support reageert snel.", name: "Anouk Vermeer", role: "E-com manager" },
  { quote: "Integraties met fulfilment en CRM in Ã©Ã©n sprint geregeld.", name: "Kevin de Bruin", role: "Founder, D2C brand" }
];

const faqItems = [
  { q: "Werk je met bestaande shops?", a: "Ja, optimalisaties of replatforming naar Shopify/Headless zijn mogelijk." },
  { q: "Koppelingen met ons ERP?", a: "Veelvoorkomend: Exact, AFAS, Sendcloud/PostNL, CRM's en marketing tools." },
  { q: "Hoe snel kunnen we live?", a: "Een MVP staat vaak binnen 3–5 weken, afhankelijk van catalogus en integraties." }
];

const mappedPortfolio = portfolioItems.slice(0, 6).map((p) => ({
  title: p.title,
  desc: p.summary,
  image: p.images[0]
}));

const WebshopsPage = () => (
  <Layout>
    <ServiceHero
      title="Webshops die converteren en klaar zijn voor groei"
      description="Snelle, conversiegerichte shops met optimale checkout, integraties en tracking. Klaar voor campagnes en schaal."
      ctaPrimary={{ label: "Start a Project", href: "/contact" }}
      ctaSecondary={{ label: "View Examples", href: "/portfolio" }}
      accent="from-blue-700 via-cyan-500 to-emerald-500"
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

export default WebshopsPage;




