'use strict'

// let arrLetras = new Array();

// let nodoResult = document.querySelector('.result');

// document.querySelector('#contador').addEventListener('input',function(ev){
//     let valor = ev.data;
//     if(valor === null){
//         arrLetras.pop();
//     }else if( valor === /[a-zA-Z]/){
//         arrLetras.push(valor);
//     }

//     let arrLetrasOrdenado = [].concat(arrLetras);
//     arrLetrasOrdenado.sort();
//     console.log(arrLetrasOrdenado);
    
    
    
//     for (let i = 0; i < arrLetrasOrdenado.length; i++) {
        
//         const element = arrLetrasOrdenado[i];
//         let cont = 0;
//         do{
//             console.log(element);
//             cont++;
//         }while(element !== arrLetrasOrdenado[i+1]);
//         console.log(cont);
//     }
    
    
// });

let json_object = `
{
    "nombre" : "Titanic",
    "director" : "James Cameron"
}`;

let object = JSON.parse(json_object);

console.log(object);


let object_json = JSON.stringify(object);
console.log(object_json);