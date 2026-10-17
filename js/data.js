/* =====================================================================
   DATOS EDITABLES DEL PORTAFOLIO
   Cambia aquí la información que se muestra en la página.
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
    "Tailwind CSS",
    "Bootstrap",
    "React",
    "Flask",
    "Linux",
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

// Video de fondo de la portada. velo: 0 a 1; más alto = video más tenue.
const VIDEO_FONDO = {
  archivo: "video/portada.mp4",
  portada: "",
  velo: 0.75,
};

const PROYECTOS = [
  {
    titulo: "Gestor de pedidos y menú para restaurantes",
    descripcion:
      "Sistema web para administrar los pedidos y el menú de un restaurante, desarrollado para un cliente real.",
    imagen: "img/proyectos/corte_imperial.png",
    imagenes: ["img/proyectos/corte_imperial.png"],
    video: "",
    enlace: "https://clever-kleicha-fb5fd3.netlify.app/",
    etiquetas: ["Talwind", "HTML", "PYHTON"],
  },
  {
    titulo: "Lector QR para Biblioteca y módulos CRAI",
    descripcion:
      "Estoy preparando nuevos proyectos. Muy pronto podrás verlos aquí.",
    imagen: "img/proyectos/qr01.png",
    imagenes: [
      "img/proyectos/qr01.png",
      "img/proyectos/qr02.png",
      "img/proyectos/qr03.png",
    ],
    video: "video/qr.mp4",
    enlace: "https://generadorcrai.netlify.app/generar",
    etiquetas: ["Talwind", "HTML", "CSS", "Javascript"],
    proximamente: true,
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
