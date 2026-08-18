import { useState } from "react";
import Disclaimer from "./components/Disclaimer";
import Header from "./components/Header";
import ProblemForm from "./components/ProblemForm";
import ResultPanel from "./components/ResultPanel";

function App() {
  const [query, setQuery] = useState("");

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
        <ProblemForm query={query} setQuery={setQuery} />
        <ResultPanel />
        <Disclaimer />
      </main>
    </div>
  );
}

export default App;
