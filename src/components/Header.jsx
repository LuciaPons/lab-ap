import Icon from "../assets/icons/flask-icon.svg";

export default function Header() {
  return (
    <header className="p-2 w-full max-w-2xl flex flex-col justify-center items-center">
      <div
        className="
        bg-(--color-surface)
        border border-(--color-border)  
        rounded-lg
        p-2
        flex gap-1
        justify-center items-center
        shadow-md"
      >
        <div className="w-fit h-full p-1">
          <img src={Icon} alt="" className="w-8 h-8 " />
        </div>
        <div
          className="
        flex flex-col 
        justify-start md:justify-center 
        md:items-center mx-2"
        >
          <h1
            className="
          text-2xl 
          font-(family-name:--font-title)
          text-(--color-text-accent)"
          >
            Labsistente
          </h1>
          <p
            className="
            mt-1 
            text-xs 
            text-(--color-text-muted) 
            text-start text-wrap
            font-(family-name:--font-text)"
          >
            Asistente de troubleshooting para problemas de coloración H&E
          </p>
        </div>
      </div>
    </header>
  );
}
