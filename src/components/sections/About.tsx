import SectionShell from "../ui/SectionShell";
import Button from "../ui/Button";

const About = () => (
  <SectionShell
    id="about"
    title="Over mij"
    description="Ik ontwerp en bouw high-performance websites met focus op kwaliteit, performance en modern design."
  >
    <div className="max-w-3xl text-base text-slate-700 space-y-4">
      <p>
        Placeholder bio: ik help bedrijven met een digitale ervaring die snel laadt, logisch navigeert
        en vertrouwen wekt. Elk detail wordt getest, van typografie tot micro-interacties.
      </p>
      <p>
        Mijn aanpak: strategie, wireframes, design systems en vervolgens strakke implementatie met
        herbruikbare componenten, semantische HTML en SEO-best practices.
      </p>
      <Button className="mt-2" onClick={() => (window.location.href = "/portfolio")}>
        Lees meer
      </Button>
    </div>
  </SectionShell>
);

export default About;
