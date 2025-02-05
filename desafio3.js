console.log("Bienevenida");

let nombre = "Diana";
console.log(`hola,${nombre}`);

let nombreUsuario = prompt("Cual es tu nombre?");
alert(`Hola, ${nombreUsuario}, Bonito Dia`);

let preguntaLenguaje = prompt("Cuál es el lenguaje de programación que más te gusta?");
console.log(preguntaLenguaje);

let valor1 = 5;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

let valor3 = 5;
let valor4 = 3;
let resultado2 = valor3 - valor4;
console.log(`La resta de ${valor3} y ${valor4} es igual a ${resultado2}`);

let edad = prompt("cuantos años tienes?")
if(edad>18){
    alert("Eres Mayor de edad");
}else{
    alert("Eres menor de edad");
}

let numero = prompt("Escribe un numero");
if(numero>0){
    alert("El numero es positivo");
}else if(numero <0){
    alert("El numero es negativo");
}else{
    alert("El numero es cero");
}

let contador= 1;
while(contador<=10){
    console.log(contador);
    contador++;
}

let nota = 9;
if(nota>= 7){
    console.log("Aprobaste el curso");
}else{
    console.log("Reprobaste el curso");
}

let numeroAleatorio=Math.random();
console.log(numeroAleatorio);

numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroIntAleatorio);