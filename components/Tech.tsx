"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "JavaScript", icon: "javascript" },
  { name: "Java", icon: "java" },
  { name: "Python", icon: "python" },
  { name: "C++", icon: "cplusplus" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "MySQL", icon: "mysql" },
  { name: "Oracle", icon: "oracle" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "VS Code", icon: "vscode" },
  { name: "Figma", icon: "figma" },
  { name: "Linux", icon: "linux" },
  { name: "Windows", icon: "windows11" },
  { name: "Apple", icon: "apple" },
];

function TechIcon({ name }: { name: string }) {
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
      alt={name}
      width={40}
      height={40}
      className="h-10 w-10"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`;
      }}
    />
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Tech() {
  return (
    <section id="tech" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="neon-text">Tech</span> Stack
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-neon" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-neon hover:bg-neon/5"
            >
              <TechIcon name={tech.icon} />
              <span className="text-xs text-muted-foreground group-hover:text-neon transition-colors text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
