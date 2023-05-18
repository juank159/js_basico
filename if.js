// CONDICIONALES

let opc1 = 'piedra';
let opc2 = 'papel';
let opc3 = 'tijera';

function juego(a,b){
    if((a == 'piedra' && b == 'tijera') || (a == 'papel' && b == 'piedra') || (a == 'tijera' && b == 'papel')){
        console.log('gana user.');
    }
    else if(a === b){
        console.log('empatados.')
    }
    else{
        console.log('gana computer.')
    }
}

juego(opc1,opc3)



// OTRO EJEMPLO EN UNA SOLA LINEA SERIA.

let numero = 1;
let resultado = numero === 1 ? "si es igual": "no son iguales";

console.log(resultado);