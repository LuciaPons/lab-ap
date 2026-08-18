import ResultList from "./ResultList";

export default function ResultPanel({ result, loading, error }) {
  return (
    <section aria-labelledby="result-title">
      <h2 id="result-title" className="text-lg font-semibold text-zinc-900">
        Resultado del análisis
      </h2>

      <div className="mt-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        {error ? (
          <p className="text-sm leading-6 text-red-700">{error}</p>
        ) : loading ? (
          <p className="text-sm leading-6 text-zinc-500">
            Analizando el problema...
          </p>
        ) : result ? (
          <div>
            <h3 className="text-xl font-semibold text-zinc-900">
              {result.problem}
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              {result.observation}
            </p>
            <div className="mt-6 space-y-6">
              <ResultList
                title="Posibles causas"
                items={result.possible_causes}
              />

              <ResultList
                title="Qué verificar"
                items={result.verification_steps}
              />

              <ResultList
                title="Acciones posibles"
                items={result.possible_actions}
              />
              <ResultList title="Fuentes" items={result.sources} />
            </div>
            <div className="mt-6 rounded-md bg-zinc-100 p-3">
              <p className="text-xs leading-5 text-zinc-600">{result.notes}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm leading-6 text-zinc-500">
            Describí un problema de coloración H&E para obtener una orientación
            técnica.
          </p>
        )}
      </div>
    </section>
  );
}
