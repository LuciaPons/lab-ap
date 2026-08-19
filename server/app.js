import express from "express";
import { analyzeProblem } from "../services/gemini.js";

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Lab AP API funcionando",
  });
});

app.post("/api/analyze", async (req, res) => {
  const { query } = req.body;

  console.log("Query recibida:", query);

  if (!query?.trim()) {
    return res.status(400).json({
      error: "La consulta es obligatoria.",
    });
  }

  try {
    const problem = await analyzeProblem(query.trim());

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

    if (error.status === 429) {
      return res.status(429).json({
        error:
          "El servicio de análisis alcanzó temporalmente su límite de uso. Intentá nuevamente más tarde.",
      });
    }

    return res.status(500).json({
      error: "No fue posible analizar la consulta.",
    });
  }
});

export default app;
