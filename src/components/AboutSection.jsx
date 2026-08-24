import { MapPin, Code, GraduationCap, Compass, Sparkles, ExternalLink, Cpu, Layers } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm md:text-base">
            A quick glimpse into my background, focus, and technical drive.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. Kiri: Large Portrait Card */}
          <div className="md:col-span-4 relative group rounded-3xl overflow-hidden border border-border bg-card min-h-[460px] flex flex-col justify-between p-6 card-hover shadow-md">
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/Pas foto.png"
                alt="Wilsen Angelo Laisan"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-black/30" />
            </div>

            {/* Top Badge */}
            <div className="relative z-10 flex justify-between items-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Bottom Info Overlay */}
            <div className="relative z-10 pt-20">
              <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider text-primary uppercase bg-primary/20 backdrop-blur-md rounded-md mb-2 border border-primary/30">
                UTC+7
              </span>
              <h3 className="text-xl font-bold text-white drop-shadow-sm">
                Wilsen Angelo Laisan
              </h3>
              <p className="text-xs text-slate-200 mt-1">
                Computer Science Student @ BINUS
              </p>
            </div>
          </div>

          {/* 2. Kanan Atas: Bio Utama (Me in Brief) */}
          <div className="md:col-span-8 rounded-3xl border border-border bg-card/60 backdrop-blur-md p-8 flex flex-col justify-between card-hover shadow-md">
            <div>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                <Sparkles className="w-4 h-4" />
                <span>ME IN BRIEF</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Architecting intuitive digital solutions through code and design.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                I'm currently pursuing my Mobile Application and Technology degree at BINUS University. I channel my passion into engineering robust, scalable mobile applications, modern web platforms, and exploring emerging AI & Web3 technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I believe that clean architecture and thoughtful UI/UX go hand-in-hand to create digital products that are not only fully functional, but truly impactful to use.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-border/50">
              <a href="#contact" className="cosmic-button">
                Let's Connect
              </a>
              <a
                href="/CV/CV - Wilsen Angelo Laisan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary/50 text-sm font-medium hover:bg-primary/10 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <span>Download CV</span>
                <ExternalLink className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* 3. Kanan Bawah - Kiri: Current Exploration & Research (Menggantikan Music Widget) */}
          <div className="md:col-span-5 rounded-3xl border border-border bg-card/60 backdrop-blur-md p-6 flex flex-col justify-between card-hover shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span>CURRENT RESEARCH & STACK</span>
                </div>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>

              <h4 className="text-base font-bold text-foreground">
                AI Sentiment & Market Analytics
              </h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                Building CryptoSen: NLP-driven market sentiment analysis & financial news aggregation.
              </p>
            </div>

            {/* Tech Badges */}
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                {["Flutter", "React", "Node.js", "Python NLP", "Web3"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-secondary text-foreground border border-border/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Kanan Bawah - Kanan: Core Focus & Highlights */}
          <div className="md:col-span-7 rounded-3xl border border-border bg-card/60 backdrop-blur-md p-6 flex flex-col justify-between card-hover shadow-md">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">
              <Layers className="w-4 h-4 text-primary" />
              <span>CORE FOCUS & SPECIALTY</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-secondary/40 border border-border/50">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-medium text-muted-foreground">EDUCATION</span>
                </div>
                <p className="font-bold text-sm">BINUS University</p>
                <p className="text-xs text-muted-foreground mt-0.5">Mobile App & Tech</p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/40 border border-border/50">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Code className="w-4 h-4" />
                  <span className="text-xs font-medium text-muted-foreground">SPECIALTY</span>
                </div>
                <p className="font-bold text-sm">Full-Stack & Mobile</p>
                <p className="text-xs text-muted-foreground mt-0.5">React, Flutter, iOS</p>
              </div>
            </div>

            {/* Approach Pills */}
            <div className="pt-3 border-t border-border/50">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                <Compass className="w-3.5 h-3.5 text-primary" />
                <span>APPROACH</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Clean Architecture", "Intuitive UI/UX", "Problem Solving", "Continuous Learning"].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};