import React from "react";
import { GraduationCap, School, BookOpen, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./UI";

interface EducationMilestone {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpaOrStatus: string;
  coreDetails: string[];
  icon: React.ReactNode;
}

const RESUME_EDUCATION: EducationMilestone[] = [
  {
    institution: "The University of Faisalabad",
    degree: "BS Artificial Intelligence",
    duration: "2022 – 2026",
    location: "Faisalabad, Pakistan",
    gpaOrStatus: "Graduated",
    coreDetails: [
      "Rigorous core domain focus covering Deep learning architectures, Natural Language Processing, and Multi-Agent structures.",
      "Comprehensive research in medical language tooling. Perfect foundation for LangGraph final-year project work.",
      "Active participant and speaker in academic technology summits representational of high academic engagement."
    ],
    icon: <GraduationCap className="w-6 h-6 text-pink-500" />
  },
  {
    institution: "Concordia College",
    degree: "Intermediate in Computer Science (ICS)",
    duration: "2020 – 2022",
    location: "Faisalabad, Pakistan",
    gpaOrStatus: "Graduated",
    coreDetails: [
      "Key starting baseline representing major structural fundamentals of algorithm design and Object Oriented Programming principles.",
      "Engaged deeply with basic database normalization, early mathematics, and static programming frameworks."
    ],
    icon: <School className="w-6 h-6 text-purple-500" />
  },
  {
    institution: "Kohinoor Grammar School",
    degree: "Matric (Secondary School Certificate)",
    duration: "2018 – 2020",
    location: "Faisalabad, Pakistan",
    gpaOrStatus: "Graduated",
    coreDetails: [
      "Graduated with a major focus on scientific principles and core mathematical structures.",
      "Excellence across physics, chemistry foundations, and analytical calculations."
    ],
    icon: <BookOpen className="w-6 h-6 text-blue-500" />
  }
];

export function Education() {
  return (
    <section className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-24 select-none relative z-30">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Page Head */}
        <div className="border-b border-white/10 pb-10 mb-16 text-center sm:text-left">
          <FadeIn delay={0} y={30} tagName="div">
            <h1 className="hero-heading font-black text-5xl sm:text-7xl uppercase tracking-tighter mb-4">
              Education
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} y={20} tagName="p">
            <p className="text-sm md:text-lg text-[#D7E2EA]/50 max-w-2xl font-light mt-2">
              Comprehensive timeline tracking my academic credentials and core scientific foundations.
            </p>
          </FadeIn>
        </div>

        {/* TIMELINE TIMELINE GRAPHICS */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 md:ml-8 pl-8 md:pl-12 space-y-16">
          {RESUME_EDUCATION.map((edu, index) => (
            <div key={edu.institution} className="relative">
              
              {/* Pulsing indicator node on left border */}
              <div className="absolute -left-[45px] sm:-left-[53px] md:-left-[61px] top-1.5 z-20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#121212] border-2 border-[#D7E2EA]/30 group hover:border-[#B600A8] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  {edu.icon}
                </div>
              </div>

              {/* Core summary card block */}
              <FadeIn delay={index * 0.15} y={30} tagName="div">
                <div className="bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#D7E2EA]/20 transition-all duration-300 shadow-xl group hover:shadow-2xl">
                  
                  {/* Title metadata badges */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                    <span className="bg-[#B600A8]/10 text-xs text-[#B600A8] font-bold tracking-widest px-3.5 py-1 rounded-full uppercase border border-[#B600A8]/20 flex items-center gap-1.2">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {edu.degree}
                    </span>
                    
                    <div className="flex items-center gap-1 text-xs text-[#D7E2EA]/40 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-stone-500" />
                      {edu.duration}
                    </div>
                  </div>

                  {/* Institution banner */}
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight mb-2">
                    {edu.institution}
                  </h2>

                  {/* Location and GPA specs details */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#D7E2EA]/50 font-medium mb-6">
                    <span className="flex items-center gap-1 uppercase">
                      <MapPin className="w-3.5 h-3.5 text-stone-500" />
                      {edu.location}
                    </span>
                    <span className="text-[#D7E2EA]/30">•</span>
                    <span className="text-white font-mono bg-white/5 px-2.5 py-0.5 rounded uppercase border border-white/5">
                      {edu.gpaOrStatus}
                    </span>
                  </div>

                  {/* Core detail bullet paragraphs */}
                  <ul className="space-y-3.5 border-t border-white/5 pt-5">
                    {edu.coreDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-[#D7E2EA]/75 leading-relaxed font-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="select-text">{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </FadeIn>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
