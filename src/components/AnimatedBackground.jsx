import React from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="animated-bg-container">
      <motion.div
        className="bg-orb blue-orb"
        animate={{
          x: ["0%", "15%", "-10%", "0%"],
          y: ["0%", "-15%", "10%", "0%"],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="bg-orb slate-orb"
        animate={{
          x: ["0%", "-15%", "15%", "0%"],
          y: ["0%", "15%", "-10%", "0%"],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="noise" />
    </div>
  );
}
