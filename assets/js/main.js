var navbarButton = document.getElementById('navButton')
var elemento = document.querySelector(".navbar")

// Modifica CSS al hacer click del menu
navbarButton.addEventListener("click", function() {
  if (navbarButton.classList.contains("collapsed")) {
   elemento.style.backdropFilter = "none"
  } else {
    elemento.style.right = "0"
    elemento.style.position = "fixed"
    elemento.style.backdropFilter = "blur(10px)"
  }
});

// Aplica CSS modificado al menu cuando se hace scroll en la landing
window.addEventListener("scroll", function() {
  var alturaPantalla = window.innerHeight;
  var posicionElemento = elemento.offsetTop;
  var posicionActual = window.pageYOffset;
  var porcentaje = (posicionActual / alturaPantalla) * 100;

  if (porcentaje >= 40) {
    elemento.classList.add("navbar-mod");
  } else {
    elemento.classList.remove("navbar-mod");
  }
});

// aplica funcionalidad al tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})