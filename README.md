# Ahmed Umer — Portfolio

Personal portfolio: projects, hackathons, certifications, and education. React 19 + Vite + Tailwind v4, deployed to GitHub Pages by GitHub Actions.

**Contact:** [ahmedumeranwer@gmail.com](mailto:ahmedumeranwer@gmail.com) · **GitHub:** [@ahmedume](https://github.com/ahmedume) · **LinkedIn:** [Ahmed Umer Anwer](https://www.linkedin.com/in/ahmedumeranwer)

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite 6, Tailwind CSS v4, Motion, Lucide |
| Styling pipeline | `src/index.css` → Tailwind CLI → `src/tailwind.css` (generated, committed) |
| Backend | Express + `server.ts` — **local development only**, not deployed |
| Hosting | GitHub Pages (static), deployed by `.github/workflows/deploy-pages.yml` |

The site is a static build. There is no API in production; the Groq chat endpoint is parked (see Chatbot).

---

## Commands

```bash
npm install

npm run dev           # Express + Vite dev server on :3000, HMR, serves /api/*
npm run build:static  # Tailwind + Vite -> dist/ (what Pages deploys)
npm run build         # build:static + esbuild bundle of the Express server
npm start             # serve dist/ via Express (local, NODE_ENV=production)
npm run lint          # tsc --noEmit
npm run check         # lint + build:static
```

Node 20+ required (CI uses 22).

---

## Deploying

Pushes to `main` run two workflows.

**`ci.yml`** — on every push and PR: install, type check, static build, then
two assertions that catch silent production failures:

- greps `dist/index.html` for the `/My-Portfolio/` base path, so a regression in
  `vite.config.ts` fails the build rather than 404ing every asset
- scans `dist/` for API key shapes and env var names. The deployed site is fully
  static, so **no credential may ever appear in `dist/`**

**`deploy-pages.yml`** — on push to `main`: build, upload the artifact, deploy
with the `github-pages` environment. Serial concurrency, so a release is never
cancelled mid-flight.

One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

### Base path

`vite.config.ts` sets `base: '/My-Portfolio/'` for builds and `/` for the dev
server. Every public asset path goes through `asset()` in `src/lib/asset.ts`,
which prefixes `import.meta.env.BASE_URL`. **Use `asset()` for any new path
under `public/`** — a hardcoded `/projects/...` will 404 on Pages.

If the repo is ever renamed, or a custom domain is added, change `PAGES_BASE` in
`vite.config.ts` and the assertion string in `.github/workflows/ci.yml`.

---

## Adding a project

Edit `src/data/projects.tsx`. That single file drives both the home sticky
cards and the full project list — there is no second copy to keep in sync.

```tsx
{
  id: "my-project",              // folder under public/projects/
  title: "My Project",
  category: "Short Descriptor",
  icon: <Rocket className="w-6 h-6 text-pink-500" />,
  summary: "One or two sentences. This is the card blurb.",
  detail: ["Paragraph.", "Paragraph."],
  tags: ["React", "FastAPI"],
  shots: [shot("my-project", "01-landing.png")],
  video: asset("videos/my-project.mp4"),   // omit -> "coming soon" slot
  repo: "https://github.com/ahmedume/my-project",
  fyp: true,                                  // optional badge
}
```

Notes:

- `shots` drives the gallery, which only renders when there is more than one
  image. A single-shot project gets a full-width banner on the home page.
- Omit `video` and the card shows a "demo video coming soon" placeholder rather
  than a broken player.
- Video posters are generated from the video basename. `videos/x.mp4` needs
  `videos/x.jpg` beside it, or the poster 404s.

### Demo video sizing

Commit videos at roughly 12 MB or less. Anything larger makes the repo heavy and
the page slow. The current set was produced with:

```bash
ffmpeg -i input.mp4 -vf scale=1920:-2 \
  -c:v libx264 -preset slow -profile:v high -pix_fmt yuv420p \
  -b:v 1650k -maxrate 1900k -bufsize 3800k \
  -c:a aac -b:a 64k -ac 1 -movflags +faststart out.mp4
ffmpeg -ss 3 -i out.mp4 -frames:v 1 -vf scale=1280:-2 -q:v 4 out.jpg
```

`-movflags +faststart` matters: without it the browser cannot begin playback
until the file has fully downloaded.

Videos mount only after a click, so page weight is unaffected by their size.

---

## Structure

```
├── public/
│   ├── certs/            9 certification PDFs
│   ├── decor/            hero and about corner art
│   ├── projects/<id>/    project screenshots
│   └── videos/           demo videos + poster frames
├── src/
│   ├── components/       UI sections
│   ├── data/             projects.tsx, hackathons.tsx  <- edit these
│   ├── lib/              asset.ts (base-path helper), contact.ts
│   └── App.tsx           layout, nav, tab routing
├── server/chatbot.ts     parked Groq handler
├── server.ts             Express app (local dev only)
├── .github/workflows/    ci.yml, deploy-pages.yml
└── vite.config.ts        Tailwind input + Pages base path
```

### Generated files

`src/tailwind.css` is a build artifact, committed because the Vite Tailwind
plugin is not used. It is regenerated by `npm run build:css`, which `build` and
`build:static` both run first. **Never hand-edit it, and never add a Tailwind
class without rebuilding** — a missing class means silently unstyled markup.

---

## Chatbot

`src/components/Chatbot.tsx` and `server/chatbot.ts` are parked and unused; the
import is commented out in `App.tsx`. They are not part of the deployed site.

The existing handler is not RAG. It sends a hardcoded CV prompt to Groq, has no
retrieval, no rate limit, and no cap on conversation history. Wiring it back up
means indexing `cv.pdf` and the project data and retrieving before answering.

---

## Privacy

`ahmedumeranwer@gmail.com` is public by design and lives in `src/lib/contact.ts`.
No phone number, address, or other personal identifier is in this repository.
