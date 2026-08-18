import { analyzeProblem } from "./services/gemini.js";

const query = "El microscopio no enciende.";

const result = await analyzeProblem(query);

console.log(result);
