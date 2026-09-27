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
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={containerRef}
      className="sticky h-auto flex flex-col justify-center items-center w-full bg-transparent mb-12 cursor-pointer group"
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

        {/* Screenshots are 16:10 and tiles use that ratio, so nothing is cropped.
            The card is no longer pinned to 80vh: it is sized by its own content,
            which is what left a ~300px void under every set of tiles. A lone shot
            is capped in width rather than spanning the card, which made it three
            times taller than a tile on the other projects. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 items-start">
          {project.shots.slice(0, 3).map((src, i) => (
            <div
              key={src}
              className={`aspect-[16/10] w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-white/5 bg-[#121212] ${
                project.shots.length === 1 ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
