import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FadeIn, LiveProjectButton } from "./UI";

interface ProjectItem {
  number: string;
  name: string;
  category: string;
  img1: string;
  img2: string;
  imgTall: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    number: "01",
    name: "Medical Research Assistant",
    category: "Final Year Project",
    img1: "/projects/medical-research-assistant/article_research.png",
    img2: "/projects/medical-research-assistant/medical_1.jpeg",
    imgTall: "/projects/medical-research-assistant/medical_tall.jpeg"
  },
  {
    number: "02",
    name: "MedLens Platform",
    category: "Clinical Research AI",
    img1: "/projects/medlens/medlens_1.png",
    img2: "/projects/medlens/medlens_2.png",
    imgTall: "/projects/medlens/medlens_3.png"
  },
  {
    number: "03",
    name: "Virtual Try On Engine",
    category: "Computer Vision",
    img1: "/projects/fitcheck/fitcheck.png",
    img2: "/projects/fitcheck/fitcheck_2.png",
    imgTall: "/projects/fitcheck/fitcheck.png"
  }
];

interface ProjectsProps {
  onNavigateToProjects?: () => void;
}

export function Projects({ onNavigateToProjects }: ProjectsProps) {
  return (
    <section 
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-24 px-5 sm:px-8 md:px-10 relative z-30 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={40} tagName="div">
            <h2 
              className="hero-heading font-black uppercase tracking-tight"
              style={{ fontSize: "clamp(3rem, 11vw, 140px)" }}
            >
              Project
            </h2>
          </FadeIn>
        </div>

        {/* Sticky Folding Stacking Project Container */}
        <div className="flex flex-col gap-24 relative select-none">
          {PROJECTS_DATA.map((proj, index) => {
            const total = PROJECTS_DATA.length;
            const targetScale = 1 - (total - 1 - index) * 0.03;
            const topOffset = index * 28;

            return (
              <StickyCard 
                key={proj.number} 
                project={proj} 
                scale={targetScale} 
                topOffset={topOffset} 
                index={index}
                onViewDetails={onNavigateToProjects}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

interface StickyCardProps {
  project: ProjectItem;
  scale: number;
  topOffset: number;
  index: number;
  key?: React.Key;
  onViewDetails?: () => void;
}

function StickyCard({ project, scale, topOffset, index, onViewDetails }: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef as any,
    offset: ["start end", "start start"],
  });

  return (
    <div 
      ref={containerRef}
      className="sticky h-auto min-h-[75vh] md:h-[80vh] flex flex-col justify-center items-center w-full bg-transparent mb-12 cursor-pointer group"
      style={{
        top: `${80 + topOffset}px`,
        zIndex: 10 + index,
      }}
      onClick={onViewDetails}
    >
      <motion.div
        style={{
          scale: scale,
          willChange: "transform",
        }}
        className="w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA]/10 group-hover:border-[#B600A8]/50 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-colors duration-300"
      >
        {/* TOP ROW */}
        <div className="flex justify-between items-center w-full border-b border-[#D7E2EA]/10 pb-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number badge */}
            <span 
              className="font-black text-[#D7E2EA] opacity-90 select-none leading-none group-hover:text-[#B600A8] transition-colors"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
            >
              {project.number}
            </span>

            {/* Title / Role */}
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40">
                {project.category}
              </span>
              <h3 
                className="font-bold uppercase text-[#D7E2EA] group-hover:text-white tracking-tight leading-none transition-colors"
                style={{ fontSize: "clamp(1.1rem, 3.5vw, 2.8rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex-shrink-0" onClick={(e) => { e.stopPropagation(); onViewDetails?.(); }}>
            <LiveProjectButton label="View Project" />
          </div>
        </div>

        {/* BOTTOM ROW: Two-column Image Grid with high border radius */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 mt-6 flex-1 items-stretch">
          
          {/* Left Column (40% width) - 2 Stacked Images */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <div className="overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-white/5 bg-[#121212] flex-1 min-h-[140px] md:max-h-[200px]">
              <img
                src={project.img1}
                alt={`${project.name} Preview Thumbnail 1`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-white/5 bg-[#121212] flex-1 min-h-[160px] md:max-h-[300px]">
              <img
                src={project.img2}
                alt={`${project.name} Preview Thumbnail 2`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 Tall Image */}
          <div className="col-span-1 md:col-span-6 overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-white/5 bg-[#121212] min-h-[220px]">
            <img
              src={project.imgTall}
              alt={`${project.name} Cinematic Preview`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            />
          </div>

        </div>

      </motion.div>
    </div>
  );
}
