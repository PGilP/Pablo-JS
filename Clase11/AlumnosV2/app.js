'use strict'

let nodoContainerCards = document.querySelector( '.containerCards' );
let listaAlumnos       = nodoContainerCards.querySelectorAll( '.alumnoCard' );
let nodoFormulario     = document.querySelector( '.formCreacionAlumno' );
let nodoEdad           = document.querySelector( '#anioNac' );

nodoEdad.addEventListener('change', function() {
    let val = Number(this.value);
    if (val < 1900) this.value = 1900;
    if (val > new Date().getFullYear()) this.value = new Date().getFullYear();
  });


nodoFormulario.addEventListener( 'submit' , function(evt){
    evt.preventDefault();
    let nombreAlumno    = document.querySelector( 'input#nombre' ).value;
    let edadAlumno      = calcularEdad(Number(document.querySelector( 'input#anioNac' ).value));
    let apellidosAlumno = document.querySelector( 'input#apellidos' ).value;

    nodoContainerCards.innerHTML += `<div class="alumnoCard">
                                        <h2>${nombreAlumno + ' ' + apellidosAlumno}</h2>
                                        <p>Edad</p>
                                        <p>${edadAlumno}</p>`;

    resetearForm();
} );

function calcularEdad(anioNac){
    let anioActual = Number(new Date().getFullYear());
    return anioActual - anioNac;
}

function resetearForm(){
    document.querySelector( 'input#nombre' ).value = '';
    document.querySelector( 'input#anioNac' ).value = '';
    document.querySelector( 'input#apellidos' ).value = '';

}
