import { analyzeProblem } from "../services/gemini.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido.",
    });
  }

  const { query } = req.body;

  console.log("Query recibida:", query);

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
}
