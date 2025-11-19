console.log("Ingresa un numero: ");
let hours = parseInt(prompt("Ingrese las horas que permaneció en el estacionamiento: "));
let total = hours * 15;

if (hours >= 3) {
    total = total - 20;
}

console.log("Tu total a pagar es: " + total);