export const hyeKnowledge = [
  {
    id: "HYE-001",
    problem: "Hematoxilina pálida",
    observation:
      "La tinción presenta una intensidad menor a la esperada en los núcleos.",
    possible_causes: [
      "Hematoxilina deteriorada",
      "Tiempo de tinción insuficiente",
      "Diferenciación excesiva",
      "Grosor del corte",
      "Factores relacionados con el procesamiento/fijación",
    ],
    verification_steps: [
      "Fecha del último cambio de hematoxilina",
      "Estado del colorante",
      "Presencia de residuos o precipitados",
      "Aspecto y tonalidad del colorante",
      "Marca del colorante",
      "Lote del colorante",
      "Tiempo de tinción",
      "Tiempo de diferenciación",
      "Grosor del corte demasiado fino",
      "Antecedentes de cambios recientes en el procesamiento",
    ],
    possible_actions: [
      "Revisar y ajustar el tiempo de tinción",
      "Revisar y ajustar el tiempo de diferenciación",
      "Reemplazar la hematoxilina si presenta signos de deterioro",
      "Ajustar el grosor de los cortes",
      "Comparar el resultado con un control conocido",
      "Verificar otros factores del procesamiento cuando corresponda",
    ],
    sources: [
      "College of American Pathologists (CAP) - H&E Troubleshooting Guide.",
      "Northwest University - The Science and Application of Hematoxylin and Eosin Staining.",
    ],
    notes:
      "Esta información constituye orientación técnica y no sustituye los protocolos validados del laboratorio.",
  },
  {
    id: "HYE-002",
    problem: "Eosina pálida",
    observation:
      "La tinción presenta una intensidad menor a la esperada en los citoplasmas.",
    possible_causes: [
      "Eosina deteriorada",
      "Tiempo de tinción insuficiente",
      "Diferenciación excesiva",
      "Aumento del pH de la solución colorante",
      "Grosor del corte demasiado fino",
      "Contaminación con el agente diferenciador de Hematoxilina (bluing). Si aplica",
      "Factores relacionados con el procesamiento/fijación",
    ],
    verification_steps: [
      "Fecha del último cambio de eosina",
      "Estado del colorante",
      "pH del colorante, debe encontrarse entre 4.6 - 5.0",
      "Presencia de residuos o precipitados",
      "Aspecto y tonalidad del colorante",
      "Marca del colorante",
      "Lote del colorante",
      "Tiempo de tinción",
      "Tiempo de diferenciación",
      "Grosor del corte",
      "Antecedentes de cambios recientes en el procesamiento",
    ],
    possible_actions: [
      "Revisar y ajustar el tiempo de tinción",
      "Revisar y ajustar el tiempo de diferenciación",
      "Reemplazar la eosina si presenta signos de deterioro",
      "Ajustar el grosor de los cortes",
      "Comparar el resultado con un control conocido",
      "Verificar otros factores del procesamiento cuando corresponda",
    ],
    sources: [
      "College of American Pathologists (CAP) - H&E Troubleshooting Guide.",
      "Northwest University - The Science and Application of Hematoxylin and Eosin Staining.",
    ],
    notes:
      "Esta información constituye orientación técnica y no sustituye los protocolos validados del laboratorio.",
  },
  {
    id: "HYE-003",
    problem: "Núcleos intensamente coloreados",
    observation:
      "La tinción presenta una intensidad mayor a la esperada en los núcleos.",
    possible_causes: [
      "Secado excesivo del preparado",
      "Colorante recientemente cambiado",
      "Tiempos de inmersión en el colorante excesivos",
      "Secciones demasiado gruesas",
      "Contenido excesivo de medio de adhesión del tejido a la lámina, pudiendo ser albúmina o gelatina",
      "El tiempo de diferenciación no fue suficiente",
      "Exposición prolongada al calor",
    ],
    verification_steps: [
      "Fecha del último cambio del colorante",
      "Cambios en el lote y la marca del colorante",
      "Tiempo de tinción",
      "Tiempo de diferenciación",
      "Grosor del corte",
      "Antecedentes de cambios recientes en el procesamiento",
    ],
    possible_actions: [
      "Revisar y ajustar el tiempo de tinción",
      "Revisar y ajustar el tiempo de diferenciación",
      "Ajustar el grosor de los cortes",
      "Comparar el resultado con un control conocido",
      "Verificar otros factores del procesamiento cuando corresponda",
    ],
    sources: [
      "College of American Pathologists (CAP) - H&E Troubleshooting Guide.",
      "Northwest University - The Science and Application of Hematoxylin and Eosin Staining.",
    ],
    notes:
      "Esta información constituye orientación técnica y no sustituye los protocolos validados del laboratorio.",
  },
  {
    id: "HYE-004",
    problem: "Citoplasmas intensamente coloreados",
    observation:
      "La tinción presenta una intensidad mayor a la esperada en el citoplasma.",
    possible_causes: [
      "Colorante recientemente cambiado",
      "Colorante recientemente concentrado",
      "Tiempos de inmersión en el colorante excesivos",
      "Pasajes demasiado rápidos por alcoholes, luego de coloración con eosina",
      "Pasaje por alcohol isopropílico luego de la coloración con eosina",
      "Cortes demasiado gruesos",
    ],
    verification_steps: [
      "Cambios en el lote y la marca del colorante",
      "Tiempo de tinción",
      "Tiempo de diferenciación",
      "Grosor del corte",
      "Antecedentes de cambios recientes en el procesamiento",
    ],
    possible_actions: [
      "Revisar y ajustar el tiempo de tinción",
      "Revisar y ajustar el tiempo de diferenciación",
      "Utilización de alcohol etílico como diferenciador",
      "Dilución del colorante",
      "Ajustar el grosor de los cortes",
      "Comparar el resultado con un control conocido",
      "Verificar otros factores del procesamiento cuando corresponda",
    ],
    sources: [
      "College of American Pathologists (CAP) - H&E Troubleshooting Guide.",
      "Northwest University - The Science and Application of Hematoxylin and Eosin Staining.",
    ],
    notes:
      "Esta información constituye orientación técnica y no sustituye los protocolos validados del laboratorio.",
  },
  {
    id: "HYE-005",
    problem: "Manchas blanquecinas en los tejidos",
    observation:
      "Los cortes se ven con manchas de color blanquecino como nubes blanquecinas.",
    possible_causes: [
      "El corte no fue secado adecuadamente antes de iniciar el deparafinado",
      "Tiempo de deparafinado insuficiente",
    ],
    verification_steps: [
      "Tiempo de secado de láminas",
      "Estado del xilol utilizado para el deparafinado",
      "Tiempo de exposición al xilol",
      "Grosor del corte",
      "Antecedentes de cambios recientes en el procesamiento",
    ],
    possible_actions: [
      "Utilización de alcohol absoluto para retirar el agua y posteriormente deparafinado con xilol",
      "Aumentar el tiempo de exposición al xilol para lograr el correcto deparafinado",
    ],
    sources: [
      "Northwest University - The Science and Application of Hematoxylin and Eosin Staining.",
    ],
    notes:
      "Esta información constituye orientación técnica y no sustituye los protocolos validados del laboratorio.",
  },
  {
    id: "HYE-006",
    problem: "Precipitado oscuro (negro - azulado)",
    observation:
      "Se observan precipitados oscuros (negro - azulado) dispersos en el tejido.",
    possible_causes: [
      "Hematoxilina deteriorada o en malas condiciones",
      "Formulaciones de hematoxilina que posean metales en su composición",
    ],
    verification_steps: [
      "Cambios en la apariencia del colorante",
      "Posible formación de brillo metálico sobre la superficie de la solución",
      "Antecedentes de cambios recientes en el procesamiento",
    ],
    possible_actions: [
      "Cambio del colorante",
      "Asegurar el correcto almacenamiento del mismo",
      "Ante la presencia de brillo metálico (hemateína), cambiar o filtrar el colorante",
    ],
    sources: [
      "College of American Pathologists (CAP) - H&E Troubleshooting Guide.",
    ],
    notes:
      "Esta información constituye orientación técnica y no sustituye los protocolos validados del laboratorio.",
  },
];
