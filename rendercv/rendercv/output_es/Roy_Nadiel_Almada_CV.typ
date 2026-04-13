// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Roy Nadiel Almada",
  title: "Roy Nadiel Almada - CV",
  footer: context { [#emph[Roy Nadiel Almada -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Última actualización Abr 2026] ],
  locale-catalog-language: "es",
  text-direction: ltr,
  page-size: "us-letter",
  page-top-margin: 0.5in,
  page-bottom-margin: 0.5in,
  page-left-margin: 0.5in,
  page-right-margin: 0.5in,
  page-show-footer: true,
  page-show-top-note: false,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 79, 144),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "XCharter",
  typography-font-family-name: "XCharter",
  typography-font-family-headline: "XCharter",
  typography-font-family-connections: "XCharter",
  typography-font-family-section-titles: "XCharter",
  typography-font-size-body: 10pt,
  typography-font-size-name: 25pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 9pt,
  typography-font-size-section-titles: 1.3em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: true,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: false,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.5cm,
  header-space-below-headline: 0.5cm,
  header-space-below-connections: 0.5cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: false,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "•",
  header-connections-space-between-connections: 0.4cm,
  section-titles-type: "centered_with_centered_partial_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.2cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.3em,
  sections-space-between-regular-entries: 1em,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0.2cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-degree-width: 1cm,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0cm,
  entries-highlights-bullet:  "•" ,
  entries-highlights-nested-bullet:  "•" ,
  entries-highlights-space-left: 0.15cm,
  entries-highlights-space-above: 0cm,
  entries-highlights-space-between-items: 0cm,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2026,
    month: 4,
    day: 13,
  ),
)


= Roy Nadiel Almada

  #headline([Desarrollador de Software])

#connections(
  [Venezuela, Isla de Margarita],
  [#link("mailto:almadaroy19@gmail.com", icon: false, if-underline: false, if-color: false)[almadaroy19\@gmail.com]],
  [#link("tel:+58-412-1951892", icon: false, if-underline: false, if-color: false)[0412-1951892]],
  [#link("https://roynadiel.github.io/", icon: false, if-underline: false, if-color: false)[roynadiel.github.io]],
  [#link("https://github.com/RoyNadiel", icon: false, if-underline: false, if-color: false)[RoyNadiel]],
  [#link("https://linkedin.com/in/roy-almada-397a19186", icon: false, if-underline: false, if-color: false)[roy-almada-397a19186]],
)


== Perfil

Desarrollador de Software con +1 año de experiencia en HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, Next.js (explorando) y Node.js. Manejo de Git y buenas prácticas de desarrollo, enfocado en soluciones web eficientes y escalables.

== Experiencia

#regular-entry(
  [
    #strong[Proyecto Personal], Tasa Actual — Aplicación web de conversión de divisas en tiempo real para el mercado Venezolano

  ],
  [
    Ene 2025 – presente

  ],
  main-column-second-row: [
    - Integración de API de precios en tiempo real.

    - Experiencia de compra fluida.

    - Gestión de estado y rutas dinámicas.

    - Diseño Responsive para móvil y escritorio.

  ],
)

#regular-entry(
  [
    #strong[Proyecto Personal], Writting JS — Playground de JavaScript con Vanilla JS, Vite, Acorn y Monaco Editor

  ],
  [
    Ene 2025

  ],
  main-column-second-row: [
    - Integración y personalización de Monaco Editor.

    - Análisis de código con Acorn AST.

    - Optimización de rendimiento con Vite.

    - Ejecución segura de código de usuarios.

  ],
)

#regular-entry(
  [
    #strong[Proyecto Personal], Deshidratadora (Deshi) — Interfaz Web para el control de una Deshidratadora Eléctrica construida alrededor del Microcontrolador Wemos D1 Mini

  ],
  [
    Ene 2026 – presente

  ],
  main-column-second-row: [
    - Comunicación entre el microcontrolador ESP8266 y la interfaz web.

    - Gestión de estado y control de temperatura.

    - Implementación de servidor local vía WI-FI.

    - Interfaz de usuario intuitiva y responsive.

  ],
)

#regular-entry(
  [
    #strong[Proyecto Personal], Quote Creator — Plataforma web interactiva para crear y personalizar citas inspiradoras

  ],
  [
    Ene 2026 – presente

  ],
  main-column-second-row: [
    - Personalización interactiva de citas con vista previa en tiempo real.

    - Integración de diversas bibliotecas de fuentes mediante la API de Google Fonts y opciones de fondo.

    - Generación de imágenes de citas de alta calidad para compartir y diseño de formatos de aspecto.

    - Diseño responsive para una experiencia de usuario fluida en todos los dispositivos.

  ],
)

== Educación

#education-entry(
  [
    #strong[Universidad de Oriente (UDO)], Lic. en Ciencias de la Computación

  ],
  [
    Ene 2023 – presente

  ],
  degree-column: [
    #strong[Lic.]
  ],
  main-column-second-row: [
    - Cursos en programación, algoritmos, bases de datos e ingeniería de software.

  ],
)

#education-entry(
  [
    #strong[U.E.N.B DR. Luis Ortega], Educación Secundaria

  ],
  [
    Ene 2011 – Jun 2016

  ],
  degree-column: [
    
  ],
  main-column-second-row: [
  ],
)

== Habilidades

#strong[Técnicas:] HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, Next.js, Node.js, Hono, Express, Supabase, Git, SQL, REST APIs

#strong[Blandas:] Comunicación Efectiva, Liderazgo, Resolución de Problemas, Trabajo en Equipo, Adaptabilidad, Aprendizaje Continuo, Gestión del Tiempo, Empatía

#strong[Idiomas:] Español (Nativo), #link("https://cert.efset.org/en/4fxqHD")[Inglés — B2 Intermedio Superior]
