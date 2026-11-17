//boton modo claro-modo oscuro
let boton = document.getElementById("btnModo");

boton.addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");

    if (document.body.classList.contains("modo-claro")) {
        boton.textContent = "modo oscuro🌙";
    } else {
        boton.textContent = "modo claro☀️";
    }
});
//boton hamburguesa
const hamburger =  document.getElementById('hamburger');
const navItem =  document.getElementById('nav-item');

hamburger.addEventListener('click', () => {
  navItem.classList.toggle('show');
});

//boton ver mas
document.querySelectorAll(".btn-ver-mas").forEach(boton => {
    boton.addEventListener("click", () => {
        const detalle = boton.nextElementSibling;
        detalle.classList.toggle("oculto");

        const abierto = !detalle.classList.contains("oculto");
        boton.textContent = abierto ? "Ver menos" : "Ver más";

    })

});