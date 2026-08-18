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

  function handleSubmit(query) {
    setResult(null);
    setError(null);

    if (!query.trim()) {
      setError("Describí el problema antes de analizarlo.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setResult("Análisis de prueba completado.");
      setLoading(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-zinc-100">
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
