'use strict'
//Conseguir el primer numero y guardarlo cuando se pulse una operacion
//Conseguir el segundo numero, guardarlo, ejecutar la operacion y guardar el resultado

let nodoResultado = document.querySelector( '#resultado' );
let nodoBorrar    = document.querySelector( '#borrar' );

let operador         = 0;
let operando         = 0;
let numGuardado      = 0;
let operacionActual  = '';
let numeroConstruido = '';
let estadoIntermedio = false;



function construirNumero(str){
/*     if( estadoIntermedio ){
    //Limpiar todo
    operador = 0;
    operando = 0;
    numeroConstruido = '';
    }*/
    numeroConstruido += str;
    nodoResultado.innerHTML = numeroConstruido;    
}

function operar(operacion){
    operacionActual = operacion;
    console.log('Operando al pinchar en una operacion-->',operando);
    console.log('Operador al pinchar en una operacion-->',operador);
    console.log('Operacion al pinchar en una operacion-->',operacion);
    if(operador === 0){
        operador = Number(numeroConstruido);
    }else if(operando === 0){
        operando = Number(numeroConstruido);
    }
    numeroConstruido = '';
    
    elegirOperacion(operacion);

    estadoIntermedio = true;

}

function sumar( operador , operando ){

    console.log('operando -->',operando, '  operador -->',operador);
    nodoResultado.innerHTML = (operando + operador);

    operador = Number(operando + operador);
    operando = 0;
    console.log('operador despues de sumar -->',operador);
}

function restar( operador , operando ){

}

function dividir( operador , operando ){
    if( operando === 0 ){
        console.log ( 'Error' );
    }else{

    }
}

function multiplicar( operador , operando ){

}

function igual(){

    if(operador === 0){
        operador = Number(numeroConstruido);
    }else if(operando === 0){
        operando = Number(numeroConstruido);
    }

    console.log(operacionActual);
    elegirOperacion();
}

function elegirOperacion(){
    switch (operacionActual) {
        case 'sumar':
            sumar( operador, operando );
            break;

        case 'restar':
            restar( operador, operando );
            break;
        
        case 'multiplicar':
            multiplicar( operador, operando );
            break;
            
        case 'dividir':
            dividir( operador, operando );
            break;
    }
}

function resetear(){
    nodoResultado.innerHTML = '';
    operando         = 0;
    operador         = 0;
    numGuardado      = 0;
    operacionActual  = '';
    numeroConstruido = '';
    estadoIntermedio = false;
}