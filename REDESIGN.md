# Rediseño del portfolio

La entrega actual orientada a Full Stack, con foto editada, gestión administrativa y nuevos CV, está documentada en [Actualización Full Stack](docs/portfolio-fullstack.md). Lo que sigue registra la primera versión del rediseño y fue reemplazado en los puntos indicados por ese documento.

El portfolio está orientado a búsquedas Frontend / React / Next.js. La experiencia Full Stack, Oracle y liderazgo técnico aporta contexto y profundidad al perfil.

## Ajustes solicitados después de la primera entrega

AutoGlobal abre el inicio y encabeza los proyectos; después aparecen Chaioboutique, GAMAAN y Pactum. El nombre pasó de 227px a 104px como máximo en escritorio y también se redujo en el pie. Se conservan los colores aprobados.

La marca am ahora es un dibujo vectorial propio compartido por encabezado, pie y favicon. El componente original Waves de ReactBits vuelve dentro de la presentación de AutoGlobal, con movimiento de la captura y respuesta al cursor. Un control permite pausar y reanudar el efecto. Se respetan las preferencias de movimiento reducido y la lectura sin JavaScript.

Estos cambios superaron 28 comprobaciones específicas de orden, navegación, marca, animación, pausa, idiomas, cuatro anchos, menú móvil y alternativas sin movimiento o JavaScript. El escaneo de estilos se acotó a `src` para evitar recargas continuas de archivos generados durante el desarrollo. Los recursos, colores y contenido del resto del portfolio se conservan.

La versión compilada volvió a superar las 28 comprobaciones. La revisión visual final a 1440, 768 y 390px no presenta errores; se revisaron las diez capturas de todas las secciones y la alternativa con movimiento reducido. Compilación, TypeScript y ESLint finalizaron correctamente. La valoración interna del refinamiento es 8.3/10, sin atribuirle una evaluación externa.

## Entrega

- Portada con nombre contenido y vista interactiva de AutoGlobal, Archivo local, verde profundo y acento amarillo.
- Cuatro casos con rutas propias: AutoGlobal, Chaioboutique, GAMAAN y Pactum.
- Logos de los proyectos originales. Capturas reales de GAMAAN, AutoGlobal y Pactum; imagen de campaña original para Chaioboutique.
- Perfil, experiencia ampliable, metodología, seis categorías completas de habilidades y siete títulos de formación.
- Explorador de stack con ejemplos, teclado y categoría persistida en la URL.
- Versiones ES/EN, modo claro/oscuro y ambos CV originales descargables.
- Contacto por email, enlaces profesionales, imagen social, favicon y sitemap con los casos.

## Verificación

La compilación de producción, TypeScript y ESLint finalizaron correctamente. Pasaron 55 comprobaciones funcionales en navegador: navegación, cuatro casos, 404, CV, idiomas, temas, teclado, menú móvil, formulario, validación de la API, movimiento reducido y lectura sin JavaScript. No se enviaron correos de prueba.

| Revisión visual | Antes | Después |
| --- | --- | --- |
| Errores del inspector | 10 | 0 |
| Texto predominante | 14px | 18px |
| Escala tipográfica | 9 tamaños | 5 roles |
| Tipografía cargada | Familia de sistema | Archivo local |
| Fotografías/recursos de producto contados | 2 | 9 imágenes, incluidos logos |
| Desbordamiento horizontal | No era el problema principal | Sin desbordamiento a 1440, 768, 390 y 320px |

La revisión visual se hizo a 1440, 768 y 390px, con capturas de todas las secciones. Se conservaron dos advertencias justificadas: el fondo cálido pertenece a la identidad de Pactum y no se incorporó video porque no había material propio apropiado. Hay movimiento de interfaz, entradas por sección y movimiento de la fotografía con alternativa de movimiento reducido.

La prueba sin JavaScript detectó y permitió corregir un problema previo: el proveedor de tema ocultaba toda la página hasta que se montaba la aplicación. El contenido ahora se entrega visible desde el servidor.

## Recursos y alcance

Los logos proceden de las carpetas originales de cada proyecto. Las tres capturas se tomaron de las versiones locales existentes. La imagen de Chaioboutique procede de `public/images/campaign/chaio-campaign-hero.webp` de ese proyecto. La foto de perfil y los dos CV ya estaban en los archivos proporcionados. No se incorporaron fotos de stock, testimonios, métricas comerciales ni contenido de muestra.

Chaioboutique no pudo iniciar su versión local por un problema de conexión de su configuración de datos. Se utilizó su campaña original como portada y se conservó ese proyecto sin cambios de código.

El formulario prepara un borrador en la aplicación de correo mientras no haya credenciales de envío configuradas. El envío directo requiere `EMAIL_USER` y `EMAIL_PASS`; no se comprobó un envío real. Antes de publicar, definir `NEXT_PUBLIC_SITE_URL` con el dominio definitivo. La entrega es local; no se publicó ni se hicieron commits o pushes.

## Dirección y evaluación

Dirección: **The name as a monument**, seed **1068229793**. La firma de Alejo organiza cuatro identidades de producto distintas y conecta la expresión visual del Frontend con experiencia en sistemas críticos. La interacción principal del contenido es el explorador de stack con evidencia.

Se adaptaron dos composiciones: la de proyectos para usar cuatro portadas de producto en formato horizontal, y la de habilidades para incluir las seis categorías completas. La referencia de Figma aportó escala editorial y campos de color planos. Las decisiones reutilizables están en `DESIGN.md`.

Evaluación interna sobre capturas: diseño 8.2, usabilidad 8.5, creatividad 7.0 y contenido 9.0; ponderación total 8.1/10. Es una autoevaluación de diseño. El siguiente recurso que más fortalecería la presentación es una captura del storefront completo de Chaioboutique cuando su entorno vuelva a estar disponible.

Skill adicional instalada: `playwright-interactive`, del catálogo oficial de OpenAI. Estará disponible desde el siguiente turno. En esta entrega se utilizó la automatización de navegador ya disponible.
