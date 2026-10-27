# Entrega Full Stack

Esta actualización reemplaza el enfoque Frontend anterior. Se conservan logo am, Archivo y colores aprobados. AutoGlobal sigue primero. ReactBits Waves ocupa el fondo completo del hero, fuera del recuadro de la foto. Fondo, contraste y controles cambian con el tema, también con la animación pausada.

La prioridad de lectura es la experiencia profesional en Recursos Informáticos. El hero menciona el puesto actual, el menú y la acción principal llevan a experiencia, y esta sección aparece inmediatamente después del hero. El empleador y el cargo tienen mayor jerarquía; Oracle, liderazgo, incidentes de producción e ingeniería inversa / modernización se explican de forma visible antes del detalle ampliable. El retrato utiliza un fondo circular en todos los tamaños. La sección de proyectos presenta únicamente los cuatro casos de clientes seleccionados.

Verificación de esta revisión: build de producción con TypeScript y ESLint correcto, 31 comprobaciones de navegador aprobadas y 0 fallos del inspector visual a 1440, 768 y 390px. El círculo también se verificó a 320px, en ambos temas. Se ajustó la concurrencia de compilación a un trabajador para reducir la presión de memoria del equipo.

La idea es mostrar a quien conecta la experiencia pública del negocio con datos y gestión interna. Bases de datos aparece primero en habilidades. Codex y Claude se describen como herramientas para obtener ideas y resolver problemas complejos, según lo confirmado por el usuario.

## Proyectos

| Caso | Gestión destacada y verificada en el código |
| --- | --- |
| AutoGlobal | Vehículos, stock, reservas, ventas, métricas por período, consultas y exportaciones |
| Chaioboutique | Catálogo, inventario, pedidos, cuentas, administración y punto de venta |
| GAMAAN | Solicitudes, evaluación, aprobación, créditos y permisos para tres roles |
| Pactum | Expedientes, documentación, revisión administrativa, costos, pagos y estados |

Cada caso incluye problema, solución, circuito ordenado, módulos, decisiones técnicas y valor práctico en ambos idiomas. No se inventaron resultados económicos, métricas comerciales ni cantidad de clientes.

El enfoque laboral toma como referencia el [reporte de contratación CoderPad 2026](https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/), que sitúa Full Stack y backend entre las prioridades de sus encuestados globales. Las tecnologías publicadas se apoyan en el perfil y proyectos existentes.

## CV

Dos páginas por idioma, una columna, texto seleccionable y títulos convencionales. Sin fotos, tablas ni contacto en encabezados, atendiendo las dificultades descritas por [Greenhouse](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse). No se garantiza compatibilidad con todos los ATS.

- Contenido: `scripts/resume-content.json`; generación: `scripts/generate_resume.py`.
- Entregables: `public/cv/alejo-marco-fullstack-es.pdf` y `public/cv/alejo-marco-fullstack-en.pdf`, con versiones TXT equivalentes. Aproximadamente 79 KB cada PDF.
- Todas las descargas siguen el idioma seleccionado. Los CV originales se conservaron.
- Se renderizaron y abrieron las cuatro páginas con Poppler; pypdf verificó caracteres, lectura y orden. Las descargas reales coinciden con los archivos generados.

## Foto y recursos

Logos y portadas proceden de los proyectos originales. Los cuatro proyectos usan capturas de sus interfaces públicas. Chaioboutique se abrió con su base local de desarrollo existente y se capturó la tienda con encabezado, navegación, textos y controles visibles; no se modificó su código ni se migró o sembró la base. La captura está en public/projects/chaioboutique-storefront.webp. No se agregaron fotos de stock, video ni pantallas administrativas ficticias.

La edición con ImageGen integrado está en `public/profile-cutout.png`, PNG RGBA de 1254 × 1254 con transparencia comprobada. Se conserva `public/profile.jpeg`. El fondo es parte de la interfaz y responde al tema.

Prompt final de edición:

> Use case: background-extraction, identity-preserve. Edit target: the attached real portrait of Alejo for his professional developer portfolio. Remove ONLY the flat blue background and all blue edge spill, creating a clean transparent-background cutout with genuine alpha. Keep his face, identity, natural skin texture, facial expression, hairstyle, ears, proportions, black shirt, pose, crop, and lighting unchanged. Preserve delicate natural hair edges. Do not retouch, beautify, regenerate, stylize, add props or text, or change the person. The transparent cutout will be composited in a website using forest green (#0d2a1c), off-white (#f7f7f7), and yellow (#f6e016), so do not add any background color, shadow, halo, outline, or border. Output the existing centered square portrait as a high quality natural photographic cutout.

## Verificación

- Build de producción, ESLint y TypeScript correctos.
- 53 comprobaciones funcionales sobre producción: idiomas, temas, pausa, teclado, descargas, cuatro casos, menú móvil, movimiento reducido y lectura sin JavaScript. Sin errores de consola ni excepciones.
- 12 comprobaciones adicionales de ancho en los casos a 1440, 768 y 390px. Home también comprobada a 320px. Sin desbordamientos.
- Inspector visual: 0 fallos en los tres tamaños. Dos advertencias justificadas: color propio de Pactum y ausencia de video adecuado. Se abrieron las diez capturas finales y las vistas adicionales de ambos temas y administración.

Dirección original: The name as a monument, seed 1068229793. El retrato reemplaza el nombre monumental por preferencia explícita del usuario, conservando el sistema visual. Interacciones: ondas y retrato con puntero y pausa, habilidades con teclado y rutas reales.

Autoevaluación visual: diseño 8.0, usabilidad 8.5, creatividad 7.0 y contenido 9.0; ponderación 8.1/10. Serían útiles capturas reales de administración con datos autorizados. No se fabricaron pantallas ni quedó contenido de muestra.

Vista previa local: http://127.0.0.1:3100/. El dominio definitivo y las variables de despliegue se configuran en el proveedor de alojamiento. El formulario conserva su borrador por correo mientras no haya credenciales de envío; no se enviaron mensajes de prueba.

Última corrección: ReactBits ocupa todo el hero y Chaioboutique utiliza una captura real de la tienda tanto en home como en el caso. Build correcto, 18 comprobaciones del hero y 9 de portada aprobadas sobre producción; inspector visual sin fallos en los tres tamaños. La captura de Chaioboutique conserva la navegación en su borde superior.

## Presentación de clientes

Los cuatro clientes tienen emblemas originales dentro de círculos uniformes, con nombre completo y rubro al lado. Se usan los símbolos independientes originales de GAMAAN (`gamaan-frontend/src/assets/logoSolo2.png`) y Pactum (`escribania-web-app/src/app/icon.png`) para evitar reducir sus logotipos horizontales hasta volverlos ilegibles. Los archivos originales completos también se conservan.

Las capturas se presentan completas sobre fondos de los colores de cada marca, con espacio propio y acceso al caso. Los componentes compartidos `client-logo.tsx` y `project-presentation.tsx` aplican el mismo diseño en la página principal y los casos. En móvil, la identidad del cliente precede a la captura y la descripción.

Verificación de esta entrega: compilación de producción, TypeScript y ESLint correctos; imágenes de los cuatro clientes cargadas, navegación al caso e idioma comprobados; vistas a 1440, 768, 390 y 320px sin desbordamiento horizontal. Se revisaron ambos temas. El inspector final produjo 0 fallos y las mismas dos advertencias justificadas sobre el color de Pactum y la ausencia de video. Se abrieron sus diez capturas finales y las vistas individuales adicionales. AutoGlobal conserva el primer lugar y Recursos Informáticos mantiene su prioridad en la página.
