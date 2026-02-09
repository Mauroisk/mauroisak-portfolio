"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Engenharia de Sistemas e Informatica",
    institution: "Universidade Jean Piaget de Cabo Verde",
    period: "2020 — 2025",
    description:
      "Formacao em Engenharia de Sistemas e Informatica, com foco em desenvolvimento de software, arquitetura de sistemas, algoritmos e gestao de bases de dados.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="neon-text">Educacao</span>
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-neon" />
        </motion.div>

        <div className="mt-10 flex flex-col gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-neon/50"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-xs font-mono text-neon mt-1 sm:mt-0 flex-shrink-0">
                  {edu.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
