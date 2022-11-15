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

let buttonPause     = document.querySelector('#pause');
let buttonStart     = document.querySelector('#start');
let buttonContinue  = document.querySelector('#continue');
let buttonReset     = document.querySelector('#reset');
let buttonSave      = document.querySelector('#save');
let nodoTiempos     = document.querySelector('.tiemposGuardados');

buttonStart.addEventListener('click',function(){
    if(!buttonStart.classList.contains('disabled')){
        iniciarIntervalo(0);
        buttonStart.classList.add('disabled');
        buttonPause.classList.remove('disabled');
        buttonReset.classList.remove('disabled');
        buttonSave.classList.remove('disabled');
    }
});

buttonPause.addEventListener('click',function(){
    if(!buttonPause.classList.contains('disabled')){
        pauseCrono();
        buttonPause.classList.add('disabled');
        buttonContinue.classList.remove('disabled');
    }
});

buttonContinue.addEventListener('click',function(){
    if(!buttonContinue.classList.contains('disabled')){
        
        continueCrono();
        buttonPause.classList.remove('disabled');
        buttonContinue.classList.add('disabled');
    }
});

buttonSave.addEventListener('click',function(){
    if(!buttonSave.classList.contains('disabled')){
        saveTime();
    }
});

buttonReset.addEventListener('click',function(){
    if(!buttonReset.classList.contains('disabled')){
        
        resetCrono();
        buttonStart.classList.remove('disabled');
        buttonReset.classList.add('disabled');
        buttonPause.classList.add('disabled');
        buttonContinue.classList.add('disabled');
        buttonSave.classList.add('disabled');
    }
});

function saveTime(){
    const newElementTime  = document.createElement('div');
    newElementTime.classList.add('time');
    
    const newElementValue = document.createElement('div');
    newElementValue.classList.add('value');
    const newContentValue = document.createTextNode(`${(hora < 10) ? '0' + hora : hora}:${(minuto < 10) ? '0' + minuto : minuto}:${(segundo < 10)   ? '0' + segundo : segundo}:${(centesima < 10) ? '0' + centesima : centesima}`);
    newElementValue.appendChild(newContentValue);

    const newElemenDelete  = document.createElement('span');
    newElemenDelete.classList.add('delete');
    const newContentDelete = document.createTextNode('X');

    newElemenDelete.addEventListener('click',function(){
        this.parentNode.remove();
        console.log();
    });

    newElemenDelete.appendChild(newContentDelete);

    newElementTime.appendChild(newElementValue);
    newElementTime.appendChild(newElemenDelete);


    nodoTiempos.appendChild(newElementTime);
}


function pauseCrono(){
    clearInterval(interval);
}

function resetCrono(){
    clearInterval(interval);

    centesima  = 0;
    segundo    = 0;
    minuto     = 0;
    hora       = 0;
    
    nodoCentesimas.innerHTML = '00';
    nodoSegundos.innerHTML   = '00';
    nodoMinutos.innerHTML    = '00';
    nodoHoras.innerHTML      = '00';

    nodoTiempos.innerHTML = '';
}

function continueCrono(){

    let tiempoTranscurrido = (hora*60*60*1000)+(minuto*60*100)+(segundo*1000)+(centesima*10);  
    
    clearInterval(interval);
    iniciarIntervalo(tiempoTranscurrido);
}

function iniciarIntervalo(tiempoTranscurrido){
    let empiezaCrono = new Date().getTime();
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