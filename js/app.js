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
