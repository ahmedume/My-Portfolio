import { FadeIn, AnimatedText, ContactButton } from "./UI";

interface AboutProps {
  onContactClick: () => void;
}

export function About({ onContactClick }: AboutProps) {
  return (
    <section 
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 select-none overflow-hidden"
    >
      
      {/* DECORATIVE 3D IMAGES AT 4 CORNERS */}
      
      {/* 1. Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9} tagName="div">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Decorative Moon Asset"
            referrerPolicy="no-referrer"
            className="w-[125px] sm:w-[165px] md:w-[215px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* 2. Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9} tagName="div">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Decorative Lego Asset"
            referrerPolicy="no-referrer"
            className="w-[125px] sm:w-[165px] md:w-[215px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* 3. Bottom-Left: Flowing 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9} tagName="div">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Abstract Pillar Asset"
            referrerPolicy="no-referrer"
            className="w-[105px] sm:w-[145px] md:w-[185px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-Right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.35} x={80} y={0} duration={0.9} tagName="div">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Geometry Assets"
            referrerPolicy="no-referrer"
            className="w-[135px] sm:w-[175px] md:w-[225px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
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
            text="I’m Ahmed Umer, a recent graduate in Artificial Intelligence focused on building practical, production-ready skills in AI systems, automation, and Web development. My work revolves around turning modern AI capabilities into usable applications rather than just theoretical models."
          />
        </div>

        {/* CTA contact button */}
        <div className="scale-100 hover:scale-105 active:scale-95 transition-transform duration-250">
          <FadeIn delay={0.4} y={20} tagName="div">
            <ContactButton 
              onClick={onContactClick} 
              label="Get In Touch"
            />
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
