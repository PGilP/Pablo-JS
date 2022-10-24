'use strict'

let nodoModal     = document.querySelector( '.modal' );
let nodoContainer = document.querySelector( '.container' );
let nodoAbrir     = document.querySelector( '.openModal' );
let nodoCerrar    = document.querySelector( '#cerrar' );


document.querySelector('.modal').addEventListener('animationend', function(event){

    if(event.animationName === 'salida'){
        console.log('salida');
    }else{
        console.log('vuelta');
    }
});

let functionCerrar = function(){
    nodoAbrir.style.zIndex = "100";

    nodoContainer.classList.toggle('difuminado');

    nodoModal.classList.remove('salida');
    nodoModal.classList.add('vuelta');
};


nodoAbrir.addEventListener( 'click' , function(){

    nodoAbrir.style.zIndex = "-100";

    nodoContainer.classList.toggle('difuminado');

    nodoModal.classList.remove('vuelta');
    nodoModal.classList.add('salida');

    
});

nodoCerrar.addEventListener( 'click' , functionCerrar);
nodoContainer.addEventListener( 'click' , functionCerrar);

function displayContainer(){
    setTimeout(function(){

    },);
}