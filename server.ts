import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { chatHandler } from "./server/chatbot.ts";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API Endpoints
  app.post("/api/chat", chatHandler);

  app.get("/api/health", (req, res) => {
    res.json({ status: "healthy" });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite dev middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started, listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Critical error starting Express + Vite server:", error);
});
