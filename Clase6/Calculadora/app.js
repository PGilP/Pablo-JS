'use strict'
//Conseguir el primer numero y guardarlo cuando se pulse una operacion
//Conseguir el segundo numero, guardarlo, ejecutar la operacion y guardar el resultado

let nodoResultado = document.querySelector( '#resultado' );
let nodoBorrar    = document.querySelector( '#borrar' );

let operador            = 0;
let operando            = 0;
let numGuardado         = 0;
let contadorOperaciones = 0;
let operacionActual     = '';
let operacionInicial    = '';
let numeroConstruido    = '';

function construirNumero(str){
    numeroConstruido += str;
    nodoResultado.innerHTML = numeroConstruido;
}

function operar(operacion){
    
    contadorOperaciones++;
    console.log('Antes de asignar: ' ,'operacion-->',operacion, '  operacionActual-->',operacionActual);
    
    // console.log('Operando al pinchar en una operacion-->',operando);
    // console.log('Operador al pinchar en una operacion-->',operador);
    // console.log('Operacion al pinchar en una operacion-->',operacion);
    elegirOperandoOperador();

    operacionActual = operacion;

    console.log('Despues de asignar: ' ,'operacion-->',operacion, '  operacionActual-->',operacionActual,'  operando-->', operando, '   contadorOperaciones-->',contadorOperaciones,'  operador-->',operador);
    
    numeroConstruido = '';
    if(contadorOperaciones !== 1 /* && operando !== 0 */){
        if(contadorOperaciones === 2){
            
            console.log('segundaOperacion', operacionInicial);
            ejecutarOperacion(operacionInicial);
        }else{
            console.log("OPERACIOOOOOOOOOOOOOOOOOON");
            //Aqui falta algun condicional que haga que se ejecute la operacion anterior en algun momento que no he llegado a identificar
            ejecutarOperacion(operacionActual);
        }
    }else {
        console.log("OPERACIOOOOOOOOOOOOOOOOOON RESTOOOOOO");
        operacionInicial = operacion;
    }
}

function igual(){
    elegirOperandoOperador();
    console.log(operacionActual);
    ejecutarOperacion(operacionActual);
}

function elegirOperandoOperador(){
    if(operador === 0){
        operador = Number(numeroConstruido);
    }else if(operando === 0){
        console.log("Asignando operando");
        operando = Number(numeroConstruido);
        console.log('Operando-->',operando);
    }
}

function ejecutarOperacion(operacion){
    
    console.log('Operacion que voy a ejecutar-->', operacion);
    switch (operacion) {
        case 'sumar':
            sumar();
            break;

        case 'restar':
            restar();
            break;
        
        case 'multiplicar':
            multiplicar();
            break;
            
        case 'dividir':
            dividir();
            break;
    }
}

function sumar(){
    // console.log('Entramos a sumar');
    // console.log('operando -->',operando, '  operador -->',operador);
    
    console.log('Operando antes de sumar-->',operando);
    let resultado = operador + operando;
    pintaResultado(resultado);

    limpiarOperando();
    // console.log('operador despues de sumar -->',operador);
    // console.log('operando despues de sumar -->',operando);

    // console.log('Salida de sumar');
}

function restar(){
    // console.log('Entramos a restar');
    // console.log('operando -->',operando, '  operador -->',operador);

    let resultado = operador - operando;
    pintaResultado(resultado);

    limpiarOperando();

    // console.log('operador despues de restar -->',operador);
    // console.log('operando despues de restar -->',operando);

    // console.log('Salimos de restar');
}

function dividir(){
    // console.log('Entramos a dividir');

    // console.log('operando -->',operando, '  operador -->',operador);

    let resultado = operador / operando;
    pintaResultadoDecimales(resultado);

    limpiarOperando();
    
    // console.log('operador despues de dividir -->',operador);
    // console.log('operando despues de dividir -->',operando);

    // console.log('Salimos de dividir');
}

function multiplicar(){
    // console.log('Entramos a multiplicar');

    // console.log('operando -->',operando, '  operador -->',operador);

    let resultado = operador * operando;
    pintaResultado(resultado);

    limpiarOperando();

    // console.log('operador despues de multiplicar -->',operador);
    // console.log('operando despues de multiplicar -->',operando);

    console.log('Salimos de multiplicar');
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
    if (numero % 1 == 0) {
        return true;
    } else {
        return false;    
    }
}

function limpiarOperando(){
    operando = 0;
    numeroConstruido = '';
}

function resetear(){
    console.log( 'Calculadora reseteada' );
    nodoResultado.innerHTML = '';
    operacionActual         = '';
    numeroConstruido        = '';
    operando                = 0;
    operador                = 0;
    numGuardado             = 0;
    contadorOperaciones     = 0;
}