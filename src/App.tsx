import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechApproach from "./components/TechApproach";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <TechApproach />
    <TechStack />
    <Projects />
    <Testimonials />
    <Contact />
  </Layout>
);

export default App;
