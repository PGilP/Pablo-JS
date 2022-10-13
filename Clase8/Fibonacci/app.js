'use strict'

let acumulador = 0;
let arrayNums = [1,1];


fibonacci(arrayNums);

function fibonacci(arrayNums){

    for (let i = arrayNums.length; i < 20; i++) {
        let numeroNuevo = Number(arrayNums[i-1] + arrayNums[i-2]);
        arrayNums.push(numeroNuevo);
    }

    console.log(arrayNums);
}