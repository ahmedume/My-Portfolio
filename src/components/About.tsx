import { FadeIn, AnimatedText, ContactButton } from "./UI";
import { asset } from "../lib/asset";

interface AboutProps {
  email: string;
}

export function About({ email }: AboutProps) {
  return (
    <section 
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 select-none overflow-hidden"
    >
      
      {/* DECORATIVE 3D IMAGES AT 4 CORNERS */}
      
      {/* Decorative images - hidden on very small screens */}
      <div className="hidden sm:block">
        <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
          <FadeIn delay={0.1} x={-80} y={0} duration={0.9} tagName="div">
            <img
              src={asset("decor/moon.webp")}
              alt=""
              className="w-[80px] sm:w-[165px] md:w-[215px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
          </FadeIn>
        </div>

        <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
          <FadeIn delay={0.15} x={80} y={0} duration={0.9} tagName="div">
            <img
              src={asset("decor/lego.webp")}
              alt=""
              className="w-[80px] sm:w-[165px] md:w-[215px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
          </FadeIn>
        </div>

        <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
          <FadeIn delay={0.25} x={-80} y={0} duration={0.9} tagName="div">
            <img
              src={asset("decor/bottom-left.webp")}
              alt=""
              className="w-[70px] sm:w-[145px] md:w-[185px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
          </FadeIn>
        </div>

        <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
          <FadeIn delay={0.35} x={80} y={0} duration={0.9} tagName="div">
            <img
              src={asset("decor/bottom-right.webp")}
              alt=""
              className="w-[90px] sm:w-[175px] md:w-[225px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
          </FadeIn>
        </div>
      </div>

      {/* CENTRAL CORE CONTENT GRID */}
      <div className="relative flex flex-col items-center max-w-4xl w-full text-center z-20">
        
        {/* About heading */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <FadeIn delay={0} y={40} tagName="div">
            <h2 
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 10vw, 130px)" }}
            >
              About me
            </h2>
          </FadeIn>
        </div>

        {/* Character-by-character reveals */}
        <div className="mb-16 sm:mb-20 md:mb-24 px-4 sm:px-8 flex justify-center">
          <AnimatedText 
            text="I’m Ahmed Umer, an AI Developer focused on building practical, production-ready skills in AI systems, automation, and Web development. My work revolves around turning modern AI capabilities into usable applications rather than just theoretical models."
          />
        </div>

        {/* CTA contact button */}
        <div className="scale-100 hover:scale-105 active:scale-95 transition-transform duration-250">
          <FadeIn delay={0.4} y={20} tagName="div">
            <ContactButton
              href={`mailto:${email}`}
              label="Get In Touch"
            />
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
