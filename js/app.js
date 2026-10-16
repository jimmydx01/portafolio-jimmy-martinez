/* =====================================================================
       EDITA AQUÍ TU INFORMACIÓN
       Todo lo que se muestra en la página sale de las listas de abajo.
       - Para agregar un proyecto o certificado: copia una línea { ... }, pégala
         debajo y cambia sus datos. La galería se ajusta sola.
       - Las imágenes van en la carpeta img/ (ver LEEME.txt).
       ===================================================================== */

const PERFIL = {
  whatsapp: "593979364044", // sin + ni espacios
  mensajeWhatsapp:
    "Hola Jimmy, vi tu portafolio y me gustaría conversar contigo.",
  cv: "CV_Martinez_Jimmy_ES.pdf", // archivo del CV junto a index.html
};

const NUCLEO = [
  {
    nombre: "Python",
    texto: "Curso Python Dominio Medio-Avanzado en la UNEMI.",
    color: "c-azul",
    icono: "terminal",
  },
  {
    nombre: "Django",
    texto: "CRUD, autenticación y ORM en proyectos reales y en mi pasantía.",
    color: "c-verde",
    icono: "servidor",
  },
  {
    nombre: "Flask",
    texto: "Aplicaciones web para clientes reales.",
    color: "c-coral",
    icono: "frasco",
  },
  {
    nombre: "MySQL",
    texto: "Diseño e integración de bases de datos.",
    color: "c-ambar",
    icono: "base",
  },
];

// Colores disponibles: c-azul, c-verde, c-coral, c-violeta, c-ambar
// Iconos para complementarias: kanban, documento, auricular, bombilla, equipo
const HABILIDADES = {
  desarrollo: [
    "Desarrollo web (HTML, CSS y JavaScript)",
    "Sistemas CRUD con autenticación",
    "WordPress",
    "Google Cloud Platform (básico)",
    "Auditoría web básica (Burp Suite)",
  ],
  soporte: [
    "Soporte técnico IT remoto y presencial",
    "Mesa de servicios / Help Desk",
    "Gestión y resolución de incidencias",
    "Mantenimiento preventivo y correctivo",
    "Diagnóstico de hardware y software",
    "Windows y Linux",
    "Redes LAN",
    "Fundamentos de ciberseguridad",
  ],
  complementarias: [
    { texto: "Gestión de proyectos", icono: "kanban", color: "c-azul" },
    { texto: "Documentación técnica", icono: "documento", color: "c-verde" },
    {
      texto: "Atención y soporte a usuarios",
      icono: "auricular",
      color: "c-coral",
    },
    { texto: "Resolución de problemas", icono: "bombilla", color: "c-ambar" },
    { texto: "Trabajo en equipo", icono: "equipo", color: "c-violeta" },
  ],
};

// Video de fondo de la portada (se ve detrás de tu nombre, sin sonido y en bucle).
// Guarda tu video en la carpeta video/ y pon su nombre aquí. Si el archivo no existe, no se muestra nada.
// velo: 0 a 1. Más alto = el video se ve más tenue y el texto se lee mejor.
const VIDEO_FONDO = {
  archivo: "video/portada.mp4",
  portada: "", // imagen opcional mientras carga el video, por ejemplo 'img/portada-video.jpg'
  velo: 0.75,
};

// Deja 'enlace' vacío ('') si aún no tienes el link: la tarjeta mostrará "Enlace pendiente".
const PROYECTOS = [
  {
    titulo: "Gestor de pedidos y menú para restaurantes",
    descripcion:
      "Sistema web para administrar los pedidos y el menú de un restaurante, desarrollado para un cliente real.",
    imagen: "img/proyectos/corte_imperial.png",
    imagenes: ["img/proyectos/corte_imperial.png"],
    video: "", // Ejemplo: "video/gestor-pedidos.mp4"
    enlace: "https://clever-kleicha-fb5fd3.netlify.app/",
    etiquetas: ["Talwind", "HTML", "PYHTON"],
  },
  {
    titulo: "Próximamente",
    descripcion:
      "Estoy preparando nuevos proyectos. Muy pronto podrás verlos aquí.",
    imagen: "",
    video: "",
    enlace: "",
    etiquetas: [],
    proximamente: true,
  },
];

