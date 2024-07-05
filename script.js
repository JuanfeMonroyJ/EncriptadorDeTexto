// Variables
const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";

// Función para encriptar las palabras
function verificarEncriptar() {
    let palabra = document.getElementById("textoAModificar").value;
    let palabraEncriptada = "";

    // Validación para solo aceptar letras minúsculas y sin caracteres especiales
    if (!/^[a-z\s]+$/.test(palabra)) {
        alert("Por favor, ingresa solo letras minúsculas y sin caracteres especiales.");
    } else {

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
        limpiarCaja();
    }
    return palabraEncriptada;
}



// Función para desencriptar las palabras
function verificarDesencriptar() {
    let palabra = document.getElementById("textoAModificar").value;
    let palabraDesencriptada = "";

    if (!/^[a-z\s]+$/.test(palabra)) {
        alert("Por favor, ingresa solo letras minúsculas y sin caracteres especiales.");
        return;
    }

    // Reemplazo de secuencias por letras correspondientes
    palabraDesencriptada = palabra.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    limpiarCaja();
    return palabraDesencriptada;
}


function limpiarCaja() {
    document.getElementById('textoAModificar').value = '';
}
