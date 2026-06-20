# Ahmed Umer — AI & Web Developer Portfolio

A premium, industry-grade portfolio website and AI-powered recruitment assistant built by **Ahmed Umer**. Features a deeply interactive interface with custom 3D visuals, micro-animations, and a full-stack AI chatbot for recruiters.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion (Framer Motion)
- **Backend:** Express.js, Node.js
- **AI Chatbot:** Groq API (Llama 3.3 70B)
- **Icons:** Lucide React

---

## 📁 Project Structure

```
├── server.ts                # Express backend entry point (serves Vite in dev, static in prod)
├── /server
│   └── chatbot.ts           # AI recruitment chatbot with strict privacy guardrails
├── /src
│   ├── main.tsx             # DOM mount point
│   ├── App.tsx              # Central state engine, tab router, pricing calculator
│   ├── index.css            # Global styles & font imports
│   └── /components
│       ├── Hero.tsx         # Landing viewport with portrait, navbar, and magnet effect
│       ├── Marquee.tsx      # Infinite-scroll motion showcase
│       ├── About.tsx        # Scroll-reveal narrative section with 3D corner assets
│       ├── Services.tsx     # Services showcase on high-contrast white background
│       ├── Projects.tsx     # Sticky stacking project cards with scaling animations
│       ├── ProjectsList.tsx # Detailed project list page
│       ├── Certs.tsx        # Certifications page with PDF simulation overlays
│       ├── Education.tsx    # Academic timeline with institution nodes
│       ├── Chatbot.tsx      # AI recruiter chatbot interface
│       └── UI.tsx           # Reusable micro-interaction components (Magnet, FadeIn, AnimatedText)
```

---

## 💡 Key Features

- **Magnetic Mouse Effect** — Mouse-following pull effect on the Hero portrait
- **Character-by-Character Scroll Reveal** — Text animates from transparent to opaque as you scroll
- **Sticky Stacking Cards** — Project cards scale down as they scroll past the viewport
- **Interactive Pricing Calculator** — Recruiters can estimate freelance project costs and send quotes directly to the chatbot
- **AI Recruitment Chatbot** — Server-side LLM-powered bot with enforced privacy guardrails (phone/address are never exposed)

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or newer

### Installation

```bash
npm install
```

### Configure Environment Variables

Copy `.env.example` to `.env` and add your Groq API key:

```env
GROQ_API_KEY="gsk_your_actual_groq_api_key_here"
APP_URL="http://localhost:3000"
```

Get a free key from [console.groq.com](https://console.groq.com).

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 🔒 Privacy Guardrails

The AI chatbot enforces strict privacy rules at the server level:
- **Phone number** — Never disclosed. Users are directed to email.
- **Home address** — Only general region ("Faisalabad, Pakistan") is shared.
- **Contact** — Only `ahmedumeranwer@gmail.com` is provided.

---

## 📝 How to Customize

### Add a New Project
Edit the `RESUME_PROJECTS` array in `/src/components/ProjectsList.tsx`.

### Add a Certificate PDF
1. Place your PDF in `/public/`
2. Update the card in `/src/components/Certs.tsx` with `window.open('/your_file.pdf')`

---

## 📄 License

This project is proprietary. © Ahmed Umer. All rights reserved.
