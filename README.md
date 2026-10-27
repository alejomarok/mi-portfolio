# Portfolio de Alejo Marcó

Portfolio bilingüe para búsquedas Full Stack, con foco en sistemas de gestión, React / Next.js, backend y bases de datos. Incluye cuatro casos de producto, experiencia profesional, habilidades, uso de IA, formación, contacto y CV en español e inglés.

La experiencia en Recursos Informáticos lidera el recorrido: aparece en el hero y en el primer bloque, con cargo, fechas y trabajo en Oracle, liderazgo, producción y modernización visibles. El retrato usa un fondo circular; ReactBits permanece detrás del hero completo.

## Desarrollo

Requiere Node.js 22 y npm.

```sh
npm install
npm run dev
```

## Verificación y producción

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

La generación de páginas usa un trabajador para limitar el consumo de memoria durante el build local.

## Configuración

- `NEXT_PUBLIC_SITE_URL`: URL pública completa, por ejemplo `https://tu-dominio.com`. Se utiliza para los metadatos, la imagen social, robots y sitemap. Definirla antes del build de producción.
- `EMAIL_USER` y `EMAIL_PASS`: credenciales del servicio Gmail que ya utilizaba el proyecto. Son opcionales. Con ambas configuradas, el formulario utiliza `/api/contact`. Sin ellas, prepara un borrador en la aplicación de correo del visitante y explica ese comportamiento.
- Nunca colocar credenciales en variables `NEXT_PUBLIC_*` ni subir archivos de entorno al repositorio.

## Contenido y recursos

- `src/data/projects.ts`: casos, aportes y tecnologías.
- `src/data/skills.ts`, `experience.ts` y `certifications.ts`: habilidades, experiencia y formación.
- `src/data/site.ts`: identidad y perfiles.
- `public/projects`: logos originales y portadas.
- `client-logo.tsx` y `project-presentation.tsx`: presentación compartida de marcas y webs en home y casos. Los símbolos de GAMAAN y Pactum se copiaron de sus proyectos originales para usarlos completos en los círculos.
- `public/cv-alejo-marco.pdf` y `public/cv-alejo-marco-en.pdf`: CV originales.
- `public/cv/alejo-marco-fullstack-{es,en}.pdf`: nuevos CV de dos páginas, con texto seleccionable, una columna y lectura lineal. Sus versiones `.txt` tienen el mismo contenido. Las descargas usan el idioma seleccionado.
- `scripts/resume-content.json`: contenido de ambos CV; `scripts/generate_resume.py` los regenera con ReportLab y comprueba extracción de texto, orden y cantidad de páginas. Requiere Python con `reportlab` y `pypdf`.
- `public/profile-cutout.png`: retrato sin fondo azul, editado a partir de la foto original mediante ImageGen; el archivo original se conserva. El fondo y las ondas son parte de la interfaz y responden al tema.
- `public/fonts`: Archivo alojada localmente con su licencia OFL.
- `DESIGN.md`: decisiones visuales y pautas para conservar el sistema.
- `docs/portfolio-fullstack.md`: entrega actual, fuentes, edición de foto, CV y verificación.

Las portadas de los cuatro proyectos son capturas de sus interfaces públicas. Chaioboutique se capturó desde la aplicación local con su base de desarrollo existente e incluye encabezado, navegación, textos y controles de la tienda. Los casos describen implementación; no afirman métricas comerciales ni que integraciones externas estén habilitadas en producción.

El sitio incluye modo claro/oscuro, preferencia de idioma, explorador de stack con navegación de teclado y categoría guardada en la URL, disclosures nativos, foco visible y soporte de movimiento reducido. El contenido principal también se puede leer sin JavaScript.
