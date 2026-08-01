/**
 * Projects Section Component
 */
import React from "react";
import { SectionLabel } from "./SectionLabel";
import { Tag } from "./Tag";
import { PROJECTS } from "../data/constants";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section" id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
      >
        <SectionLabel index="04">Projects</SectionLabel>
        <h2 className="section-heading">Things I've architected and shipped</h2>
      </motion.div>
      <motion.div 
        className="project-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {PROJECTS.map((p, idx) => (
          <motion.div 
            className="project-item" 
            key={p.name} 
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(94,234,212,0.15)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="project-header">
              <h3 className="project-name">{p.name}</h3>
              <span className="project-tag">{p.tag}</span>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="tag-row">
              {p.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
