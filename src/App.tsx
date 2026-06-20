
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FolderGit2, 
  Award, 
  BookOpen, 
  Bot, 
  Sparkles, 
  X, 
  Calculator, 
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Mail,
  Home,
  ArrowRight
} from "lucide-react";

// Section imports
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { ProjectsList } from "./components/ProjectsList";
import { Certs } from "./components/Certs";
import { Education } from "./components/Education";
import { Chatbot } from "./components/Chatbot";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "all-projects" | "certs" | "education" | "chatbot">("home");
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  
  // Custom Project Price Estimator State
  const [include3D, setInclude3D] = useState(true);
  const [includeWeb, setIncludeWeb] = useState(false);
  const [includeAI, setIncludeAI] = useState(false);
  const [deliverySpeed, setDeliverySpeed] = useState<"standard" | "express">("standard");

  // Handles custom scrolling or switching to primary landing sections
  const handleNavigate = (sectionId: string) => {
    if (sectionId === "chatbot") {
      setActiveTab("chatbot");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    // Switch to home view first if not currently there
    if (activeTab !== "home") {
      setActiveTab("home");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Safe pricing calculator estimation hook
  const calculateEstimate = () => {
    let price = 0;
    if (include3D) price += 800;
    if (includeWeb) price += 1200;
    if (includeAI) price += 1500;
    if (deliverySpeed === "express") price += 500;
    return price;
  };

  // Close pricing calculator modal when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPricingOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-hidden font-sans pb-32">
      
      {/* BACKGROUND DECORATIVE GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none z-0" />

      {/* RENDER ACTIVE TAB WITH SMOOTH ANIME TRANSITIONS */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative z-10 w-full"
        >
          {activeTab === "home" && (
            <div id="home">
              <Hero 
                onNavigate={handleNavigate} 
                onOpenPricing={() => setIsPricingOpen(true)} 
              />
              <Marquee />
              <About onContactClick={() => setActiveTab("chatbot")} />
              <Services />
              <Projects onNavigateToProjects={() => {
                setActiveTab("all-projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} />
            </div>
          )}

          {activeTab === "all-projects" && <ProjectsList />}

          {activeTab === "certs" && <Certs />}

          {activeTab === "education" && <Education />}

          {activeTab === "chatbot" && <Chatbot />}
        </motion.main>
      </AnimatePresence>

      {/* FLOATING MASTER NAVIGATION CAPSULE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-55 w-[90%] sm:w-auto max-w-lg pointer-events-none">
        <div 
          className="bg-[#121212]/85 backdrop-blur-xl border-2 border-white/10 rounded-full px-4 py-2 flex items-center justify-between gap-2 sm:gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto select-none"
        >
          
          <button
            onClick={() => {
              setActiveTab("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex flex-col sm:flex-row items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "home" 
                ? "bg-[#B600A8] text-white shadow-lg" 
                : "text-[#D7E2EA]/60 hover:text-white"
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("all-projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex flex-col sm:flex-row items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "all-projects" 
                ? "bg-[#B600A8] text-white shadow-lg" 
                : "text-[#D7E2EA]/60 hover:text-white"
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span className="hidden sm:inline">All Projects</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("certs");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex flex-col sm:flex-row items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "certs" 
                ? "bg-[#B600A8] text-white shadow-lg" 
                : "text-[#D7E2EA]/60 hover:text-white"
            }`}
          >
            <Award className="w-4 h-4" />
            <span className="hidden sm:inline">Certs</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("education");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex flex-col sm:flex-row items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "education" 
                ? "bg-[#B600A8] text-white shadow-lg" 
                : "text-[#D7E2EA]/60 hover:text-white"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Education</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("chatbot");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex flex-col sm:flex-row items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer relative ${
              activeTab === "chatbot" 
                ? "bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg" 
                : "text-[#D7E2EA]/60 hover:text-white"
            }`}
          >
            <Bot className="w-4 h-4 text-pink-300" />
            <span className="hidden sm:inline">AI Agent</span>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
          </button>

        </div>
      </div>

      {/* ESTIMATE PRICING CALCULATOR MODAL (SOLVES NAV LINK "PRICE") */}
      <AnimatePresence>
        {isPricingOpen && (
          <div 
            className="fixed inset-0 z-55 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setIsPricingOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#121212] border-2 border-[#D7E2EA]/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative select-none shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsPricingOpen(false)}
                className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 text-white p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Header */}
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-[#B600A8]" />
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  Freelance Custom Pricing
                </h2>
              </div>
              <p className="text-xs text-[#D7E2EA]/60 font-mono mb-6 leading-relaxed">
                Estimate the standard cost parameters for commissioning Ahmed Umer. Check options below to dynamically render parameters:
              </p>

              {/* Checklist inputs */}
              <div className="space-y-3 mb-6 select-text text-sm">
                
                {/* 1. 3D Architecture */}
                <label className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={include3D}
                    onChange={(e) => setInclude3D(e.target.checked)}
                    className="accent-[#B600A8] h-4 w-4 rounded"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-white uppercase text-xs">3D Creative Modeling &amp; Assets</p>
                    <p className="text-[11px] text-[#D7E2EA]/50 font-light mt-0.5">High-fidelity 3D assets, textures, and custom renders.</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-pink-400">+$800</span>
                </label>

                {/* 2. Web Development */}
                <label className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includeWeb}
                    onChange={(e) => setIncludeWeb(e.target.checked)}
                    className="accent-[#B600A8] h-4 w-4 rounded"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-white uppercase text-xs">Full-Stack Web App Development</p>
                    <p className="text-[11px] text-[#D7E2EA]/50 font-light mt-0.5">Vite, React, Express layers, high speed and modularity.</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-pink-400">+$1200</span>
                </label>

                {/* 3. AI Integrations */}
                <label className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includeAI}
                    onChange={(e) => setIncludeAI(e.target.checked)}
                    className="accent-[#B600A8] h-4 w-4 rounded"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-white uppercase text-xs">Generative AI / Multi-Agent Systems</p>
                    <p className="text-[11px] text-[#D7E2EA]/50 font-light mt-0.5">Agent logic via LangGraph, custom models, and vector stores.</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-pink-400">+$1500</span>
                </label>

              </div>

              {/* Delivery Speed Selector */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 block mb-2 font-mono">
                  Delivery Speed Option:
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button
                    onClick={() => setDeliverySpeed("standard")}
                    className={`py-2 px-4 rounded-xl font-bold uppercase border cursor-pointer transition-all ${
                      deliverySpeed === "standard"
                        ? "bg-white/10 border-[#D7E2EA]"
                        : "border-white/5 bg-transparent text-[#D7E2EA]/50"
                    }`}
                  >
                    Standard (2-4 weeks)
                  </button>
                  <button
                    onClick={() => setDeliverySpeed("express")}
                    className={`py-2 px-4 rounded-xl font-bold uppercase border cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                      deliverySpeed === "express"
                        ? "bg-gradient-to-r from-[#B600A8] to-[#7621B0] border-transparent text-white"
                        : "border-white/5 bg-transparent text-[#D7E2EA]/50"
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    Express (+ $500)
                  </button>
                </div>
              </div>

              {/* PRICE DYNAMIC DISPLAY BLOCK */}
              <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-4 flex justify-between items-center mb-6 shadow-md">
                <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/55 font-bold">Estimated Cost Plan:</span>
                <div className="text-right">
                  <span className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-300 to-pink-500">
                    ${calculateEstimate()}
                  </span>
                  <span className="text-[10px] text-[#D7E2EA]/30 block font-mono mt-0.5">USD Standard Pricing</span>
                </div>
              </div>

              {/* Dialog CTAs */}
              <div className="flex gap-2 justify-end text-xs">
                <button 
                  onClick={() => setIsPricingOpen(false)}
                  className="bg-white/5 hover:bg-white/10 text-white font-bold py-2.5 px-5 rounded-full uppercase tracking-wider transition-all cursor-pointer select-none"
                >
                  Dismiss Calc
                </button>
                <button
                  onClick={() => {
                    setIsPricingOpen(false);
                    setActiveTab("chatbot");
                    setTimeout(() => {
                      const textMsg = `Hi AI Agent! I estimated a custom portfolio project ($${calculateEstimate()}) including ${
                        include3D ? "3D features, " : ""
                      }${includeWeb ? "Fullstack development, " : ""}${
                        includeAI ? "AI model chains" : ""
                      }. Can you tell me Ahmed's email to proceed?`;
                      alert("Estimated cost context compiled. Transitioning to Chatbot...");
                      
                      // Inject pricing prompt directly into Chatbot text input
                      const inputElement = document.querySelector("input") as HTMLInputElement;
                      if (inputElement) {
                        inputElement.value = textMsg;
                        // Trigger synthetic input change
                        const ev = new Event("input", { bubbles: true });
                        inputElement.dispatchEvent(ev);
                      }
                    }, 200);
                  }}
                  className="bg-[#B600A8] hover:bg-[#B600A8]/80 text-white font-black py-2.5 px-6 rounded-full uppercase tracking-widest transition-all cursor-pointer duration-200 select-none shadow-lg hover:scale-102 flex items-center gap-1"
                >
                  Confirm Estimate
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
