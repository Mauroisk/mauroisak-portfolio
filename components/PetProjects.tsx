"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "NhaBex",
    description:
      "Plataforma digital desenvolvida na IT Solution, focada em solucoes tecnologicas para o mercado cabo-verdiano.",
    tags: ["React", "Next.js", "Node.js"],
    github: "#",
  },
  {
    title: "CV Innovation",
    description:
      "Projeto de inovacao desenvolvido durante estagio curricular na IT Solution, focado em transformacao digital em Cabo Verde.",
    tags: ["JavaScript", "MySQL", "Git"],
    github: "#",
  },
  {
    title: "AfricanDev Integracoes",
    description:
      "Desenvolvimento back-end remoto para a AfricanDev (Brasil), criando APIs e integrando sistemas para clientes internacionais.",
    tags: ["Node.js", "Python", "SQL"],
    github: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
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
            Pet <span className="neon-text">Projetos</span>
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-neon" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-neon/50 hover:bg-neon/5 block"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 text-muted-foreground group-hover:text-neon transition-colors"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
