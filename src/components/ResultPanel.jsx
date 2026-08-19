import Loader from "./Loader";
import ResultList from "./ResultList";

export default function ResultPanel({ result, loading, error }) {
  return (
    <section aria-labelledby="result-title">
      <h2
        id="result-title"
        className="
      font-(family-name:--font-title)
      text-(--color-text-accent)
      text-base font-medium"
      >
        Resultado del análisis:
      </h2>

      <div
        className="
      mt-3 
      rounded-lg 
      border border-(--color-border) 
      bg-(--color-surface)
      p-4 
      shadow-sm"
      >
        {error ? (
          <p className="text-sm font-(family-name:--font-text) font-medium leading-6 text-(--color-error)">
            {error}
          </p>
        ) : loading ? (
          <Loader />
        ) : result ? (
          <div>
            <h3
              className="text-xl font-(family-name:--font-title)
              text-(--color-text-accent) font-semibold"
            >
              {result.problem}
            </h3>
            <p
              className="mt-3 text-sm leading-6
            font-(family-name:--font-text) text-(--color-text-muted)"
            >
              {result.observation}
            </p>
            <div className="mt-6 space-y-6 font-(family-name:--font-text)">
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
            <div className="mt-6 rounded-md bg-(--color-primary)/15 p-3">
              <p className="text-xs leading-5 text-(--color-text-muted) font-(family-name:--font-text)">
                {result.notes}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm leading-6 text-(--color-text-muted) font-(family-name:--font-text)">
            Describí un problema de coloración H&E para obtener una orientación
            técnica.
          </p>
        )}
      </div>
    </section>
  );
}
