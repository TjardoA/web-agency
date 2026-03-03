import { projects } from "../../data";
import SectionShell from "../ui/SectionShell";
import { motion } from "framer-motion";
import { stagger } from "../../animations/motion";

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const Projects = () => (
  <SectionShell
    id="projects"
    title="Projecten"
    description="Een selectie placeholder cases. In productie vervang je ze met echte cases."
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          variants={card}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          whileHover={{ scale: 1.04, rotate: -0.4 }}
          className="group relative overflow-hidden rounded-2xl border border-soft bg-white"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-ink to-slate-700" />
          <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition duration-300" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">{project.tag}</p>
            <h3 className="text-lg font-semibold">{project.title}</h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </SectionShell>
);

export default Projects;
