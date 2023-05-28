function encriptar() {
    let texto = document.getElementById("texto").value;
    // let tituloMensaje = document.getElementById("titulo-mensaje");
    // let parrafo = document.getElementById("parrafo");
    // let mono = document.getElementById("mono");

    let textoCrifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoCrifrado;
        document.getElementById("titulo-mensaje").textContent = "Texto encriptado con éxito";
        document.getElementById("parrafo").textContent = "";
        document.getElementById("mono").src = "imagenes/Muñeco.png";
    } else {
        document.getElementById("mono").src = "imagenes/Muñeco.png";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let textoCrifrado = document.getElementById("texto").value;

    let texto = textoCrifrado
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = texto;
        document.getElementById("titulo-mensaje").textContent = "Texto desencriptado con éxito";
        document.getElementById("parrafo").textContent = "";
        document.getElementById("mono").src = "imagenes/Muñeco.png";
    } else {
        document.getElementById("mono").src = "imagenes/Muñeco.png";
        alert("Debes ingresar algún texto");
    }
}