const EXPERIENCIA = [
  {
    rol: "Desarrollador Web Freelance",
    empresa: "Independiente",
    lugar: "Remoto / Milagro, Ecuador",
    fecha: "Actualidad",
    puntos: [
      "Desarrollo de aplicaciones web con Django y Flask para clientes reales: gestión de pedidos y menú para restaurantes, e inventario para un negocio de eventos.",
      "Sistemas CRUD con autenticación y gestión de usuarios.",
      "Diseño e integración de bases de datos MySQL, con optimización de rendimiento y seguridad básica.",
    ],
  },
  {
    rol: "Asesor de Ventas y Soporte Técnico",
    empresa: "NOVICOMPU",
    lugar: "Milagro, Ecuador",
    fecha: "Feb 2026 – Abr 2026",
    puntos: [
      "Asesoría a clientes en la compra de laptops, PCs y All-in-One.",
      "Instalación de sistemas operativos, activación de licencias y configuración inicial de equipos.",
      "Soporte técnico básico postventa.",
    ],
  },
  {
    rol: "Técnico de Soporte IT",
    empresa: "Star Security",
    lugar: "Guayaquil, Ecuador",
    fecha: "Feb 2023 – Jul 2025",
    puntos: [
      "Soporte remoto y presencial a usuarios internos y clientes corporativos.",
      "Diagnóstico y solución de incidencias de hardware, software y red, cumpliendo los tiempos de respuesta.",
      "Mantenimiento preventivo y correctivo, y documentación de procedimientos y soluciones.",
    ],
  },
  {
    rol: "Pasante de Desarrollo de Software",
    empresa: "UNEMI (Universidad Estatal de Milagro)",
    lugar: "Milagro, Ecuador",
    fecha: "Jun 2023 – Nov 2023",
    puntos: [
      "Desarrollo de un módulo para el área de Bienestar Estudiantil, para gestionar y dar seguimiento a su información.",
      "Funcionalidades CRUD con Django y MySQL, y modelado de datos con el ORM de Django.",
      "Pruebas, validación de requerimientos y documentación técnica.",
    ],
  },
  {
    rol: "Auxiliar de Soporte Técnico",
    empresa: "GYPAM",
    lugar: "Guayaquil, Ecuador",
    fecha: "Feb 2017 – Mar 2019",
    puntos: [
      "Soporte a usuarios en entorno empresarial e instalación de sistemas operativos y software corporativo.",
      "Configuración básica de red y conectividad LAN.",
      "Respaldo y recuperación de información crítica, y registro de incidencias y soluciones.",
    ],
  },
  {
    rol: "Servicio Técnico Informático",
    empresa: "Emprendimiento propio",
    lugar: "Milagro, Ecuador",
    fecha: "Independiente",
    enlace: "https://facebook.com/JBMSOLUCIONES",
    enlaceTexto: "facebook.com/JBMSOLUCIONES",
    puntos: [
      "Mantenimiento y reparación de equipos de cómputo.",
      "Instalación, configuración y actualización de sistemas operativos y software.",
      "Asesoría a clientes en mejoras tecnológicas y buenas prácticas de uso.",
    ],
  },
];

const CERTIFICADOS = [
  {
    nombre: "Introducción a la Ciberseguridad",
    institucion: "Fundación Telefónica España, 20 horas",
    imagen: "img/certificados/certificado-01.jpg",
  },
  {
    nombre: "Python Dominio Medio-Avanzado",
    institucion: "Universidad Estatal de Milagro",
    imagen: "img/certificados/certificado-02.jpg",
  },
  {
    nombre:
      "Introducción a la Computación en la Nube con Google Cloud Platform",
    institucion: "Universidad Estatal de Milagro",
    imagen: "img/certificados/certificado-03.jpg",
  },
  {
    nombre: "Gestión de Proyectos",
    institucion: "Universidad Estatal de Milagro",
    imagen: "img/certificados/certificado-04.jpg",
  },
  {
    nombre: "Introducción a la Auditoría de Seguridad con Burp Suite",
    institucion: "Universidad Estatal de Milagro",
    imagen: "img/certificados/certificado-05.jpg",
  },
  {
    nombre: "Creación de páginas con WordPress",
    institucion: "Ministerio de Trabajo, 40 horas",
    imagen: "img/certificados/certificado-06.jpg",
  },
  {
    nombre: "Desarrollo Web: HTML, CSS, JavaScript",
    institucion: "Fundación Telefónica España",
    imagen: "img/certificados/certificado-07.jpg",
  },
  {
    nombre: "Fundamentos de Redes y CCNA",
    institucion: "Fundación Telefónica España",
    imagen: "img/certificados/certificado-08.jpg",
  },
  {
    nombre: "Instalación de Cámaras y Sistema de Seguridad",
    institucion: "Centro de Estudios Ecuador",
    imagen: "img/certificados/certificado-09.jpg",
  },
  {
    nombre: "Próximamente",
    institucion: "Nuevos certificados estarán disponibles pronto.",
    proximamente: true,
  },
];

