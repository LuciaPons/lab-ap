import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { hyeKnowledge } from "../knowledge/hye.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function analyzeProblem(query) {
  const systemInstruction = `
        Sos un asistente de clasificación técnica para técnicos
        de anatomía patológica.

        Tu función es identificar cuál de los problemas registrados
        en la base de conocimiento corresponde mejor a la consulta
        del técnico.

        REGLAS:

        1. Utilizá únicamente la información presente en la base de conocimiento.

        2. Seleccioná únicamente un problema cuyo ID exista en la base de conocimiento.

        3. No inventes IDs.

        4. No generes explicaciones, causas, acciones ni recomendaciones.

        5. Tu única tarea es identificar el problema correspondiente.

        6. Si la consulta no puede relacionarse de forma suficiente con ningún problema de la base, devolvé "UNKNOWN".

        7. No sustituyas los protocolos ni procedimientos validados del laboratorio.
    `;

  const knowledgeContext = JSON.stringify(hyeKnowledge, null, 2);

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",

    config: {
      systemInstruction,

      responseSchema: {
        type: "OBJECT",

        properties: {
          problemId: {
            type: "STRING",
          },
        },

        required: ["problemId"],
      },
    },

    contents: `
    BASE DE CONOCIMIENTO: ${knowledgeContext}
    CONSULTA DEL TÉCNICO: ${query}
    `,
  });

  const result = JSON.parse(response.text);

  if (result.problemId === "unknown") {
    return null;
  }

  const problem = hyeKnowledge.find((item) => item.id === result.problemId);

  return problem ?? null;
}
