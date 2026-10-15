# Portafolio de Jimmy Martínez

## Estructura

- `index.html` — estructura y contenido HTML de la página.
- `css/styles.css` — estilos CSS personalizados.
- `js/app.js` — datos editables + comportamiento/interactividad.
- `img/` — fotos, capturas de proyectos y certificados.
- `video/` — video de fondo opcional.
- `CV_Martinez_Jimmy_ES.pdf` — CV que descarga el botón del portafolio.

## Dónde editar información

En `js/app.js` busca:

- `PERFIL` → WhatsApp y nombre del CV.
- `NUCLEO` → Python, Django, Flask, MySQL.
- `HABILIDADES` → desarrollo, soporte y complementarias.
- `PROYECTOS` → agrega proyectos.
- `EXPERIENCIA` → experiencia laboral.
- `CERTIFICADOS` → certificados.
- `REDES` → WhatsApp, correo, Facebook, LinkedIn y GitHub.

## Para agregar un proyecto

Dentro de `PROYECTOS`, copia una línea `{ ... }` y cambia:

- `titulo`
- `descripcion`
- `imagen`
- `enlace`
- `etiquetas`

Luego coloca la captura en `img/proyectos/`.

## Para publicar

La opción recomendada es GitHub + Netlify:

1. Crea un repositorio en GitHub.
2. Sube toda esta carpeta.
3. En Netlify selecciona **Add new project → Import an existing project**.
4. Conecta GitHub y selecciona el repositorio.
5. Publica el proyecto.
6. Cada vez que hagas `git push` a la rama de producción, Netlify vuelve a desplegar los cambios automáticamente.

También puedes usar Netlify Drop para una publicación manual, pero tendrás que volver a subir la carpeta cuando hagas cambios.
