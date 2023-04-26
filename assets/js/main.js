var navbarButton = document.getElementById('navButton')
var elemento = document.querySelector(".navbar")


navbarButton.addEventListener("click", function() {
  if (navbarButton.classList.contains("collapsed")) {
   elemento.style.backdropFilter = "none"

  } else {
     elemento.style.right = "0"
   elemento.style.position = "fixed"
   elemento.style.backdropFilter = "blur(10px)"
  }
});

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