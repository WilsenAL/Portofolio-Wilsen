import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "./icons/BrandIcons";


const projects = [
  {
    id: 1,
    title: "CryptoSen",
    description: "An AI-driven cryptocurrency news and sentiment analysis media platform using NLP to analyze market trends and assist data-driven trading decisions.",
    image: "/CryptoSen/CryptoSen2.png",
    tags: ["React Navitve"],
    demoUrl: "https://cryptosenintelligence.netlify.app",
    githubUrl: "https://github.com/WilsenAL/CryptoSen-Intelligence",
  },
  {
    id: 2,
    title: "Dojo Movie",
    description: "Android app for browsing, viewing, and tracking movies. Built using Kotlin.",
    image: "/Dojo Movie/Dojo Movie.png",
    tags: ["Kotlin"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/Dojo-Movie",
  },
  {
    id: 3,
    title: "Eira Chatbot",
    description:
      "Chatbot to support psychological well-being. Built using React Native, Node.js, MongoDB.",
    image: "/EiraChat/EiraChat.png",
    tags: ["React Native", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/Eira-Chatbot",
  },
  {
    id: 4,
    title: "VHS Vault",
    description:
      "A music e-commerce application built with Flutter and Node.js , featuring a song catalog, audio preview, and digital purchase system.",
    image: "/VHS Vault/VHS Vault2.png",
    tags: ["Flutter", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/VHS-Vault",
  },
  {
    id: 5,
    title: "CW Store",
    description: "CW Store is a modern suit-selling website built with HTML, CSS, and JavaScript. It delivers an elegant, interactive, and responsive shopping experience, allowing customers to easily explore suit collections and shop online.",
    image: "/CW Store/CW Store2.png",
    tags: ["HTML", "CSS", "Java Script"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/CW-Store",
  },
  {
    id: 6,
    title: "VR Games",
    description: "Developed a VR application using Unity and the XR Interaction Toolkit, featuring three interactive levels with basic VR interactions. Implemented 3D object materials, multiple color variations, and text display support with TextMesh Pro to enhance the immersive experience.",
    image: "/UnityQuiz/UnityQuiz.png",
    tags: ["Unity"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/VR-Games",
  },
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Tampilkan semua kalau showAll true, kalau false hanya 3 pertama
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center gap-4 mt-4">
                  {/* Tombol GitHub */}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  )}

                  {/* Tombol Live Demo */}
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol See More / Hide */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-lg group bg-gradient-to-r from-primary via-purple-600 to-indigo-600 hover:scale-105 active:scale-95 hover:shadow-primary/50 cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:bg-transparent transition-colors duration-300"></span>
            <span className="relative flex items-center gap-2 text-sm font-semibold tracking-wide">
              {showAll ? "Show Less" : "See More Projects"}
              <ArrowRight
                size={16}
                className={`transition-transform duration-300 ${
                  showAll ? "-rotate-90" : "rotate-90"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Tombol Check Github tetap di bawah */}
        <div className="text-center mt-6">
        <a
          href="https://github.com/WilsenAL?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/40 bg-secondary/30 backdrop-blur-md text-foreground text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:scale-105 active:scale-95 shadow-sm group"
        >
          <Github size={18} className="text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span>Explore More on GitHub</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
      </div>
    </section>
  );
};
