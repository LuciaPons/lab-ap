export default function ProblemForm({
  query,
  setQuery,
  loading,
  formError,
  onSubmit,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
    flex flex-col gap-4
    "
    >
      <label
        htmlFor="problem"
        className="
      font-(family-name:--font-title)
      text-(--color-text-accent)
      text-base 
      font-medium "
      >
        ¿Qué problema observás?
      </label>

      <textarea
        id="problem"
        name="problem"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        aria-invalid={formError ? "true" : "false"}
        aria-describedby={formError ? "problem-error" : undefined}
        rows={6}
        placeholder="Ej: los núcleos se observan demasiado intensos y oscuros."
        className="
        min-h-40 w-full 
        resize-y 
        rounded-lg 
        border border-(--color-border) 
        bg-(--color-surface)
        px-4 py-3 
        text-sm
        text-(--color-text-accent)
        shadow-sm 
        outline-none 
        placeholder:text-(--color-text-muted)/60 focus:border-(--color-text-muted) 
        focus:ring-2 
        focus:ring-(--color-border)
        font-(family-name:--font-text)"
      />
      {formError && (
        <p
          id="problem-error"
          className="text-sm text-(--color-error)"
          role="alert"
        >
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
        w-full 
        rounded-lg 
        bg-(--color-primary)/80 
        px-4 py-3 
        text-base 
        font-(family-name:--font-title)
        text-(--color-surface) 
        transition-all duration-300 
        hover:bg-(--color-primary) 
        hover:scale-102
        focus:outline-none 
        focus:ring-2 
        focus:ring-(--color-primary) 
        focus:ring-offset-2"
      >
        {loading ? "Analizando..." : "Analizar problema"}
      </button>
    </form>
  );
}
