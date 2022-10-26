'use strict'

let nodoResaltado = document.querySelector( '#resultado' );

let resultado = '';
const CANTIDAD_TABLAS = 10;
const CANTIDAD_MULTIPLICACIONES = 100;

for (let i = 1; i < CANTIDAD_TABLAS+1; i++) {

    resultado += `<div class="tabla">
                    <h1>Tabla del ${i}</h1>
                    <ul>`;
    
    for (let j = 1; j < CANTIDAD_MULTIPLICACIONES+1; j++) {
            resultado += `<li>${i}*${j}=${i*j}`;
    }

    resultado += `</ul>
                </div>`;
    
}

nodoResaltado.innerHTML = resultado;