// Redes de contacto. Las que tengan url vacía ('') no se muestran.
const REDES = [
  {
    nombre: "WhatsApp",
    icono: "whatsapp",
    texto: "+593 97 936 4044",
    url: "WHATSAPP",
  },
  {
    nombre: "Correo",
    icono: "correo",
    texto: "jimmy.b2697@gmail.com",
    url: "mailto:jimmy.b2697@gmail.com",
  },
  {
    nombre: "Facebook",
    icono: "facebook",
    texto: "JBMSOLUCIONES",
    url: "https://facebook.com/JBMSOLUCIONES",
  },
  {
    nombre: "LinkedIn",
    icono: "linkedin",
    texto: "Tu perfil de LinkedIn",
    url: "",
  },
  { nombre: "GitHub", icono: "github", texto: "Tu usuario de GitHub", url: "" },
];

/* =====================================================================
       A PARTIR DE AQUÍ ES EL CÓDIGO DE LA PÁGINA
       ===================================================================== */

const reducirMovimiento = matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const ICONOS = {
  descargar:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  correo:
    '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  enlace: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  cerrar: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  rotar:
    '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
  imagen:
    '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  premio:
    '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  whatsapp:
    '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
  facebook:
    '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  birrete:
    '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  codigo:
    '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  llave:
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
};
Object.assign(ICONOS, {
  chevron: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  terminal:
    '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
  servidor:
    '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  frasco:
    '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
  base: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  kanban: '<path d="M6 5v11"/><path d="M12 5v6"/><path d="M18 5v14"/>',
  documento:
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  auricular:
    '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>',
  bombilla:
    '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  equipo:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
});
ICONOS.download = ICONOS.descargar;

function icono(nombre, clase) {
  return (
    '<svg class="' +
    (clase || "ico") +
    '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    (ICONOS[nombre] || "") +
    "</svg>"
  );
}
function esc(t) {
  return String(t).replace(/[&<>"']/g, function (c) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c];
  });
}
function hidratarIconos(raiz) {
  (raiz || document).querySelectorAll("[data-icon]").forEach(function (el) {
    el.outerHTML = icono(el.dataset.icon, el.getAttribute("class") || "ico");
  });
}

// Si la imagen no existe, la quita y deja visible el espacio de reemplazo.
function vigilarImagen(img, alCargar, alFallar) {
  function ok() {
    if (alCargar) alCargar(img);
  }
  function mal() {
    img.remove();
    if (alFallar) alFallar();
  }
  if (img.complete) {
    img.naturalWidth > 0 ? ok() : mal();
    return;
  }
  img.addEventListener("load", ok, { once: true });
  img.addEventListener("error", mal, { once: true });
}

/* ---------- Enlaces de contacto y CV ---------- */
const urlWhatsapp =
  "https://wa.me/" +
  PERFIL.whatsapp +
  "?text=" +
  encodeURIComponent(PERFIL.mensajeWhatsapp);
document.querySelectorAll("[data-wa]").forEach(function (a) {
  a.href = urlWhatsapp;
});
document.querySelectorAll("[data-cv]").forEach(function (a) {
  a.href = PERFIL.cv;
});
document.getElementById("anio").textContent = new Date().getFullYear();

