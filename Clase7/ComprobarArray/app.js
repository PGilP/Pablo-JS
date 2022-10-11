'use strict'

let nodoResultado = document.querySelector( '#resultado' );

let arrNums = cargarArray();
let numMayor = 0;
for (let i = 0; i < arrNums.length; i++) {

    if( arrNums[i] > numMayor){
        numMayor = arrNums[i];
    }
}

console.log('El número mayor es :',numMayor);



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function cargarArray(){
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(getRandomInt(200));        
    }
    return arr;
}

console.log(arrNums);