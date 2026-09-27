import type { ReactNode } from "react";
import { Orbit, Boxes } from "lucide-react";
import { asset } from "../lib/asset";

export interface Hackathon {
  id: string;
  title: string;
  event: string;
  eventUrl?: string;
  year: string;
  icon: ReactNode;
  summary: string;
  detail: string[];
  tags: string[];
  badges: string[];
  /** Repo-relative path under public/certs/. */
  cert?: string;
  /** Repo-relative path under public/projects/<id>/ */
  shot?: string;
  /** Repo-relative path under public/videos/. */
  video?: string;
  repo?: string;
}

export const HACKATHONS: Hackathon[] = [
  {
    id: "genesis",
    title: "GENESIS.EXE",
    event: "3D Websites Hackathon",
    eventUrl: "https://3d-websites-hackathon.devpost.com/",
    year: "Devpost 2026",
    icon: <Orbit className="w-6 h-6 text-indigo-400" />,
    summary:
      "13.8 billion years in one scroll: a scroll-driven WebGL journey from the Big Bang to you, built with React Three Fiber.",
    detail: [
      "One continuous scroll equals cosmic time. A damped camera rig follows a single path through nine epochs, each with its own scene, fog, exposure, and bloom grade, cross-faded inside a 6% transition band. A persistent WebGL world plays the story: the singularity ignites, spacetime inflates, quark soup cools into matter, first light breaks free, galaxies assemble, a supernova seeds the elements, a black hole bends light at the event horizon, and the camera arrives home at an ordinary blue planet.",
      "Everything is static and client-only: no backend, no accounts, no network calls, so it deploys to any static host. A live Cosmic Clock HUD replaces the scrollbar metaphor, clickable cosmology fact cards explain each epoch, and a free-explore Observatory mode orbits every scene independently.",
      "A rolling-FPS quality governor starts at MEDIUM, upgrades capable machines after three good seconds, and steps down one-way when the frame rate drops. prefers-reduced-motion is honoured, the canvas is aria-hidden with all narrative content in accessible DOM, and audio is strictly opt-in after a user gesture. Zero allocations in the render loop, and per-frame values bypass React state entirely.",
    ],
    tags: ["React Three Fiber", "Three.js", "WebGL", "GLSL Shaders", "Postprocessing", "Zustand", "Vite"],
    badges: ["X Hackathons Level 2", "Silver Hackathon"],
    shot: asset("projects/genesis/thumbnail.webp"),
    video: asset("videos/genesis.mp4"),
    repo: "https://github.com/ahmedume/GENESIS",
  },
  {
    id: "google-adk",
    title: "Agent Development Kit",
    event: "Agent Development Kit Hackathon with Google Cloud",
    eventUrl: "https://devpost.com/",
    year: "Devpost 2025",
    icon: <Boxes className="w-6 h-6 text-sky-400" />,
    summary:
      "A multi-agent AI system built on Google's Agent Development Kit, competing among 10,364 global participants for a $50,000 prize pool.",
    detail: [
      "Built a multi-agent AI system on Google's Agent Development Kit, where specialised agents split the work and hand off to each other rather than one prompt doing everything.",
      "Built and submitted against a global field of 10,364 participants competing for a $50,000 prize pool.",
    ],
    tags: ["Google ADK", "Multi-Agent Systems", "LLM Orchestration"],
    badges: ["Generalist", "X Hackathons Level 1", "First Online Hackathon"],
    cert: asset("certs/hackathon google adk.pdf"),
  },
];
