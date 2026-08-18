import { analyzeProblem } from "./services/gemini.js";

const query = "Los nucleos se ven oscuros";

const result = await analyzeProblem(query);

console.log(result);
