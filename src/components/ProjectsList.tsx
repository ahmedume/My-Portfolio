import React, { useState } from "react";
import { FolderGit2, Calendar, FileText, ArrowUpRight, CloudUpload, Sparkles, BrainCircuit, HeartPulse, UserCheck, Mic } from "lucide-react";
import { FadeIn, LiveProjectButton } from "./UI";

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
  documentUrl?: string; // Placeholder for downloadable proposal, report, or slide deck PDFs
}

const RESUME_PROJECTS: ProjectDetails[] = [
  {
    id: "med-assistant",
    title: "Medical Research Assistant",
    isFyp: true,
    year: "2026",
    description: "Multi-agent health system using LangGraph React Agents with live PubMed and FDA database integration.",
    longDescription: "Ahmed's Final Year Project. It is a highly intelligent, multi-agent cooperative health ecosystem built on top of LangGraph. Features cooperative React agent chains that coordinate with PubMed search streams and FDA database structures. Translates highly technical medical research journals into secure, digestible, and evidence-verified medical advisory frameworks.",
    icon: <HeartPulse className="w-6 h-6 text-pink-500" />,
    tags: ["LangGraph Agents", "PubMed API", "FDA Integration", "AI Agents", "React"],
    imageUrl: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    documentUrl: "#" // Placeholder PDF
  },
  {
    id: "medlens",
    title: "MedLens",
    year: "2026",
    description: "Medical research platform that retrieves PubMed studies and generates structured trust scores.",
    longDescription: "A robust, fully production-ready clinical journal auditing system. Automatically crawls clinical publication index logs on PubMed, matches metadata tags, and applies high-density token summaries to output article trust parameters, study dimensions, statistical limits, and research validation breakdowns.",
    icon: <BrainCircuit className="w-6 h-6 text-blue-500" />,
    tags: ["Clinical AI", "NextJS", "LLM Auditing", "Metadata Extraction"],
    imageUrl: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    documentUrl: "#" // Placeholder PDF
  },
  {
    id: "virtual-tryon",
    title: "Virtual Try On",
    year: "2026",
    description: "Browser-first virtual cloth try-on demo for interactive digital apparel styling before purchase.",
    longDescription: "An incredibly fast client-side artificial intelligence solution that processes consumer fit measurements. Seamlessly aligns virtual apparel meshes with real-time video feeds/still portrait uploads to provide digital garments testing, color blending, and instant silhouette adjustments.",
    icon: <UserCheck className="w-6 h-6 text-emerald-500" />,
    tags: ["Computer Vision", "React UI", "MediaPipe", "Apparel Design"],
    imageUrl: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    documentUrl: "#" // Placeholder PDF
  },
  {
    id: "voice-intel",
    title: "Voice Intelligence",
    year: "2026",
    description: "Dual-direction, low-latency audio intelligence web framework supporting high-fidelity conversions.",
    longDescription: "A fully unified audio signal streaming dashboard. Incorporates high-accuracy offline Speech-to-Text pipelines and deep voice-synthesis models. Includes smart transcription segments and real-time noise gates for high-fidelity interactive systems.",
    icon: <Mic className="w-6 h-6 text-purple-500" />,
    tags: ["TTS & STT Systems", "Audio Nodes", "Web Speech API", "Python Flask"],
    imageUrl: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    documentUrl: "#" // Placeholder PDF
  }
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
          <FadeIn delay={0.1} y={20} tagName="p">
            <p className="text-sm md:text-lg text-[#D7E2EA]/50 max-w-2xl font-light text-center sm:text-left mt-2">
              Browse the complete portfolio of Ahmed Umer's custom AI agent systems, clinical research aggregators, and modern frontend workspaces.
            </p>
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

                {/* Footer and Interactive Details trigger */}
                <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-2">
                  <span className="text-xs text-[#D7E2EA]/40 group-hover:text-[#D7E2EA]/85 transition-colors flex items-center gap-1 uppercase tracking-wider font-semibold">
                    View Project Blueprint
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  
                  {proj.documentUrl && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("PDF view triggered. Document placeholder is properly connected for you to attach your PDF files later under /public or standard static buckets!");
                      }}
                      className="text-xs bg-white/5 hover:bg-white/10 text-white/80 font-mono py-1 px-3 rounded-full border border-white/10 flex items-center gap-1 uppercase select-none active:scale-95 transition-all text-[11px]"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Doc Placeholder
                    </button>
                  )}
                </div>

              </div>
            </FadeIn>
          ))}

          {/* PLACEHOLDER CARD 1: For future projects scaling */}
          <FadeIn delay={0.4} y={30} tagName="div">
            <div className="rounded-3xl border-2 border-dashed border-[#D7E2EA]/20 bg-[#121212]/30 p-8 flex flex-col justify-center items-center text-center h-[420px] cursor-pointer group hover:border-[#B600A8]/40 hover:bg-[#121212]/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#B600A8]/10 transition-all duration-300">
                <CloudUpload className="w-8 h-8 text-[#D7E2EA]/30 group-hover:text-[#B600A8] transition-colors" />
              </div>
              <h3 className="font-bold text-lg uppercase tracking-wider text-[#D7E2EA]/65 group-hover:text-[#D7E2EA] transition-colors">
                Add New Project Card
              </h3>
              <p className="text-xs text-[#D7E2EA]/40 max-w-xs mt-2 font-mono leading-relaxed">
                Slot ready for future files, images, PDFs, clinical code, or git submodules. Simply edit RESUME_PROJECTS array in src/components/ProjectsList.tsx to append!
              </p>
            </div>
          </FadeIn>

          {/* PLACEHOLDER CARD 2: Fully customizable space */}
          <FadeIn delay={0.5} y={30} tagName="div">
            <div className="rounded-3xl border-2 border-dashed border-[#D7E2EA]/20 bg-[#121212]/30 p-8 flex flex-col justify-center items-center text-center h-[420px] cursor-pointer group hover:border-[#7621B0]/40 hover:bg-[#121212]/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#7621B0]/10 transition-all duration-300">
                <FolderGit2 className="w-8 h-8 text-[#D7E2EA]/30 group-hover:text-[#7621B0] transition-colors" />
              </div>
              <h3 className="font-bold text-lg uppercase tracking-wider text-[#D7E2EA]/65 group-hover:text-[#D7E2EA] transition-colors">
                Upcoming Live Demo Space
              </h3>
              <p className="text-xs text-[#D7E2EA]/40 max-w-xs mt-2 font-mono leading-relaxed">
                Fully scalable slot supporting embed tools and iframe previews. Place your dynamic sandbox files here directly to enrich recruiter reviews!
              </p>
            </div>
          </FadeIn>

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
                
                <button 
                  onClick={() => setActiveProject(null)}
                  className="bg-white/10 hover:bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase text-white cursor-pointer select-none"
                >
                  Close Blueprint
                </button>
              </div>

              {/* Descriptions */}
              <div className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed font-light space-y-4 mb-6 select-text">
                <p className="font-semibold text-white">Project Blueprint &amp; Summary:</p>
                <p>{activeProject.longDescription}</p>
                
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mt-4">
                  <p className="font-bold text-xs uppercase tracking-widest text-[#B600A8] mb-2 flex items-center gap-1.5 select-none">
                    <Sparkles className="w-4 h-4 animate-spin-slow" />
                    Interactive File / PDF Placeholder Notice
                  </p>
                  <p className="text-xs font-mono text-[#D7E2EA]/60 select-text leading-relaxed">
                    Recruiter documents, architectural slides, and source code reports are provisioned. In your final upload flow, you can place files (e.g., active_proposals.pdf) under the static directory and overwrite active references in ProjectList.tsx effortlessly.
                  </p>
                </div>
              </div>

              {/* Bottom control row */}
              <div className="flex flex-wrap gap-2 justify-end">
                <LiveProjectButton label="Live Project" onClick={() => alert("Connecting to project sandbox context...")} />
                <button 
                  onClick={() => setActiveProject(null)}
                  className="bg-[#B600A8] hover:bg-[#B600A8]/80 text-white font-medium uppercase text-xs tracking-widest px-6 py-3 rounded-full flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
