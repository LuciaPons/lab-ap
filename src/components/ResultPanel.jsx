export default function ResultPanel({ result, loading, error }) {
  let content;
  let contentClassName;

  if (error) {
    content = error;
    contentClassName = "text-sm leading-6 text-red-700";
  } else if (loading) {
    content = "Analizando el problema...";
    contentClassName = "text-sm leading-6 text-zinc-500";
  } else if (result) {
    content = result;
    contentClassName = "text-sm leading-6 text-zinc-900";
  } else {
    content =
      "Describí un problema de coloración H&E para obtener una orientación técnica.";
    contentClassName = "text-sm leading-6 text-zinc-500";
  }

  return (
    <section aria-labelledby="result-title">
      <h2 id="result-title" className="text-lg font-semibold text-zinc-900">
        Resultado del análisis
      </h2>

      <div className="mt-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <p className={contentClassName}>{content}</p>
      </div>
    </section>
  );
}
