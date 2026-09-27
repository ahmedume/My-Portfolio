import { useState } from "react";
import { Sparkles } from "lucide-react";
import { FadeIn, VideoPlayer, VideoSlot, ShotGallery, LinkRow, useEscape } from "./UI";
import { PROJECTS, type Project } from "../data/projects";

export function ProjectsList() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEscape(() => setActiveProject(null), !!activeProject);

  return (
    <section className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-24 select-none relative z-30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="border-b border-white/10 pb-10 mb-14">
          <FadeIn delay={0} y={30} tagName="div">
            <h1 className="hero-heading font-black text-5xl sm:text-7xl uppercase tracking-tighter mb-4 text-center sm:text-left">
              My Projects
            </h1>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PROJECTS.map((proj, index) => (
            <FadeIn key={proj.id} delay={index * 0.1} y={30} tagName="div">
              <button
                onClick={() => setActiveProject(proj)}
                className="group relative w-full h-full text-left rounded-3xl border-2 border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 bg-[#121212] p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-pointer"
              >
                <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl mb-4 relative bg-[#0C0C0C]">
                  <img
                    src={proj.shots[0]}
                    alt={proj.title}
                    loading="lazy"
                    referrerPolicy="referrer"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 select-none pointer-events-none"
                  />
                  {proj.fyp && (
                    <span className="absolute top-3 left-3 bg-[#B600A8]/85 text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-widest shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Final Year Project
                    </span>
                  )}
                </div>

                <div className="flex-1 flex flex-col mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    {proj.icon}
                    <h2 className="font-bold text-xl uppercase tracking-tight text-[#D7E2EA] group-hover:text-white transition-colors">
                      {proj.title}
                    </h2>
                  </div>
                  <p className="text-[#D7E2EA]/75 font-light text-sm line-clamp-3 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-white/5 text-[10px] md:text-xs font-mono px-2.5 py-1 rounded-md text-[#D7E2EA]/60 border border-white/5 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 pt-24"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121212] border border-[#D7E2EA]/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
          >
            <div className="mb-6">
              {activeProject.video ? (
                <VideoPlayer src={activeProject.video} title={activeProject.title} />
              ) : (
                <VideoSlot />
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4 mb-5">
              <div className="flex items-center gap-3">
                {activeProject.icon}
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                  {activeProject.title}
                </h2>
              </div>
              <span className="text-xs font-mono uppercase text-[#D7E2EA]/50 shrink-0">
                {activeProject.category}
              </span>
            </div>

            <div className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed font-light space-y-4 mb-6 select-text">
              {activeProject.detail.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {activeProject.tags.map((t) => (
                <span
                  key={t}
                  className="bg-white/5 text-[10px] font-mono px-2.5 py-1 rounded-md text-[#D7E2EA]/60 border border-white/5 uppercase"
                >
                  {t}
                </span>
              ))}
            </div>

            {activeProject.shots.length > 1 && (
              <>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/40 font-mono mb-3">
                  Screenshots
                </h3>
                <div className="mb-6">
                  <ShotGallery shots={activeProject.shots} title={activeProject.title} />
                </div>
              </>
            )}

            <div className="flex flex-wrap gap-3 justify-between items-center border-t border-white/5 pt-5">
              <LinkRow repo={activeProject.repo} />
              <button
                onClick={() => setActiveProject(null)}
                className="bg-[#B600A8] hover:bg-[#B600A8]/80 text-white font-medium uppercase text-xs tracking-widest px-6 py-3 rounded-full transition-all active:scale-95 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
