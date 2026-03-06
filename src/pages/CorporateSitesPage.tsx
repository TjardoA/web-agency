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
  { title: "Conversiegericht", desc: "Heldere waardepropositie, proof en scherpe CTA's.", icon: "🎯" },
  { title: "Vertrouwen", desc: "Team, cases, certificeringen en socials op de juiste plekken.", icon: "🤝" },
  { title: "Meetbaar", desc: "Events, dashboards en rapportage zodat sales weet wat werkt.", icon: "📊" },
  { title: "CMS klaar", desc: "Cases, diensten, team en vacatures eenvoudig beheren.", icon: "🗂️" },
  { title: "SEO & performance", desc: "Snel, gestructureerde data en nette meta's.", icon: "🚀" },
  { title: "Schaalbaar", desc: "Componenten voor nieuwe pagina's, campagnes en lokale vertakkingen.", icon: "🧱" }
];

const audience = [
  "Consultancy & agencies die vertrouwen willen wekken",
  "B2B scale-ups met sales funnels",
  "Teams die cases, diensten en team willen uitlichten",
  "Organisaties die meerdere talen/landen willen bedienen"
];

const processSteps = [
  { title: "Kick-off", desc: "Doelen, ICP en salesjourney scherpstellen.", icon: "🗺️" },
  { title: "Content & IA", desc: "Structuur voor diensten, cases, team en CTA's.", icon: "🧭" },
  { title: "Design & copy", desc: "Figma met states, micro-animaties en tone-of-voice.", icon: "✨" },
  { title: "Build & launch", desc: "React/TS + CMS, QA, performance en SEO checks.", icon: "🚀" }
];

const testimonials = [
  { quote: "Vertrouwen straalt eraf en leads komen merkbaar warmer binnen.", name: "Eva Janssen", role: "Marketing Lead, B2B SaaS" },
  { quote: "Snelle iteraties en duidelijke rapportage. Sales heeft nu beter zicht.", name: "Ruben Kok", role: "Head of Sales" }
];

const faqItems = [
  { q: "Hoe lang duurt een traject?", a: "Meestal 4–6 weken afhankelijk van aantal pagina's en feedbackrondes." },
  { q: "Kunnen we meertalig?", a: "Ja, we kunnen een meertalige setup inrichten afhankelijk van CMS keuze." },
  { q: "Werkt dit met ons CRM?", a: "Ja, we koppelen formulieren aan jullie CRM/marketing automation." }
];

const mappedPortfolio = portfolioItems.slice(0, 6).map((p) => ({
  title: p.title,
  desc: p.summary,
  image: p.images[0]
}));

const CorporateSitesPage = () => (
  <Layout>
    <ServiceHero
      title="Corporate sites die vertrouwen geven en converteren"
      description="Heldere positioning, cases en teamverhalen die leads richting contact sturen. Snel, schaalbaar en meetbaar."
      ctaPrimary={{ label: "Start a Project", href: "/contact" }}
      ctaSecondary={{ label: "View Examples", href: "/portfolio" }}
      accent="from-blue-800 via-indigo-700 to-purple-600"
    />
    <ServiceFeatures features={features} />
    <ServiceAudience bullets={audience} imageSrc="/porfolio_aboutme.png" />
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

export default CorporateSitesPage;




