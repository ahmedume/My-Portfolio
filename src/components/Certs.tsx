import React, { useState } from "react";
import { Award, Calendar, ExternalLink, ShieldCheck, HeartPulse, Cpu, Network, Laptop, Sparkles, PlusCircle } from "lucide-react";
import { FadeIn } from "./UI";

interface CertificationDetails {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: React.ReactNode;
  tags: string[];
  pdfPlaceholderName: string;
}

const RESUME_CERTS: CertificationDetails[] = [
  {
    id: "mcp",
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    year: "2026",
    icon: <Cpu className="w-6 h-6 text-orange-400" />,
    tags: ["LLM Protocol", "Server Integration", "Context Engineering", "MCP Servers"],
    pdfPlaceholderName: "anthropic_mcp_certificate.pdf"
  },
  {
    id: "langchain",
    title: "Introduction to LangChain",
    issuer: "LangChain Academy",
    year: "2026",
    icon: <Network className="w-6 h-6 text-green-400" />,
    tags: ["LangChain Agents", "LLM Orchestration", "Chains", "RAG Pipeline"],
    pdfPlaceholderName: "langchain_academy_certificate.pdf"
  },
  {
    id: "n8n",
    title: "n8n Course Level 1",
    issuer: "n8n",
    year: "2025",
    icon: <Laptop className="w-6 h-6 text-pink-400" />,
    tags: ["Workflow Automation", "API Integration", "n8n Nodes", "Low-Code DevOps"],
    pdfPlaceholderName: "n8n_level1_certificate.pdf"
  },
  {
    id: "cybersecurity",
    title: "Cyber Security Essentials",
    issuer: "Cisco Networking Academy",
    year: "2024",
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    tags: ["Network Security", "Threat Intel", "Encryption Protocols", "Incident Response"],
    pdfPlaceholderName: "cisco_cyber_essentials.pdf"
  },
  {
    id: "steameducation",
    title: "International Conference on Advance STEAM Education (ICASE-2025)",
    issuer: "The University of Faisalabad",
    year: "2025",
    icon: <Award className="w-6 h-6 text-amber-500" />,
    tags: ["Research", "STEAM", "AI in Pedagogy", "Academic Participant"],
    pdfPlaceholderName: "icase_2025_participation.pdf"
  },
  {
    id: "innovative_pakistan",
    title: "Innovative Pakistan Participant",
    issuer: "The University of Faisalabad",
    year: "2026",
    icon: <Sparkles className="w-6 h-6 text-teal-400" />,
    tags: ["Hackathon", "Ideation", "Entrepreneurship", "Participant"],
    pdfPlaceholderName: "innovative_pakistan_2026.pdf"
  },
  {
    id: "digital_marketing",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    year: "2022",
    icon: <Award className="w-6 h-6 text-red-400" />,
    tags: ["Google Garage", "SEO/SEM", "Content Strategy", "Analytics Basics"],
    pdfPlaceholderName: "google_digital_marketing.pdf"
  }
];

