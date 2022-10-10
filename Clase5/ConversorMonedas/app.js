'use strict'

let nodoInput = document.querySelector( '#valorIntroducido' );

/*
1€ = 0,98 dolar
1€ = 142,01 yenes
1€ = 0,88 libras
*/


function convertir(){
    let valorIntroducido = Number(nodoInput.value);
    console.log( valorIntroducido );
    let nodoValores = document.querySelectorAll( '.valor');
    console.log(nodoValores);
    for (let i = 0; i < nodoValores.length; i++) {
        console.log(nodoValores[i].classList);
        if( nodoValores[i].classList.contains('dolar') ){
            nodoValores[i].innerHTML = valorIntroducido*0.98 ;
        }else if( nodoValores[i].classList.contains('libra') ){
            nodoValores[i].innerHTML = valorIntroducido*0.88 ;
        }else if( nodoValores[i].classList.contains('yen') ){
            nodoValores[i].innerHTML = valorIntroducido*142.01;
        }else{
            nodoValores[i].innerHTML = 'Valor no encontrado';
        }
    }
}