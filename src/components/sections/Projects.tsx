import { projects } from "../../data";
import SectionShell from "../ui/SectionShell";
import { motion } from "framer-motion";

const Projects = () => (
  <SectionShell
    id="projects"
    title="Projecten"
    description="Een selectie placeholder cases. In productie vervang je ze met echte cases."
  >
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <motion.div
          key={project.title}
          whileHover={{ scale: 1.02 }}
          className="group relative overflow-hidden rounded-2xl border border-soft bg-white"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-ink to-slate-700" />
          <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition duration-300" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
              {project.tag}
            </p>
            <h3 className="text-lg font-semibold">{project.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionShell>
);

export default Projects;
