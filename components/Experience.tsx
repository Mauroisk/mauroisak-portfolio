"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Developer / Full-Stack",
    company: "IT Solution — Projeto NhaBex",
    period: "Jul 2025 — Fev 2026",
    description:
      "Desenvolvimento full-stack no projeto NhaBex, liderando a implementacao de funcionalidades e a arquitetura de solucoes escaláveis.",
  },
  {
    role: "Back-End Developer (Prestacao de Servicos)",
    company: "AfricanDev (Brasil) — Remote",
    period: "Abr 2025 — Jul 2025",
    description:
      "Prestacao de servicos remotos de desenvolvimento back-end para empresa brasileira, focando em APIs e integracao de sistemas.",
  },
  {
    role: "Junior Developer / Front-End (Estagio Profissional — IEFP)",
    company: "IT Solution — NhaBex",
    period: "Out 2024 — Mar 2025",
    description:
      "Estagio profissional com foco em desenvolvimento front-end, contribuindo para a interface e experiencia do utilizador da plataforma NhaBex.",
  },
  {
    role: "Web Developer (Estagio Curricular)",
    company: "IT Solution — CV Innovation",
    period: "Mar 2024 — Jun 2024",
    description:
      "Estagio curricular em desenvolvimento web, participando na criacao e manutencao de aplicacoes web para clientes da IT Solution.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="neon-text">Experiencia</span>
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-neon" />
        </motion.div>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-6" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-neon bg-background md:left-4.5" />

                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-neon/50">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-neon">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
