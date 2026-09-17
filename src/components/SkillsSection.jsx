/**
 * Skills Section Component
 * Includes both main skills and certifications subsection
 */
import React from "react";
import { SectionLabel } from "./SectionLabel";
import { SKILLS } from "../data/constants";
import { motion } from "framer-motion";

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="section" id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <SectionLabel>Skills</SectionLabel>
        <h2 className="section-heading">The stack, grouped by what it's for</h2>
      </motion.div>
      
      <motion.div 
        className="skills-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SKILLS.map((category) => (
          <motion.div key={category.label} className="skill-category" variants={itemVariants}>
            <h3 className="skill-category-label">{category.label}</h3>
            <div className="skill-tags">
              {category.items.map((item) => (
                <motion.span 
                  key={item} 
                  className="skill-tag"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
