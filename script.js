function encriptarTexto() {
    let texto = document.getElementById("texto").value;
    if (!/^[a-z\s]+$/.test(texto)) {
        mostrarNotificacion("El texto solo debe contener letras minúsculas y sin acentos.", true);
        return;
    }
    const textoEncriptado = encriptar(texto);
    document.getElementById("resultado").textContent = textoEncriptado;
    mostrarNotificacion("Texto encriptado exitosamente!");
}

function desencriptarTexto() {
    let texto = document.getElementById("texto").value;
    if (!/^[a-z\s]+$/.test(texto)) {
        mostrarNotificacion("El texto solo debe contener letras minúsculas y sin acentos.", true);
        return;
    }
    const textoDesencriptado = desencriptar(texto);
    document.getElementById("resultado").textContent = textoDesencriptado;
    mostrarNotificacion("Texto desencriptado exitosamente!");
}

function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function copiarAlPortapapeles() {
    const texto = document.getElementById("resultado").textContent;
    navigator.clipboard.writeText(texto)
        .then(() => {
            mostrarNotificacion("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
            mostrarNotificacion("Error al copiar el texto", true);
        });
}

function mostrarNotificacion(mensaje, esError = false) {
    const notificacion = document.getElementById("notificacion");
    notificacion.textContent = mensaje;
    notificacion.style.backgroundColor = esError ? "#d32f2f" : "#4caf50";
    notificacion.style.display = "block";
    setTimeout(() => {
        notificacion.style.display = "none";
    }, 3000);
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
}
