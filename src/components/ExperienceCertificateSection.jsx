// src/components/ExperienceCertificateSection.jsx
import React, { useState } from "react";

export const ExperienceCertificateSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    { title: "Pre-Training Asisten Lab", company: "Binus", year: "2023" },
    { title: "Web Dev 11.0 – HTML / CSS", company: "Dibimbing", year: "2025" },
  ];

  const certificates = [
  { 
    title: "From Zero to Web3 Hero", 
    issuer: "Yunepto", 
    year: "2025",
    image: "/certificate/Web3Hero.png" // path gambar kamu
  },
];

  return (
        <section
            id="experience-certificate"
            className="py-20 bg-gradient-to-b from-background via-purple-950/20 to-background text-white"
        >
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-purple-400">Journey</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-8">
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "experience" ? "bg-purple-500 text-white" : "bg-gray-800"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("certificate")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "certificate" ? "bg-purple-500 text-white" : "bg-gray-800"
          }`}
        >
          Certificate
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {activeTab === "experience" &&
          experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-purple-400">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.year}</p>
            </div>
          ))}

        {activeTab === "certificate" &&
        certificates.map((cert, index) => (
            <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700"
            >
            {/* Gambar sertifikat */}
            <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-40 object-contain rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-purple-400">{cert.issuer}</p>
            <p className="text-sm text-gray-400">{cert.year}</p>
            </div>
        ))}
      </div>
    </section>
  );
};
