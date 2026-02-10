"use client";

import { motion } from "framer-motion";

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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 rounded-xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:border-neon/40"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Engenharia de Sistemas e Informatica
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Universidade Jean Piaget de Cabo Verde
              </p>
            </div>
            <span className="text-xs font-mono text-neon mt-1 sm:mt-0 flex-shrink-0">
              2020 — 2025
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
