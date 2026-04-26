function generarTablas() {

    let contenedor = document.getElementById("contenedor");

    let numero = 5;   // ← aquí cambias la tabla

    let contenido = "";

    contenido += "<div class='tabla-titulo'>";
    contenido += "<div>Operación</div>";
    contenido += "<div>Resultado</div>";
    contenido += "</div>";

    for (let i = 1; i <= 10; i++) {

        contenido += "<div class='item'>";
        contenido += numero + " x " + i;
        contenido += "<span>" + (numero * i) + "</span>";
        contenido += "</div>";
    }

    contenedor.innerHTML = contenido;
}