export function Certs() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleOpenPdfNotice = (pdfName: string) => {
    setSelectedPdf(pdfName);
  };

  return (
    <section className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-24 select-none relative z-30">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Page Head */}
        <div className="border-b border-white/10 pb-10 mb-14 text-center sm:text-left">
          <FadeIn delay={0} y={30} tagName="div">
            <h1 className="hero-heading font-black text-5xl sm:text-7xl uppercase tracking-tighter mb-4">
              Certifications
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} y={20} tagName="p">
            <p className="text-sm md:text-lg text-[#D7E2EA]/50 max-w-2xl font-light mt-2">
              Verified clinical, cybersecurity, workflow automation, and LLM development credentials held by Ahmed Umer.
            </p>
          </FadeIn>
        </div>

        {/* CERTS GRID DISPLAY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {RESUME_CERTS.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 0.08} y={30} tagName="div">
              <div 
                className="group relative rounded-2xl border border-white/10 hover:border-[#B600A8]/40 bg-[#121212]/80 hover:bg-[#121212] p-5 flex flex-col justify-between h-[280px] transition-all duration-300 shadow-lg hover:-translate-y-1"
                onClick={() => handleOpenPdfNotice(cert.pdfPlaceholderName)}
              >
                
                {/* Upper row: icon and year badge */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#B600A8]/10 group-hover:text-white transition-all">
                    {cert.icon}
                  </div>
                  
                  <span className="text-xs bg-white/5 text-[#D7E2EA]/60 px-3 py-1 rounded-full font-semibold border border-white/5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.year}
                  </span>
                </div>

                {/* Mid row: Title and issuer */}
                <div className="my-4">
                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#D7E2EA] leading-snug line-clamp-2 uppercase">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#D7E2EA]/40 mt-1 block tracking-wider uppercase">
                    ISSUER: {cert.issuer}
                  </span>
                </div>

                {/* Sub row: tag pills */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {cert.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#D7E2EA]/40">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Trigger: interactive document clicker */}
                <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-1">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D7E2EA]/30 group-hover:text-[#B600A8] transition-colors flex items-center gap-1 cursor-pointer">
                    View Certificate PDF
                    <ExternalLink className="w-3 h-3" />
                  </span>
                  
                  <span className="text-[9px] font-mono text-[#D7E2EA]/20">
                    PDF Placeholder
                  </span>
                </div>

              </div>
            </FadeIn>
          ))}

          {/* DYNAMIC PLACEHOLDER 1: Blank customizable slots left intentional space! */}
          <FadeIn delay={0.4} y={30} tagName="div">
            <div className="rounded-2xl border-2 border-dashed border-[#D7E2EA]/10 hover:border-[#B600A8]/40 bg-[#121212]/20 hover:bg-[#121212]/40 h-[280px] p-6 flex flex-col justify-center items-center text-center cursor-pointer group transition-all duration-300">
              <PlusCircle className="w-10 h-10 text-[#D7E2EA]/20 group-hover:text-[#B600A8] group-hover:scale-110 transition-all duration-300 mb-2" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#D7E2EA]/60 group-hover:text-[#D7E2EA]">
                Add Certificate
              </h3>
              <p className="text-[11px] font-mono text-[#D7E2EA]/30 max-w-xs mt-1.5 leading-normal">
                Slot prepared for new certificates of cloud certifications, DevOps tools, or hackathon participation awards. Space left deliberately.
              </p>
            </div>
          </FadeIn>

          {/* DYNAMIC PLACEHOLDER 2 */}
          <FadeIn delay={0.45} y={30} tagName="div">
            <div className="rounded-2xl border-2 border-dashed border-[#D7E2EA]/10 hover:border-[#7621B0]/40 bg-[#121212]/20 hover:bg-[#121212]/40 h-[280px] p-6 flex flex-col justify-center items-center text-center cursor-pointer group transition-all duration-300">
              <PlusCircle className="w-10 h-10 text-[#D7E2EA]/20 group-hover:text-[#7621B0] group-hover:scale-110 transition-all duration-300 mb-2" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#D7E2EA]/60 group-hover:text-[#D7E2EA]">
                Add Research Paper / Thesis
              </h3>
              <p className="text-[11px] font-mono text-[#D7E2EA]/30 max-w-xs mt-1.5 leading-normal">
                Easily mount and preview your final year academic thesis or STEAM publications here during subsequent configurations.
              </p>
            </div>
          </FadeIn>

        </div>

        {/* PDF NOTIFICATION POPUP */}
        {selectedPdf && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setSelectedPdf(null)}
          >
            <div 
              className="bg-[#121212] border-2 border-[#D7E2EA]/10 rounded-3xl max-w-lg w-full p-6 text-center shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 rounded-full bg-[#B600A8]/10 flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                <Laptop className="w-8 h-8 text-[#B600A8]" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-2">
                Document Placeholder Hook
              </h2>
              <p className="text-sm text-[#D7E2EA]/75 mb-4 leading-relaxed font-light">
                This triggers a view request for <span className="font-mono text-xs text-stone-200 bg-white/10 px-2 py-0.5 rounded">{selectedPdf}</span>.
              </p>
              
              <div className="bg-[#0C0C0C] border border-white/5 rounded-2xl p-4 text-left font-mono text-xs text-[#D7E2EA]/60 leading-relaxed mb-6">
                <p className="text-white font-bold mb-1 select-none flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  Step for Ahmed:
                </p>
                <p className="select-text">
                  To bind your authentic Cisco or Google PDF files:
                  <br />
                  1. Put your PDF file inside the `/public/` directory with filename exact to the slot title listed above.
                  <br />
                  2. Update PDF link handler in `/src/components/Certs.tsx` to directly anchor window.open(`/${selectedPdf}`)!
                </p>
              </div>

              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="bg-white/10 hover:bg-white/15 px-6 py-2 rounded-full text-xs font-bold uppercase text-white transition-all cursor-pointer select-none"
                >
                  Dismiss notice
                </button>
                <button
                  onClick={() => alert("Simulated certificate download triggered.")}
                  className="bg-[#B600A8] hover:bg-[#B65DA8] px-6 py-2 rounded-full text-xs font-bold uppercase text-white transition-all cursor-pointer select-none"
                >
                  Simulate PDF view
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
