let titulo = document.querySelector("h1")
titulo.innerHTML = "Hora del Desafío"

function presionarConsole(){
    alert("El boton fue clicado!")
}

function presionarPrompt(){
    ciudad = prompt("Coloca una ciudad de Brasil: ")
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}

function presionarAlert(){
    alert("Yo amo JS")
}

function suma(){
    numero1 = parseInt(prompt("Coloca un número: "))
    numero2 = parseInt(prompt("Coloca otro número: "))
    alert(`El resultado de la suma es ${numero1 + numero2}`)
}