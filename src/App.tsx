import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, Award, BookOpen, Trophy, Home } from "lucide-react";

import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { ProjectsList } from "./components/ProjectsList";
import { Hackathons } from "./components/Hackathons";
import { Certs } from "./components/Certs";
import { Education } from "./components/Education";
import { EMAIL } from "./lib/contact";
// The Groq chat agent is parked until it is reworked into real retrieval over the
// CV and project data. Component and /api/chat both stay in the repo, unused.
// import { Chatbot } from "./components/Chatbot";

const TABS = [
  { id: "home", label: "Home", icon: Home },
  { id: "all-projects", label: "Projects", icon: FolderGit2 },
  { id: "hackathons", label: "Hackathons", icon: Trophy },
  { id: "certs", label: "Certs", icon: Award },
  { id: "education", label: "Edu", icon: BookOpen },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const go = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none z-0" />

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
              <Hero />
              <Marquee />
              <About email={EMAIL} />
              <Services />
              <Projects onNavigateToProjects={() => go("all-projects")} />
            </div>
          )}

          {activeTab === "all-projects" && <ProjectsList />}
          {activeTab === "hackathons" && <Hackathons />}
          {activeTab === "certs" && <Certs />}
          {activeTab === "education" && <Education />}
        </motion.main>
      </AnimatePresence>

      <nav aria-label="Sections" className="fixed top-0 left-0 right-0 z-55 flex justify-center pointer-events-none bg-[#0C0C0C]/30 backdrop-blur-xl border-b border-white/5 py-2 sm:py-3">
        {/* Equal-width grid rather than a scrolling strip: 5 tabs always fit and
            every target clears the 44px minimum touch size. */}
        <ul className="bg-[#121212]/70 backdrop-blur-xl border border-white/10 rounded-full px-1.5 sm:px-3 py-1.5 sm:py-2.5 grid grid-cols-5 items-stretch gap-0.5 sm:gap-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto select-none list-none w-[98%] sm:w-auto sm:flex sm:items-center">
          {TABS.map(({ id, label, icon: Icon }) => (
            <li key={id} className="min-w-0">
              <button
                onClick={() => go(id)}
                aria-current={activeTab === id ? "page" : undefined}
                title={label}
                className={`w-full h-11 sm:h-11 sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-1 sm:px-3.5 py-1.5 rounded-full text-[8px] sm:text-sm font-medium uppercase tracking-tight sm:tracking-wider transition-all cursor-pointer active:scale-95 ${
                  activeTab === id
                    ? "bg-[#B600A8] text-white font-semibold shadow-lg"
                    : "text-[#D7E2EA]/80 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="truncate max-w-full">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