/* ---------- Habilidades ---------- */
document.getElementById("tilesNucleo").innerHTML = NUCLEO.map(function (n, i) {
  return (
    '<div class="pop flex" style="--d:' +
    i * 100 +
    'ms"><div class="tile ' +
    n.color +
    '">' +
    icono(n.icono, "tile-glyph") +
    '<p class="font-display text-3xl font-extrabold tracking-tight">' +
    esc(n.nombre) +
    "</p>" +
    '<p class="mt-3" style="opacity:.92">' +
    esc(n.texto) +
    "</p></div></div>"
  );
}).join("");

var GRUPOS = [
  {
    titulo: "Desarrollo",
    icono: "codigo",
    color: "c-azul",
    lista: HABILIDADES.desarrollo,
  },
  {
    titulo: "Soporte técnico",
    icono: "llave",
    color: "c-violeta",
    lista: HABILIDADES.soporte,
  },
];
document.getElementById("acordeones").innerHTML = GRUPOS.map(function (g, gi) {
  var id = "acc" + gi;
  var items = g.lista
    .map(function (t, i) {
      return (
        '<li style="--i:' +
        i +
        '"><span class="chk">' +
        icono("check") +
        "</span><span>" +
        esc(t) +
        "</span></li>"
      );
    })
    .join("");
  return (
    '<div class="pop" style="--d:' +
    gi * 120 +
    'ms"><div class="acc ' +
    g.color +
    '">' +
    '<button type="button" class="acc-btn" aria-expanded="false" aria-controls="' +
    id +
    '">' +
    '<span class="acc-ico">' +
    icono(g.icono) +
    "</span>" +
    '<span><span class="block font-display text-xl font-bold">' +
    esc(g.titulo) +
    "</span>" +
    '<span class="block text-sm text-muted">' +
    g.lista.length +
    " habilidades</span></span>" +
    icono("chevron", "ico acc-chev") +
    "</button>" +
    '<div class="acc-panel" id="' +
    id +
    '"><div><ul class="acc-list">' +
    items +
    "</ul></div></div>" +
    "</div></div>"
  );
}).join("");
document.querySelectorAll(".acc-btn").forEach(function (b) {
  b.addEventListener("click", function () {
    var abierto = b.closest(".acc").classList.toggle("open");
    b.setAttribute("aria-expanded", abierto);
  });
});

document.getElementById("compGrid").innerHTML = HABILIDADES.complementarias
  .map(function (c, i) {
    return (
      '<li class="pop flex" style="--d:' +
      i * 90 +
      'ms"><div class="comp ' +
      c.color +
      '">' +
      '<span class="comp-ico">' +
      icono(c.icono) +
      "</span>" +
      '<span class="font-display text-lg font-bold leading-snug">' +
      esc(c.texto) +
      "</span></div></li>"
    );
  })
  .join("");

(function () {
  var elementos = document.querySelectorAll("#habilidades .pop");
  if (reducirMovimiento || !("IntersectionObserver" in window)) {
    elementos.forEach(function (e) {
      e.classList.add("in");
    });
    return;
  }
  var obs = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  elementos.forEach(function (e) {
    obs.observe(e);
  });
})();

/* ---------- Video de fondo de la portada ---------- */
(function () {
  var cont = document.getElementById("videoFondo");
  if (!VIDEO_FONDO.archivo || reducirMovimiento) {
    cont.remove();
    return;
  }
  cont.style.setProperty("--velo", VIDEO_FONDO.velo);
  var v = document.createElement("video");
  v.muted = true;
  v.loop = true;
  v.autoplay = true;
  v.playsInline = true;
  v.preload = "auto";
  v.setAttribute("muted", "");
  v.setAttribute("playsinline", "");
  if (VIDEO_FONDO.portada) v.poster = VIDEO_FONDO.portada;
  v.addEventListener("loadeddata", function () {
    cont.classList.add("on");
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  });
  v.addEventListener("error", function () {
    cont.remove();
  });
  v.src = VIDEO_FONDO.archivo;
  cont.insertBefore(v, cont.firstChild);
})();

