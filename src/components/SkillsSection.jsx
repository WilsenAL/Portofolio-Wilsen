import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Application
  { name: "Flutter", level: 100, category: "application" },
  { name: "Dart", level: 100, category: "application" },
  { name: "Kotlin", level: 100, category: "application" },
  { name: "Java", level: 100, category: "application" },
  { name: "Swift", level: 100, category: "application" },
  { name: "Unity", level: 100, category: "application" },
  { name: "C Language", level: 100, category: "application" },

  // Website
  { name: "HTML/CSS", level: 100, category: "website" },
  { name: "JavaScript", level: 100, category: "website" },
  { name: "React", level: 100, category: "website" },
  { name: "Tailwind CSS", level: 100, category: "website" },
  { name: "Node.js", level: 100, category: "website" },
  { name: ".NET Core", level: 100, category: "website" },

  // Database
  { name: "Firebase", level: 100, category: "database" },
  { name: "MySQL", level: 100, category: "database" },
  { name: "MongoDB", level: 100, category: "database" },

  // Crypto & Web3
  { name: "Blockchain Basics", level: 100, category: "crypto" },
  { name: "Smart Contracts", level: 100, category: "crypto" },
  { name: "Crypto Trading & Analysis", level: 100, category: "crypto" },

  // Tools
  { name: "Git/GitHub", level: 100, category: "tools" },
  { name: "Figma", level: 100, category: "tools" },
  { name: "VS Code", level: 100, category: "tools" },
];

const categories = ["all", "application", "website", "database", "crypto", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
