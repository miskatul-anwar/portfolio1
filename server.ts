import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Proxy for LeetCode (to avoid CORS issues)
  app.get("/api/leetcode/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("LeetCode Proxy Error:", error);
      res.status(500).json({ status: "error", message: "Failed to fetch LeetCode data" });
    }
  });

  // API Proxy for Codeforces
  app.get("/api/codeforces/info/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ status: "FAILED", message: "Failed to fetch Codeforces info" });
    }
  });

  app.get("/api/codeforces/status/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ status: "FAILED", message: "Failed to fetch Codeforces status" });
    }
  });

  app.get("/api/codeforces/rating/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const response = await fetch(`https://codeforces.com/api/user.rating?handle=${username}`);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ status: "FAILED", message: "Failed to fetch Codeforces rating" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
