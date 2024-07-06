// Variables
const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";

// Función para encriptar las palabras
function verificarEncriptar() {
    if (!validarCaracteres()) {
        return;
    }

    let palabra = document.getElementById("textoAModificar").value;
    let palabraEncriptada = "";

    //Lógica para encriptar las palabras
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === "a") {
            palabraEncriptada += letraA;
        } else if (palabra[i] === "e") {
            palabraEncriptada += letraE;
        } else if (palabra[i] === "i") {
            palabraEncriptada += letraI;
        } else if (palabra[i] === "o") {
            palabraEncriptada += letraO;
        } else if (palabra[i] === "u") {
            palabraEncriptada += letraU;
        } else {
            palabraEncriptada += palabra[i];
        }
    }
    guardarInformacion();
    localStorage.setItem("palabraEncriptada", palabraEncriptada);
    mostrarInformacionEncriptado();
    limpiarCaja();
    return palabraEncriptada;
    //console.log(palabraEncriptada);
}


// Función para desencriptar las palabras
function verificarDesencriptar() {
    if (!validarCaracteres()) {
        return;
    }
    let palabra = document.getElementById("textoAModificar").value;
    let palabraDesencriptada = "";

    // Reemplazo de secuencias por letras correspondientes
    palabraDesencriptada = palabra.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    localStorage.setItem("palabraDesencriptada", palabraDesencriptada);

    mostrarInformacionDesencriptar();
    limpiarCaja();
    //return palabraDesencriptada;
    console.log(palabraDesencriptada);
}

// Funciones para mostrar la información guardada (el texto encriptado)
function mostrarInformacionEncriptado() {
    let textoEncriptado = document.getElementById('textoEncriptado');
    textoEncriptado.textContent = localStorage.getItem("palabraEncriptada");
    return textoEncriptado;
}
function mostrarInformacionDesencriptar() {
    let textoEncriptado = document.getElementById('textoEncriptado');
    textoEncriptado.textContent = localStorage.getItem("palabraDesencriptada");
    return textoEncriptado;
}

// Función para guardar información Solo si pasa la validación (validarCaracteres)
function guardarInformacion() {
    if (validarCaracteres()) {
        let palabra = document.getElementById("textoAModificar").value;
        localStorage.setItem('palabra', palabra);
    }
}

// Función para validación de caracteres y minúsculas
function validarCaracteres() {
    let palabra = document.getElementById("textoAModificar").value;
    if (!/^[a-z\s]+$/.test(palabra)) {
        alert("Por favor, ingresa solo letras minúsculas y sin caracteres especiales.");
        return false;
    } else {
        return true;
    }
}

// Función para limpiar campo de texto
function limpiarCaja() {
    document.getElementById('textoAModificar').value = '';
}