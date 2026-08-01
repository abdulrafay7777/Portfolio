/**
 * Navigation Component
 * Minimal top navigation bar with smooth scroll
 */
import React, { useState } from "react";
import { NAV_LINKS } from "../data/constants";
import { useActiveSection } from "../hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation({ scrolled }) {
  const activeSection = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false); // Close menu when clicking a link
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("top")}>
            AR
          </button>
          
          {/* Desktop Nav */}
          <div className="nav-links desktop-only">
            {NAV_LINKS.map((l) => {
              const sectionId = l.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={l}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={() => scrollTo(sectionId)}
                >
                  {l}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="mobile-nav-links"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                }
              }}
            >
              {NAV_LINKS.map((l) => {
                const sectionId = l.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <motion.button
                    key={l}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                    }}
                    whileTap={{ scale: 0.95, opacity: 0.8 }}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                    onClick={() => scrollTo(sectionId)}
                  >
                    {l}
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
