'use strict'

let nodoAnio = document.querySelector( '.anio' );
let nodoMeses = document.querySelectorAll( '.mes .numeroDia' );

let today;
let anioActual = 2022;


conseguirDiaActual();
rellenarCalendario(anioActual);


function rellenarCalendario(anio){
    rellenarMeses(anio);
    
    function rellenarMeses(anio){
        
        for (let i = 0; i < 2; i++) {
            console.log('entro en el for')
            console.log(anio,i);
    
            //Creando esta fecha se accede al primer dia del mes
            console.log(new Date(anio,i));
            let primerDia = (new Date(anio,i)).getDay();
            console.log(primerDia);
            

            console.log('mes-->',new Date(anio, i, 0))
            console.log('numeroDias-->',new Date(anio, i, 0).getDate());
    
            let contenidoDinamico = rellenarMes(new Date(anio, i, 0).getDate(),primerDia);
            nodoMeses[i].innerHTML = contenidoDinamico;
    
        }
    }

    function rellenarMes(diasMes,primerDia){
        console.log('primerdia--->',primerDia);
        let diasHTML = '';
        for (let i = 0; i < diasMes; i++) {
            if(i === 0){
                diasHTML += `<div class="primerDia" style="grid-column-start: ${primerDia};"> <time datetime="">${i+1}</div>`;
            }else{
                diasHTML += `<div>${i+1}</div>`;
            }
        }
        return diasHTML;
    }
}






function conseguirDiaActual(){
    today = new Date();
    
    pintarAnio(today.getFullYear());
}

function pintarAnio(anio){
    nodoAnio.innerText = anio;
}
