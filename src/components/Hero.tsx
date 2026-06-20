import { CornerDownRight, ShieldAlert, BadgeDollarSign } from "lucide-react";
import { Magnet, ContactButton, FadeIn } from "./UI";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenPricing: () => void;
}

export function Hero({ onNavigate, onOpenPricing }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-between overflow-hidden bg-[#0C0C0C] w-full select-none">
      
      {/* 1. NAVBAR */}
      <FadeIn delay={0} y={-20} tagName="div">
        <header className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 bg-transparent z-50">
          {/* Logo / Title */}
          <span 
            onClick={() => onNavigate("home")}
            className="font-black text-xl tracking-tighter text-[#D7E2EA] cursor-pointer"
          >
            AHMED <span className="opacity-40">UMER</span>
          </span>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 sm:gap-10 md:gap-14">
            <button
              onClick={() => onNavigate("about")}
              className="text-xs sm:text-sm md:text-lg lg:text-[1.3rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={onOpenPricing}
              className="text-xs sm:text-sm md:text-lg lg:text-[1.3rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 cursor-pointer flex items-center gap-1.2"
            >
              Price
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className="text-xs sm:text-sm md:text-lg lg:text-[1.3rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate("chatbot")}
              className="text-xs sm:text-sm md:text-lg lg:text-[1.3rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </header>
      </FadeIn>

      {/* 2. HERO HEADLINES (LAYER BEHIND IMAGE IN Z-INDEX) */}
      <div className="relative flex-1 flex flex-col justify-center items-center px-4 w-full h-full z-10 pt-16">
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
      <div className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full flex justify-center bottom-0 sm:bottom-0 top-1/2 -translate-y-1/2 sm:translate-y-0 sm:top-auto">
        <div className="pointer-events-auto">
          <FadeIn delay={0.6} y={30} duration={1.2} tagName="div">
            <Magnet padding={150} strength={3}>
              <div className="relative w-[260px] sm:w-[350px] md:w-[420px] lg:w-[480px] pointer-events-auto">
                <img
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                  alt="Ahmed Umer Portrait Grid"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(182,0,168,0.2)] select-none pointer-events-none"
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* 4. BOTTOM BAR */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end relative z-35 bg-transparent mt-auto pointer-events-none">
        {/* Left Bio Capsule */}
        <div className="pointer-events-auto flex flex-col gap-2">
          <FadeIn delay={0.35} y={20} tagName="div">
            <p 
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
              style={{ fontSize: "clamp(0.7rem, 1.25vw, 1.2rem)", maxWidth: "clamp(160px, 18vw, 300px)" }}
            >
              an AI &amp; developer driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
        </div>

        {/* Right CTA */}
        <div className="pointer-events-auto">
          <FadeIn delay={0.5} y={20} tagName="div">
            <ContactButton 
              onClick={() => onNavigate("chatbot")} 
              label="Contact Me"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
