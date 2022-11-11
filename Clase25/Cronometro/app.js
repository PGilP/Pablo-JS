'use strict'

let diferencia = 0; 
let centesima  = 0;
let segundo    = 0;
let minuto     = 0;
let hora       = 0;

let interval;

let listaBotones = document.querySelectorAll( '.botonera .boton');

let nodoHoras      = document.querySelector('.horas');
let nodoMinutos    = document.querySelector('.minutos');
let nodoSegundos   = document.querySelector('.segundos');
let nodoCentesimas = document.querySelector('.centesimas');

let buttonPause     = document.querySelector( '#pause');
let buttonStart     = document.querySelector( '#start');
let buttonContinuar = document.querySelector( '#continue');





buttonStart.addEventListener('click',function(){
    if(!buttonStart.classList.contains('disabled')){
        let empiezaCrono = new Date().getTime();
        console.log(String(new Date().getTime() - empiezaCrono));
        console.log(empiezaCrono);
        interval = setInterval(function(){
            
            diferencia = (new Date().getTime() - empiezaCrono); 
            centesima  = Math.trunc((diferencia/10)%100);
            segundo    = Math.trunc((diferencia/1000)%60);
            minuto     = Math.trunc((diferencia/60000)%60);
            hora       = Math.trunc((diferencia/(60000*60))%60);
            
            
            nodoCentesimas.innerHTML = centesima;
            nodoSegundos.innerHTML   = segundo;
            nodoMinutos.innerHTML    = minuto;
            nodoHoras.innerHTML      = hora;

        },10);
        buttonPause.classList.remove('disabled');
        buttonStart.classList.add('disabled');
    }
});

buttonPause.addEventListener('click',function(){
    if(!buttonPause.classList.contains('disabled')){
        pause();
    }
});

buttonContinuar.addEventListener('click',function(){
    continueCrono();
});

function pause(){
    clearInterval(interval);
    let empiezaCrono = new Date().getTime();
    console.log(String(new Date().getTime() - empiezaCrono));
    console.log(empiezaCrono);
    console.log(centesima,segundo,minuto,hora);    
}

function continueCrono(){
    let empiezaCrono = new Date().getTime()+centesima;
    console.log(centesima,segundo,minuto,hora);
    console.log(String(new Date().getTime() - empiezaCrono));
    console.log(empiezaCrono);
    console.log(empiezaCrono+centesima);
    interval = setInterval(function(){
            
        diferencia = (new Date().getTime() - empiezaCrono); 
        centesima  = Math.trunc((diferencia/10)%100);
        segundo    = Math.trunc((diferencia/1000)%60);
        minuto     = Math.trunc((diferencia/60000)%60);
        hora       = Math.trunc((diferencia/(60000*60))%60);
        
        
        nodoCentesimas.innerHTML = centesima;
        nodoSegundos.innerHTML   = segundo;
        nodoMinutos.innerHTML    = minuto;
        nodoHoras.innerHTML      = hora;

    },10);
}


