# My Portfolio

I'm an AI Developer focused on building practical, production-ready AI systems, automation tools, and web applications. This is my full-stack portfolio — built with React 19, Express, and Vite. It includes a Groq-powered AI chatbot that can answer questions about my skills, projects, certifications, and background.

**Contact:** [ahmedumeranwer@gmail.com](mailto:ahmedumeranwer@gmail.com)  
**GitHub:** [@ahmedume](https://github.com/ahmedume)  
**LinkedIn:** [Ahmed Umer Anwer](https://www.linkedin.com/in/ahmedumeranwer)

---

## Tech Stack

| Layer        | Technology                                                   |
| ------------ | ------------------------------------------------------------ |
| Frontend     | React 19, TypeScript, Vite, Tailwind CSS v4, Motion (Framer Motion), Lucide Icons |
| Backend      | Express.js, TypeScript, esbuild (bundling)                   |
| AI Chat      | Groq API (llama-3.3-70b-versatile) with custom system prompt |
| Assets       | Local images (public/projects/), PDF certs (public/certs/) |

---

## Features

### Hero Section
- Animated "hi, i'm ahmed" heading with glow text effect
- Portrait with magnet hover effect
- GitHub / LinkedIn social links

### About Section
- Decorative 3D corner assets
- Animated text reveals
- Contact modal with cost estimation parameters

### Projects (4 Projects)

| Project                  | Year | Description |
| ------------------------ | ---- | ----------- |
| Medical Research Assistant | 2025 | Multi-agent health system using LangGraph React Agents with live PubMed and FDA database integration. Final Year Project. |
| MedLens                  | 2026 | Clinical journal auditing system that crawls PubMed, matches metadata, and generates structured trust scores. |
| Virtual Try On           | 2025 | Browser-first virtual cloth try-on using computer vision and MediaPipe for digital apparel styling. |
| Voice Intelligence       | 2026 | Dual-direction audio intelligence dashboard with speech-to-text, voice synthesis, and real-time noise gating. |

Each project has a detail modal with full description, tags, and screenshots.

### Certifications (10)

| Certification                                     | Issuer                  | Year |
| ------------------------------------------------- | ----------------------- | ---- |
| Introduction to Model Context Protocol            | Anthropic               | 2026 |
| Introduction to LangChain                         | LangChain Academy       | 2026 |
| n8n Course Level 1                                | n8n                     | 2025 |
| Cyber Security Essentials                         | Cisco Networking Academy| 2024 |
| ICASE-2025 (STEAM Education Conference)           | University of Faisalabad| 2025 |
| Innovative Pakistan Participant                   | University of Faisalabad| 2026 |
| Introduction to Modern AI                         | Cisco Networking Academy| 2026 |
| Python Essentials 1                               | Cisco Networking Academy| 2026 |
| Python Essentials 2                               | Cisco Networking Academy| 2026 |
| Fundamentals of Digital Marketing                 | Google Digital Garage   | 2022 |

Each cert card opens the PDF in a new tab.

### Education

| Institution                | Degree                        | Duration    |
| -------------------------- | ----------------------------- | ----------- |
| The University of Faisalabad | BS Artificial Intelligence   | 2022 – 2026 |
| Concordia College          | Intermediate in Computer Science (ICS) | 2020 – 2022 |
| Kohinoor Grammar School    | Matric (Secondary School Certificate) | 2018 – 2020 |

### AI Chatbot ("Get to Know Me")
- Groq-powered conversational agent
- Pre-configured with my CV data — projects, skills, certifications, hackathons, experience
- Starter prompts for quick questions
- Data safety notice with contact email fallback

### Navigation
- Fixed top nav bar with glass morphism
- Tabs: Home, All Projects, Certs, Education, About Me
- Active tab highlighting with gradient

---

## Project Structure

```
ahmed-umer-portfolio/
├── public/
│   ├── cv.pdf
│   ├── certs/                  # 10 certification PDFs
│   └── projects/               # Project screenshots
│       ├── fitcheck/
│       ├── medical-research-assistant/
│       ├── medlens/
│       └── voice-intelligence/
├── src/
│   ├── components/
│   │   ├── Hero.tsx            # Hero section, logo, portrait, socials
│   │   ├── About.tsx           # About section with contact modal
│   │   ├── Projects.tsx        # Homepage project cards
│   │   ├── ProjectsList.tsx    # All-projects grid + detail modal
│   │   ├── Certs.tsx           # Certifications grid
│   │   ├── Education.tsx       # Education timeline
│   │   ├── Chatbot.tsx         # AI chatbot (Get to Know Me)
│   │   ├── Services.tsx        # Services section
│   │   ├── Marquee.tsx         # Marquee ticker
│   │   └── UI.tsx              # Reusable components (FadeIn, Magnet, AnimatedText)
│   ├── App.tsx                 # Main layout, navigation, tab routing
│   ├── index.css               # Global styles, Tailwind, keyframes
│   └── main.tsx                # Entry point
├── server/
│   └── chatbot.ts              # Groq API chat handler + system prompt
├── server.ts                   # Express server (dev + prod modes)
├── .env.example                # Environment variable template
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- A Groq API key ([console.groq.com](https://console.groq.com))

### Installation

```bash
git clone https://github.com/ahmedume/ahmed-umer-portfolio.git
cd ahmed-umer-portfolio
npm install
```

### Environment Setup

Copy the example env file and add your Groq API key:

```bash
cp .env.example .env
```

Edit `.env`:

```env
GROQ_API_KEY="gsk_your_actual_groq_api_key_here"
APP_URL="http://localhost:3000"
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000) with hot module replacement.

### Production Build

```bash
npm run build
```

Builds the Vite frontend and bundles the Express server into `dist/`.

### Production Start

```bash
npm start
```

Serves the built app on port 3000.

---

## API Endpoints

| Endpoint     | Method | Description                    |
| ------------ | ------ | ------------------------------ |
| `/api/chat`  | POST   | Send a message to the AI chatbot |
| `/api/health`| GET    | Health check                   |

### POST /api/chat

**Request:**
```json
{
  "message": "What projects have you worked on?",
  "history": [
    { "role": "user", "text": "..." },
    { "role": "model", "text": "..." }
  ]
}
```

**Response:**
```json
{
  "text": "I have worked on...",
  "engine": "groq"
}
```

---

## Deployment

The app is a full-stack Express server that serves both the API and the built frontend.

### Option 1: VPS (DigitalOcean, Linode, etc.)
```bash
npm run build
# Copy dist/, package.json, node_modules/, .env to server
npm start
```
Use PM2 or systemd for process management.

### Option 2: Railway / Render
- Connect GitHub repo
- Build command: `npm run build`
- Start command: `node dist/server.cjs`
- Set `GROQ_API_KEY` and `APP_URL` in environment secrets

### Option 3: Docker
Create a multi-stage Dockerfile that builds the frontend, bundles the server, and runs with a slim Node image.

---

## Environment Variables

| Variable       | Required | Description                              |
| -------------- | -------- | ---------------------------------------- |
| `GROQ_API_KEY` | Yes      | Groq API key for the chatbot             |
| `APP_URL`      | No       | App URL (defaults to http://localhost:3000) |
| `NODE_ENV`     | No       | Set to "production" for production mode  |
| `DISABLE_HMR`  | No       | Set to "true" to disable HMR             |

---

## License

MIT
