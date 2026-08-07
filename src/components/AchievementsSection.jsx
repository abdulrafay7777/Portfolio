/**
 * Achievements Section Component
 */
import React from "react";
import { SectionLabel } from "./SectionLabel";
import { ACHIEVEMENTS } from "../data/constants";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function AchievementsSection() {
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
    <section className="section" id="achievements">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
      >
        <SectionLabel index="05">Achievements</SectionLabel>
        <h2 className="section-heading">Client Success & Milestones</h2>
      </motion.div>
      <motion.div 
        className="cache-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {ACHIEVEMENTS.map((a, idx) => (
          <motion.div 
            className={`cache-card ${a.isLarge ? "is-large" : ""}`}
            key={idx} 
            variants={itemVariants}
          >
            {/* The visual pop-out top half */}
            <div 
              className="cache-card-visual" 
              onMouseEnter={(e) => e.currentTarget.style.background = a.hoverBg}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)'}
            >
              {a.image && (
                <img 
                  src={a.image} 
                  alt={a.title} 
                  className="cache-image" 
                />
              )}
            </div>

            {/* The content bottom half */}
            <div className="cache-card-content">
              <div className="cache-card-header">
                <h3 className="cache-card-title">{a.title}</h3>
                {a.date && <span className="cache-card-tag">{a.date}</span>}
              </div>
              <p className="cache-card-desc">{a.desc}</p>
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ textDecoration: "none", width: "fit-content" }}>
                  View Project <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