/* ---------- Proyectos ---------- */
(function () {
  var cont = document.getElementById("galeriaProyectos");
  var visor = document.getElementById("visor");
  var visorImg = document.getElementById("visorImg");
  var visorTitulo = document.getElementById("visorTitulo");
  var visorAnterior = document.getElementById("visorAnterior");
  var visorSiguiente = document.getElementById("visorSiguiente");
  var imagenesActuales = [];
  var indiceImagenActual = 0;

  function mostrarImagenProyecto(indice) {
    indiceImagenActual =
      (indice + imagenesActuales.length) % imagenesActuales.length;
    visorImg.src = imagenesActuales[indiceImagenActual];
    visorImg.alt = "Captura " + (indiceImagenActual + 1) + " del proyecto";
    visorAnterior.hidden = imagenesActuales.length < 2;
    visorSiguiente.hidden = imagenesActuales.length < 2;
  }

  cont.innerHTML = PROYECTOS.map(function (p, i) {
    var etiquetas = (p.etiquetas || [])
      .map(function (t) {
        return (
          '<li class="rounded-full bg-line/60 px-2.5 py-1 text-xs font-medium">' +
          esc(t) +
          "</li>"
        );
      })
      .join("");
    var imagenes =
      p.imagenes && p.imagenes.length ? p.imagenes : p.imagen ? [p.imagen] : [];
    var imagen = imagenes.length
      ? '<button type="button" class="absolute inset-0 h-full w-full cursor-zoom-in" data-proyecto-imagen="' +
        i +
        '" aria-label="Ampliar imágenes de ' +
        esc(p.titulo) +
        '"><img src="' +
        esc(imagenes[0]) +
        '" alt="Captura del proyecto ' +
        esc(p.titulo) +
        '" loading="lazy" class="h-full w-full object-cover"></button>'
      : '<div class="ph">' + icono("imagen") + "<span>Sin imagen</span></div>";
    var botonProyecto = p.enlace
      ? '<a href="' +
        esc(p.enlace) +
        '" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">Ver proyecto' +
        icono("enlace") +
        "</a>"
      : '<button type="button" class="btn btn-ghost btn-sm" disabled>Ver proyecto</button>';
    var botonVideo =
      '<button type="button" class="btn btn-ghost btn-sm" data-video-proyecto="' +
      i +
      '"' +
      (p.video ? "" : " disabled") +
      ">Ver video del proyecto" +
      icono("play") +
      "</button>";
    return (
      '<article class="flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface">' +
      '<div class="relative aspect-[16/10] overflow-hidden bg-line/20">' +
      imagen +
      "</div>" +
      '<div class="flex flex-1 flex-col p-5">' +
      (p.proximamente
        ? '<span class="mb-3 w-fit rounded-full bg-line/60 px-3 py-1 text-xs font-semibold text-muted">Próximamente</span>'
        : "") +
      '<h3 class="font-display text-xl font-bold leading-snug">' +
      esc(p.titulo) +
      "</h3>" +
      '<p class="mt-2 text-muted">' +
      esc(p.descripcion) +
      "</p>" +
      (etiquetas
        ? '<ul class="mt-4 flex flex-wrap gap-2">' + etiquetas + "</ul>"
        : "") +
      '<div class="mt-auto flex flex-wrap gap-3 pt-5">' +
      botonProyecto +
      botonVideo +
      "</div>" +
      "</div></article>"
    );
  }).join("");
  cont.querySelectorAll("img").forEach(function (img) {
    vigilarImagen(img);
  });

  cont.querySelectorAll("[data-proyecto-imagen]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var proyecto = PROYECTOS[Number(btn.dataset.proyectoImagen)];
      imagenesActuales =
        proyecto.imagenes && proyecto.imagenes.length
          ? proyecto.imagenes
          : [proyecto.imagen];
      visorTitulo.textContent = proyecto.titulo;
      mostrarImagenProyecto(0);
      visor.showModal();
    });
  });
  visorAnterior.addEventListener("click", function () {
    mostrarImagenProyecto(indiceImagenActual - 1);
  });
  visorSiguiente.addEventListener("click", function () {
    mostrarImagenProyecto(indiceImagenActual + 1);
  });

  var videoDialog = document.getElementById("visorVideo");
  var videoPlayer = document.getElementById("visorVideoPlayer");
  var videoTitulo = document.getElementById("visorVideoTitulo");
  cont.querySelectorAll("[data-video-proyecto]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var proyecto = PROYECTOS[Number(btn.dataset.videoProyecto)];
      if (!proyecto.video) return;
      videoTitulo.textContent = proyecto.titulo;
      videoPlayer.src = proyecto.video;
      videoDialog.showModal();
      var reproduccion = videoPlayer.play();
      if (reproduccion && reproduccion.catch)
        reproduccion.catch(function () {});
    });
  });
  function cerrarVideo() {
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
  }
  videoDialog.addEventListener("close", cerrarVideo);
  videoDialog.addEventListener("click", function (e) {
    if (e.target === videoDialog) videoDialog.close();
  });
  document
    .getElementById("visorVideoCerrar")
    .addEventListener("click", function () {
      videoDialog.close();
    });
})();

