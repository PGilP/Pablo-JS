'use strict'

let nodoAnio = document.querySelector( '.anio' );
let nodoPrimerMes = document.querySelector( '.mes .numeroDia' );

let today;
let anioActual;

let diasHTML = '';
let diasMes = 28;



conseguirDiaActual();
rellenarMes();


function rellenarMes(){
    
    for (let i = 1; i < diasMes+1; i++) {
        if(i === 1){
            diasHTML += `<div class="primerDia">${i}</div>`;
        }else{
            diasHTML += `<div>${i}</div>`;
        }
    }

    nodoPrimerMes.innerHTML = diasHTML;

}

function conseguirDiaActual(){
    today = new Date();
    console.log((today.getFullYear(), today.getMonth() + 1, 0).getDate());
    pintarAnio(today.getFullYear());
}

function pintarAnio(anio){
    nodoAnio.innerText = anio;
}