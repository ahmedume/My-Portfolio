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
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    imgTall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    number: "02",
    name: "MedLens Platform",
    category: "Clinical Research AI",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    imgTall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    number: "03",
    name: "Virtual Try On Engine",
    category: "Computer Vision",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    imgTall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
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
            <LiveProjectButton label="Explore Blueprint" />
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
