let montoPrestamo = parseInt (prompt ("Ingresar el monto del prestamo"));
let tasaInteres = parseFloat (prompt ("Ingresar la tasa de interes (%)"));
let numeroCuotas = parseInt (prompt("Ingresar el numero de cuotas"));

const tasaInteresDecimal = tasaInteres / 100;
let factor = 1;
for ( let i = 0; i < numeroCuotas; i++){
    factor *= (1 + tasaInteresDecimal);
}

const cuotaMensual = (montoPrestamo * tasaInteresDecimal * factor / (factor - 1));
const montoTotal = cuotaMensual * numeroCuotas;

console.log("Cuota mensual",cuotaMensual)
console.log("Monto total a pagar",montoTotal)