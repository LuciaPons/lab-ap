import { useState } from "react";
import Disclaimer from "./components/Disclaimer";
import Header from "./components/Header";
import ProblemForm from "./components/ProblemForm";
import ResultPanel from "./components/ResultPanel";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(query) {
    setResult(null);
    setError(null);

    if (!query.trim()) {
      setError("Describí el problema antes de analizarlo.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });

      const data = await response.json();

      console.log("Respuesta del servidor:", data);

      if (!response.ok) {
        throw new Error(data.error || "No fue posible analizar la consulta.");
      }

      if (data.found) {
        setResult(data.problem);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("No fue posible comunicarse con el servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main
        className="
      mx-auto px-4 py-8 
      flex flex-col
      gap-8
      w-full max-w-2xl"
      >
        <ProblemForm
          query={query}
          setQuery={setQuery}
          loading={loading}
          onSubmit={handleSubmit}
        />
        <ResultPanel result={result} loading={loading} error={error} />
        <Disclaimer />
      </main>
    </div>
  );
}

export default App;
