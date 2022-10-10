'use strict'

const RESULTADO_ESPECIAL = 1;

let nodoResultado  = document.querySelector( '#resultado' );
let nodoInput      = document.querySelector( '#valorIntroducido' ); 

function recogerInformacion(){
    let resultado = calcularFactorial(Number(nodoInput.value));
    console.log('resultado', resultado);
    nodoResultado.innerHTML = "<p>El resultado es "+ resultado + "</p>";
}

function calcularFactorial(valorIntroducido){

    if ( casoEspecial(valorIntroducido)){
        return RESULTADO_ESPECIAL ;
    }else{
        return calcularFactorial( valorIntroducido - 1 ) * valorIntroducido;
    }
}

function casoEspecial( numero ){
    return (numero === 1 || numero === 0 );
};