import { useState } from "react";
import { Briefcase, Award, Calendar, Building2, ExternalLink, X, Eye } from "lucide-react";

export const ExperienceCertificateSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [selectedCert, setSelectedCert] = useState(null);

  const experiences = [
    {
      title: "Full-Stack Application Developer & IT Support Intern",
      company: "PT Tera Multi Wahana",
      period: "Feb 2026 - Feb 2027",
      type: "Internship",
      description:
        "Developing enterprise application solutions, managing backend architectures, and resolving system infrastructure tickets.",
      skills: ["React", "Node.js", "IT Infrastructure", "Troubleshooting"],
    },
    {
      title: "Pre-Training Asisten Lab",
      company: "BINUS University",
      period: "2023",
      type: "Academic Support",
      description:
        "Assisted laboratory sessions, guided junior computer science students through fundamental programming exercises and code debugging.",
      skills: ["C", "Java", "Data Structures", "Mentoring"],
    },
    {
      title: "Web Dev 11.0 – HTML / CSS",
      company: "Dibimbing.id",
      period: "2025",
      type: "Bootcamp / Training",
      description:
        "Completed intensive web development training focusing on modern responsive UI design, semantical HTML5, and CSS3 layouts.",
      skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox/Grid"],
    },
  ];

  const certificates = [
    {
      title: "From Zero to Web3 Hero",
      issuer: "Yunepto",
      year: "2025",
      image: "/certificate/Web3Hero.png",
      description:
        "Comprehensive program covering Web3 fundamentals, decentralized architectures, smart contract interactions, and blockchain ecosystem setup.",
    },
    {
      title: "Microsoft Elevate AI Training Session",
      issuer: "BINUS University",
      year: "July 2026",
      image: "/certificate/CertificateTrainingAI.png",
      description:
        "Hands-on session on generative AI models, prompt engineering techniques, and integrating Microsoft AI tools for software productivity.",
    },
  ];

  return (
    <section id="experience-certificate" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            CAREER & CREDENTIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
            Exploring my professional experience, academic roles, and certified achievements.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-card/60 border border-border/80 backdrop-blur-md shadow-md">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "experience"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase size={16} />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab("certificate")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "certificate"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Award size={16} />
              <span>Certifications</span>
            </button>
          </div>
        </div>

        {/* TAB 1: EXPERIENCE TIMELINE */}
        {activeTab === "experience" && (
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-32 space-y-10 my-4">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 md:pl-10 group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300 shadow-sm shadow-primary" />

                <div className="bg-card/60 backdrop-blur-md rounded-3xl border border-border p-6 md:p-8 card-hover shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      <Building2 size={13} />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mt-2">
                    {exp.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/50">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-foreground border border-border/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: CERTIFICATE GRID WITH PREVIEW */}
        {activeTab === "certificate" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-card/60 backdrop-blur-md rounded-3xl border border-border overflow-hidden shadow-md flex flex-col justify-between card-hover"
              >
                {/* Certificate Thumbnail with Hover Blur */}
                <div className="relative h-56 bg-slate-950 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-xs md:text-sm shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
                    >
                      <Eye size={16} />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-primary uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      <span className="text-muted-foreground font-medium">
                        {cert.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/50 flex justify-end">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Full Preview</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* POP-UP LIGHTBOX PREVIEW CERTIFICATE */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                  {selectedCert.issuer} • {selectedCert.year}
                </span>
                <h3 className="text-xl font-bold mt-0.5">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="rounded-2xl overflow-hidden border border-border/60 bg-slate-950 p-2 flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                {selectedCert.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};