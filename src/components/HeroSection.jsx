import { ArrowDown, Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./icons/BrandIcons";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 flex flex-col items-center">
          
          {/* Status Badge */}
          <div className="opacity-0 animate-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-xs font-medium text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Internships & Projects</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-indigo-500 opacity-0 animate-fade-in-delay-1">
              Wilsen
            </span>
            <span className="opacity-0 animate-fade-in-delay-2">
              {" "}Angelo Laisan
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            Full-Stack & Mobile Developer specializing in building sleek cross-platform applications, modern web platforms, and smart financial tech.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-flex items-center gap-2">
              <span>View My Work</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-md text-sm font-medium hover:bg-secondary hover:border-primary/40 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Quick Social Links */}
          <div className="pt-4 flex items-center justify-center gap-5 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://github.com/WilsenAL"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/80 bg-card/40 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/wilsen-angelo-laisan-1a8803384/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/80 bg-card/40 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:wilsen1823@gmail.com"
              className="p-2 rounded-full border border-border/80 bg-card/40 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-1 tracking-wider uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  );
};