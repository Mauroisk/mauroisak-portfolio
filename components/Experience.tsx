"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Developer / Full-Stack",
    company: "IT Solution — NhaBex",
    period: "Jul 2025 — Fev 2026",
  },
  {
    role: "Back-End Developer",
    company: "AfricanDev (Brasil) — Remote",
    period: "Abr 2025 — Jul 2025",
  },
  {
    role: "Junior Developer / Front-End",
    company: "IT Solution — NhaBex (Estagio IEFP)",
    period: "Out 2024 — Mar 2025",
  },
  {
    role: "Web Developer",
    company: "IT Solution — CV Innovation (Estagio)",
    period: "Mar 2024 — Jun 2024",
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
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-6" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-neon bg-background md:left-4.5" />

                <div className="rounded-xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:border-neon/40">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold text-foreground text-sm">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-neon">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {exp.company}
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
