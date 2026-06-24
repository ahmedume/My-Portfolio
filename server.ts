import express from "express";
import path from "path";
import { chatHandler } from "./server/chatbot.ts";
import dotenv from "dotenv";

dotenv.config();

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});
process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
});

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  console.log(`Starting server, NODE_ENV=${process.env.NODE_ENV}, PORT=${PORT}`);

  app.use(express.json());

  app.post("/api/chat", chatHandler);

  app.get("/api/health", (req, res) => {
    res.json({ status: "healthy" });
  });

  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite dev middleware...");
    const { createServer: createViteServer } = await import("vite");
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
  process.exit(1);
});
