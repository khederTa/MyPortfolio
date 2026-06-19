import { useState, useEffect } from "react";
import AnimatedBackground from "../components/portfolio/AnimatedBackground";
import SidebarDock from "../components/portfolio/SidebarDock";
import MobileNav from "../components/portfolio/MobileNav";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import ExpertiseSection from "../components/portfolio/ExpertiseSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ServicesSection from "../components/portfolio/ServicesSection";
import TrustSection from "../components/portfolio/TrustSection";
// import TestimonialsSection from "../components/portfolio/TestimonialsSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";

const sectionIds = ["hero", "about", "expertise", "projects", "services", "trust", "testimonials", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <SidebarDock activeSection={activeSection} />
      <MobileNav />

      <main className="relative z-10 lg:pl-20">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ServicesSection />
        <TrustSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}