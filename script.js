
function evaluarProducto() {

    let producto = document.getElementById("producto").value;
    let resultado = "";

    switch (producto) {

        case "celular":
            resultado = "Repara la pantalla, sustituye la batería con ayuda técnica o dona el celular si todavía funciona.";
            break;

        case "computadora":
            resultado = "Actualiza la memoria RAM, instala un SSD o utiliza sus componentes en otros equipos compatibles.";
            break;

        case "botella":
            resultado = "Separa la botella limpia y deposítala en un centro de reciclaje que acepte este material.";
            break;

        case "ropa":
            resultado = "Repara, dona, intercambia o transforma la ropa en otros productos textiles.";
            break;

        case "mueble":
            resultado = "Restaura, repara o dona el mueble para prolongar su vida útil.";
            break;

        default:
            resultado = "Selecciona un producto para continuar.";
    }

    document.getElementById("resultadoCircular").textContent = resultado;
}


function calcularEnergia() {

    let potencia = parseFloat(document.getElementById("potencia").value);
    let horas = parseFloat(document.getElementById("horas").value);
    let dias = parseFloat(document.getElementById("dias").value);

    let resultado = document.getElementById("resultadoEnergia");

    if (!Number.isFinite(potencia) ||
        !Number.isFinite(horas) ||
        !Number.isFinite(dias) ||
        potencia <= 0 ||
        horas < 0 ||
        horas > 24 ||
        dias < 1 ||
        dias > 31 ||
        !Number.isInteger(dias)) {

        resultado.textContent = "Introduce valores válidos.";
        return;
    }

    let consumo = (potencia * horas * dias) / 1000;

    resultado.textContent =
        "Consumo eléctrico: " +
        consumo.toFixed(2) +
        " kWh en " + dias + " días.";
}
function actualizarProgreso() {

    const casillas = document.querySelectorAll(
        "#acciones input[type='checkbox']"
    );

    let estados = [];
    let completadas = 0;

    casillas.forEach(function(casilla) {

        estados.push(casilla.checked);

        if (casilla.checked) {
            completadas++;
        }

    });

    const porcentaje = (completadas / casillas.length) * 100;

    document.getElementById("progreso").style.width =
        porcentaje + "%";

    document.getElementById("porcentaje").textContent =
        porcentaje + "% completado";

    localStorage.setItem("habitos", JSON.stringify(estados));
}
function cargarProgreso() {

    const datos = localStorage.getItem("habitos");

    if (datos !== null) {

        const estados = JSON.parse(datos);

        const casillas = document.querySelectorAll(
            "#acciones input[type='checkbox']"
        );

        casillas.forEach(function(casilla, indice) {

            casilla.checked = estados[indice] === true;

        });

        actualizarProgreso();
    }
}

document.addEventListener("DOMContentLoaded", cargarProgreso);