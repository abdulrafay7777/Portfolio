import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScroll } from "./hooks/useScroll";
import { Navigation } from "./components/Navigation";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import "./styles/index.css";

function AppContent() {
  const scrolled = useScroll();

  return (
    <div className="portfolio-root">
      {/* Background and ambient effects */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation scrolled={scrolled} />

      {/* Main content sections */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
