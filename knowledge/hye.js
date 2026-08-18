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
    id: "HYE-003",
    problem: "Núcleos intensamente coloreados",
    observation:
      "La tinción presenta una intensidad mayor a la esperada en los núcleos.",
    possible_causes: [
      "Secado excesivo del preparado.",
      "Colorante recientemente cambiado.",
      "Tiempos de inmersión en el colorante excesivos.",
      "Secciones demasiado gruesas.",
      "Contenido excesivo de medio de adhesión del tejido a la lámina, pudiendo ser albúmina o gelatina.",
      "El tiempo de diferenciación no fue suficiente.",
      "Grosor excesivo del corte.",
      "Exposición prolongada al calor.",
    ],
    verification_steps: [
      "Fecha del último cambio del colorante.",
      "Cambios en el lote y la marca del colorante.",
      "Tiempo de tinción.",
      "Tiempo de diferenciación.",
      "Grosor del corte",
      "Antecedentes de cambios recientes en el procesamiento.",
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
];
