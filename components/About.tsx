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

          <div className="mt-8 flex flex-col gap-6 text-secondary-foreground/80 leading-relaxed">
            <p>
              Profissional focado, com mais de cinco anos de experiencia em
              desenvolvimento de solucoes em Engenharia Informatica,
              destacando-se pela comunicacao eficaz, trabalho em equipe e
              aprendizado continuo.
            </p>
            <p>
              Formado em Engenharia de Sistemas e Informatica pela Universidade
              Jean Piaget de Cabo Verde, possuo experiencia em desenvolvimento
              full-stack utilizando tecnologias modernas como React, Next.js e
              Node.js. Trabalho tanto em front-end como em back-end, sempre
              buscando entregar solucoes robustas e de qualidade.
            </p>
            <p>
              <strong className="text-foreground">Idiomas:</strong>{" "}
              Portugues (Nativo) | Ingles (Avancado)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
