let numeroLimite = parseInt(prompt("Vamos a jugar!\nHasta que número quieres adivinar?: "))
let secretNumber = Math.floor(Math.random() * numeroLimite) + 1;
let userNumber;
let intentos = 1
let limite = 3

while (userNumber != secretNumber) {
    userNumber = parseInt(prompt(`Coloca un número del 1 al ${numeroLimite}: `));
    console.log(typeof(userNumber))

    if (userNumber == secretNumber) {
        alert(`Adivinaste el resultado, era: ${secretNumber}, que crack! Lo lograste ${intentos} ${intentos == 1 ? "vez!" : "veces!"}`) //operador ternario
    }
    else {
        if (userNumber > secretNumber) {
            alert("El numero secreto es menor!")
        }
        else {
            alert("El numero secreto es mayor!")
        }
        intentos++

        if (intentos > limite) {
            alert(`El número maximo de intentos era: ${limite}`)
            break;
        }
    }
}

alert("El juego acabó!!!")