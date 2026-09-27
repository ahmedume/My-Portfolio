import { useEffect, useRef, useState } from "react";
import { asset } from "../lib/asset";

const shot = (dir: string, file: string) => asset(`projects/${dir}/${file}`);

// Two rows drawn from real project screenshots. Kept local so the page makes no
// third-party requests and the tiles actually show this work.
const IMAGES_ROW_1 = [
  shot("aiverse", "01-landing.png"),
  shot("datasentry", "01-landing.png"),
  shot("booksie", "01-landing.png"),
  shot("aiverse", "05-chat.png"),
  shot("datasentry", "04-insights.png"),
  shot("aiverse", "06-detector.png"),
];

const IMAGES_ROW_2 = [
  shot("aiverse", "02-detect.png"),
  shot("datasentry", "02-overview.png"),
  shot("booksie", "02-login.png"),
  shot("aiverse", "04-humanize.png"),
  shot("datasentry", "07-training.png"),
  shot("aiverse", "03-plagiarism.png"),
  shot("datasentry", "05-charts.png"),
  shot("booksie", "03-register.png"),
];

// Repeat each row so the strip never runs out mid-scroll.
const TRIPLED_ROW_1 = [...IMAGES_ROW_1, ...IMAGES_ROW_1, ...IMAGES_ROW_1];
const TRIPLED_ROW_2 = [...IMAGES_ROW_2, ...IMAGES_ROW_2, ...IMAGES_ROW_2];

export function Marquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const section = sectionRef.current;
        if (!section) return;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const row = (images: string[], key: string, reverse: boolean) => (
    <div
      className={`flex gap-3 w-max ${reverse ? "self-end" : ""}`}
      style={{
        transform: `translateX(${reverse ? -(offset - 400) : offset - 400}px)`,
        willChange: "transform",
      }}
    >
      {images.map((src, i) => (
        <div
          key={`${key}-${i}`}
          className="w-[200px] h-[130px] sm:w-[320px] sm:h-[200px] md:w-[420px] md:h-[270px] flex-shrink-0 bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff]/5 shadow-lg"
        >
          <img
            src={src}
            alt="Project screenshot"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={sectionRef}
      className="bg-[#0C0C0C] py-16 sm:py-24 md:py-32 overflow-hidden flex flex-col gap-4 relative z-25 select-none"
    >
      {row(TRIPLED_ROW_1, "r1", false)}
      {row(TRIPLED_ROW_2, "r2", true)}
    </div>
  );
}
