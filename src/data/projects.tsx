import type { ReactNode } from "react";
import { HeartPulse, ScanSearch, Database, BookOpenText } from "lucide-react";
import { asset } from "../lib/asset";

export interface Project {
  id: string;
  title: string;
  category: string;
  icon: ReactNode;
  summary: string;
  detail: string[];
  tags: string[];
  /** Repo-relative paths under public/projects/<id>/ */
  shots: string[];
  /** Repo-relative path under public/videos/. Omit for a "coming soon" slot. */
  video?: string;
  repo?: string;
  fyp?: boolean;
}

const shot = (id: string, file: string) => asset(`projects/${id}/${file}`);

export const PROJECTS: Project[] = [
  {
    id: "medical-research-assistant",
    title: "Medical Research Assistant",
    category: "Final Year Project",
    fyp: true,
    icon: <HeartPulse className="w-6 h-6 text-pink-500" />,
    summary:
      "Ask a biomedical question and get a GRADE-scored clinical evidence report synthesised from 35M+ PubMed articles, streamed live.",
    detail: [
      "A 4-node LangGraph pipeline queries PubMed through NCBI E-utilities, classifies every article by study design, assigns a GRADE-style evidence badge, and streams an evidence matrix, per-article cards, and a narrative synthesis to the browser over Server-Sent Events. Typical run finishes in under two minutes.",
      "The graph pauses for a human-in-the-loop email step, then delivers the package over SMTP. Finished reports are saved to a library that can be viewed, re-emailed, exported as Markdown, or interrogated with RAG chat over Gemini embeddings. A Groq to Gemini to OpenRouter fallback chain keeps it running when one provider is out of quota.",
      "The frontend is React with a Three.js cinematic background, and every agent step is visible in the UI as it happens.",
    ],
    tags: ["LangGraph", "FastAPI", "PubMed E-utilities", "SSE Streaming", "RAG", "Three.js", "React"],
    // Screenshots dropped in favour of the demo. The poster frame from the
    // video doubles as the card image.
    shots: [asset("videos/mra.jpg")],
    video: asset("videos/mra.mp4"),
  },
  {
    id: "aiverse",
    title: "AIverse",
    category: "Private AI Content Toolkit",
    icon: <ScanSearch className="w-6 h-6 text-emerald-500" />,
    summary:
      "Self-hosted toolkit that scores text paragraph by paragraph for AI-likeness, scans it for web plagiarism, then rewrites it on a 1-7 humanize dial.",
    detail: [
      "Three tools over any pasted text or uploaded file: a detection checker that blends statistical heuristics with an LLM rubric for a per-block score, a best-effort originality scan against the web via DuckDuckGo that needs no search API key, and a rewriter that streams a rewritten version block by block with DOCX and PDF export.",
      "The RAG chatbot answers questions about your own documents through FAISS vector search, streaming tokens and the source chunks it used so every answer is grounded. Files, manifests, and the vector index all live under backend/data on your disk, so nothing leaves the machine.",
      "Six LLM providers are chained at runtime with automatic failover, so it works on whatever key you have. Backend is FastAPI with LangGraph on Python 3.12; frontend is Next.js 16. 72 pytest tests, all offline.",
    ],
    tags: ["FastAPI", "LangGraph", "FAISS", "Next.js 16", "RAG", "Provider Failover", "Python 3.12"],
    shots: [
      shot("aiverse", "01-landing.png"),
      shot("aiverse", "02-detect.png"),
      shot("aiverse", "03-plagiarism.png"),
      shot("aiverse", "04-humanize.png"),
      shot("aiverse", "05-chat.png"),
      shot("aiverse", "06-detector.png"),
      shot("aiverse", "07-humanizer.png"),
    ],
    video: asset("videos/aiverse.mp4"),
    repo: "https://github.com/ahmedume/AIVerse",
  },
  {
    id: "datasentry",
    title: "DataSentry",
    category: "Dataset Intelligence Platform",
    icon: <Database className="w-6 h-6 text-blue-500" />,
    summary:
      "Upload a CSV and get column profiling, a 12-check quality audit, AI insights, one-click cleaning, drift detection, and printable PDF reports.",
    detail: [
      "Every upload is profiled on arrival: column types, null rates, distributions, cardinality, skew, and outliers. A 12-check audit surfaces missing values, duplicates, type mismatches, IQR outliers, and correlation warnings, while an LLM explains what each column actually means and flags the risks.",
      "Cleaning recommendations are generated, not guessed: select the transforms you want, apply them in one click, download the cleaned CSV, and get a before/after diff. Reports render to PDF with EDA charts, the quality table, AI insights, and the cleaning diff.",
      "Drift is measured with PSI, KS, and TVD computed in pure NumPy and Pandas. Celery Beat runs scheduled checks and fires Slack and email alerts through HMAC-signed webhooks. Also includes JWT and API-key auth, team RBAC, an immutable audit log, a model registry, and a 6-service Docker Compose stack. 40+ offline-safe tests.",
    ],
    tags: ["FastAPI", "PostgreSQL", "Celery", "Redis", "scikit-learn", "Drift Detection", "Docker"],
    shots: [
      shot("datasentry", "01-landing.png"),
      shot("datasentry", "02-overview.png"),
      shot("datasentry", "03-quality.png"),
      shot("datasentry", "04-insights.png"),
      shot("datasentry", "05-charts.png"),
      shot("datasentry", "06-monitor.png"),
      shot("datasentry", "07-training.png"),
    ],
    // No `video` yet: the card renders the "demo coming soon" slot. To add one,
    // compress to ~12 MB and set video: asset("videos/datasentry.mp4").
    repo: "https://github.com/ahmedume/DataSentry",
  },
  {
    id: "booksie",
    title: "Booksie",
    category: "AI Study Companion",
    icon: <BookOpenText className="w-6 h-6 text-amber-500" />,
    summary:
      "Upload a PDF, get chapter-by-chapter summaries and a full-book overview, then ask questions about it in plain language.",
    detail: [
      "PDFs up to 50 MB are parsed and split into chapters automatically, with async status tracking so the UI never blocks. Generate a summary for any single chapter, cached after the first run, or a full-book overview that samples across the whole text.",
      "Q&A is retrieval-grounded: answers come only from the uploaded document, so a question about chapter 3 cannot be answered from a hallucinated memory. Auth is email and password with bcrypt hashing and JWT sessions, and every user's library is fully isolated in SQLite via Prisma.",
      "Frontend is React 19 and Tailwind on a warm, cinematic library theme with Fraunces and Manrope typography. All inference goes through Groq's llama-3.3-70b.",
    ],
    tags: ["Next.js 16", "React 19", "Prisma", "SQLite", "JWT Auth", "Groq", "RAG"],
    shots: [
      shot("booksie", "01-landing.png"),
      shot("booksie", "02-login.png"),
      shot("booksie", "03-register.png"),
    ],
    // No `video` yet: the card renders the "demo coming soon" slot. To add one,
    // compress to ~12 MB and set video: asset("videos/booksie.mp4").
    repo: "https://github.com/ahmedume/Booksie",
  },
];
