/**
 * About Section Component
 */
import React from "react";
import { Terminal, Network, FlaskConical } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { motion } from "framer-motion";

export function AboutSection() {
  const highlights = [
    {
      icon: Terminal,
      label: "Terminal-First Workflow",
      desc: "Python, FastAPI, and VS Code. I like a setup that stays fast, reliable, and predictable."
    },
    {
      icon: Network,
      label: "Systems Thinker",
      desc: "From RAG pipelines to threat detection graphs — I care about the reasoning layer, not just the API."
    },
    {
      icon: FlaskConical,
      label: "Research-Driven",
      desc: "Federated learning for sepsis detection, agent workflows, and graph-based EDR systems."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section" id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
      >
        <SectionLabel>About</SectionLabel>
        <h2 className="section-heading">
          Hi, I'm Abdul Rafay, a Computer Science graduate from Lahore Garrison University with a strong focus on building solutions, and building reliable systems which create real world impact.
        </h2>
        <div className="about-content">
          <p className="about-text">
            I started with competitive programming and carried that rigor into research and software projects. That mindset shows up in how I approach correctness, complexity, and edge cases.
          </p>
          <p className="about-text">
            Outside code, you'll usually find me solving a analytical, quantitative and duductive reasoning, working on AI solutions, or tweaking my backend design to be scalable.
          </p>
          <p className="about-text">
            I'm currently open to Software Engineering, AI Engineer roles, opportunities, and projects that involve strong problem solving.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="highlights-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {highlights.map((h, i) => {
          const IconComponent = h.icon;
          return (
            <motion.div key={i} className="highlight-card" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="highlight-icon">
                <IconComponent size={20} strokeWidth={2} />
              </div>
              <h3 className="highlight-title">{h.label}</h3>
              <p className="highlight-desc">{h.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
