export default function ProblemForm({ query, setQuery }) {
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="problem" className="text-base font-medium text-zinc-900">
        ¿Qué problema observás?
      </label>

      <textarea
        id="problem"
        name="problem"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        rows="6"
        placeholder="Ej.: los núcleos se observan demasiado intensos y oscuros."
        className="min-h-40 w-full resize-y rounded-lg border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
      >
        Analizar problema
      </button>
    </form>
  );
}
