import { Navbar } from "../components/Navbar";
import { InteractiveParticles } from "../components/InteractiveParticles";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ExperienceCertificateSection } from "../components/ExperienceCertificateSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Cukup gunakan kanvas jaringan interaktif ini saja */}
      <InteractiveParticles />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceCertificateSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};