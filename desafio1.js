alert("Desafio Condicionales y Concatenacion");

let diaSemanaUsuario = prompt("Que dia de la semana es hoy ?");

if(diaSemanaUsuario === `Sabado` || diaSemanaUsuario === `Domingo`){
    alert("Buen fin de semana")
    } else{
    alert("Buena semana");
    }
// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una     
let numero = prompt("Escribe un numero positivo o negativo?");
if(numero > 0){
    alert("El numero es positivo")
    } else if(numero < 0){
    alert("El numero es negativo")
    } else{
    alert("El numero es cero")   
}
// Crea un sistema de puntuación para un juego. 
// Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". 
// En caso contrario, muestra  En caso contrario, muestra "¡Intentalo de nuevo para ganar!".
let puntuacion = 105

if( puntuacion >= 100){
    console.log('¡Enhorabuena, has ganado!')
}else{
   console.log("¡Intentalo de nuevo para ganar!")
}
// Crea un mensaje que informe al usuario sobre el saldo de la cuenta, 
// utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 1000
alert(`El saldo de la cuenta es: ${saldoCuenta}`);
// Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre
let nombreUsuario = prompt("Como te llamas");
alert(`Bienvenid@ ${nombreUsuario}`);