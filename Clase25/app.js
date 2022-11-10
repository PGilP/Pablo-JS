'use strict'

let listContadores = document.querySelectorAll( '.contador' );

for (let i = 0; i < listContadores.length; i++) {
    const element = listContadores[i].querySelector( 'h1.perCent');

    rellenarContador(element);
    
}

function rellenarContador(element){
    let fin = Number(Math.trunc(Math.random() * 100))+1;
    console.log(fin);
    let number = Number(0);
    
    let interval = setInterval(function () {
        number += 1;
        element.innerHTML = `${number}%`;
        if(number == fin){
            clearInterval(interval);
        }
    }, (2000 / fin));

}
