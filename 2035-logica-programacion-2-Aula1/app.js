let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
     
    
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el Numero en ${intentos} ${(intentos===1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        //el usurario no acerto
        if( numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}

 function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
