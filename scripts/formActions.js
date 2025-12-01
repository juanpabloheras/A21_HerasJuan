const NACIONALIDADES_ACEPTADAS = [
    { key: 'AU', name: "Australia" },
    { key: 'BR', name: "Brasil" },
    { key: 'CA', name: "Canadá" },
    { key: 'CH', name: "Suiza" },
    { key: 'DE', name: "Alemania" },
    { key: 'DK', name: "Dinamarca" },
    { key: 'ES', name: "España" },
    { key: 'FI', name: "Finlandia" },
    { key: 'FR', name: "Francia" },
    { key: 'GB', name: "Reino Unido" },
    { key: 'IE', name: "Irlanda" },
    { key: 'IN', name: "India" },
    { key: 'IR', name: "Irán" },
    { key: 'MX', name: "México" },
    { key: 'NL', name: "Países Bajos" },
    { key: 'NO', name: "Noruega" },
    { key: 'NZ', name: "Nueva Zelanda" },
    { key: 'RS', name: "Serbia" },
    { key: 'TR', name: "Turquía" },
    { key: 'UA', name: "Ucrania" },
    { key: 'US', name: "Brasil" },
];

window.onload = function () {
    const form = this.document.getElementsByTagName("form");
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");
    const labels = form[0].getElementsByTagName("label");
    for (let input of inputs) {
        input.onfocus = resaltarDesresaltar;

        input.addEventListener("focus", resaltarLabel);
        input.addEventListener("blur", resaltarDesresaltar);
        input.addEventListener("blur", resaltarLabel);
    }

    for (let select of selects) {
        select.onfocus = resaltarDesresaltar;

        select.addEventListener("focus", resaltarLabel);
        select.addEventListener("blur", resaltarDesresaltar);
        select.addEventListener("blur", resaltarLabel);
    }




    document.getElementById("first-name").addEventListener("input", validarInput);
    document.getElementById("last-name").addEventListener("input", validarInput);

    llenarNacionalidad();
}


function llenarNacionalidad() {
    const nacionalidad = document.getElementById("nationality");
    for (let { key, name } of NACIONALIDADES_ACEPTADAS) {
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidad.appendChild(option);
    }
}

function resaltar(evento) {
    evento.target.classList.add("selected");
}

function noResaltar(evento) {
    const clase = evento.target.classList.contains("selected");
    if (clase) {
        evento.target.classList.remove("selected");
    }
}


function resaltarDesresaltar(evento) {
    evento.target.classList.toggle("selected");
}

function resaltarLabel(evento) {
    const input = evento.target;
    const label = document.querySelector(`label[for="${input.id}"]`);

    label.classList.toggle("selected-label");
}


/** Validar los inputs  */




function validarInput(evento) {

    /**Generamos una regex para validar que coincida con lo que queremos - En este caso que incluya solo letras normales, acentuadas y espacios. Que sean de 2-10 caracteres */
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚÑñ\s]{2,10}$/;

    if (!regexLetras.test(evento.target.value)) {
        evento.target.classList.add("error-input");
        document.getElementById("error-info").innerHTML = "Los nombres no pueden contener números o simbolos espciales.";
    } else {
        evento.target.classList.remove("error-input");
        document.getElementById("error-info").innerHTML = "";

    }

}

