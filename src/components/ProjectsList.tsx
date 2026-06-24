import React, { useState } from "react";
import { Calendar, Sparkles, BrainCircuit, HeartPulse, UserCheck, Mic } from "lucide-react";
import { FadeIn } from "./UI";

interface ProjectDetails {
  id: string;
  title: string;
  year: string;
  isFyp?: boolean;
  description: string;
  longDescription?: string;
  icon: React.ReactNode;
  tags: string[];
  imageUrl: string;
}

const RESUME_PROJECTS: ProjectDetails[] = [
  {
    id: "med-assistant",
    title: "Medical Research Assistant",
    isFyp: true,
    year: "2025",
    description: "Multi-agent health system using LangGraph React Agents with live PubMed and FDA database integration.",
    longDescription: "Ahmed's Final Year Project. It is a highly intelligent, multi-agent cooperative health ecosystem built on top of LangGraph. Features cooperative React agent chains that coordinate with PubMed search streams and FDA database structures. Translates highly technical medical research journals into secure, digestible, and evidence-verified medical advisory frameworks.",
    icon: <HeartPulse className="w-6 h-6 text-pink-500" />,
    tags: ["LangGraph Agents", "PubMed API", "FDA Integration", "AI Agents", "React"],
    imageUrl: "/projects/medical-research-assistant/article_research.png"
  },
  {
    id: "medlens",
    title: "MedLens",
    year: "2026",
    description: "Medical research platform that retrieves PubMed studies and generates structured trust scores.",
    longDescription: "A robust, fully production-ready clinical journal auditing system. Automatically crawls clinical publication index logs on PubMed, matches metadata tags, and applies high-density token summaries to output article trust parameters, study dimensions, statistical limits, and research validation breakdowns.",
    icon: <BrainCircuit className="w-6 h-6 text-blue-500" />,
    tags: ["Clinical AI", "NextJS", "LLM Auditing", "Metadata Extraction"],
    imageUrl: "/projects/medlens/medlens_1.png"
  },
  {
    id: "virtual-tryon",
    title: "Virtual Try On",
    year: "2025",
    description: "Browser-first virtual cloth try-on demo for interactive digital apparel styling before purchase.",
    longDescription: "An incredibly fast client-side artificial intelligence solution that processes consumer fit measurements. Seamlessly aligns virtual apparel meshes with real-time video feeds/still portrait uploads to provide digital garments testing, color blending, and instant silhouette adjustments.",
    icon: <UserCheck className="w-6 h-6 text-emerald-500" />,
    tags: ["Computer Vision", "React UI", "MediaPipe", "Apparel Design"],
    imageUrl: "/projects/fitcheck/fitcheck.png"
  },
  {
    id: "voice-intel",
    title: "Voice Intelligence",
    year: "2026",
    description: "Dual-direction, low-latency audio intelligence web framework supporting high-fidelity conversions.",
    longDescription: "A fully unified audio signal streaming dashboard. Incorporates high-accuracy offline Speech-to-Text pipelines and deep voice-synthesis models. Includes smart transcription segments and real-time noise gates for high-fidelity interactive systems.",
    icon: <Mic className="w-6 h-6 text-purple-500" />,
    tags: ["TTS & STT Systems", "Audio Nodes", "Web Speech API", "Python Flask"],
    imageUrl: "/projects/voice-intelligence/voice_intelligence.png"
  },
];

export function ProjectsList() {
  const [activeProject, setActiveProject] = useState<ProjectDetails | null>(null);

  return (
    <section className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-24 select-none relative z-30">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Block */}
        <div className="border-b border-white/10 pb-10 mb-14">
          <FadeIn delay={0} y={30} tagName="div">
            <h1 className="hero-heading font-black text-5xl sm:text-7xl uppercase tracking-tighter mb-4 text-center sm:text-left">
              My Projects
            </h1>
          </FadeIn>
        </div>

        {/* PROJECTS GRID LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {RESUME_PROJECTS.map((proj, index) => (
            <FadeIn key={proj.id} delay={index * 0.1} y={30} tagName="div">
              <div 
                className="group relative rounded-3xl border-2 border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 bg-[#121212] p-5 flex flex-col justify-between transition-all duration-300 h-full hover:-translate-y-1 shadow-xl cursor-all-scroll"
                onClick={() => setActiveProject(proj)}
              >
                {/* Image Showcase Banner */}
                <div className="w-full h-[200px] overflow-hidden rounded-2xl mb-4 relative bg-[#0C0C0C]">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    referrerPolicy="referrer"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-550 select-none pointer-events-none"
                  />
                  {/* Dynamic absolute badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-[#0C0C0C]/85 text-xs font-semibold px-3 py-1 rounded-full text-white tracking-widest uppercase border border-white/5 shadow-md flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {proj.year}
                    </span>
                    {proj.isFyp && (
                      <span className="bg-[#B600A8]/85 text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-widest shadow-md flex items-center gap-1 animate-pulse">
                        <Sparkles className="w-3 h-3" />
                        Final Year Project
                      </span>
                    )}
                  </div>
                </div>

                {/* Info block */}
                <div className="flex-1 flex flex-col justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {proj.icon}
                      <h2 className="font-bold text-xl uppercase tracking-tight text-[#D7E2EA] group-hover:text-white transition-colors">
                        {proj.title}
                      </h2>
                    </div>
                    <p className="text-[#D7E2EA]/75 font-light text-sm line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Badges block */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {proj.tags.map(t => (
                      <span key={t} className="bg-white/5 text-[10px] md:text-xs font-mono px-2.5 py-1 rounded-md text-[#D7E2EA]/60 border border-white/5 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>



              </div>
            </FadeIn>
          ))}



        </div>

        {/* DETAILS OVERLAY MODAL */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all">
            <div 
              className="bg-[#121212] border border-[#D7E2EA]/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image banner */}
              <div className="w-full h-[240px] rounded-2xl overflow-hidden mb-6 border border-white/5">
                <img 
                  src={activeProject.imageUrl} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    {activeProject.icon}
                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                      {activeProject.title}
                    </h2>
                  </div>
                  
                  <span className="text-xs font-mono uppercase text-[#D7E2EA]/50 mt-1 block">
                    Category: {activeProject.category} | Year: {activeProject.year}
                  </span>
                </div>
              </div>

              {/* Descriptions */}
              <div className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed font-light space-y-4 mb-6 select-text">
                <p className="font-semibold text-white">Project Blueprint &amp; Summary:</p>
                <p>{activeProject.longDescription}</p>
              </div>

              {/* Bottom control row */}
              <div className="flex flex-wrap gap-2 justify-end">
                <button 
                  onClick={() => setActiveProject(null)}
                  className="bg-[#B600A8] hover:bg-[#B600A8]/80 text-white font-medium uppercase text-xs tracking-widest px-6 py-3 rounded-full flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
