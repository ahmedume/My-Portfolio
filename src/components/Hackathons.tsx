import { useState } from "react";
import { Trophy, ExternalLink, Award } from "lucide-react";
import { FadeIn, VideoPlayer, VideoSlot, LinkRow, useEscape } from "./UI";
import { HACKATHONS, type Hackathon } from "../data/hackathons";

export function Hackathons() {
  const [active, setActive] = useState<Hackathon | null>(null);

  useEscape(() => setActive(null), !!active);

  return (
    <section className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-24 select-none relative z-30">
      <div className="max-w-5xl mx-auto w-full">
        <div className="border-b border-white/10 pb-10 mb-14 text-center sm:text-left">
          <FadeIn delay={0} y={30} tagName="div">
            <h1 className="hero-heading font-black text-5xl sm:text-7xl uppercase tracking-tighter mb-4">
              Hackathons
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} y={20} tagName="div">
            <p className="text-sm md:text-lg text-[#D7E2EA]/50 max-w-2xl font-light mt-2">
              Competitive builds shipped against global fields, judged on execution and originality.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HACKATHONS.map((h, index) => (
            <FadeIn key={h.id} delay={index * 0.1} y={30} tagName="div">
              <button
                onClick={() => setActive(h)}
                className="group relative w-full h-full text-left rounded-3xl border-2 border-[#D7E2EA]/10 hover:border-[#B600A8]/50 bg-[#121212] p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-pointer"
              >
                {h.shot ? (
                  <div className="w-full h-[210px] overflow-hidden rounded-2xl mb-4 bg-[#0C0C0C]">
                    <img
                      src={h.shot}
                      alt={h.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[210px] overflow-hidden rounded-2xl mb-4 bg-[radial-gradient(circle_at_30%_20%,#1e1b4b,#0C0C0C_70%)] flex items-center justify-center">
                    <Trophy className="w-12 h-12 text-[#D7E2EA]/15" />
                  </div>
                )}

                <div className="flex items-center gap-3 mb-2">
                  {h.icon}
                  <h2 className="font-bold text-xl uppercase tracking-tight text-[#D7E2EA] group-hover:text-white transition-colors">
                    {h.title}
                  </h2>
                </div>

                <a
                  href={h.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-mono uppercase tracking-widest text-[#B600A8] hover:underline mb-3 inline-flex items-center gap-1 w-fit py-3.5 -my-3.5"
                >
                  {h.event} <ExternalLink className="w-3 h-3" />
                </a>

                <p className="text-[#D7E2EA]/75 font-light text-sm leading-relaxed line-clamp-3">
                  {h.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {h.badges.map((b) => (
                    <span
                      key={b}
                      className="bg-[#B600A8]/10 text-[#D7E2EA]/70 text-[10px] font-mono px-2.5 py-1 rounded-md border border-[#B600A8]/20 uppercase"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 pt-24"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121212] border border-[#D7E2EA]/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
          >
            <div className="mb-6">
              {active.video ? (
                <VideoPlayer src={active.video} title={active.title} />
              ) : (
                <VideoSlot />
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4 mb-5">
              <div className="flex items-center gap-3">
                {active.icon}
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                  {active.title}
                </h2>
              </div>
              <span className="text-xs font-mono uppercase text-[#D7E2EA]/50 shrink-0">
                {active.year}
              </span>
            </div>

            <a
              href={active.eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-[#B600A8] hover:underline mb-5 inline-flex items-center gap-1 w-fit"
            >
              {active.event} <ExternalLink className="w-3 h-3" />
            </a>

            <div className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed font-light space-y-4 mb-6 select-text">
              {active.detail.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="bg-white/5 text-[10px] font-mono px-2.5 py-1 rounded-md text-[#D7E2EA]/60 border border-white/5 uppercase"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {active.badges.map((b) => (
                <span
                  key={b}
                  className="bg-[#B600A8]/10 text-[#D7E2EA]/70 text-[10px] font-mono px-2.5 py-1 rounded-md border border-[#B600A8]/20 uppercase"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-between items-center border-t border-white/5 pt-5">
              <div className="flex flex-wrap gap-2.5">
                <LinkRow repo={active.repo} />
                {active.cert && (
                  <a
                    href={active.cert}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border-2 border-[#D7E2EA] text-[11px] sm:text-xs font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 active:scale-95 transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-1.5"
                  >
                    <Award className="w-3.5 h-3.5" />
                    Certificate
                  </a>
                )}
              </div>
              <button
                onClick={() => setActive(null)}
                className="bg-[#B600A8] hover:bg-[#B600A8]/80 text-white font-medium uppercase text-xs tracking-widest px-6 py-3 rounded-full transition-all active:scale-95 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
