'use strict'
//Elegir nombres de jugadores y tipos de juego (Implementar después de tener el juego)
let eventoBoton = function(){
    let resultado = false;
    if(this.firstChild.src === ''){
        pinta(this.firstChild);
        actualizaEstadoTablero(this.id);
        resultado = checkWin();
        if(resultado === true){
            pintaVictoria();
        }
    }
}


let changeClassPlayer = document.querySelectorAll('.color');
let nodoPlayerMoving  = document.querySelector('.playerMoving');
let player1           = 'Jugador 1';
let player2           = 'Jugador 2';
let tipoJuego         = 3;
let turno             = 0; // 0 --> Primer jugador  ^^^^^ 1 --> Segundo jugador
let estadoTablero     = [
                          [ '' , '' , '' ] ,
                          [ '' , '' , '' ] ,
                          [ '' , '' , '' ]
                        ];

let nodoTablero = document.querySelector('.tablero');

filtraJuego(tipoJuego);
generarTablero(tipoJuego);

function filtraJuego(tipoJuego){
    nodoPlayerMoving.innerHTML = `<h1>Juega ${player1}</h1>`;

    switch (tipoJuego) {
        case 3:
            nodoTablero.classList.add('tresRaya');
            break;
        
        case 4:
            nodoTablero.classList.add('cuatroRaya');
            break;
    
        case 7:
            nodoTablero.classList.add('sieteRaya');
            break;

        default:
            nodoTablero.classList.add('tresRaya');
            break;
    }
    
}

//Generacion tablero

function generarTablero(tipoJuego) {
    generarColumnas(tipoJuego);
}
function generarColumnas(){
    for (let c = 0; c < tipoJuego; c++) {
        generarFilas(c);
    }
}


function generarFilas(c){
    for (let f = 0; f < tipoJuego; f++) {
        let divPosicion = document.createElement('div');
        divPosicion.classList.add('posicion');
        divPosicion.id = String(c)+String(f);
        let img = document.createElement('img');
        divPosicion.appendChild(img);
        divPosicion.addEventListener('click', eventoBoton);
        nodoTablero.appendChild(divPosicion);
    }
}


function pintaVictoria(){
    let listPosicion = document.querySelectorAll('.posicion');
    listPosicion.forEach(element => {
        element.removeEventListener('click',eventoBoton);
    })
    nodoPlayerMoving.innerHTML = '<h1>VICTORIAAAA</h1>';
}

function actualizaEstadoTablero(posicion){
    let fila = posicion.charAt(0);
    let columna = posicion.charAt(1);
    
    if(turno === 0){
        console.log('primerTurno');
        estadoTablero[fila][columna] = 'O';
        turno++;
        nodoPlayerMoving.innerHTML = `<h1>Juega ${player2}</h1>`;
        changeClassPlayer.forEach(element => {
            element.classList.remove('player1');
            element.classList.add('player2');
        });
    }else if(turno === 1){
        console.log('segundoTurno');
        estadoTablero[fila][columna] = 'X';
        turno--;
        nodoPlayerMoving.innerHTML = `<h1>Juega ${player1}</h1>`;
        changeClassPlayer.forEach(element => {
            element.classList.remove('player2');
            element.classList.add('player1');
        });
    }
};

function pinta(img) {
    if(turno === 0){
        img.src = './svg/circle.svg';
    }else if(turno === 1){
        img.src = './svg/cross.svg';
    }
}

function checkWin(){
    let result = false;
    if(result === false){
        result = comprobarDerecha(estadoTablero) || comprobarAbajo(estadoTablero) || comprobarDiagonal(estadoTablero);
        console.log(result);
    }
    return result;
    }
    
function comprobarDerecha(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            let comprueba = arr[i][j]   !== '' &&
                            arr[i][j]   === arr[i][j+1] && 
                            arr[i][j+1] === arr[i][j+2];

            if(comprueba){
                return true;
            }
        }
    }
    return false;
}

function comprobarAbajo(arr){
        
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr[i].length-2); j++) {

            let comprueba = arr[i][j]   !== '' &&
                            arr[i][j]   === arr[i+1][j] && 
                            arr[i+1][j] === arr[i+2][j];

            if(comprueba){
            return true;
            }
        }
    }
    return false;
}


function comprobarDiagonal(arr){
        
    for (let i = 0; i < (arr.length-2); i++) {
        console.log('primerArray-->',arr[i].length);
        for (let j = 0; j < (arr[i].length-2); j++) {
            
            let comprueba = arr[i][j]     !== '' &&
                            arr[i][j]     === arr[i+1][j+1] && 
                            arr[i+1][j+1] === arr[i+2][j+2] 

            if(comprueba){
                return true;
            }
        }
    }
    return false;
}

function resetearJuego(){
    nodoTablero.innerHTML = '';
}

function reiniciarJuego(){
    nodoTablero.innerHTML = '';
    filtraJuego(tipoJuego);
    generarTablero(tipoJuego);
}