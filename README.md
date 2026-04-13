# CV Roy Nadiel Almada ✋
## 💻 Desarrollado por: [Roy Nadiel](https://github.com/RoyNadiel).

Un CV moderno, responsivo y compatible con sistemas ATS (Harvard Structure) construido con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Harvard ATS**: Estructura optimizada para sistemas de seguimiento de candidatos.
- **Responsivo y Adaptable**: Diseño de una sola columna que se ajusta perfectamente a móviles, tablets y escritorio.
- **RenderCV Integrado**: Generación de versiones PDF de alta calidad tipográfica mediante YAML y Typst.
- **Multilingüe**: Soporte para cambio dinámico entre Inglés y Español.
- **Optimizado para Impresión**: Estilos CSS específicos para una impresión perfecta en formato US Letter.
- **Componentes Modulares**: Arquitectura limpia y reutilizable.

## 🛠️ Tecnologías

- **React 19**
- **TypeScript**
- **TailwindCSS 4**
- **Vite**
- **RenderCV** (Generación de PDF profesional)
- **Lucide React** (Iconografía)
- **react-to-print** (Impresión desde navegador)

## 🎨 Personalización

El contenido del CV se puede personalizar fácilmente modificando:

1. **Traducciones**: Todo el contenido textual se gestiona en `src/constants/translations.ts`.
2. **Generación de PDF**: Los archivos YAML en la carpeta `rendercv/` definen el contenido para la versión profesional del PDF.
3. **Estilos**: `src/index.css` contiene los tokens de diseño Harvard.

## 🖨️ Impresión

El CV está optimizado para impresión. Puedes usar el botón de impresión integrado en la web o la función nativa del navegador (Ctrl/Cmd + P).

## 📱 Diseño Responsivo

El layout se ajusta automáticamente:
- **Desktop/Tablet**: Layout centrado con anchos controlados y márgenes elegantes.
- **Móvil**: Layout de ancho completo con tipografía ajustada para máxima legibilidad.

## 📄 Generación de PDF (RenderCV)

Para generar la versión profesional del PDF:
1. Instalar RenderCV: `uv tool install "rendercv[full]"`
2. Ejecutar render: `rendercv render rendercv/Roy_Nadiel_Almada_CV_EN.yaml`

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de enviar un Pull Request.

## 📝 Licencia

Este proyecto es de código abierto y está bajo la Licencia MIT.

## 👤 Contacto

- GitHub: [@RoyNadiel](https://github.com/RoyNadiel)
- LinkedIn: [Roy Almada](https://www.linkedin.com/in/roy-almada-397a19186/)
