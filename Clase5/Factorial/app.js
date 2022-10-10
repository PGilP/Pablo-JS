'use strict'

const RESULTADO_ESPECIAL = 1;

let nodoResultado  = document.querySelector( '#resultado' );
let nodoInput      = document.querySelector( '#valorIntroducido' ); 
let valorCalculado = 0;
let disminucionValor = 0;

function recogerInformacion(){

    let resultado = calcularFactorial(Number(nodoInput.value));
    nodoResultado.innerHTML = "<p>El resultado es "+ resultado + "</p>";
}

function calcularFactorial(valorIntroducido){
    console.log('valorCalculado',valorCalculado);
    if( valorIntroducido === 1 || valorIntroducido === 0 ){
        return RESULTADO_ESPECIAL ;
    }else{
        if(valorIntroducido === 1){
            console.log('valorCalculadoFinal',valorCalculado);
            return valorCalculado;
        }else{
            valorCalculado = valorCalculado + (valorIntroducido * (valorIntroducido-1));
            calcularFactorial(valorIntroducido-1);
        }
        
    }
}