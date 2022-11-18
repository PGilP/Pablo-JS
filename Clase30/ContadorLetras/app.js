'use strict'

let arrLetras = new Array();

document.querySelector('#contador').addEventListener('input',function(ev){
    let valor = ev.data;
    if(valor === null){
        arrLetras.pop();
    }else{
        arrLetras.push(valor);
    }
    for (let i = 0; i < arrLetras.length; i++) {
        const element = array[i];
        if(){}
        
    }
    console.log(arrLetras);
});