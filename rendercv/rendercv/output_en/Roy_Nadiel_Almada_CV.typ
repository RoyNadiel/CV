// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Roy Nadiel Almada",
  title: "Roy Nadiel Almada - CV",
  footer: context { [#emph[Roy Nadiel Almada -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Apr 2026] ],
  locale-catalog-language: "en",
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

  #headline([Software Developer])

#connections(
  [Venezuela, Isla de Margarita],
  [#link("mailto:almadaroy19@gmail.com", icon: false, if-underline: false, if-color: false)[almadaroy19\@gmail.com]],
  [#link("tel:+58-412-1951892", icon: false, if-underline: false, if-color: false)[0412-1951892]],
  [#link("https://roynadiel.github.io/", icon: false, if-underline: false, if-color: false)[roynadiel.github.io]],
  [#link("https://github.com/RoyNadiel", icon: false, if-underline: false, if-color: false)[RoyNadiel]],
  [#link("https://linkedin.com/in/roy-almada-397a19186", icon: false, if-underline: false, if-color: false)[roy-almada-397a19186]],
)


== Profile

Software Developer with 1+ year of experience building web applications using HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, Next.js (exploring) and Node.js. Skilled in Git and best development practices, focused on delivering efficient and scalable web solutions.

== Experience

#regular-entry(
  [
    #strong[Personal Project], Tasa Actual — Real-time currency conversion web application for the Venezuelan market

  ],
  [
    Jan 2025 – present

  ],
  main-column-second-row: [
    - Integration of real-time pricing API.

    - Smooth and user-friendly shopping experience.

    - State management and dynamic routing.

    - Responsive design for mobile and desktop.

  ],
)

#regular-entry(
  [
    #strong[Personal Project], Writting JS — JavaScript playground using Vanilla JS, Vite, Acorn, and Monaco Editor

  ],
  [
    Jan 2025

  ],
  main-column-second-row: [
    - Integrating and customizing Monaco Editor.

    - Parsing code with Acorn AST.

    - Optimizing performance with Vite.

    - Secure execution of user-generated code.

  ],
)

#regular-entry(
  [
    #strong[Personal Project], Deshydrator (Deshi) — Web interface for controlling an electric dehydrator built around the Wemos D1 Mini microcontroller

  ],
  [
    Jan 2026 – present

  ],
  main-column-second-row: [
    - Communication between the ESP8266 microcontroller and the web interface.

    - State management and temperature control.

    - Implementation of local server via WI-FI.

    - Intuitive and responsive user interface.

  ],
)

#regular-entry(
  [
    #strong[Personal Project], Quote Creator — Interactive web platform for creating and customizing inspirational quotes

  ],
  [
    Jan 2026 – present

  ],
  main-column-second-row: [
    - Interactive quote customization with real-time preview.

    - Integration of various font libraries via Google Fonts API and background options.

    - Generation of high-quality quote images for sharing and aspect ratio design.

    - Responsive design for a seamless user experience across all devices.

  ],
)

== Education

#education-entry(
  [
    #strong[Universidad de Oriente (UDO)], BS in Computer Science

  ],
  [
    Jan 2023 – present

  ],
  degree-column: [
    #strong[BS]
  ],
  main-column-second-row: [
    - Completed coursework in programming, algorithms, databases, and software engineering.

  ],
)

#education-entry(
  [
    #strong[U.E.N.B DR. Luis Ortega], High School

  ],
  [
    Jan 2011 – June 2016

  ],
  degree-column: [
    
  ],
  main-column-second-row: [
  ],
)

== Skills

#strong[Technical:] HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, Next.js, Node.js, Hono, Express, Supabase, Git, SQL, REST APIs

#strong[Soft Skills:] Effective Communication, Leadership, Problem Solving, Teamwork, Adaptability, Continuous Learning, Time Management, Empathy

#strong[Languages:] Spanish (Native), #link("https://cert.efset.org/en/4fxqHD")[English — B2 Upper Intermediate]
