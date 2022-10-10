'use strict'
function pintaWeb(){
    let nodoDatos = document.querySelector( '#datos' );
    
    nodoDatos.innerHTML = '<h2>Hola JS</h2>';
    // nodoDatos.style.backgroundColor = 'lightgreen';

    console.log(nodoDatos.style);

    if(nodoDatos.style.backgroundColor === 'lightgreen'){
        nodoDatos.style.backgroundColor = 'lightblue';
    }else{
        nodoDatos.style.backgroundColor = 'lightgreen';
    }
}

console.log( 50 + '50' );