'use strict'

let nodoNumber1   = document.querySelector( '#number1' );
let nodoNumber2   = document.querySelector( '#number2' );
let nodoRespuesta = document.querySelector( '#respuesta' );



function comparar(){

    let valorNumber1 = Number(nodoNumber1.value);
    let valorNumber2 = Number(nodoNumber2.value);

    if( valorNumber1 > valorNumber2){
        nodoRespuesta.innerHTML = '<h2>El primer número('+valorNumber1+') es mayor que el segundo número('+valorNumber2+')</h2>';
    }else if( valorNumber1 < valorNumber2 ){
        nodoRespuesta.innerHTML = '<h2>El primer número('+valorNumber1+') es menor que el segundo número('+valorNumber2+')</h2>';
    }else if( valorNumber1 === valorNumber2 ){
        nodoRespuesta.innerHTML = '<h2>Los números son iguales</h2>';
    }else{
        nodoRespuesta.innerHTML = '<h2>Datos mal introducidos</h2>';
    }
}