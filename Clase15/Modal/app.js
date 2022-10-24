'use strict'

let nodoModal     = document.querySelector( '.modal' );
let nodoContainer = document.querySelector( '.container' );
let nodoAbrir     = document.querySelector( '.openModal' );
let nodoCerrar    = document.querySelector( '#cerrar' );

nodoAbrir.addEventListener( 'click' , function(){

    nodoAbrir.style.zIndex = "-100";

    nodoContainer.classList.toggle('difuminado');

    nodoModal.classList.remove('vuelta');
    nodoModal.classList.add('salida');
});

nodoCerrar.addEventListener( 'click' , function(){

    nodoAbrir.style.zIndex = "100";

    nodoContainer.classList.toggle('difuminado');

    nodoModal.classList.remove('salida');
    nodoModal.classList.add('vuelta');
    
});