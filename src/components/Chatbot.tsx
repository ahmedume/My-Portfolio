import { useState, useRef, useEffect } from "react";
import { Send, Bot, Sparkles, User, AlertTriangle, ShieldCheck, Mail, ArrowRight, MessageSquare, RefreshCw } from "lucide-react";
import { FadeIn } from "./UI";

interface Message {
  role: "user" | "model";
  text: string;
}

const STARTER_PROMPTS = [
  "What is Ahmed's contact email?",
  "Tell me about Ahmed's multi-agent Final Year Project.",
  "What AI & Machine Learning skills does he possess?",
  "What hackathons has he participated in?",
  "What certifications does Ahmed hold?"
];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Developer Agent connection secure. Welcome recruiter! I am fine-tuned with verification metrics from Ahmed Umer's CV. Ask me about his projects, skills, certifications, and background. (Notice: All private identifiers are completely encrypted and secure)."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [engineUsed, setEngineUsed] = useState<"gemini" | "groq" | "none" | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg = textToSend.trim();
    setInput("");
    
    // Append user message to history
    const updatedHistory = [...messages, { role: "user" as const, text: userMsg }];
    setMessages(updatedHistory);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMsg,
          history: updatedHistory.slice(0, -1) // Send trailing conversation context (excluding the new user message we just added)
        })
      });

      if (!response.ok) {
        throw new Error("Local full-stack chat endpoint returned non-200 state");
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: "model", text: data.text || "I apologize, my neural weights are undergoing live adaptation, please try again." }]);
      if (data.engine) {
        setEngineUsed(data.engine);
      }
    } catch (err) {
      console.error("Chat Client Failure:", err);
      setMessages(prev => [
        ...prev,
        {
          role: "model",
          text: "Agent transmission offline. The local environment is searching for dynamic keys. However, Ahmed is always reachable directly via email at ahmedumeranwer@gmail.com! Feel free to copy and send him a direct message."
        }
      ]);
      setEngineUsed("none");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-6 md:px-12 py-24 select-none relative z-30">
      <div className="max-w-4xl mx-auto w-full flex flex-col h-[82vh] min-h-[500px]">
        
        {/* Header Capsule */}
        <div className="border-b border-white/10 pb-6 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <FadeIn delay={0} y={15} tagName="div">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Bot className="w-8 h-8 text-[#B600A8]" />
                <h1 className="hero-heading font-black text-3xl uppercase tracking-tighter">
                  Ahmed's AI Agent
                </h1>
              </div>
            </FadeIn>
            <p className="text-xs text-[#D7E2EA]/40 font-mono mt-1">
              Recruitment Companion Unit • Filtered Data Retrieval Interface
            </p>
          </div>

          {/* Engine Status Indicator */}
          <div className="flex flex-wrap gap-2 items-center justify-center">
            {engineUsed && (
              <span className="text-[10px] sm:text-xs bg-[#B600A8]/10 text-[#B600A8] border border-[#B600A8]/20 px-3 py-1 rounded-full font-mono font-medium flex items-center gap-1.5 uppercase select-text animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                Power: {engineUsed} API
              </span>
            )}
            
            <span className="text-[10px] sm:text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 px-3 py-1 rounded-full font-mono flex items-center gap-1.5 uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy Guard ACTIVE
            </span>
          </div>
        </div>

        {/* MESSAGES CORE WINDOW PANEL */}
        <div className="flex-1 bg-[#121212]/30 border border-white/5 rounded-3xl p-4 sm:p-6 overflow-y-auto space-y-4 mb-4 backdrop-blur-md relative scrollbar-thin select-text">
          
          {messages.map((m, idx) => {
            const isBot = m.role === "model";
            return (
              <div 
                key={idx}
                className={`flex gap-3 max-w-[85%] ${isBot ? "mr-auto" : "ml-auto flex-row-reverse"}`}
              >
                {/* Agent Avatar Icon */}
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center select-none shadow-md ${isBot ? "bg-[#B600A8]/10 text-[#B600A8]" : "bg-white/10 text-stone-300"}`}>
                  {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                {/* Bubble details */}
                <div className={`p-4 rounded-3xl text-sm leading-relaxed ${isBot ? "bg-[#121212] text-[#D7E2EA]/90 border border-white/5" : "bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-xl"}`}>
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
              </div>
            );
          })}

          {/* Sparkly dynamic loader bubbles */}
          {isLoading && (
            <div className="flex gap-3 max-w-[80%] mr-auto">
              <div className="w-8 h-8 rounded-full bg-[#B600A8]/10 text-[#B600A8] flex items-center justify-center select-none animate-spin">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div className="p-4 bg-[#121212] border border-white/5 text-[#D7E2EA]/55 rounded-3xl text-sm flex items-center gap-2 select-none font-mono">
                <span className="animate-pulse">Retrieving CV database nodes...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* QUICK SUGGESTIONS STARTERS */}
        {messages.length === 1 && (
          <div className="mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D7E2EA]/40 block mb-2 font-mono select-none">
              Suggested topics:
            </span>
            <div className="flex flex-wrap gap-2 justify-start">
              {STARTER_PROMPTS.map((p, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSendMessage(p)}
                  className="bg-[#121212] hover:bg-white/10 border border-white/5 text-xs text-[#D7E2EA]/75 px-3 py-1.5 rounded-full select-none active:scale-95 transition-all text-left flex items-center gap-1.5 max-w-full cursor-pointer hover:border-white/20"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#B600A8] flex-shrink-0" />
                  <span className="truncate">{p}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MANDATE CAUTION CONTAINER */}
        <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-3.5 mb-4 flex gap-3 text-xs text-red-400 select-text leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
          <p>
            <span className="font-bold uppercase tracking-widest text-red-300">Privacy Mandate Applied</span>: For security and data safety guidelines, Ahmed&apos;s personal phone number and exact street residence details are strictly encrypted. Contact remains verified via <span className="underline font-bold text-white selection:bg-red-400">ahmedumeranwer@gmail.com</span> exclusively.
          </p>
        </div>

        {/* INPUT SEND PANEL */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(input);
          }}
          className="flex gap-2.5 items-center bg-[#121212] border border-white/5 rounded-2xl p-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder="Ask anything about Ahmed's credentials..."
            className="flex-1 bg-transparent px-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 outline-none selection:bg-[#B600A8]"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-xl bg-[#B600A8] hover:bg-[#B600A8]/80 text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:bg-[#B600A8] cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </section>
  );
}
