import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Avatar Profil Modern + Teks Singkat */}
          <div className="space-y-8 text-center md:text-left">
            {/* Foto Profil dengan Glowing Glass Frame */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0 group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-indigo-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 bg-card">
                <img
                  src="/Pas foto.png"
                  alt="Wilsen Angelo Laisan"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">
                Passionate Full-Stack & Mobile Developer
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Computer Science student at Binus University specializing in Mobile Application and Technology. Experienced in engineering cross-platform applications and modern web solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Passionate about clean architecture, intuitive UI/UX design, and applying emerging Web3 & AI technologies to solve real-world complex problems.
              </p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/CV/CV - Wilsen Angelo Laisan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary/50 font-medium relative overflow-hidden group backdrop-blur-sm"
              >
                <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300">
                  Download CV
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Skill Highlight Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web & Application Development</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Building robust, cross-platform mobile apps and responsive web applications with modern tech stacks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design & Architecture</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Crafting intuitive interfaces, seamless interaction flows, and scalable frontend architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web3 & Emerging Tech</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Exploring decentralized systems, crypto market analytics, and AI-driven data processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};