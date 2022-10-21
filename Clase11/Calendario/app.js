'use strict'

let nodoAnio      = document.querySelector( '.anio' );
let nodoMeses     = document.querySelectorAll( '.mes .numeroDia' );
let nodoSiguiente = document.querySelector( '#siguiente' );
let nodoAnterior  = document.querySelector( '#anterior' );

let today       = new Date();
let anioActual  = new Date().getFullYear();
const NUM_MESES = 12;

nodoAnio.innerText = anioActual;
rellenarCalendario(anioActual);

nodoAnterior.addEventListener( 'click' , function(){
    anioActual -= 1;
    nodoAnio.innerText = anioActual;
    rellenarCalendario(anioActual);
});

nodoSiguiente.addEventListener( 'click' , function(){
    anioActual += 1;
    nodoAnio.innerText = anioActual;
    rellenarCalendario(anioActual);
});

function rellenarCalendario(anio){
    rellenarMeses(anio);
    
    function rellenarMeses(anio){
        
        for (let i = 0; i < NUM_MESES; i++) {
            let mes = new Date(anio, i);

            //Creando esta fecha se accede al primer dia del mes
            let primerDia  = mes.getDay();
            let numeroDias = new Date(mes.getFullYear(),mes.getMonth()+1,0).getDate();
    
            let contenidoDinamico = rellenarMes(numeroDias,primerDia);
            nodoMeses[i].innerHTML = contenidoDinamico;

        }
    }

    function rellenarMes(diasMes,primerDia){
        console.log('PrimerDia-->',primerDia);
        let diasHTML = '';
        for (let i = 0; i < diasMes; i++) {
            if(i === 0){
                if(primerDia === 0){
                    diasHTML += `<div class="primerDia" style="grid-column-start: ${7};"> <time datetime="">${i+1}</div>`;
                }else{
                    diasHTML += `<div class="primerDia" style="grid-column-start: ${primerDia};"> <time datetime="">${i+1}</div>`;
                }
            }else{
                diasHTML += `<div>${i+1}</div>`;
            }
        }
        return diasHTML;
    }
}