import React, { useState } from "react";
import { GraphCanvas } from "./GraphCanvas";
import { CONTACT } from "../data/constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function HeroSection() {
  const [showEmail, setShowEmail] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="top">
      <GraphCanvas />
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-label"
        >
          HI, MY NAME IS
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-title"
        >
          <span className="hero-name">{CONTACT.name}</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hero-roles"
        >
          <div className="role-item">Computer Science Graduate</div>
          <div className="role-item">AI/ML Engineer</div>
          <div className="role-item">Multi-Agent Systems Developer</div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hero-description"
        >
          LGU graduate building reliable systems with a focus on correctness, performance, and clean user experience. I bridge algorithms, machine learning, and systems engineering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="hero-socials"
        >
          <a href={`https://github.com/${CONTACT.github}`} target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href={`https://linkedin.com/in/${CONTACT.linkedin}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <span 
            className="hero-mail-toggle" 
            onClick={() => setShowEmail(!showEmail)}
            title="Click to reveal email"
          >
            {showEmail ? (
              <span className="hero-email-text">{CONTACT.email}</span>
            ) : (
              <FaEnvelope size={20} />
            )}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
