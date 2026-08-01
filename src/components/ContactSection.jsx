/**
 * Contact Section Component
 */
import React from "react";
import { Mail, Award } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionLabel } from "./SectionLabel";
import { CONTACT, CERTS } from "../data/constants";
import { motion } from "framer-motion";

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="section contact-section" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
      >
        <SectionLabel>Contact</SectionLabel>
        <h2 className="section-heading">
          I'm always open to interesting conversations, collaboration, or new opportunities
        </h2>
        <p className="contact-text">
          Whether you have a question, a project in mind, or just want to talk about AI systems and problem-solving, feel free to reach out.
        </p>
      </motion.div>

      <motion.div
        className="contact-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.a
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="contact-card"
          href={`mailto:${CONTACT.email}`}
        >
          <div className="contact-card-icon">
            <Mail size={24} strokeWidth={2} />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-title">Email</span>
            <span className="contact-card-subtitle">{CONTACT.email}</span>
          </div>
        </motion.a>

        <motion.a
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="contact-card"
          href={`https://github.com/${CONTACT.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-card-icon">
            <FaGithub size={24} />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-title">GitHub</span>
            <span className="contact-card-subtitle">{CONTACT.github}</span>
          </div>
        </motion.a>

        <motion.a
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="contact-card"
          href={`https://linkedin.com/in/${CONTACT.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-card-icon">
            <FaLinkedin size={24} />
          </div>
          <div className="contact-card-content">
            <span className="contact-card-title">LinkedIn</span>
            <span className="contact-card-subtitle">{CONTACT.linkedin}</span>
          </div>
        </motion.a>

        {CERTS.map((cert, i) => (
          <motion.a
            key={i}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="contact-card"
            href={cert.url || "#"}
            target={cert.url ? "_blank" : "_self"}
            rel={cert.url ? "noopener noreferrer" : ""}
          >
            <div className="contact-card-icon">
              <Award size={24} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-title">{cert.issuer}</span>
              <span className="contact-card-subtitle">{cert.name}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
