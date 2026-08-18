export default function ResultList({ title, items }) {
  return (
    <div>
      <h4 className="text-base font-semibold text-zinc-900">{title}</h4>

      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-zinc-700">
            <span aria-hidden="true">• </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
