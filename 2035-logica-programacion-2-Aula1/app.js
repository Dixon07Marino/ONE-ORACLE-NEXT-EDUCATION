let numeroSecreto = 0
let intentos = 0
enfocarInput()

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value)
    if (numeroDeUsuario > 0) {
        if (numeroDeUsuario === numeroSecreto) {
            asignarTexto("p", `Adivinaste el número secreto en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`)
            document.getElementById("reiniciar").removeAttribute("disabled")
        }
        else {
            if (numeroDeUsuario > numeroSecreto){
                asignarTexto("p", "Pista: El número secreto es menor!")
            }
            else{
                asignarTexto("p", "Pista: El número secreto es mayor!")
            }
            intentos++
            limpiarInput()
        }
    }
    else {
        asignarTexto("p", "Debes colocar un número del 1 al 10: ")
    }
}

function enfocarInput() {
    document.getElementById("valorUsuario").focus()
}

function reiniciarJuego() {
    limpiarInput()
    condicionesIniciales()
    document.getElementById("reiniciar").setAttribute("disabled", true)
    enfocarInput()

}

function condicionesIniciales(){
    asignarTexto("h1", "¡Juego del número secreto!")
    asignarTexto("p", "Ingresa un número del 1 al 10: ")
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
}

function limpiarInput(){
    document.querySelector("#valorUsuario").value = ""
}

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1
   
}

verificarIntento()

condicionesIniciales()