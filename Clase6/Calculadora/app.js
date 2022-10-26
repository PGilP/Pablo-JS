'use strict'

let nodoResultado = document.querySelector( '#resultado' );

let operador            = 0;
let operando            = 0;
let operacionActual     = '';
let numeroConstruido    = '';
let esPrimeraOperacion  = true;

function construirNumero(str){
    ( str === 'signo' ) ? cambiarSigno() : numeroConstruido += str;
    nodoResultado.innerHTML = numeroConstruido;
}

function cambiarSigno(){
   numeroConstruido = ( numeroConstruido.charAt(0) === '-' ) ? numeroConstruido.slice(1) : '-' + numeroConstruido;
}

function operar(operacion){

    contadorOperaciones++;
    console.log('Antes de asignar: ' ,'operacion-->',operacion, '  operacionActual-->',operacionActual);

    // console.log('Operando al pinchar en una operacion-->',operando);
    // console.log('Operador al pinchar en una operacion-->',operador);
    // console.log('Operacion al pinchar en una operacion-->',operacion);
    elegirOperandoOperador();

    elegirOperandoOperador();
    numeroConstruido = '';
    console.log(esPrimeraOperacion, '   ', operando, '   ', operacion);
    if(esPrimeraOperacion === true && operando === 0 ){

        console.log('ES PRIMERA OPERACION Y OPERANDO === 0');
        esPrimeraOperacion = false;
        operacionActual = operacion;

    }else if( esPrimeraOperacion === false ){

        esPrimeraOperacion = true;
        console.log('NO ES PRIMERA OPERACION');

        if(operando !== 0){
            ejecutarOperacion(operacionActual);
        }else{
            operacionActual = operacion;
        }


    }else{

        ejecutarOperacion(operacionActual);
        esPrimeraOperacion = true;

    }

}

function igual(){
    elegirOperandoOperador();
    ejecutarOperacion(operacionActual);
}

function elegirOperandoOperador(){
    if(operador === 0){
        operador = Number(numeroConstruido);
    }else if(operando === 0){
        operando = Number(numeroConstruido);
    }
}

function ejecutarOperacion(operacion){
    let resultado;
    switch (operacion) {
        case 'sumar':
            resultado = sumar();
            break;

        case 'restar':
            resultado = restar();
            break;

        case 'multiplicar':
            resultado = multiplicar();
            break;

        case 'dividir':
            resultado = dividir();
            break;
    }

    pintaResultado(resultado);
    limpiarOperando();
}

function sumar(){
    return operador + operando;
}

function restar(){
    return operador - operando;
}

function dividir(){
    return operador / operando;
}

function multiplicar(){
    return operador * operando;
}

function pintaResultado(resultado){
    if(esEntero(resultado)){
        nodoResultado.innerHTML = (resultado);
        operador = Number((resultado))
    }else{
        nodoResultado.innerHTML = Number((resultado).toFixed(2));
        operador = Number((resultado).toFixed(2));
    }
}

function esEntero(numero){
    return (numero % 1 == 0) ? true : false;
}

function limpiarOperando(){
    operando = 0;
    numeroConstruido = '';
}

function resetear(){
    nodoResultado.innerHTML = '';
    operacionActual         = '';
    numeroConstruido        = '';
    operando                = 0;
    operador                = 0;
    esPrimeraOperacion      = true;
}
