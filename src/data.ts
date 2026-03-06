import { Service, Project, PortfolioItem, Testimonial } from "./types";

export const services: Service[] = [
  {
    title: "Webdesign & Development",
    description: "Van strategie tot oplevering: pixel-perfect, snel en schaalbaar.",
    path: "/development"
  },
  {
    title: "Portfolio Websites",
    description: "Minimalistische portfolio's die jouw verhaal en werk laten schitteren.",
    path: "/portfolio-websites"
  },
  {
    title: "Bedrijfswebsites",
    description: "Heldere conversiegerichte sites die vertrouwen wekken bij klanten.",
    path: "/bedrijfswebsites"
  },
  {
    title: "Landing Pages",
    description: "Laser-focused landings voor campagnes met snelle laadtijden.",
    path: "/landing-pages"
  },
  {
    title: "Webshops",
    description: "Conversiegerichte webshops met snelle checkout en slimme koppelingen.",
    path: "/webshops"
  }
];

export const projects: Project[] = [
  { title: "Project One", tag: "SaaS" },
  { title: "Project Two", tag: "E-commerce" },
  { title: "Project Three", tag: "Consulting" },
  { title: "Project Four", tag: "Branding" }
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Showcase 01",
    summary: "Clean bedrijfswebsite met focus op conversie.",
    images: [
      "https://picsum.photos/id/26/1200/800",
      "https://picsum.photos/id/96/1200/800",
      "https://picsum.photos/id/119/1200/800"
    ]
  },
  {
    title: "Showcase 02",
    summary: "Portfolio-layout met editorial typografie en sterke visuals.",
    images: [
      "https://picsum.photos/id/160/1200/800",
      "https://picsum.photos/id/180/1200/800",
      "https://picsum.photos/id/193/1200/800"
    ]
  },
  {
    title: "Showcase 03",
    summary: "Landing page met heldere structuur en snelle performance.",
    images: [
      "https://picsum.photos/id/201/1200/800",
      "https://picsum.photos/id/211/1200/800",
      "https://picsum.photos/id/225/1200/800"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Lisa van den Berg",
    role: "CEO",
    company: "TechStart",
    quote:
      "Onze website conversie steeg met 40% na de redesign. Het team begreep precies wat we nodig hadden."
  },
  {
    name: "Mark Jansen",
    role: "Founder",
    company: "Creative Studio",
    quote: "Professioneel, transparant en resultaatgericht. Precies zoals beloofd. Aanrader!"
  },
  {
    name: "Sarah de Vries",
    role: "Marketing Manager",
    company: "GrowthCo",
    quote: "Eindelijk een agency die verder kijkt dan alleen design. De SEO resultaten zijn fenomenaal."
  }
];
