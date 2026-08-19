import WarningIcon from "../assets/icons/warning-icon.svg";

export default function Disclaimer() {
  return (
    <aside
      aria-label="Aviso sobre el uso de la herramienta"
      className="
      rounded-lg 
      border border-(--color-border) 
      bg-(--color-surface) 
      p-4
      flex gap-3
      justify-center
      items-center"
    >
      <img src={WarningIcon} alt="" className="w-6 h-6 " />
      <p className="text-xs leading-5 font-(family-name:--font-text) text-(--color-text-muted)">
        Esta herramienta proporciona orientación técnica y no sustituye los
        protocolos validados ni los procedimientos establecidos por cada
        laboratorio.
      </p>
    </aside>
  );
}
