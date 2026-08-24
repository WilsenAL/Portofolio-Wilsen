import { useState } from "react";
import { ArrowRight, ExternalLink, X, Eye } from "lucide-react";
import { Github } from "./icons/BrandIcons";

const projects = [
  {
    id: 1,
    title: "CryptoSen",
    category: "AI / WEB APP",
    description:
      "An AI-driven cryptocurrency news and sentiment analysis media platform using NLP to analyze market trends and assist data-driven trading decisions.",
    fullDescription:
      "CryptoSen is an innovative Web3 & AI media platform built to solve information overload in the crypto market. Utilizing Natural Language Processing (NLP), it extracts real-time sentiment from news articles and market indicators to present concise, actionable data for traders and investors.",
    image: "/CryptoSen/CryptoSen2.png",
    gallery: [
      "/CryptoSen/CryptoSen2.png",
      "/CryptoSen/CryptoSen.png"
    ],
    tags: ["React Native", "Python NLP", "Web3", "Node.js"],
    demoUrl: "https://cryptosenintelligence.netlify.app",
    githubUrl: "https://github.com/WilsenAL/CryptoSen-Intelligence",
  },
  {
    id: 2,
    title: "Dojo Movie",
    category: "MOBILE APP",
    description: "Android app for browsing, viewing, and tracking movies. Built using Kotlin.",
    fullDescription:
      "Dojo Movie is a modern Android application designed for cinema enthusiasts to explore upcoming releases, read detailed synopses, track watchlist items, and view top-rated movies with a fluid native UI.",
    image: "/Dojo Movie/Dojo Movie.png",
    gallery: [
      "/Dojo Movie/Dojo Movie.png"
    ],
    tags: ["Kotlin", "Android SDK", "TMDB API"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/Dojo-Movie",
  },
  {
    id: 3,
    title: "Eira Chatbot",
    category: "AI / MOBILE APP",
    description:
      "Chatbot to support psychological well-being. Built using React Native, Node.js, MongoDB.",
    fullDescription:
      "Eira Chatbot is an empathetic AI-driven companion crafted to assist users in managing mental health, tracking mood trends, and offering supportive conversational interactions in a safe environment.",
    image: "/EiraChat/EiraChat.png",
    gallery: [
      "/EiraChat/EiraChat.png"
    ],
    tags: ["React Native", "Node.js", "MongoDB", "AI Chatbot"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/Eira-Chatbot",
  },
  {
    id: 4,
    title: "VHS Vault",
    category: "MOBILE E-COMMERCE",
    description:
      "A music e-commerce application built with Flutter and Node.js , featuring a song catalog, audio preview, and digital purchase system.",
    fullDescription:
      "VHS Vault brings retro physical music collection into digital space. Users can preview audio samples, browse custom vinyl/album collections, manage their digital carts, and experience a seamless checkout flow.",
    image: "/VHS Vault/VHS Vault2.png",
    gallery: [
      "/VHS Vault/VHS Vault2.png"
    ],
    tags: ["Flutter", "Node.js", "REST API"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/VHS-Vault",
  },
  {
    id: 5,
    title: "CW Store",
    category: "WEB APP",
    description:
      "CW Store is a modern suit-selling website built with HTML, CSS, and JavaScript. It delivers an elegant, interactive, and responsive shopping experience.",
    fullDescription:
      "A luxury menswear suit web store featuring custom selection filters, responsive layouts, interactive product galleries, and clean front-end styling.",
    image: "/CW Store/CW Store2.png",
    gallery: [
      "/CW Store/CW Store2.png"
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/CW-Store",
  },
  {
    id: 6,
    title: "VR Games",
    category: "VR / GAME DEV",
    description:
      "Developed a VR application using Unity and the XR Interaction Toolkit, featuring three interactive levels with basic VR interactions.",
    fullDescription:
      "Immersive Virtual Reality project built in Unity featuring customized 3D object materials, multiple color interactions, dynamic sound effects, and TextMesh Pro UI integrations.",
    image: "/UnityQuiz/UnityQuiz.png",
    gallery: [
      "/UnityQuiz/UnityQuiz.png"
    ],
    tags: ["Unity", "C#", "XR Toolkit"],
    demoUrl: "#",
    githubUrl: "https://github.com/WilsenAL/VR-Games",
  },
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            MY WORK & PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Here are some of my recent works. Click on any project to view complete details, tech stacks, and screenshot galleries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card/60 backdrop-blur-md rounded-3xl border border-border overflow-hidden shadow-md flex flex-col justify-between card-hover"
            >
              {/* Image Preview with Hover Overlay */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* View Details Blur Hover Overlay */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-xs md:text-sm shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
                  >
                    <Eye size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-primary uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action Icons */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-secondary text-foreground border border-border/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-secondary text-muted-foreground">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    title="View details"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cosmic-button inline-flex items-center gap-2 cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "See More Projects"}</span>
            <ArrowRight
              size={16}
              className={`transition-transform duration-300 ${
                showAll ? "-rotate-90" : "rotate-90"
              }`}
            />
          </button>

          <a
            href="https://github.com/WilsenAL?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-primary/40 bg-secondary/30 backdrop-blur-md text-foreground text-xs md:text-sm font-medium hover:bg-primary/20 hover:border-primary transition-all duration-300 inline-flex items-center gap-2"
          >
            <Github size={16} className="text-primary" />
            <span>Explore More on GitHub</span>
          </a>
        </div>
      </div>

      {/* MODAL POP-UP DETAIL PROJECT */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mt-0.5">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Main Banner / Main Image */}
              <div className="rounded-2xl overflow-hidden border border-border/60 bg-slate-900 max-h-80 flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Description & Tech Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="md:col-span-2 space-y-3">
                  <h4 className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
                    About Project
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                <div className="space-y-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">
                      Technologies & Links
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons inside Modal */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-4 rounded-xl border border-primary/40 bg-secondary hover:bg-primary/20 text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Gallery Section */}
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <h4 className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
                    Project Gallery
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.gallery.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl overflow-hidden border border-border/60 bg-slate-900"
                      >
                        <img
                          src={imgSrc}
                          alt={`${selectedProject.title} screenshot ${idx + 1}`}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};