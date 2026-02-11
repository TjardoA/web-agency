import { Service, Project, Testimonial } from "./types";

export const services: Service[] = [
  {
    title: "Webdesign & Development",
    description: "Van strategie tot oplevering: pixel-perfect, snel en schaalbaar."
  },
  {
    title: "Portfolio Websites",
    description: "Minimalistische portfolio’s die jouw verhaal en werk laten schitteren."
  },
  {
    title: "Bedrijfswebsites",
    description: "Heldere conversiegerichte sites die vertrouwen wekken bij klanten."
  },
  {
    title: "Landing Pages",
    description: "Laser-focused landings voor campagnes met snelle laadtijden."
  }
];

export const projects: Project[] = [
  { title: "Project One", tag: "SaaS" },
  { title: "Project Two", tag: "E-commerce" },
  { title: "Project Three", tag: "Consulting" },
  { title: "Project Four", tag: "Branding" }
];

export const testimonials: Testimonial[] = [
  {
    name: "Sanne Jansen",
    role: "Marketing Lead",
    company: "BrightGrow",
    quote: "Strakke oplevering, uitstekende performance en duidelijke communicatie."
  },
  {
    name: "David Vermeer",
    role: "Founder",
    company: "Scaleup Labs",
    quote: "Onze nieuwe site voelt premium en converteert beter dan ooit."
  },
  {
    name: "Lotte de Vries",
    role: "COO",
    company: "Northwind",
    quote: "Professioneel proces en moderne uitstraling. Aanrader."
  }
];
