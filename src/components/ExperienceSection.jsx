/**
 * Experience Section Component
 */
import React from "react";
import { SectionLabel } from "./SectionLabel";
import { EXPERIENCE } from "../data/constants";
import { motion } from "framer-motion";

export function ExperienceSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section" id="experience">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
      >
        <SectionLabel index="02">Experience</SectionLabel>
        <h2 className="section-heading">Where the work happened</h2>
      </motion.div>
      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {EXPERIENCE.map((exp, idx) => (
          <motion.div className="timeline-item" key={exp.org} variants={itemVariants}>
            <div className="timeline-org">{exp.org}</div>
            <div>
              {exp.roles.map((r) => (
                <div className="role-block" key={r.title}>
                  <div className="role-title-row">
                    <span className="role-title">{r.title}</span>
                    {r.date && <span className="role-date">{r.date}</span>}
                    {r.current}
                  </div>
                  <ul className="role-bullets">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
