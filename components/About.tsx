"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sobre <span className="neon-text">Mim</span>
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-neon" />

          <div className="mt-8 flex flex-col gap-4 text-muted-foreground leading-relaxed">
            <p>
              Engenheiro de Sistemas e Informatica pela Universidade Jean Piaget
              de Cabo Verde, com +5 anos de experiencia em desenvolvimento
              full-stack. Especializado em React, Next.js e Node.js.
            </p>
            <p className="text-sm">
              <span className="text-foreground font-medium">Idiomas:</span>{" "}
              Portugues (Nativo) &middot; Ingles (Avancado)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
