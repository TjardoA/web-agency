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

const featureList = [
  { title: "Custom design", desc: "Uniek design in jouw stijl, niet op basis van templates.", icon: "🎨" },
  { title: "Responsive", desc: "Pixel-perfect op mobiel, tablet en desktop.", icon: "📱" },
  { title: "Snel & licht", desc: "Geoptimaliseerde assets en Core Web Vitals in de groene zone.", icon: "⚡" },
  { title: "SEO basics", desc: "Schone structuur, meta's en OG-images voor delen en vindbaarheid.", icon: "🔍" },
  { title: "CMS ready", desc: "Projecten, bio en pers eenvoudig zelf beheren.", icon: "🗂️" },
  { title: "Analytics", desc: "Tracking events voor views, clicks en formulierconversies.", icon: "📈" }
];

const audience = [
  "Designers en fotografen die hun werk willen laten spreken",
  "Creatieve freelancers en bureaus met cases",
  "Developers die projecten en stack willen tonen",
  "Startups die hun story en team zichtbaar willen maken"
];

const processSteps = [
  { title: "Discovery", desc: "Doelen, publiek en gewenste vibe bepalen met referenties.", icon: "🔎" },
  { title: "Design", desc: "Figma concept met states, micro-animaties en copyrichtingen.", icon: "✨" },
  { title: "Development", desc: "React/TS + CMS, framer-motion animaties, performance tuning.", icon: "🛠️" },
  { title: "Launch", desc: "QA, Core Web Vitals, SEO meta's, share images en handover.", icon: "🚀" }
];

const testimonials = [
  { quote: "Heldere flow en super snel live. Mijn klanten reageren meteen.", name: "Sanne de Vries", role: "Photographer" },
  { quote: "De site vertelt mijn verhaal beter dan elke pitch deck.", name: "Joris Peeters", role: "Freelance Designer" }
];

const faqItems = [
  { q: "Hoe lang duurt een project?", a: "Meestal 2–4 weken voor ontwerp + build, afhankelijk van aantal pagina's en feedbackrondes." },
  { q: "Kan ik zelf projecten toevoegen?", a: "Ja, via het CMS kun je projecten, bio en pers eenvoudig beheren." },
  { q: "Welke stack gebruik je?", a: "React/TypeScript, framer-motion voor UI en een licht CMS. GSAP voor scroll-animaties." }
];

const mappedPortfolio = portfolioItems.slice(0, 6).map((p) => ({
  title: p.title,
  desc: p.summary,
  image: p.images[0]
}));

const PortfolioSitesPage = () => (
  <Layout>
    <ServiceHero
      title="Portfolio websites die je werk laten schitteren"
      description="Minimalistische, snelle portfolio's met heldere storytelling, micro-animaties en een CMS waarmee je zelf projecten bijwerkt."
      ctaPrimary={{ label: "Start a Project", href: "/contact" }}
      ctaSecondary={{ label: "View Examples", href: "/portfolio" }}
      accent="from-indigo-600 via-blue-500 to-purple-500"
    />

    <ServiceFeatures features={featureList} />
    <ServiceAudience bullets={audience} imageSrc="/portfolio-hero.png" />
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

export default PortfolioSitesPage;




