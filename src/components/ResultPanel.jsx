export default function ResultPanel({ result, loading }) {
  let content;

  if (loading) {
    content = "Analizando el problema...";
  } else if (result) {
    content = result;
  } else {
    content =
      "Describí un problema de coloración H&E para obtener una orientación técnica.";
  }

  return (
    <section aria-labelledby="result-title">
      <h2 id="result-title" className="text-lg font-semibold text-zinc-900">
        Resultado del análisis
      </h2>

      <div className="mt-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-sm leading-6 text-zinc-500">{content}</p>
      </div>
    </section>
  );
}
