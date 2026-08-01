/**
 * Footer Component
 */
import React from "react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>© {year} Abdul Rafay · Built with React & Vite</p>
    </footer>
  );
}