/* ---------- Línea de tiempo ---------- */
document.getElementById("lineaTiempo").innerHTML = EXPERIENCIA.map(
  function (e) {
    var puntos = e.puntos
      .map(function (t) {
        return (
          '<li class="flex gap-3"><span class="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-on-band/50"></span><span>' +
          esc(t) +
          "</span></li>"
        );
      })
      .join("");
    var enlace = e.enlace
      ? '<p class="mt-4"><a href="' +
        esc(e.enlace) +
        '" target="_blank" rel="noopener" class="font-medium text-sun underline underline-offset-4">' +
        esc(e.enlaceTexto || e.enlace) +
        "</a></p>"
      : "";
    return (
      '<li class="tl-item">' +
      '<span class="tl-dot"></span>' +
      '<p class="tl-date font-display font-bold">' +
      esc(e.fecha) +
      "</p>" +
      '<div class="tl-body">' +
      '<h3 class="font-display text-xl font-bold md:text-2xl">' +
      esc(e.rol) +
      "</h3>" +
      '<p class="mt-1"><span class="font-semibold text-sun">' +
      esc(e.empresa) +
      '</span><span class="text-on-band/70">, ' +
      esc(e.lugar) +
      "</span></p>" +
      '<ul class="mt-4 max-w-[60ch] space-y-2 text-on-band/85">' +
      puntos +
      "</ul>" +
      enlace +
      "</div></li>"
    );
  },
).join("");

(function () {
  var tl = document.querySelector(".tl");
  var relleno = tl.querySelector(".tl-fill");
  var items = tl.querySelectorAll(".tl-item");
  var esperando = false;

  function actualizar() {
    esperando = false;
    var disparo = window.innerHeight * 0.6;
    var caja = tl.getBoundingClientRect();
    var alto = reducirMovimiento
      ? caja.height
      : Math.max(0, Math.min(caja.height, disparo - caja.top));
    relleno.style.height = alto + "px";
    items.forEach(function (li) {
      if (
        reducirMovimiento ||
        li.querySelector(".tl-dot").getBoundingClientRect().top < disparo
      )
        li.classList.add("is-on");
    });
  }
  function pedir() {
    if (!esperando) {
      esperando = true;
      requestAnimationFrame(actualizar);
    }
  }
  window.addEventListener("scroll", pedir, { passive: true });
  window.addEventListener("resize", pedir);
  actualizar();
})();

