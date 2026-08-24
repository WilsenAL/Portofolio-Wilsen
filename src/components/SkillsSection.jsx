import { useState } from "react";

const SKILLS_DATA = [
  // Application & Mobile
  { name: "Flutter", category: "Application", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", category: "Application", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Kotlin", category: "Application", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Swift", category: "Application", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Java", category: "Application", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },

  // Website & Frontend
  { name: "React.js", category: "Website", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", category: "Website", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", category: "Website", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Website", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", category: "Website", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", category: "Website", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

  // Database & Backend
  { name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Firebase", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "PostgreSQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },

  // Tools & Crypto
  { name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "C Language", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Python", category: "Crypto", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const CATEGORIES = ["All", "Application", "Website", "Database", "Crypto", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Creative <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm md:text-base">
            The technical arsenal I explore to create elegant digital solutions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105"
                    : "bg-card/60 border border-border/60 text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Bento Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/70 bg-card/50 backdrop-blur-sm p-4 flex items-center gap-3 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 card-hover"
            >
              {/* Icon Container with subtle glow */}
              <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/60 border border-border/40 flex items-center justify-center p-2 group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Text Label */}
              <div className="overflow-hidden text-left">
                <h3 className="font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] text-muted-foreground block truncate">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};