// alert('Bienvenido al juego del número secreto');
alert('Bienvenido al juego del número secreto');


//Variables
let nummeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()* nummeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 6;

console.log(numeroSecreto);

//Bucle para pedir y verificar el número del usuario
while(numeroUsuario != numeroSecreto){
   let numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${nummeroMaximoPosible} por favor: `)); 
    //para verificar el numero del Usuario
    console.log(typeof(numeroUsuario));
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "Intento" : "Intentos"}`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        }else{
            alert("el numero secretro es mayor");
        }
           
        intentos ++;
        if(intentos > maximoIntentos){
            alert(`Llegaste al numero maximo de ${maximoIntentos} Intentos`);
            break
        }
        //La condición no se cumplió
        //alert('Lo siento,El número secreto era '+ numeroSecreto);
    }
   
}