/* ---------- Certificados y visor ---------- */
(function () {
  var cont = document.getElementById("galeriaCertificados");
  var visor = document.getElementById("visor");
  var visorImg = document.getElementById("visorImg");
  var visorTitulo = document.getElementById("visorTitulo");
  var visorAnterior = document.getElementById("visorAnterior");
  var visorSiguiente = document.getElementById("visorSiguiente");

  cont.innerHTML = CERTIFICADOS.map(function (c, i) {
    if (c.proximamente) {
      return (
        '<div class="cert" aria-label="Certificados próximamente">' +
        '<span class="media relative grid aspect-[4/3] place-items-center overflow-hidden rounded-xl border border-dashed border-line bg-line/20 text-muted">' +
        icono("premio", "h-10 w-10") +
        "</span>" +
        '<span class="mt-3 block font-display text-base font-bold leading-snug">' +
        esc(c.nombre) +
        "</span>" +
        '<span class="mt-0.5 block text-sm text-muted">' +
        esc(c.institucion) +
        "</span>" +
        "</div>"
      );
    }
    return (
      '<button type="button" class="cert" data-i="' +
      i +
      '" disabled>' +
      '<span class="media relative block aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface">' +
      '<span class="ph">' +
      icono("premio") +
      "<span>" +
      (c.imagen
        ? "Agrega el certificado en<br>" + esc(c.imagen)
        : "Sin imagen") +
      "</span></span>" +
      (c.imagen
        ? '<img src="' +
          esc(c.imagen) +
          '" alt="Certificado: ' +
          esc(c.nombre) +
          '" loading="lazy" class="absolute inset-0 h-full w-full object-cover">'
        : "") +
      "</span>" +
      '<span class="mt-3 block font-display text-base font-bold leading-snug">' +
      esc(c.nombre) +
      "</span>" +
      '<span class="mt-0.5 block text-sm text-muted">' +
      esc(c.institucion) +
      "</span>" +
      "</button>"
    );
  }).join("");

  cont.querySelectorAll(".cert").forEach(function (btn) {
    var img = btn.querySelector("img");
    if (img)
      vigilarImagen(img, function () {
        btn.disabled = false;
      });
    btn.addEventListener("click", function () {
      var c = CERTIFICADOS[btn.dataset.i];
      visorImg.src = c.imagen;
      visorImg.alt = "Certificado: " + c.nombre;
      visorTitulo.textContent = c.nombre + ", " + c.institucion;
      visorAnterior.hidden = true;
      visorSiguiente.hidden = true;
      visor.showModal();
    });
  });

  visor.addEventListener("click", function (e) {
    if (e.target === visor) visor.close();
  });
  document.getElementById("visorCerrar").addEventListener("click", function () {
    visor.close();
  });
})();

/* ---------- Redes en el pie ---------- */
document.getElementById("listaRedes").innerHTML = REDES.filter(function (r) {
  return r.url;
})
  .map(function (r) {
    var url = r.url === "WHATSAPP" ? urlWhatsapp : r.url;
    var externo = /^https?:/.test(url);
    return (
      '<li><a href="' +
      esc(url) +
      '"' +
      (externo ? ' target="_blank" rel="noopener"' : "") +
      ' class="flex items-center gap-4 rounded-[14px] border border-on-band/15 px-5 py-4 transition-colors hover:border-sun hover:bg-on-band/5">' +
      icono(r.icono, "ico text-sun") +
      '<span><span class="block text-sm text-on-band/65">' +
      esc(r.nombre) +
      '</span><span class="block font-medium">' +
      esc(r.texto) +
      "</span></span></a></li>"
    );
  })
  .join("");

hidratarIconos();

/* ---------- Foto que se voltea ---------- */
(function () {
  var flip = document.getElementById("flip");
  vigilarImagen(document.getElementById("fotoFrente"));
  vigilarImagen(document.getElementById("fotoReverso"));
  flip.addEventListener("click", function () {
    var volteada = flip.classList.toggle("is-flipped");
    flip.setAttribute("aria-pressed", volteada);
    flip.classList.add("was-used");
  });
})();

/* ---------- Tema claro / oscuro ---------- */
document.getElementById("btnTema").addEventListener("click", function () {
  var siguiente =
    document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro";
  document.documentElement.dataset.tema = siguiente;
  try {
    localStorage.setItem("tema", siguiente);
  } catch (e) {}
});

/* ---------- Menú móvil ---------- */
(function () {
  var btn = document.getElementById("btnMenu");
  var panel = document.getElementById("panelMenu");
  function poner(abierto) {
    panel.classList.toggle("hidden", !abierto);
    btn.setAttribute("aria-expanded", abierto);
    btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    btn.innerHTML = icono(abierto ? "cerrar" : "menu");
  }
  btn.addEventListener("click", function () {
    poner(panel.classList.contains("hidden"));
  });
  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      poner(false);
    });
  });
})();

/* ---------- Resalta la sección visible en el menú ---------- */
(function () {
  var enlaces = document.querySelectorAll("[data-nav]");
  var observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        enlaces.forEach(function (a) {
          a.setAttribute(
            "aria-current",
            a.dataset.nav === en.target.id ? "true" : "false",
          );
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  [
    "sobre-mi",
    "habilidades",
    "proyectos",
    "experiencia",
    "certificados",
    "contacto",
  ].forEach(function (id) {
    var s = document.getElementById(id);
    if (s) observador.observe(s);
  });
})();
