let boton = document.getElementById("btnModo");

boton.addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");

    if (document.body.classList.contains("modo-claro")) {
        boton.textContent = "modo oscuro🌙";
    } else {
        boton.textContent = "modo claro☀️";
    }
});

const hamburger =  document.getElementById('hamburger');
const navItem =  document.getElementById('nav-item');

hamburger.addEventListener('click', () => {
  navItem.classList.toggle('show');
});

const btnVerMas = document.querySelectorAll("#btn-ver-mas");
const contenido = document.querySelectorAll("#actividades");

if (btnVerMas && contenido) {
    btnVerMas.addEventListener("click", () => {
        contenido.classList.toggle("oculto");

        const abierto = !contenido.classList.contains("oculto");
        boton.textContent = abierto ? "Ver menos" : "Ver más" ;
    });
}
