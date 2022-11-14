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
let buttonContinue = document.querySelector( '#continue');

buttonStart.addEventListener('click',function(){
    if(!buttonStart.classList.contains('disabled')){
        let empiezaCrono = new Date().getTime();
        console.log(String(new Date().getTime() - empiezaCrono));
        console.log(empiezaCrono);
        iniciarIntervalo(0,empiezaCrono);

        buttonPause.classList.remove('disabled');
        buttonStart.classList.add('disabled');
    }
});

buttonPause.addEventListener('click',function(){
    if(!buttonPause.classList.contains('disabled')){
        pause();
        buttonContinue.classList.remove('disabled');
    }
});

buttonContinue.addEventListener('click',function(){
    if(!buttonContinue.classList.contains('disabled')){
        
        continueCrono();
        buttonContinue.classList.add('disabled');
    }
});

function pause(){
    clearInterval(interval);
}

function continueCrono(){

    let tiempoTranscurrido = (hora*60*60*1000)+(minuto*60*100)+(segundo*1000)+(centesima*10);  
    let empiezaCrono = new Date().getTime();
    console.log('Momento actual al empezar el crono-->',new Date().getTime());
    
    
    clearInterval(interval);
    iniciarIntervalo(tiempoTranscurrido,empiezaCrono);
}

function iniciarIntervalo(tiempoTranscurrido,empiezaCrono){
    interval = setInterval(function(){
        
        diferencia = ((new Date().getTime()+tiempoTranscurrido) - empiezaCrono);

        centesima  = Math.trunc((diferencia/10)%100);
        segundo    = Math.trunc((diferencia/1000)%60);
        minuto     = Math.trunc((diferencia/60000)%60);
        hora       = Math.trunc((diferencia/(60000*60))%60);
        
        nodoCentesimas.innerHTML = (centesima < 10) ? '0' + centesima : centesima;
        nodoSegundos.innerHTML   = (segundo < 10)   ? '0' + segundo : segundo;
        nodoMinutos.innerHTML    = (minuto < 10)    ? '0' + minuto : minuto;
        nodoHoras.innerHTML      = (hora < 10)      ? '0' + hora : hora;

    },10);
}


