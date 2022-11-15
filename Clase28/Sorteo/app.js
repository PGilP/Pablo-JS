'use strict'

document.querySelector('.add').addEventListener('click',function(){
    if(document.querySelector('#nombre').value && !document.querySelector('.add').classList.contains('disabled')){
        const newDiv = document.createElement('div');
        newDiv.classList.add('person');
        newDiv.innerText = document.querySelector('#nombre').value;
        document.querySelector('.participantes').appendChild(newDiv);
    }
});

document.querySelector('.sortea').addEventListener('click',function(){
    if(!document.querySelector('.add').classList.contains('disabled')){

        let nodoParticipantes = document.querySelectorAll('.person');
        let numParticipantes  = nodoParticipantes.length;
        
        for (let i = 0; i < nodoParticipantes.length; i++) {
            nodoParticipantes[i].classList.remove('winner');    
        }
        let contador = 0; 
        let interval = setInterval(() => {
            document.querySelector('.sortea').classList.add('disabled');
            document.querySelector('.add').classList.add('disabled');
            for (let i = 0; i < nodoParticipantes.length; i++) {
                nodoParticipantes[i].classList.remove('waiting');    
            }
            if(contador > (nodoParticipantes.length)-1){
                contador = 0;
            }
            nodoParticipantes[contador++].classList.add('waiting');
        }, 100);
    
        let timeout = setTimeout(() => {
    
            for (let i = 0; i < nodoParticipantes.length; i++) {
                nodoParticipantes[i].classList.remove('waiting');    
            }
            nodoParticipantes[getRandomInt(numParticipantes)].classList.add('winner');
            clearInterval(interval);
            document.querySelector('.sortea').classList.remove('disabled');
            document.querySelector('.add').classList.remove('disabled');
        }, 2000);
    }


});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}