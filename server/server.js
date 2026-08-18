import express from "express";
import { analyzeProblem } from "../services/gemini.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Lab AP API funcionando",
  });
});

app.post("/api/analyze", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({
      error: "La consulta es obligatoria.",
    });
  }

  try {
    const problem = await analyzeProblem(query);

    if (!problem) {
      return res.json({
        found: false,
        message:
          "No se encontró un problema relacionado en la base de conocimiento.",
      });
    }

    return res.json({
      found: true,
      problem,
    });
  } catch (error) {
    console.error("Error analyzing problem:", error);

    return res.status(500).json({
      error: "No fue posible analizar la consulta.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Lab AP API running on http://localhost:${PORT}`);
});
