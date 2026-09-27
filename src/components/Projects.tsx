import { useRef, type Key } from "react";
import { motion, useScroll } from "motion/react";
import { FadeIn, LiveProjectButton } from "./UI";
import { PROJECTS } from "../data/projects";

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

        <div className="flex flex-col gap-24 relative select-none">
          {PROJECTS.map((project, index) => (
            <StickyCard
              key={project.id}
              project={project}
              scale={1 - (PROJECTS.length - 1 - index) * 0.03}
              topOffset={index * 28}
              index={index}
              onViewDetails={onNavigateToProjects}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StickyCardProps {
  project: (typeof PROJECTS)[number];
  scale: number;
  topOffset: number;
  index: number;
  key?: Key;
  onViewDetails?: () => void;
}

function StickyCard({ project, scale, topOffset, index, onViewDetails }: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef as any,
    offset: ["start end", "start start"],
  });
  const [card, left, right] = [project.shots[0], project.shots[1], project.shots[2]];
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={containerRef}
      className="sticky h-auto min-h-[75vh] md:h-[80vh] flex flex-col justify-center items-center w-full bg-transparent mb-12 cursor-pointer group"
      style={{ top: `${80 + topOffset}px`, zIndex: 10 + index }}
      onClick={onViewDetails}
    >
      <motion.div
        style={{ scale, willChange: "transform" }}
        className="w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA]/10 group-hover:border-[#B600A8]/50 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-colors duration-300"
      >
        <div className="flex justify-between items-start w-full border-b border-[#D7E2EA]/10 pb-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] opacity-90 select-none leading-none group-hover:text-[#B600A8] transition-colors"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
            >
              {number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40">
                {project.category}
              </span>
              <h3
                className="font-bold uppercase text-[#D7E2EA] group-hover:text-white tracking-tight leading-none transition-colors"
                style={{ fontSize: "clamp(1.1rem, 3.5vw, 2.8rem)" }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex-shrink-0" onClick={(e) => { e.stopPropagation(); onViewDetails?.(); }}>
            <LiveProjectButton label="View Project" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 mt-6 flex-1 items-stretch">
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <Tile src={card} alt={`${project.title} preview`} tall={false} />
            <Tile src={left} alt={`${project.title} preview`} tall={true} />
          </div>
          <div className="col-span-1 md:col-span-6">
            <Tile src={right} alt={`${project.title} cinematic preview`} tall={true} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Tile({ src, alt, tall }: { src: string; alt: string; tall: boolean }) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-white/5 bg-[#121212] ${
        tall ? "flex-1 min-h-[160px] md:max-h-[300px]" : "min-h-[140px] md:max-h-[200px]"
      }`}
    >
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
      />
    </div>
  );
}
