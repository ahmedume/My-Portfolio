import { useEffect, useRef, useState } from "react";

const IMAGES_ROW_1 = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif"
];

const IMAGES_ROW_2 = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

// Triple the row arrays to ensure perfect seamless coverage and overflow spacing
const TRIPLED_ROW_1 = [...IMAGES_ROW_1, ...IMAGES_ROW_1, ...IMAGES_ROW_1];
const TRIPLED_ROW_2 = [...IMAGES_ROW_2, ...IMAGES_ROW_2, ...IMAGES_ROW_2];

export function Marquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      
      // Calculate scroll offset proportional to section entrance
      const computedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(computedOffset);
    };

    // Passive scroll listener for high FPS scrolling on mobile/desktop
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial compute
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#0C0C0C] py-16 sm:py-24 md:py-32 overflow-hidden flex flex-col gap-4 relative z-25 select-none"
    >
      {/* ROW 1: Moves RIGHT on scroll */}
      <div 
        className="flex gap-3 w-max"
        style={{
          transform: `translateX(${offset - 400}px)`,
          willChange: "transform",
        }}
      >
        {TRIPLED_ROW_1.map((url, index) => (
          <div
            key={`r1-${index}`}
            className="w-[280px] h-[180px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] flex-shrink-0 bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff]/5 shadow-lg"
          >
            <img
              src={url}
              alt="Motion Artwork Tile Row 1"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* ROW 2: Moves LEFT on scroll */}
      <div
        className="flex gap-3 w-max self-end"
        style={{
          transform: `translateX(${-(offset - 400)}px)`,
          willChange: "transform",
        }}
      >
        {TRIPLED_ROW_2.map((url, index) => (
          <div
            key={`r2-${index}`}
            className="w-[280px] h-[180px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] flex-shrink-0 bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff]/5 shadow-lg"
          >
            <img
              src={url}
              alt="Motion Artwork Tile Row 2"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
