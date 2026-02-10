"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "NhaBex",
    description:
      "Plataforma digital para o mercado cabo-verdiano (IT Solution).",
    tags: ["React", "Next.js", "Node.js"],
    github: "#",
  },
  {
    title: "CV Innovation",
    description:
      "Projeto de transformacao digital em Cabo Verde (IT Solution).",
    tags: ["JavaScript", "MySQL", "Git"],
    github: "#",
  },
  {
    title: "AfricanDev",
    description: "APIs e integracoes back-end para clientes internacionais.",
    tags: ["Node.js", "Python", "SQL"],
    github: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PetProjects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="neon-text">Projetos</span>
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-neon" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-neon/40"
            >
              <h3 className="font-semibold text-foreground group-hover:text-neon transition-colors text-sm">
                {project.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
