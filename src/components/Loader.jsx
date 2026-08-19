export default function Loader() {
  return (
    <div
      className="
      flex flex-row 
      items-center justify-start
      gap-3 py-2"
      role="status"
      aria-live="polite"
    >
      <div
        className="
        size-7 
        animate-spin 
        rounded-full 
        border-4 border-(--color-border) border-t-(--color-secondary)"
        aria-hidden="true"
      />
      <div
        className="
      flex flex-col
      justtify-start"
      >
        <p
          className="
      text-sm 
      text-(--color-text-muted)
      font-(family-name:--font-text)
      leading-6"
        >
          Analizando el problema...
        </p>
        <p
          className="
      text-xs
      text-(--color-text-muted)
      font-(family-name:--font-text)"
        >
          Puede tardar unos segundos.
        </p>
      </div>
    </div>
  );
}
