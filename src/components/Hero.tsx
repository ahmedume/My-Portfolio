import { Magnet, FadeIn } from "./UI";
import { Github, Linkedin } from "lucide-react";


export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-between overflow-hidden bg-[#0C0C0C] w-full select-none">
      
      {/* 0. LOGO */}
      <div className="absolute top-4 left-6 md:left-10 z-30">
        <FadeIn delay={0} y={-20} tagName="span">
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
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full"
              style={{ fontSize: "clamp(6vw, 11vw, 12vw)" }}
              dangerouslySetInnerHTML={{ __html: "hi, i&apos;m ahmed" }}
            />
          </FadeIn>
        </div>
      </div>

      {/* 3. HERO PORTRAIT (MAGNET HOVER / ABSOLUTE LAYER) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full flex flex-col items-center justify-end sm:justify-center bottom-0 top-auto sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto pb-4 sm:pb-0">
        <div className="pointer-events-auto">
          <FadeIn delay={0.6} y={30} duration={1.2} tagName="div">
            <Magnet padding={150} strength={3}>
              <div className="relative w-[260px] sm:w-[350px] md:w-[420px] lg:w-[480px] pointer-events-auto">
                <img
                  src="/decor/portrait.png"
                  alt="Ahmed Umer Portrait Grid"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(182,0,168,0.2)] select-none pointer-events-none"
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>
        <div className="mt-4 sm:mt-6 pointer-events-auto">
          <FadeIn delay={0.8} y={20} tagName="p">
            <span 
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-center animate-text-glow block"
              style={{ fontSize: "clamp(0.6rem, 1vw, 0.9rem)", maxWidth: "clamp(200px, 30vw, 400px)" }}
            >
              an AI &amp; developer driven by crafting striking and unforgettable projects
            </span>
          </FadeIn>
        </div>
      </div>

      {/* SOCIAL LINKS */}
      <div className="absolute bottom-6 right-6 md:right-10 z-30 flex items-center gap-3">
        <FadeIn delay={1} y={20} tagName="div">
          <a
            href="https://github.com/ahmedume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/50 hover:text-[#B600A8] transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
        </FadeIn>
        <FadeIn delay={1.1} y={20} tagName="div">
          <a
            href="https://www.linkedin.com/in/ahmedumeranwer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/50 hover:text-[#B600A8] transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </FadeIn>
      </div>

    </section>
  );
}
