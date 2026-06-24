import React from "react";
import { Award, Calendar, ShieldCheck, Cpu, Network, Laptop, Sparkles, BrainCircuit, Code } from "lucide-react";
import { FadeIn } from "./UI";

interface CertificationDetails {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: React.ReactNode;
  tags: string[];
  pdfUrl: string;
}

const RESUME_CERTS: CertificationDetails[] = [
  {
    id: "mcp",
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    year: "2026",
    icon: <Cpu className="w-6 h-6 text-orange-400" />,
    tags: ["MCP", "Anthropic", "LLM Protocol", "AI Agents"],
    pdfUrl: "/certs/mcp_anthropic.pdf"
  },
  {
    id: "langchain",
    title: "Introduction to LangChain",
    issuer: "LangChain Academy",
    year: "2026",
    icon: <Network className="w-6 h-6 text-green-400" />,
    tags: ["LangChain", "LLM", "Python", "RAG"],
    pdfUrl: "/certs/langchain.pdf"
  },
  {
    id: "n8n",
    title: "n8n Course Level 1",
    issuer: "n8n",
    year: "2025",
    icon: <Laptop className="w-6 h-6 text-pink-400" />,
    tags: ["n8n", "Workflow Automation", "API", "Low-Code"],
    pdfUrl: "/certs/n8n_level_1.pdf"
  },
  {
    id: "cybersecurity",
    title: "Cyber Security Essentials",
    issuer: "Cisco Networking Academy",
    year: "2024",
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    tags: ["Cisco", "Cybersecurity", "Network Security", "Threat Detection"],
    pdfUrl: "/certs/cybersecurity.pdf"
  },
  {
    id: "steameducation",
    title: "International Conference on Advance STEAM Education (ICASE-2025)",
    issuer: "The University of Faisalabad",
    year: "2025",
    icon: <Award className="w-6 h-6 text-amber-500" />,
    tags: ["STEAM", "Research", "AI in Education", "Conference"],
    pdfUrl: "/certs/steam_conference.pdf"
  },
  {
    id: "innovative_pakistan",
    title: "Innovative Pakistan Participant",
    issuer: "The University of Faisalabad",
    year: "2026",
    icon: <Sparkles className="w-6 h-6 text-teal-400" />,
    tags: ["Innovation", "Entrepreneurship", "Pakistan"],
    pdfUrl: "/certs/innovative_pakistan.pdf"
  },
  {
    id: "intro_modern_ai",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    year: "2026",
    icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
    tags: ["Cisco", "AI", "Machine Learning", "Neural Networks"],
    pdfUrl: "/certs/intro_modern_ai.pdf"
  },
  {
    id: "python_essentials_1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2026",
    icon: <Code className="w-6 h-6 text-yellow-400" />,
    tags: ["Cisco", "Python", "Basics", "Data Structures"],
    pdfUrl: "/certs/python_essentials_1.pdf"
  },
  {
    id: "python_essentials_2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    year: "2026",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    tags: ["Cisco", "Python", "OOP", "File Handling"],
    pdfUrl: "/certs/python_essentials_2.pdf"
  },
  {
    id: "digital_marketing",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    year: "2022",
    icon: <Award className="w-6 h-6 text-red-400" />,
    tags: ["Google", "Digital Marketing", "SEO", "Analytics"],
    pdfUrl: "/certs/google_digital_marketing.pdf"
  }
];

export function Certs() {
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
                className="group relative rounded-2xl border border-white/10 hover:border-[#B600A8]/40 bg-[#121212]/80 hover:bg-[#121212] p-5 flex flex-col justify-between h-[280px] transition-all duration-300 shadow-lg hover:-translate-y-1 cursor-pointer"
                onClick={() => window.open(cert.pdfUrl, "_blank")}
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



              </div>
            </FadeIn>
          ))}



        </div>



      </div>
    </section>
  );
}
