/**
 * Education Section Component
 */
import React from "react";
import { GraduationCap } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { EDUCATION, RESEARCH } from "../data/constants";
import { motion } from "framer-motion";

export function EducationSection() {
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
    <section className="section" id="education">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
      >
        <SectionLabel index="03">Education</SectionLabel>
        <h2 className="section-heading">Academic foundation and research</h2>
      </motion.div>
      
      {/* Education */}
      <motion.div 
        className="education-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {EDUCATION.map((edu, idx) => (
          <motion.div className="education-item" key={idx} variants={itemVariants}>
            <div className="education-icon">
              <GraduationCap size={24} strokeWidth={2} />
            </div>
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-meta">
                <span className="education-institution">{edu.institution}</span>
                <span className="education-date">{edu.date}</span>
              </div>
              <ul className="education-details">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Research */}
      {RESEARCH && RESEARCH.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 className="subsection-heading" variants={itemVariants}>Research Experience</motion.h3>
          <div className="timeline">
            {RESEARCH.map((exp, idx) => (
              <motion.div className="timeline-item" key={exp.org} variants={itemVariants}>
                <div className="timeline-org">{exp.org}</div>
                <div>
                  {exp.roles.map((r) => (
                    <div className="role-block" key={r.title}>
                      <div className="role-title-row">
                        <span className="role-title">{r.title}</span>
                        {r.date && <span className="role-date">{r.date}</span>}
                        {r.current && <span className="current-pill">CURRENT</span>}
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
          </div>
        </motion.div>
      )}
    </section>
  );
}
