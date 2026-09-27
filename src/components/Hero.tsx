import { useState } from "react";
import { motion } from "motion/react";
import { Magnet, FadeIn } from "./UI";
import { Github, Linkedin, Mail } from "lucide-react";
import { asset } from "../lib/asset";
import { EMAIL } from "../lib/contact";

export function Hero() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-between overflow-hidden bg-[#0C0C0C] w-full select-none">
      
      {/* 0. LOGO */}
      <div className="absolute top-4 left-6 md:left-10 z-30">
        <FadeIn delay={0} y={-20} tagName="div">
          <span className="font-black text-xl tracking-tighter text-[#D7E2EA] cursor-default select-none">
            AHMED <span className="opacity-40">UMER</span>
          </span>
        </FadeIn>
      </div>

      {/* 1. HERO HEADLINES */}
      <div className="relative flex-1 flex flex-col justify-center items-center px-4 w-full h-full z-10 pt-20">
        <div className="overflow-hidden w-full text-center">
          <FadeIn delay={0.15} y={40} tagName="div">
            <h1 
              className="hero-heading font-black uppercase tracking-tight leading-none w-full"
              style={{ fontSize: "clamp(1.9rem, 11vw, 12vw)" }}
              dangerouslySetInnerHTML={{ __html: "hi, i&apos;m ahmed" }}
            />
          </FadeIn>
        </div>
      </div>

      {/* 3. HERO PORTRAIT (MAGNET HOVER / ABSOLUTE LAYER) */}
      {/* pb-24 on mobile reserves a row for the social links, which sit in
          normal flow there instead of overlapping this block. */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full flex flex-col items-center justify-end sm:justify-center bottom-0 top-auto sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto pb-24 sm:pb-0">
        <div className="pointer-events-auto">
          <FadeIn delay={0.6} y={30} duration={1.2} tagName="div">
            <Magnet padding={150} strength={3}>
              <div className="relative w-[260px] sm:w-[350px] md:w-[420px] lg:w-[480px] pointer-events-auto">
                <img
                  src={asset("decor/portrait.webp")}
                  alt="Ahmed Umer Portrait Grid"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(182,0,168,0.2)] select-none pointer-events-none"
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>
        <div className="mt-4 sm:mt-6 pointer-events-auto">
          <FadeIn delay={0.8} y={20} tagName="div">
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-center animate-text-glow"
              style={{ fontSize: "clamp(0.6rem, 1vw, 0.9rem)", maxWidth: "clamp(200px, 30vw, 400px)" }}
            >
              an AI &amp; developer driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
        </div>
      </div>

      {/* SOCIAL LINKS: click the mail icon to reveal the address.
          Static and centred on mobile so it cannot collide with the portrait;
          pinned bottom-right from sm up. */}
      <div className="relative sm:absolute sm:bottom-6 sm:right-6 md:right-10 z-30 flex flex-wrap items-center justify-center sm:justify-end gap-2 pb-5 sm:pb-0 sm:gap-3">
        <FadeIn delay={1} y={20} tagName="div" className="flex items-center gap-1 sm:gap-2">
          <a
            href="https://github.com/ahmedume"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="flex items-center justify-center h-11 w-11 text-[#D7E2EA]/60 hover:text-[#B600A8] transition-colors duration-200"
          >
            <Github className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedumeranwer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="flex items-center justify-center h-11 w-11 text-[#D7E2EA]/60 hover:text-[#B600A8] transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setShowEmail((v) => !v)}
            aria-expanded={showEmail}
            aria-label={showEmail ? "Hide email address" : "Show email address"}
            title="Email"
            className="flex items-center justify-center h-11 w-11 text-[#D7E2EA]/60 hover:text-[#B600A8] transition-colors duration-200 cursor-pointer"
          >
            <Mail className="w-6 h-6" aria-hidden="true" />
          </button>
        </FadeIn>

        {showEmail && (
          <motion.a
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            href={`mailto:${EMAIL}`}
            className="bg-[#121212]/90 backdrop-blur-xl border border-[#B600A8]/40 text-[#D7E2EA] text-[11px] sm:text-sm font-mono px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-full whitespace-nowrap max-w-[62vw] sm:max-w-none truncate hover:border-[#B600A8] transition-colors select-text flex items-center min-h-11"
          >
            {EMAIL}
          </motion.a>
        )}
      </div>

    </section>
  );
}
