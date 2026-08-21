# Labsistente

> Asistente de troubleshooting para problemas de coloración H&E en Anatomía Patológica.

Labsistente es una mini-app desarrollada para la CoderCup con el objetivo de ayudar a técnicos de Anatomía Patológica a investigar problemas observados durante una coloración Hematoxilina-Eosina (H&E).

La aplicación relaciona el problema observado con información previamente documentada en una base de conocimiento, mostrando posibles causas, aspectos a verificar y acciones posibles como orientación técnica.

## El problema

Durante una coloración H&E pueden aparecer distintos problemas en la tinción, como cambios en la intensidad de los núcleos o del citoplasma,
precipitados o alteraciones relacionadas con el procesamiento, entre otros.

Cuando aparece un resultado inesperado, el técnico necesita revisar distintos factores para intentar identificar la posible causa y decidir
qué aspectos conviene verificar.

Labsistente surge a partir de mi experiencia previa como técnica en Anatomía Patológica y de la necesidad de contar con una herramienta rápida que permita consultar esta información desde el laboratorio, principalmente desde un dispositivo móvil.

## La solución

Labsistente permite que el técnico describa un problema observado durante una coloración H&E y obtener una orientación basada en la información registrada en la base de conocimiento.

A partir de la consulta, la aplicación identifica el problema que mejor se relaciona con la descripción y muestra la información
correspondiente:

- Posibles causas
- Aspectos que conviene verificar
- Acciones posibles
- Fuentes bibliográficas

Si la consulta no puede relacionarse con un problema registrado, Labsistente informa que no se encontró información relacionada en la base de conocimiento en lugar de generar una respuesta alternativa.

## Uso de inteligencia artificial

Labsistente utiliza la API de Google Gemini para clasificar la consulta del técnico y determinar cuál de los problemas registrados en la base
de conocimiento se relaciona mejor con ella.

El modelo no genera las causas, las acciones ni las recomendaciones que se muestran al usuario. Estas forman parte de la base de conocimiento,
que fue creada y documentada manualmente a partir de bibliografía seleccionada.

La respuesta de Gemini se limita a identificar el ID de un problema existente en la base de conocimiento. La aplicación utiliza ese ID para
recuperar y mostrar la información correspondiente.

Si Gemini no puede relacionar la consulta con ninguno de los problemas registrados, la aplicación devuelve un resultado de "no encontrado".

Este enfoque busca limitar las respuestas generadas por el modelo y mantener la información presentada vinculada a una fuente previamente documentada.

## Base de conocimiento

La información utilizada por Labsistente se encuentra en una base de conocimiento creada manualmente para el proyecto.

Cada problema registrado contiene:

- Identificador único
- Problema observado
- Observación
- Posibles causas
- Aspectos a verificar
- Acciones posibles
- Fuentes bibliográficas
- Notas

Actualmente la base contempla seis problemas relacionados con la coloración H&E:

- `HYE-001` — Hematoxilina pálida
- `HYE-002` — Eosina pálida
- `HYE-003` — Núcleos intensamente coloreados
- `HYE-004` — Citoplasmas intensamente coloreados
- `HYE-005` — Manchas blanquecinas en los tejidos
- `HYE-006` — Precipitado oscuro (negro - azulado)

La base fue diseñada para que la información mostrada por la aplicación provenga de contenido previamente registrado y pueda ser ampliada posteriormente con nuevos problemas y fuentes.

## Arquitectura

Labsistente está compuesto por un frontend en React y una API que se encarga de procesar las consultas y comunicarse con Gemini.

El flujo principal es:

Usuario → React → POST /api/analyze → API → Gemini → Identificación del problema → Base de conocimiento H&E → Resultado → React → Usuario

## Tecnologías utilizadas

### Frontend

- **React** — construcción de la interfaz y manejo del estado.
- **Vite** — entorno de desarrollo y build del frontend.
- **Tailwind CSS** — estilos y diseño responsive mobile-first.

### Backend

- **Node.js** — entorno de ejecución del backend.
- **Express** — servidor utilizado durante el desarrollo local.
- **Vercel Functions** — ejecución del endpoint `/api/analyze` en producción.

### Inteligencia artificial

- **Google Gemini API** — clasificación de las consultas y selección del problema correspondiente de la base de conocimiento.

### Herramientas

- **Git / GitHub** — control de versiones y repositorio.
- **Vercel** — deploy de la aplicación.

## Demo

Labsistente está disponible online:

🔗 [Ver Labsistente](https://lab-ap-eosin.vercel.app/)

La aplicación está diseñada con un enfoque mobile-first, pensando en el uso desde un teléfono dentro del laboratorio.

El flujo principal consiste en:

1. Describir un problema observado durante una coloración H&E.
2. Enviar la consulta.
3. Gemini identifica el problema que mejor coincide con la consulta.
4. Labsistente recupera la información correspondiente de la base de conocimiento.
5. La aplicación muestra las posibles causas, aspectos a verificar, acciones posibles y fuentes.

## Instalación

### Requisitos

- Node.js
- pnpm
- Una API key de Google Gemini

### Clonar el repositorio

```bash
git clone https://github.com/LuciaPons/lab-ap.git
cd lab-ap
```

### Instalar dependencias

```bash
pnpm install
```

### Configurar variables de entorno

- Archivo .env
- GEMINI_API_KEY=tu_api_key

### Ejecutar en desarrollo

```bash
pnpm dev
```

- En otra terminal

```bash
pnpm server
```

#### Verificacion del proyecto

```bash
pnpm build
pnpm lint
```

## Alcance y limitaciones

Labsistente fue desarrollado como un MVP para la CoderCup y actualmente está enfocado exclusivamente en problemas relacionados con la
coloración Hematoxilina-Eosina (H&E).

La aplicación utiliza una base de conocimiento pequeña y creada manualmente. Por este motivo, no pretende cubrir todos los problemas posibles que pueden presentarse durante una coloración o en el procesamiento de muestras.

Gemini se utiliza únicamente para clasificar la consulta y relacionarla con un problema existente en la base de conocimiento. La aplicación no genera libremente causas, acciones ni recomendaciones.

Si una consulta no puede relacionarse con la información registrada, Labsistente informa que no encontró un problema relacionado en lugar de
generar una respuesta.

La aplicación depende de la disponibilidad y los límites de uso de la API de Gemini.

### Disclaimer

Labsistente es una herramienta de orientación técnica y no sustituye los protocolos, procedimientos ni criterios validados por cada
laboratorio.

Las acciones mostradas deben interpretarse dentro del contexto del laboratorio y de sus procedimientos establecidos.

## Próximas mejoras

Algunas posibles evoluciones del proyecto son:

- Ampliar la base de conocimiento con nuevos problemas de H&E y otras técnicas de coloración.
- Incorporar más fuentes bibliográficas y documentación técnica.
- Permitir que técnicos puedan compartir cómo resolvieron determinados problemas en la práctica.
- Registrar soluciones o procedimientos que hayan resultado útiles en situaciones concretas, manteniendo una revisión y validación previa.
- Incorporar usuarios y un sistema de contribuciones.
- Crear un panel administrativo para gestionar y revisar el contenido de la base de conocimiento.
- Evaluar en el futuro estrategias más avanzadas de búsqueda sobre la base de conocimiento.
