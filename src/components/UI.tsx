import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Play, Video, Github } from "lucide-react";

// ==========================================
// 1. MAGNET COMPONENT
// ==========================================
interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elCenterX = rect.left + rect.width / 2;
      const elCenterY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - elCenterX, e.clientY - elCenterY);

      // Check if mouse is within active padding radius
      if (dist < padding) {
        setTransition(activeTransition);
        const offsetX = (e.clientX - elCenterX) / strength;
        const offsetY = (e.clientY - elCenterY) / strength;
        setTransform(`translate3d(${offsetX}px, ${offsetY}px, 0px)`);
      } else {
        setTransition(inactiveTransition);
        setTransform("translate3d(0px, 0px, 0px)");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      style={{
        transform,
        transition,
        willChange: "transform",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// 2. CONTACT BUTTON COMPONENT
// ==========================================
interface ContactButtonProps {
  href?: string;
  label?: string;
}

export function ContactButton({ href, label = "Contact Me" }: ContactButtonProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none"
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      {label}
    </a>
  );
}

// ==========================================
// 3. LIVE PROJECT BUTTON COMPONENT
// ==========================================
interface LiveProjectButtonProps {
  onClick?: () => void;
  label?: string;
}

export function LiveProjectButton({ onClick, label = "Live Project" }: LiveProjectButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 active:scale-95 transition-all duration-200 cursor-pointer select-none"
    >
      {label}
    </button>
  );
}

// ==========================================
// 4. FADE IN ANIMATION COMPONENT
// ==========================================
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  tagName?: "div" | "span" | "section" | "li" | "h1" | "h2" | "p";
  className?: string;
  key?: React.Key;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  tagName = "div",
  className,
}: FadeInProps) {
  const Component = motion[tagName] as any;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  );
}

// ==========================================
// 5. ANIMATED TEXT / SCROLL REVEAL COMPONENT
// ==========================================
interface AnimatedTextProps {
  text: string;
}

export function AnimatedText({ text }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef as any,
    offset: ["start 0.82", "end 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="text-center font-medium leading-relaxed max-w-[560px] text-[#D7E2EA]/30 flex flex-wrap justify-center gap-x-2 gap-y-1"
      style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
    >
      {words.map((word, wIdx) => {
        // Simple scale calculation for each word's progress
        const start = wIdx / words.length;
        const end = (wIdx + 1.2) / words.length;

        return (
          <Word key={wIdx} word={word} progress={scrollYProgress} start={start} end={end} />
        );
      })}
    </p>
  );
}

interface WordProps {
  word: string;
  progress: any;
  start: number;
  end: number;
  key?: React.Key;
}

function Word({ word, progress, start, end }: WordProps) {
  const characters = Array.from(word);
  return (
    <span className="relative inline-block whitespace-nowrap">
      {characters.map((char, cIdx) => {
        // Interpolate character progress across word boundaries
        const charStep = (end - start) / characters.length;
        const charStart = start + cIdx * charStep;
        const charEnd = start + (cIdx + 1) * charStep;

        return (
          <Character
            key={cIdx}
            char={char}
            progress={progress}
            start={charStart}
            end={charEnd}
          />
        );
      })}
    </span>
  );
}

interface CharacterProps {
  char: string;
  progress: any;
  start: number;
  end: number;
  key?: React.Key;
}

function Character({ char, progress, start, end }: CharacterProps) {
  const opacity = useTransform(progress, [start, end], [0.15, 1.0]);

  return (
    <span className="relative inline-block">
      {/* Background/placeholder for character space */}
      <span className="opacity-15">{char}</span>
      {/* Scroll-revealed absolute character */}
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {char}
      </motion.span>
    </span>
  );
}

// ==========================================
// 6. ESCAPE-TO-CLOSE
// ==========================================
export function useEscape(onEscape: () => void, active: boolean) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onEscape();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, onEscape]);
}

// ==========================================
// 7. VIDEO PLAYER (click-to-load, never autoplays)
// ==========================================
interface VideoPlayerProps {
  src: string;
  title: string;
}

export function VideoPlayer({ src, title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  // Poster frames are generated alongside the video, same basename, .jpg.
  const poster = src.replace(/\.mp4$/, ".jpg");

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
        >
          <track kind="captions" />
        </video>
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Play demo video: ${title}`}
          className="absolute inset-0 w-full h-full cursor-pointer group"
        >
          <img
            src={poster}
            alt={`${title} demo preview`}
            loading="lazy"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
          />
          <span className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-[#B600A8] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
            <Play className="w-7 h-7 text-white fill-white ml-0.5" />
          </span>
        </button>
      )}
    </div>
  );
}

// ==========================================
// 8. VIDEO PLACEHOLDER SLOT
// ==========================================
export function VideoSlot() {
  return (
    <div className="w-full aspect-video rounded-2xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-2 px-6 text-center">
      <Video className="w-7 h-7 text-[#D7E2EA]/25" />
      <p className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/35">
        Demo video coming soon
      </p>
    </div>
  );
}

// ==========================================
// 9. SHOT GALLERY (thumbnails -> lightbox)
// ==========================================
export function ShotGallery({ shots, title }: { shots: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);

  if (shots.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {shots.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            aria-label={`View screenshot ${i + 1} of ${title}`}
            className="group relative aspect-video overflow-hidden rounded-xl border border-white/5 bg-[#0C0C0C] cursor-pointer hover:border-[#B600A8]/50 transition-colors"
          >
            <img
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover opacity-65 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        >
          <img
            src={shots[active]}
            alt={`${title} screenshot ${active + 1}`}
            className="max-w-full max-h-full rounded-2xl border border-white/10 object-contain"
          />
        </div>
      )}
    </>
  );
}

// ==========================================
// 10. OUTBOUND REPO LINK
// ==========================================
export function LinkRow({ repo }: { repo?: string }) {
  if (!repo) return null;

  return (
    <a
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2.5 rounded-full border-2 border-[#D7E2EA] text-[11px] sm:text-xs font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 active:scale-95 transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-1.5"
    >
      <Github className="w-3.5 h-3.5" />
      Source
    </a>
  );
}
